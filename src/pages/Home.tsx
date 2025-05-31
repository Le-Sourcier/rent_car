import React from 'react';
import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';
import BookingForm from '../components/BookingForm';
import Services from '../components/Services';
import Commitment from '../components/Commitment';
import TopDeals from '../components/TopDeals';
import MobileApp from '../components/MobileApp';

const Home: React.FC = () => {
  return (
    <PageTransition>
      <main className="overflow-hidden">
        <Hero />
        <BookingForm />
        <Services />
        <Commitment />
        <TopDeals />
        <MobileApp />
      </main>
    </PageTransition>
  );
};

export default Home;