import axios from "axios";
import { useEffect, useRef, useState, type ClipboardEvent, type FormEvent, type KeyboardEvent } from "react";
import {
  registerWithEmail,
  resendOtp,
  saveAuthSession,
  verifyOtp,
  type AuthSession,
  type AuthUser,
  type PendingRegistration,
} from "@/services/auth.service";

type LoginProps = {
  onSuccess?: (session: AuthSession) => void;
  className?: string;
};

type LoginStep = "email" | "otp" | "registration" | "complete";

type ApiErrorResponse = {
  message?: string;
  errors?: Record<string, string[]>;
};

function getErrorMessage(error: unknown) {
  if (axios.isAxiosError<ApiErrorResponse>(error)) {
    const response = error.response?.data;
    const validationMessage = response?.errors
      ? Object.values(response.errors).flat()[0]
      : undefined;
    const serverMessage = validationMessage ?? response?.message;
    if (serverMessage) return serverMessage;

    if (error.response?.status === 403) {
      return "The sign-in request was rejected by the server. Please check the authentication API permissions or contact support.";
    }

    if (!error.response) {
      return "We couldn’t reach the sign-in service. Check your connection and try again.";
    }

    return "We couldn’t complete your request. Please try again.";
  }

  if (error instanceof Error) return error.message;
  return "We couldn’t complete your request. Please try again.";
}

function createSession(tokenType: string | undefined, accessToken: string | undefined, user: AuthUser | undefined) {
  if (!tokenType || !accessToken || !user) {
    throw new Error("The server response did not include a complete sign-in session.");
  }

  return { tokenType, accessToken, user };
}

export default function Login({ onSuccess, className = "" }: LoginProps) {
  const [step, setStep] = useState<LoginStep>("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pendingRegistration, setPendingRegistration] = useState<PendingRegistration | null>(null);
  const [resendSeconds, setResendSeconds] = useState(0);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const otpInputs = useRef<(HTMLInputElement | null)[]>([]);

  const updateOtpFrom = (startIndex: number, value: string) => {
    const digits = value.replace(/\D/g, "");
    if (!digits) {
      setOtp((currentOtp) => currentOtp.map((digit, index) => index === startIndex ? "" : digit));
      return;
    }

    setOtp((currentOtp) => {
      const nextOtp = [...currentOtp];
      digits.slice(0, 6 - startIndex).split("").forEach((digit, offset) => {
        nextOtp[startIndex + offset] = digit;
      });
      return nextOtp;
    });

    const nextFocusIndex = Math.min(startIndex + digits.length, 5);
    otpInputs.current[nextFocusIndex]?.focus();
    otpInputs.current[nextFocusIndex]?.select();
  };

  const handleOtpPaste = (event: ClipboardEvent<HTMLInputElement>, index: number) => {
    event.preventDefault();
    updateOtpFrom(index, event.clipboardData.getData("text"));
  };

  const handleOtpKeyDown = (event: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      otpInputs.current[index - 1]?.focus();
      return;
    }

    if (event.key === "ArrowLeft" && index > 0) {
      event.preventDefault();
      otpInputs.current[index - 1]?.focus();
    }

    if (event.key === "ArrowRight" && index < 5) {
      event.preventDefault();
      otpInputs.current[index + 1]?.focus();
    }
  };

  useEffect(() => {
    if (resendSeconds <= 0) return undefined;
    const timer = window.setTimeout(() => setResendSeconds((seconds) => seconds - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [resendSeconds]);

  const handleRequestOtp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");
    setMessage("");
    setIsSubmitting(true);

    try {
      const response = await resendOtp(email.trim());
      if (!response.success) {
        throw new Error(response.message || "We couldn’t send a verification code. Please try again.");
      }

      setStep("otp");
      setResendSeconds(response.data.resend_after_seconds);
      setMessage(response.message);
    } catch (error) {
      setErrorMessage(getErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  const completeSignIn = (session: AuthSession) => {
    saveAuthSession(session);
    setStep("complete");
    setMessage("You’re signed in successfully.");
    onSuccess?.(session);
  };

  const handleVerifyOtp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");
    setMessage("");
    setIsSubmitting(true);

    try {
      const response = await verifyOtp(email.trim(), otp.join(""));
      if (response.is_registered) {
        completeSignIn(createSession(response.token_type, response.access_token, response.user));
        return;
      }

      if (!response.registration_token) {
        throw new Error("The server response did not include a registration token.");
      }

      setPendingRegistration({ email: email.trim(), registrationToken: response.registration_token });
      setStep("registration");
      setMessage(response.message);
    } catch (error) {
      setErrorMessage(getErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!pendingRegistration) {
      setErrorMessage("Your verification session has expired. Request a new code to continue.");
      setStep("email");
      return;
    }

    setErrorMessage("");
    setMessage("");
    setIsSubmitting(true);

    try {
      const response = await registerWithEmail(pendingRegistration, name.trim(), phone.trim());
      if (!response.is_registered) {
        throw new Error(response.message || "We couldn’t create your account. Please try again.");
      }

      completeSignIn(createSession(response.token_type, response.access_token, response.user));
    } catch (error) {
      setErrorMessage(getErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendOtp = async () => {
    setErrorMessage("");
    setMessage("");
    setIsSubmitting(true);

    try {
      const response = await resendOtp(email.trim());
      if (!response.success) {
        throw new Error(response.message || "We couldn’t send a new verification code. Please try again.");
      }

      setResendSeconds(response.data.resend_after_seconds);
      setMessage(response.message);
    } catch (error) {
      setErrorMessage(getErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetToEmail = () => {
    setStep("email");
    setOtp(Array(6).fill(""));
    setPendingRegistration(null);
    setResendSeconds(0);
    setMessage("");
    setErrorMessage("");
  };

  return (
    <section className={`login-component ${className}`.trim()} aria-labelledby="login-component-title">
      <div className="login-component__card">
        <p className="login-component__eyebrow">Tata Pravesh account</p>
        <h2 className="login-component__title" id="login-component-title">
          {step === "complete" ? "You’re signed in" : "Sign in or create an account"}
        </h2>
        <p className="login-component__intro">
          {step === "email" && "Enter your email and we’ll send you a verification code."}
          {step === "otp" && <>Enter the verification code sent to <strong>{email}</strong>.</>}
          {step === "registration" && "Your email is verified. Add your details to finish creating your account."}
          {step === "complete" && "Your account is ready. You can continue browsing."}
        </p>

        {step === "email" && (
          <form className="login-component__form login-component__form--email" onSubmit={handleRequestOtp}>
            <label className="login-component__label" htmlFor="login-email">Email address</label>
            <div className="login-component__email-row">
              <input
                autoComplete="email"
                className="login-component__input"
                id="login-email"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                required
                type="email"
                value={email}
              />
              <button className="login-component__submit" disabled={isSubmitting} type="submit">
                {isSubmitting ? "Sending code…" : "Login"}
              </button>
            </div>
          </form>
        )}

        {step === "otp" && (
          <form className="login-component__form" onSubmit={handleVerifyOtp}>
            <fieldset className="login-component__otp-fieldset">
              <legend className="login-component__label">Verification code</legend>
              <div className="login-component__otp-row">
                <div className="login-component__otp-inputs" role="group" aria-label="6-digit verification code">
                  {Array.from({ length: 6 }, (_, index) => (
                    <input
                      aria-label={`Verification code digit ${index + 1}`}
                      autoComplete={index === 0 ? "one-time-code" : "off"}
                      className="login-component__input login-component__otp-input"
                      key={index}
                      inputMode="numeric"
                      maxLength={index === 0 ? 6 : 1}
                      onChange={(event) => updateOtpFrom(index, event.target.value)}
                      onKeyDown={(event) => handleOtpKeyDown(event, index)}
                      onPaste={(event) => handleOtpPaste(event, index)}
                      pattern="[0-9]*"
                      ref={(element) => {
                        otpInputs.current[index] = element;
                      }}
                      type="text"
                      value={otp[index]}
                    />
                  ))}
                </div>
                <button className="login-component__submit" disabled={isSubmitting || otp.some((digit) => !digit)} type="submit">
                  {isSubmitting ? "Verifying…" : "Verify and continue"}
                </button>
              </div>
            </fieldset>
            <div className="login-component__links">
              <button
                className="login-component__text-button"
                disabled={isSubmitting || resendSeconds > 0}
                onClick={handleResendOtp}
                type="button"
              >
                {resendSeconds > 0 ? `Resend code in ${resendSeconds}s` : "Resend code"}
              </button>
              <button className="login-component__text-button" disabled={isSubmitting} onClick={resetToEmail} type="button">
                Change email
              </button>
            </div>
          </form>
        )}

        {step === "registration" && (
          <form className="login-component__form" onSubmit={handleRegister}>
            <label className="login-component__label" htmlFor="login-name">Full name</label>
            <input
              autoComplete="name"
              className="login-component__input"
              id="login-name"
              onChange={(event) => setName(event.target.value)}
              required
              type="text"
              value={name}
            />
            <label className="login-component__label" htmlFor="login-phone">Phone number</label>
            <input
              autoComplete="tel"
              className="login-component__input"
              id="login-phone"
              inputMode="tel"
              maxLength={10}
              onChange={(event) => setPhone(event.target.value.replace(/\D/g, "").slice(0, 10))}
              pattern="[0-9]{10}"
              placeholder="10-digit phone number"
              required
              type="tel"
              value={phone}
            />
            <button className="login-component__submit" disabled={isSubmitting} type="submit">
              {isSubmitting ? "Creating account…" : "Create account"}
            </button>
            <button className="login-component__text-button" disabled={isSubmitting} onClick={resetToEmail} type="button">
              Start over
            </button>
          </form>
        )}

        {step === "complete" && (
          <div className="login-component__success" role="status">
            {message}
          </div>
        )}

        {errorMessage && <p className="login-component__error" role="alert">{errorMessage}</p>}
        {message && step !== "complete" && <p className="login-component__message" role="status">{message}</p>}
      </div>
    </section>
  );
}
