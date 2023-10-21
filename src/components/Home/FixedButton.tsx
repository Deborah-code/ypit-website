import { Icon } from "@iconify/react";
import { CSSProperties } from "react";
import { purpleLight, purpleDark } from "~/styles/Theme";
const FixedButton = (props: any) => {
  const ButtonStyle: CSSProperties = {
    backgroundColor: purpleDark,
    borderRadius: "32px",
    padding: "10px 16px",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    margin: "Auto",
    marginTop: 76,
    border: `13px solid ${purpleLight}`,
  };
  const DivStlye: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    textAlign: "center",
    justifyContent: "center"
  };
  const TextStyle: CSSProperties = {
    color: "white",
    fontFamily: "Helvetica Neue",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  }
  return (
    <div className="cursor-pointer text-center">
      <button style={ButtonStyle}>
        <div style={DivStlye}>
         

            <Icon
              icon="mdi:alarm-clock"
              color={purpleLight}
              width="24"
              height="24"
            />
             <p style={TextStyle}>Series D-Event coming up Dec12, 2023. <span style={{textDecoration: 'underline'}}>Register now!</span></p>
        </div>
      </button>
    </div>
  );
};

export default FixedButton;