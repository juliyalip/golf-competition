"use client"
import Head from 'next/head'
import Hero from '../components/Hero'
import Premier from '@/components/premier';
import Header from '@/components/header';
import ContainerHero from '@/components/containerHero';

export default function Home() {
  return (<>
  <Head><link rel="icon" href='/favicon.ico' /></Head>
    <Header />
    <main className='mb-20'>
      <ContainerHero>
        <Premier />
        <Hero />
      </ContainerHero>
    </main>
  </>
  );
}
