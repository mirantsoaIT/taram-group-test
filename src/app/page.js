"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCalendarDays } from "react-icons/fa6";
import { IoMdArrowRoundDown } from "react-icons/io";
import Button from "@/components/Button";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen -mt-11 sm:-mt-0 overflow-x-hidden">
      {/* Demi-cercle gauche - arrive de la gauche */}
      <motion.div 
        initial={{ x: -800, opacity: 0 }}
        animate={{ x: 0, opacity: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#4CD4B0] rounded-full blur-3xl"
      />
      
      {/* Demi-cercle droit - arrive de la droite */}
      <motion.div 
        initial={{ x: 800, opacity: 0 }}
        animate={{ x: 0, opacity: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#4CD4B0] rounded-full blur-3xl"
      />
      {/* Contenu principal */}
      <div className="relative z-10 w-full">
        <HeroSection />
        {/* Boutons avec animation de framer motion*/}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex gap-4 items-center justify-center flex-col sm:flex-row mt-8 max-w-[255px] mx-auto sm:max-w-[450px]"
        >
          <Button 
            className="primary" 
            font="font-montserrat" 
            icon={<FaCalendarDays 
            className="animate-bounce sm:animate-none"/>} 
            iconPosition="left">
            Prendre RDV
          </Button>
          <Button 
            className="outline" 
            font="font-montserrat" 
            icon={<IoMdArrowRoundDown/>} 
            iconPosition="right">
            Découvrir nos projets
          </Button>
          {/* Image avec animation retardée */}
          <Image 
            src="/3_Un_Ptit_Click.png"
            alt="Un p'tit clic ?"
            width={135}
            height={60}
            className="absolute -left-10 top-full -mt-5 animate-swing opacity-70 hidden sm:block"
          />
        </motion.div>
      </div>
    </div>
  );
}
