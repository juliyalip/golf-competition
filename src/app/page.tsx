"use client"
import Hero from '../components/Hero'
import Premier from '@/components/premier';
import Header from '@/components/header';
import ContainerHero from '@/components/containerHero';

export default function Home() {
  return (<>
     <Header />
      <main>
          <ContainerHero>
          
        <Premier />
        <Hero />
        </ContainerHero>
      </main>

  </>
  );
}
