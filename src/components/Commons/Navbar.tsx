import Image from "next/image";
import Link from "next/link";
import { CSSProperties, useState } from "react";
import { MenuData } from "~/data/menuData";
import { purpleDark } from "~/styles/Theme";
import LogoImg from "../../assets/commons/navLogo.svg";
import Button from "./Button";

const Navbar = () => {
  const NavStyle: CSSProperties = {
    color: purpleDark,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "96px",
    paddingRight: "96px",
    paddingTop: "32px",
    paddingBottom: "32px",
    borderBottom: "1px solid #EBEAEA",
  };

  const TextContainerStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "56px",
  };

  const LinkStyle: CSSProperties = {
    borderBottom: `4px solid ${purpleDark}`,
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const handleMenuItemClick = (index: number) => {
    setActiveIndex(index);
    console.log(index, activeIndex);
  };

  return (
    <nav style={NavStyle}>
      <Image src={LogoImg} alt="Logo" />
      <div style={TextContainerStyle}>
        {MenuData.map((item, index: number) => (
          <Link href={item.path} key={index}>
            <p
              style={activeIndex === index ? LinkStyle : undefined}
              onClick={() => handleMenuItemClick(index)}
            >
              {item.title}
            </p>
          </Link>
        ))}
      </div>
      <Button globeButton text="Join Our Community" />
    </nav>
  );
};

export default Navbar;
