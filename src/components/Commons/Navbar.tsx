import { useWindowSize } from "@uidotdev/usehooks";
import Image from "next/image";
import { CSSProperties, useState } from "react";
import { MenuData } from "~/data/menuData";
import { purpleDark } from "~/styles/Theme";
import LogoImg from "../../assets/commons/navLogo.png";
import Button from "./Button";
import HamburgerIcon from "./Hamburger";

const Navbar: React.FC = () => {
  const windowWidth: number = useWindowSize().width!;

  const NavStyle: CSSProperties = {
    color: purpleDark,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: windowWidth < 767 ? "20px" : "64px",
    paddingRight: windowWidth < 767 ? "20px" : "64px",
    paddingTop: windowWidth < 767 ? "16px" : "32px",
    paddingBottom: windowWidth < 767 ? "16px" : "32px",
    borderBottom: "1px solid #EBEAEA",
  };

  const TextContainerStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 56,
  };

  const LinkStyle: CSSProperties = {
    borderBottom: `4px solid ${purpleDark}`,
  };

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleMenuItemClick = (index: number) => {
    setActiveIndex(index);
    console.log(index, activeIndex);
  };

  return (
    <nav style={NavStyle}>
      <Image
        src={LogoImg}
        alt="Logo"
        style={{ maxWidth: 130, maxHeight: 50 }}
      />
      {windowWidth > 767 && (
        <div style={TextContainerStyle}>
          {MenuData.map((item, index: number) => (
            <a href={item.path} key={index}>
              <p
                style={activeIndex === index ? LinkStyle : undefined}
                onClick={() => handleMenuItemClick(index)}
              >
                {item.title}
              </p>
            </a>
          ))}
          <Button globeButton text="Join Our Community" />
        </div>
      )}
      {windowWidth < 767 && (
        <div>
          <HamburgerIcon />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
