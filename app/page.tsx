import { product } from "@/lib/catalog";
import { buy } from "./actions";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <article className={styles.card} aria-labelledby="product-name">
        <img
          className={styles.image}
          src={product.image}
          alt={`${product.name}: a die-cut vinyl sticker with an orange Lightning bolt`}
          width={720}
          height={720}
        />
        <div className={styles.body}>
          <div className={styles.header}>
            <h1 id="product-name" className={styles.name}>
              {product.name}
            </h1>
            <p className={styles.price}>
              ${product.price}
              <span className={styles.currency}>{product.currency}</span>
            </p>
          </div>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.note}>
            Paid in bitcoin over Lightning, straight to the shop&apos;s wallet.
          </p>
          <form action={buy}>
            <button type="submit" className={styles.button}>
              Buy
            </button>
          </form>
        </div>
      </article>
    </main>
  );
}
