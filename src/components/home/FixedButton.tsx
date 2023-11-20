import { Icon } from "@iconify/react";
import { useWindowSize } from "@uidotdev/usehooks";
import { CSSProperties } from "react";
import { purpleDark, purpleLight } from "~/styles/Theme";

const FixedButton = (props: any) => {
  const windowWidth = useWindowSize().width!;

  const ButtonStyle: CSSProperties = {
    backgroundColor: purpleDark,
    borderRadius: "32px",
    padding: "10px 16px",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    margin: "Auto",
    marginTop: 41,
    border: `13px solid ${purpleLight}`,
  };
  const DivStlye: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    textAlign: "center",
    justifyContent: "center",
  };
  const TextStyle: CSSProperties = {
    color: "white",
    fontSize: windowWidth > 767 ? 20 : 10,
  };
  return (
    <div className="cursor-pointer text-center">
      <button style={ButtonStyle}>
        <div style={DivStlye}>
          <Icon
            icon="mdi:alarm-clock"
            color={purpleLight}
            width={windowWidth > 767 ? 24 : 12}
            height={windowWidth > 767 ? 24 : 12}
          />
          <p style={TextStyle}>
            Series D-Event coming up Dec12, 2023.{" "}
            <span style={{ textDecoration: "underline" }}>Register now!</span>
          </p>
        </div>
      </button>
    </div>
  );
};

export default FixedButton;
