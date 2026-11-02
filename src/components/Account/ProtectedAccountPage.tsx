import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Login from "@/components/Login";
import Head from "next/head";
import { useSyncExternalStore, type ReactNode } from "react";
import {
  getAuthSessionSnapshot,
  getServerAuthSessionSnapshot,
  subscribeToAuthSession,
  type AuthUser,
} from "@/services/auth.service";

type ProtectedAccountPageProps = {
  title: string;
  description: string;
  children: (user: AuthUser) => ReactNode;
};

export default function ProtectedAccountPage({
  title,
  description,
  children,
}: ProtectedAccountPageProps) {
  const authSnapshot = useSyncExternalStore(
    subscribeToAuthSession,
    getAuthSessionSnapshot,
    getServerAuthSessionSnapshot,
  );
  const user = authSnapshot.session?.user;

  return (
    <>
      <Head>
        <title>{title} | Tata Pravesh</title>
        <meta name="description" content={description} />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Header />
      <main className="account-page">
        <div className="account-page__container">
          {!authSnapshot.isLoaded ? (
            <section className="account-page__status" role="status" aria-live="polite">
              Checking your sign-in…
            </section>
          ) : user ? (
            children(user)
          ) : (
            <section className="account-page__access" aria-labelledby="account-access-title">
              <h1 id="account-access-title">Sign in to continue</h1>
              <p>This account page is available only after you sign in.</p>
              <Login className="account-page__login" />
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
