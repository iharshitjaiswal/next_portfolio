"use client";
import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import React from "react";
import { FaHome } from "react-icons/fa";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center text-white items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="mx-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};
export default Home;
