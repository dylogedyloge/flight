import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        <section style={{ width: "1024px" }}>{children}</section>
      </main>
      <Footer />
    </>
  );
}
