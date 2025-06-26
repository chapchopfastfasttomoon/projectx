"use client";

import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import ThreeDCardCarousel from "@/components/ThreeDCardCarousel";
import { AppleCardsCarouselDemo } from "@/components/applecards"; // Import the Apple carousel

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Approach />

        {/* 3D Card Carousel */}
        <section className="py-20">
          <ThreeDCardCarousel />
        </section>

        {/* Apple Style Card Carousel */}
        <section className="py-20 bg-white dark:bg-black-100"> {/* Added background for contrast */}
          <AppleCardsCarouselDemo />
        </section>

        <RecentProjects />
        <Clients />
        <Experience />
        <Footer />
      </div>
    </main>
  );
};

export default Home;