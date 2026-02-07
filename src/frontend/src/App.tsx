import Header from './components/landing/Header';
import Hero from './components/landing/Hero';
import ServiceCoverageBanner from './components/landing/ServiceCoverageBanner';
import Services from './components/landing/Services';
import WhyChooseUs from './components/landing/WhyChooseUs';
import AppointmentFormSection from './components/landing/AppointmentFormSection';
import AreasServed from './components/landing/AreasServed';
import GoogleReviewsSection from './components/landing/GoogleReviewsSection';
import LivePhotos from './components/landing/LivePhotos';
import Footer from './components/landing/Footer';
import FloatingContactButtons from './components/floating/FloatingContactButtons';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ServiceCoverageBanner />
      <Services />
      <WhyChooseUs />
      <AppointmentFormSection />
      <LivePhotos />
      <AreasServed />
      <GoogleReviewsSection />
      <Footer />
      <FloatingContactButtons />
    </div>
  );
}

export default App;
