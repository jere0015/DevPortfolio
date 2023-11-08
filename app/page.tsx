import Image from 'next/image'
import Link from "next/link";
import HomeSection from "./components/home"
import AboutSection from './components/about';
import ProjectsSection from './components/projects';
import Footer from './components/footer';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col container'>
      <div className="container mt-24 mx-auto px-12 py-4">
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <Footer />
      </div>
    </main>
  )
}
