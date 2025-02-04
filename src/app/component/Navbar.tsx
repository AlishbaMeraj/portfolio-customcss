import Image from "next/image";
import logo from "@/app/public/logo.png";
import Link from "next/link";
import { FaDownload } from "react-icons/fa6";
import "@/app/styles.css"; 

const Navbar = () => {
  return (
    <div className="navbar-container">
      <header className="navbar">
        <div className="navbar-inner">
          <a className="logo">
            <Image src={logo} alt="logo" width={80} height={80} className="logo-img" />
            <span className="logo-text">Alishba Meraj</span>
          </a>
          <nav className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/About">About Me</Link>
            <a>Services</a>
            <Link href="/Portfolio">Portfolio</Link>
            <Link href="/Contact">Contact</Link>
          </nav>
          <div className="download-btn-container">
            <button className="download-btn">
              Download CV <FaDownload className="download-icon" />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
