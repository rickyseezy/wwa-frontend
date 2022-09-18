import Image from "next/image";
import logo from "@public/images/wwa-logo-black.png";
import styles from './Logo.module.scss'

interface LogoProps {
  src: string;
}

const Logo = ({ src }: LogoProps) => {
  return <img className={styles['logoImage']} src={src} />;
};

export default Logo;
