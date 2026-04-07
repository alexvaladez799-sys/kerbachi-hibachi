import Nav from '@/components/Nav';
import MobBar from '@/components/MobBar';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Dishes from '@/components/sections/Dishes';
import About from '@/components/sections/About';
import Why from '@/components/sections/Why';
import Gallery from '@/components/sections/Gallery';
import Location from '@/components/sections/Location';
import OrderCTA from '@/components/sections/OrderCTA';

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Dishes />
        <About />
        <Why />
        <Gallery />
        <Location />
        <OrderCTA />
      </main>
      <Footer />
      <MobBar />
    </>
  );
}
