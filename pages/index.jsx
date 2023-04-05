import styles from "../styles/Home.module.css";
import NFTGallery from "../components/nftGallery";
import MainLayout from "../layout/mainLayout";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";

export default function Home() {
  const router = useRouter();

  const { isConnected } = useAccount();

  useEffect(() => {
    if (!isConnected) {
      router.push("/login");
    }
  }, [isConnected]);

  return (
    <>
    <Head>
      <title>Edunft Student Portal</title>
      <meta name="description" content="Edunft Student Portal" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <MainLayout>
        <div>
          <main className={styles.main}>
            <NFTGallery />
          </main>
        </div>
      </MainLayout>
    </>
  );
}
