import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 3000);
    return timer;
  }, []);
  return (
    <>
      <Head>
        <title>Page not Found</title>
      </Head>
      <div className="not-found">
        <h1>OOOps...</h1>
        <h2>That page cannot be found</h2>
        <p>
          Go back to the{" "}
          <Link href="/">
            <a>HomePage</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
