import Image from "next/image";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Designer Image */}
      <div className="px-4 mb-8">
        <div className="relative w-full h-[400px]">
          <Image
            src="/honeyOo.jpg"
            alt="Designer"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
