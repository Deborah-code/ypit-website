import Image from "next/image";
import Link from "next/link";
import { CSSProperties } from "react";
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
    borderBottom: `6px solid ${purpleDark}`,
  };
  //   console.log(window.location.pathname);
  //   const [active, setActive] = useState([]);

  //   const changeActiveClass = useCallback(
  //     (path: string) => {
  //     setActive(new Array(MenuData.length).fill(false)[]);
  //       if (window.location.pathname === path) {
  //         setActive((item) => item[index] = true )
  //       }
  //       console.log("not called");
  //     },
  //     [active]);

  return (
    <nav style={NavStyle}>
      <Image src={LogoImg} alt="Logo" />
      <div style={TextContainerStyle}>
        {MenuData.map((item, index: number) => (
          <Link
            href={item.path}
            key={index}
            // style={active ? LinkStyle : undefined}
            // onClick={() => changeActiveClass(item.path, index)}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <Button globeButton text="Join Our Community" />
    </nav>
  );
};

export default Navbar;
