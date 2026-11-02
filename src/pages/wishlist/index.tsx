import ProtectedAccountPage from "@/components/Account/ProtectedAccountPage";
import useWishlist from "@/hooks/useWishlist";
import type { AuthUser } from "@/services/auth.service";
import type { WishlistItem } from "@/services/wishlist.service";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function WishlistContents({ user }: { user: AuthUser }) {
  const { items, isLoaded, removeItem } = useWishlist(user.id);
  const [error, setError] = useState("");

  const removeSavedItem = (itemId: string) => {
    setError("");
    try {
      removeItem(itemId);
    } catch (removeError) {
      setError(removeError instanceof Error ? removeError.message : "Unable to update your wishlist.");
    }
  };

  return (
    <section className="account-page__card" aria-labelledby="wishlist-title">
      <div className="account-page__heading">
        <div>
          <p className="account-page__eyebrow">YOUR ACCOUNT</p>
          <h1 id="wishlist-title">My Wishlist</h1>
          <p className="account-page__intro">Products you’ve saved for later.</p>
        </div>
      </div>

      {error && <p className="account-page__error" role="alert">{error}</p>}

      {!isLoaded ? (
        <p className="account-page__status" role="status">Loading your wishlist…</p>
      ) : items.length === 0 ? (
        <div className="account-page__empty">
          <h2>Your wishlist is empty</h2>
          <p>Save a product to keep it here for later.</p>
          <Link className="account-page__button" href="/">Explore products</Link>
        </div>
      ) : (
        <div className="account-page__wishlist">
          {items.map((item) => (
            <WishlistCard key={item.id} item={item} onRemove={removeSavedItem} />
          ))}
        </div>
      )}
    </section>
  );
}

function WishlistCard({ item, onRemove }: { item: WishlistItem; onRemove: (id: string) => void }) {
  const price = item.unitPrice === null
    ? "Price on request"
    : `₹ ${item.unitPrice.toLocaleString("en-IN")}`;

  return (
    <article className="account-page__wishlist-item">
      <Link className="account-page__wishlist-image" href={`/product/${encodeURIComponent(item.productSlug)}`}>
        <Image src={item.image} alt={item.modelName} fill sizes="112px" unoptimized />
      </Link>
      <div className="account-page__wishlist-info">
        <p className="account-page__eyebrow">{item.productName}</p>
        <h2>
          <Link href={`/product/${encodeURIComponent(item.productSlug)}`}>{item.modelName}</Link>
        </h2>
        <p>{item.designName} · {item.shadeName}</p>
        <strong>{price}</strong>
      </div>
      <button
        className="account-page__button account-page__button--outline"
        type="button"
        onClick={() => onRemove(item.id)}
        aria-label={`Remove ${item.modelName} from wishlist`}
      >
        Remove
      </button>
    </article>
  );
}

export default function WishlistPage() {
  return (
    <ProtectedAccountPage
      title="My Wishlist"
      description="View products saved to your Tata Pravesh wishlist."
    >
      {(user) => <WishlistContents user={user} />}
    </ProtectedAccountPage>
  );
}
