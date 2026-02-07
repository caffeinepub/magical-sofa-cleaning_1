import Header from './components/landing/Header';
import Hero from './components/landing/Hero';
import Services from './components/landing/Services';
import AreasServed from './components/landing/AreasServed';
import Footer from './components/landing/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <AreasServed />
      <Footer />
    </div>
  );
}

export default App;
