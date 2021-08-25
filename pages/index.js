import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>
          lorem The little golden key, and when she went on talking: `Dear,
          dear! The first question of course was, how to begin.   For, you see,
          so many out-of-the-way things to happen, that it might belong to one
          of the hall: in fact she was now about two feet high, and was going on
          shrinking rapidly: she soon made out that it led into a small passage,
          not much larger than a rat-hole: she knelt down and looked along the
          course, here and there. The next thing was to eat the comfits: this
          caused some noise and confusion, as the Lory positively refused to
          tell its age, there was no longer to be seen: she found she had never
          before seen a rabbit with either a waistcoat-pocket, or a watch to
          take out of the way I want to go! `I wonder if I would talk on such a
          subject! Suddenly she came upon a low trembling voice, `Let us get to
          twenty at that rate! CHAPTER III A Caucus-Race and a sad tale!   said
          the Dodo, pointing to Alice with one of its little eyes, but it was
          all very well to say it over) `--yes, that  s about the right
          distance--but then I wonder what Latitude or Longitude I  ve got to?  
          (Alice had been to the seaside once in her life, and had come to the
          general conclusion, that wherever you go to on the glass table as
          before, `and things are worse than ever,   thought the poor child, `for
          I never was so small as this before, never!
        </p>
        <p className={styles.text}>
          lorem The little golden key, and when she went on talking: `Dear,
          dear! The first question of course was, how to begin.   For, you see,
          so many out-of-the-way things to happen, that it might belong to one
          of the hall: in fact she was now about two feet high, and was going on
          shrinking rapidly: she soon made out that it led into a small passage,
          not much larger than a rat-hole: she knelt down and looked along the
          course, here and there. The next thing was to eat the comfits: this
          caused some noise and confusion, as the Lory positively refused to
          tell its age, there was no longer to be seen: she found she had never
          before seen a rabbit with either a waistcoat-pocket, or a watch to
          take out of the way I want to go! `I wonder if I would talk on such a
          subject! Suddenly she came upon a low trembling voice, `Let us get to
          twenty at that rate! CHAPTER III A Caucus-Race and a sad tale!   said
          the Dodo, pointing to Alice with one of its little eyes, but it was
          all very well to say it over) `--yes, that  s about the right
          distance--but then I wonder what Latitude or Longitude I  ve got to?  
          (Alice had been to the seaside once in her life, and had come to the
          general conclusion, that wherever you go to on the glass table as
          before, `and things are worse than ever,   thought the poor child, `for
          I never was so small as this before, never!
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
