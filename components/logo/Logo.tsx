import Image from "next/image";
import logo from "@public/images/wwa-logo-black.png";

interface LogoProps {
  src: string;
}

const Logo = ({ src }: LogoProps) => {
  return <img src={src} />;
};

export default Logo;
