import Hero from '@/components/Hero';
import WhoItsFor from '@/components/WhoItsFor';
import Services from '@/components/Services';
import WhyItWorks from '@/components/WhyItWorks';
import SampleWork from '@/components/SampleWork';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />  
       <SampleWork />
      <WhyItWorks /> 
      <WhoItsFor />
      {/* <Services /> */}
      
      {/* <Testimonials /> */}
      {/* <Process /> */}
      <CTA />
      <Footer />
    </main>
  );
}
