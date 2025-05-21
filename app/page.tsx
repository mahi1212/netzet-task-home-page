import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero/hero-section";
import NotificationBar from "@/components/notification-bar";

export default function Home() {
  return (
    <div className="">
      <NotificationBar 
        title="🚀 FRESH BEGINNINGS SALE:"
        description="Extra 25% OFF, Limited Spots - start your journey today!"
      />
      <main className="container mx-auto px-4">
        <Navbar />
        <HeroSection />
      </main>
    </div>
  );
}
