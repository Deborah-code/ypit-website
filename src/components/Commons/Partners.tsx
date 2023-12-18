import { useWindowSize } from "@uidotdev/usehooks";
import Image from "next/image";
import bounce from "../../assets/commons/bounce.png";
import greenCamp from "../../assets/commons/greenCamp.png";
import paymentLogue from "../../assets/commons/paymentLogue.png";
import techBabble from "../../assets/commons/techBabble.png";
import zoropay from "../../assets/commons/zoropay.png";

const Partners = () => {
  const windowWidth = useWindowSize().width!;

  const changeValueByScreenSize = (
    desktopValue: number,
    mobileValue: number
  ) => {
    if (windowWidth > 767) {
      return desktopValue;
    } else return mobileValue;
  };
  return (
    <div>
      <h3>Our partners so far</h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: changeValueByScreenSize(56, 24),
          paddingTop: changeValueByScreenSize(64, 32),
          paddingBottom: 96,
          paddingLeft: 18,
          paddingRight: 18,
        }}
      >
        <Image
          src={zoropay}
          alt="logo"
          objectFit="contain"
          style={{
            width: changeValueByScreenSize(160, 59),
            height: changeValueByScreenSize(37, 13),
          }}
        />
        <Image
          src={greenCamp}
          alt="logo"
          objectFit="contain"
          style={{
            width: changeValueByScreenSize(80, 29),
            height: changeValueByScreenSize(80, 29),
          }}
        />
        <Image
          src={paymentLogue}
          alt="logo"
          objectFit="contain"
          style={{
            width: changeValueByScreenSize(211, 77),
            height: changeValueByScreenSize(50, 29),
          }}
        />
        <Image
          src={techBabble}
          alt="logo"
          objectFit="contain"
          style={{
            width: changeValueByScreenSize(112, 40),
            height: changeValueByScreenSize(50, 30),
          }}
        />
        <Image
          src={bounce}
          alt="logo"
          objectFit="contain"
          style={{
            width: changeValueByScreenSize(83, 30),
            height: changeValueByScreenSize(83, 30),
          }}
        />
      </div>
    </div>
  );
};

export default Partners;
