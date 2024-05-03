import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import PaymentPlan from "./components/PaymentPlan";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Nav />

      <Hero />

      <AboutUs />
      <PaymentPlan />
      <ContactUs />

      <footer className="text-center mt-5 capitalize">
        all copyright reserved
      </footer>
    </div>
  );
}
