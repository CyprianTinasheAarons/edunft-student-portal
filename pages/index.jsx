import styles from "../styles/Home.module.css";
import NFTGallery from "../components/nftGallery";
import MainLayout from "../layout/mainLayout";
export default function Home() {
  return (
    <MainLayout>
      <div>
        <main className={styles.main}>
          <NFTGallery />
        </main>
      </div>
    </MainLayout>
  );
}
