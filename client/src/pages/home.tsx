import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ContactForm from "@/components/contact-form";
import AdditionalContact from "@/components/additional-contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="font-inter bg-gray-50 min-h-screen">
      <Navigation />
      <HeroSection />
      <ContactForm />
      <AdditionalContact />
      <Footer />
    </div>
  );
}
