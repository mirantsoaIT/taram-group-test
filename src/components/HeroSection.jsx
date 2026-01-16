"use client";
import Image from "next/image";
import { motion } from "framer-motion";


export default function HeroSection() {
    return (
        <section className="py-8 px-8">
            <div className="max-w-5xl mx-auto text-center">
                {/* Badge en haut */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 mb-8 font-montserrat shadow-2xl shadow-gray-400/50">
                    <Image 
                        src="/2_Logo_Bulle.png"
                        alt="Un p'tit clic ?"
                        width={28}
                        height={28}
                    />
                    <span className="font-bold text-black uppercase tracking-wide text-xs sm:text-lg">
                        Créer un site web{" "}
                        <span className="underline decoration-2">vraiment</span>
                        {" "}unique
                    </span>
                </motion.div>

                {/* Titre principal avec mots colorés */}
                <motion.h1 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }} 
                    className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight font-zalando-sans-expanded">
                    Votre{" "}
                    <motion.span
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="bg-gradient-to-r from-[#4CD4B0] to-[#71DDAE] bg-clip-text text-transparent">
                        site
                    </motion.span>{" "}
                    doit{" "}
                    <motion.span
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="bg-gradient-to-r from-[#4CD4B0] to-[#71DDAE] bg-clip-text text-transparent">
                        donner envie
                    </motion.span>
                    <br/>
                    de{" "}
                    <motion.span
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }} 
                        className="bg-gradient-to-r from-[#4CD4B0] to-[#71DDAE] bg-clip-text text-transparent">
                        rester
                    </motion.span>
                    , pas de{" "}
                    <motion.span
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="bg-gradient-to-r from-[#4CD4B0] to-[#71DDAE] bg-clip-text text-[#4CD4B0] line-through decoration-gray-900">
                        revenir
                    </motion.span>{" "}
                    <span className="decoration-gray-900">en</span> <br/>
                    <motion.span
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="bg-gradient-to-r from-[#4CD4B0] to-[#71DDAE] bg-clip-text text-[#4CD4B0] line-through decoration-gray-900">
                        arrière
                    </motion.span>
                    .
                </motion.h1>

                {/* Description */}
                <motion.p 
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }} 
                    className="text-gray-300 text-base md:text-base max-w-3xl mx-auto font-montserrat">
                    Design moderne, SEO solide, Suivi complet :<br />
                    on construit un site qui retient vos visiteurs et vous apporte des résultats.
                </motion.p>
            </div>
        </section>
    );
}