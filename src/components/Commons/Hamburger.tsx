import { Icon } from "@iconify/react";
import { CSSProperties } from "react";
import { purpleLight } from "~/styles/Theme";

const HamburgerIcon = () => {
  const ButtonStyle: CSSProperties = {
    backgroundColor: purpleLight,
    borderRadius: "50%",
    border: "2px solid #5100BF",
  };
  const DivStlye: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  return (
    <div className="cursor-pointer text-center">
      <div style={ButtonStyle}>
        <div style={DivStlye}>
          <Icon
            icon="system-uicons:menu-hamburger"
            color="#5100bf"
            width={39}
            height={39}
          />
        </div>
      </div>
    </div>
  );
};

export default HamburgerIcon;
