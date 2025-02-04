import Image from "next/image";
import logo from "@/app/public/logo.png";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";
import "@/app/styles.css"; // Import custom CSS file

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-inner">
          <a className="footer-logo">
            <Image src={logo} alt="logo" width={80} height={80} className="footer-logo-img" />
            <span className="footer-text">Alishba Meraj</span>
          </a>
          <p className="footer-copyright">© 2024 Alishba Meraj</p>
          <span className="footer-icons">
            <Link href="/">
              <FaInstagram className="footer-icon instagram" />
            </Link>
            <Link href="/">
              <FaFacebook className="footer-icon facebook" />
            </Link>
            <Link href="/">
              <FaLinkedin className="footer-icon linkedin" />
            </Link>
            <Link href="/">
              <FaGithub className="footer-icon github" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
