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
  return (
    <div style={{ position: "relative" }}>
      <Image
        src={image}
        alt={name}
        width={409}
        height={580}
        style={{ borderRadius: 20 }}
      />
      <div style={{ position: "absolute", bottom: 24, left: 24 }}>
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
    <div>
      <h1 style={{ paddingBottom: 54, textAlign: "center" }}>
        Meet our Amazing Team at <span style={gradientStyle}>YPIT</span>
      </h1>
      <Carousel components={card} width={409} mobileWidth={409} />
    </div>
  );
};

export default TeamSection;
