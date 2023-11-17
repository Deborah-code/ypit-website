import { Icon } from "@iconify/react";
import { useWindowSize } from "@uidotdev/usehooks";
import Image from "next/image";
import Link from "next/link";
import { CSSProperties } from "react";
import { MenuData } from "~/data/menuData";
import { purpleDark } from "~/styles/Theme";
import LogoImg from "../../assets/commons/navLogo.svg";

const Footer = () => {
  const windowWidth = useWindowSize().width!;

  const TextContainerStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: windowWidth > 767 ? 44 : 24,
    paddingTop: 24,
    paddingBottom: 42,
  };
  const textColorStyle: CSSProperties = {
    color: purpleDark,
  };
  const quickLinks: CSSProperties = {
    color: purpleDark,
    margin: "auto",
    paddingTop: windowWidth > 767 ? 0 : 40,
  };
  return (
    <div>
      <div
        style={{
          display: windowWidth > 767 ? "flex" : "block",
          paddingLeft: 18,
          paddingRight: 18,
          alignItems: "start",
          textAlign: "left",
        }}
      >
        <div
          style={{
            textAlign: "start",
            maxWidth: windowWidth > 767 ? "50%" : "100%",
          }}
        >
          <Image src={LogoImg} alt="Logo" style={{ marginBottom: 24 }} />
          <p style={textColorStyle}>
            A community of Young People In Tech with a mission is to foster
            connections and growth among young individuals in the field of
            technology across Africa
          </p>
        </div>
        <div style={{ textAlign: "start" }}>
          <p style={quickLinks}>Quick links</p>
          <div style={TextContainerStyle}>
            {MenuData.map((item, index: number) => (
              <Link href={item.path} key={index}>
                <p style={textColorStyle}>{item.title}</p>
              </Link>
            ))}
          </div>
          <p style={textColorStyle}>Follow us on our socials</p>
          <div style={TextContainerStyle}>
            <Icon
              icon="mdi:twitter"
              width={24}
              height={24}
              color={purpleDark}
            />
            <Icon
              icon="mdi:instagram"
              width={24}
              height={24}
              color={purpleDark}
            />
            <Icon
              icon="formkit:linkedin"
              width={24}
              height={24}
              color={purpleDark}
            />
          </div>
        </div>
      </div>
      <p style={textColorStyle}>
        Made with{" "}
        <span style={{ height: 22 }}>
          <Icon icon="mdi:heart" width={23} height={23} />
        </span>{" "}
        by the YPIT innovation hub
      </p>
    </div>
  );
};

export default Footer;
