import ProtectedAccountPage from "@/components/Account/ProtectedAccountPage";
import { clearAuthSession, type AuthUser } from "@/services/auth.service";
import { useRouter } from "next/router";
import { useState } from "react";

function ProfileDetails({ user }: { user: AuthUser }) {
  const router = useRouter();
  const [error, setError] = useState("");

  const signOut = async () => {
    setError("");
    try {
      clearAuthSession();
      await router.replace("/");
    } catch (signOutError) {
      setError(signOutError instanceof Error ? signOutError.message : "Unable to sign out. Please try again.");
    }
  };

  return (
    <section className="account-page__card" aria-labelledby="profile-title">
      <div className="account-page__heading">
        <div>
          <p className="account-page__eyebrow">YOUR ACCOUNT</p>
          <h1 id="profile-title">My Profile</h1>
          <p className="account-page__intro">Your Tata Pravesh account details.</p>
        </div>
        <button className="account-page__button account-page__button--outline" type="button" onClick={signOut}>
          Sign out
        </button>
      </div>

      {error && <p className="account-page__error" role="alert">{error}</p>}

      <dl className="account-page__details">
        <div>
          <dt>Name</dt>
          <dd>{user.name}</dd>
        </div>
        <div>
          <dt>Email address</dt>
          <dd>{user.email}</dd>
        </div>
        <div>
          <dt>Phone number</dt>
          <dd>{user.phone || "Not provided"}</dd>
        </div>
        <div>
          <dt>Email verification</dt>
          <dd>{user.email_verified_at ? "Verified" : "Not verified"}</dd>
        </div>
      </dl>
    </section>
  );
}

export default function MyProfilePage() {
  return (
    <ProtectedAccountPage
      title="My Profile"
      description="View your Tata Pravesh account details."
    >
      {(user) => <ProfileDetails user={user} />}
    </ProtectedAccountPage>
  );
}
