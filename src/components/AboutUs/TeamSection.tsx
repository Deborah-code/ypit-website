import { useWindowSize } from "@uidotdev/usehooks";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import { gradientStyle } from "~/styles/Theme";
import Deborah from "../../assets/aboutUs/Deborah.jpg";
import Carousel from "../Commons/Carousel";

interface TeamProps {
  image: HTMLImageElement | string | StaticImageData;
  name: string;
  role: string;
}
const TeamCard: FC<TeamProps> = ({ image, name, role }) => {
  const windowWidth = useWindowSize().width!;

  return (
    <div style={{ position: "relative" }}>
      <Image
        src={image}
        alt={name}
        width={windowWidth > 767 ? 409 : 272}
        height={windowWidth > 767 ? 580 : 408}
        style={{ borderRadius: 20 }}
      />
      <div
        style={{
          position: "absolute",
          bottom: windowWidth > 767 ? 24 : 16,
          left: windowWidth > 767 ? 24 : 16,
        }}
      >
        <p style={{ color: "white" }}>{name}</p>
        <p style={{ color: "#FFD855", fontSize: 16 }}>{role}</p>
      </div>
    </div>
  );
};
const card: JSX.Element[] = [
  <TeamCard
    key={0}
    name="Tobi Aromire"
    role="Captain of the Ship"
    image={Deborah}
  />,
  <TeamCard
    key={1}
    name="Deborah Adewunmi"
    role="Leader of the Tech  pack"
    image={Deborah}
  />,
  <TeamCard
    key={2}
    name="Diji Abiola"
    role="Brand Alchemist"
    image={Deborah}
  />,
  <TeamCard
    key={3}
    name="Dorcas Adewunmi"
    role="Specialist Project Ninja"
    image={Deborah}
  />,
  <TeamCard
    key={4}
    name="Daniel Adewunmi"
    role="Director of Wordplay and Punnery"
    image={Deborah}
  />,
];
const TeamSection = () => {
  return (
    <div style={{ paddingLeft: 18 }}>
      <h1 style={{ paddingBottom: 54, textAlign: "center" }}>
        Meet our Amazing Team at <span style={gradientStyle}>YPIT</span>
      </h1>
      <Carousel components={card} width={409} mobileWidth={270} />
    </div>
  );
};

export default TeamSection;
