"use client";
import Image from "next/image";
import image from "@/app/public/image.png";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import "@/app/styles.css"; // Import custom CSS file

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm</h1>
          <h2 className="hero-name">Alishba Meraj</h2>

          <div className="hero-typewriter">
            <Typewriter
              options={{
                strings: ["Frontend Developer", "UI/UX Enthusiast", "Graphic Designer"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <div className="hero-divider"></div>

          <p className="hero-description">
            I am a skilled Front-end developer with expertise in HTML, CSS, TypeScript, JavaScript, React, and Next.js. I'm
            currently studying software engineering at GIAIC. I'm focusing on deepening my knowledge of React and Next.js
            to enhance my ability to deliver high-quality web solutions. I am excited to bring my creativity and technical
            skills to every project. Let's collaborate and transform your ideas into reality!
          </p>

          <div className="hero-button-container">
            <button className="hero-button">
              <Link href={"/"}>Hire Me</Link>
            </button>
          </div>
        </div>

        <div className="hero-image-container">
          <Image src={image} width={100} height={100} alt="image" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
