import { I18nProvider } from './i18n/I18nProvider';
import Header from './components/landing/Header';
import Hero from './components/landing/Hero';
import ServiceCoverageBanner from './components/landing/ServiceCoverageBanner';
import Services from './components/landing/Services';
import WhyChooseUs from './components/landing/WhyChooseUs';
import AppointmentFormSection from './components/landing/AppointmentFormSection';
import AreasServed from './components/landing/AreasServed';
import FAQSection from './components/landing/FAQSection';
import GoogleReviewsSection from './components/landing/GoogleReviewsSection';
import LivePhotos from './components/landing/LivePhotos';
import Footer from './components/landing/Footer';
import FloatingContactButtons from './components/floating/FloatingContactButtons';

function App() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <div className="perf-contain">
            <ServiceCoverageBanner />
          </div>
          <div className="perf-contain">
            <Services />
          </div>
          <div className="perf-contain">
            <WhyChooseUs />
          </div>
          <div className="perf-contain">
            <AppointmentFormSection />
          </div>
          <div className="perf-contain">
            <LivePhotos />
          </div>
          <div className="perf-contain">
            <AreasServed />
          </div>
          <div className="perf-contain">
            <FAQSection />
          </div>
          <div className="perf-contain">
            <GoogleReviewsSection />
          </div>
        </main>
        <Footer />
        <FloatingContactButtons />
      </div>
    </I18nProvider>
  );
}

export default App;
