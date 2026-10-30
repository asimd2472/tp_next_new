import api from "@/config/api.config";

export const AUTH_STORAGE_KEY = "tata_pravesh_auth";

export interface AuthUser {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  email_verified_at: string | null;
}

export interface AuthSession {
  tokenType: string;
  accessToken: string;
  user: AuthUser;
}

export interface AuthSessionSnapshot {
  session: AuthSession | null;
  isLoaded: boolean;
}

interface ResendOtpResponse {
  success: boolean;
  message: string;
  data: {
    expires_in_seconds: number;
    resend_after_seconds: number;
  };
}

interface VerifyOtpResponse {
  message: string;
  is_registered: boolean;
  token_type?: string;
  access_token?: string;
  registration_token?: string;
  user?: AuthUser;
}

interface RegisterResponse {
  message: string;
  is_registered: boolean;
  token_type: string;
  access_token: string;
  user: AuthUser;
}

export interface PendingRegistration {
  email: string;
  registrationToken: string;
}

const serverAuthSnapshot: AuthSessionSnapshot = { session: null, isLoaded: false };
let authSnapshot = serverAuthSnapshot;
const authListeners = new Set<() => void>();

export async function resendOtp(email: string) {
  const response = await api.post<ResendOtpResponse>("resend-otp", { email });
  return response.data;
}

export async function verifyOtp(email: string, otp: string) {
  const response = await api.post<VerifyOtpResponse>("verify-otp", { email, otp });
  return response.data;
}

export async function registerWithEmail(
  registration: PendingRegistration,
  name: string,
  phone: string,
) {
  const response = await api.post<RegisterResponse>("register", {
    email: registration.email,
    registration_token: registration.registrationToken,
    name,
    phone,
  });
  return response.data;
}

export function saveAuthSession(session: AuthSession) {
  window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
  authSnapshot = { session, isLoaded: true };
  authListeners.forEach((listener) => listener());
}

function isAuthSession(value: unknown): value is AuthSession {
  if (typeof value !== "object" || value === null) return false;
  const session = value as Record<string, unknown>;
  const user = session.user;
  if (typeof user !== "object" || user === null) return false;

  const authUser = user as Record<string, unknown>;
  return typeof session.tokenType === "string"
    && typeof session.accessToken === "string"
    && session.accessToken.length > 0
    && typeof authUser.id === "number"
    && typeof authUser.name === "string"
    && typeof authUser.email === "string"
    && (typeof authUser.phone === "string" || authUser.phone === null)
    && (typeof authUser.email_verified_at === "string" || authUser.email_verified_at === null);
}

function readStoredAuthSession(): AuthSession | null {
  try {
    const storedSession = window.localStorage.getItem(AUTH_STORAGE_KEY);
    if (!storedSession) return null;

    const parsedSession: unknown = JSON.parse(storedSession);
    if (isAuthSession(parsedSession)) return parsedSession;

    window.localStorage.removeItem(AUTH_STORAGE_KEY);
    console.error("The saved sign-in session has an invalid format.");
    return null;
  } catch (error) {
    console.error("Unable to read the saved sign-in session.", error);
    return null;
  }
}

export function getAuthSessionSnapshot(): AuthSessionSnapshot {
  if (!authSnapshot.isLoaded) {
    authSnapshot = { session: readStoredAuthSession(), isLoaded: true };
  }
  return authSnapshot;
}

export function getServerAuthSessionSnapshot() {
  return serverAuthSnapshot;
}

export function subscribeToAuthSession(listener: () => void) {
  authListeners.add(listener);
  return () => authListeners.delete(listener);
}
