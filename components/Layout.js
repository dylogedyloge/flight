import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="bg-base-100 ">
        <section>{children}</section>
      </main>
      <Footer />
    </div>
  );
}
