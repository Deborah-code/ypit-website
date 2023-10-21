import { Icon } from "@iconify/react";
import { CSSProperties } from "react";
import { purpleLight } from "~/styles/Theme";
const Button = (props: any) => {
  const ButtonStyle: CSSProperties = {
    backgroundColor: purpleLight,
  };
  const DivStlye: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };
  return (
    <div className="cursor-pointer text-center">
      <button style={ButtonStyle}>
        <div style={DivStlye}>
          <p>{props.text}</p>
          {props.globeButton ? (
            <Icon icon="ph:globe-thin" color="#5100bf" width="24" height="24" />
          ) : (
            <Icon
              icon="iconoir:arrow-tr"
              color="#5100bf"
              width="16"
              height="16"
            />
          )}
        </div>
      </button>
    </div>
  );
};

export default Button;
