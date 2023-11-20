import { useWindowSize } from "@uidotdev/usehooks";
import { CSSProperties } from "react";
import { purpleLight } from "~/styles/Theme";
import Card from "./Card";

import network from "~/assets/home/card1.png";
import connect from "~/assets/home/card2.png";
import grow from "~/assets/home/card3.png";
import work from "~/assets/home/card4.png";
import { gradientStyle } from "~/styles/Theme";

const CardsSection: React.FC = () => {
  const windowWidth: number = useWindowSize().width!;

  const containerStyle: CSSProperties = {
    display: windowWidth > 767 ? "flex" : "block",
    gap: 28,
    maxWidth: 1220,
    margin: "auto",
    paddingBottom: windowWidth > 767 ? 32 : 0,
    paddingLeft: 18,
    paddingRight: 18,
  };

  const headingStyle: CSSProperties = {
    fontSize: 56,
    fontWeight: "normal",
    paddingBottom: 54,
  };

  return (
    <div>
      <p style={headingStyle}>
        Why join <span style={gradientStyle}>YPIT?</span>
      </p>
      <div style={containerStyle}>
        <div style={{ maxWidth: windowWidth > 767 ? "32%" : "100%" }}>
          <Card
            heading="Network"
            body="We're trying to take the awkwardness out of professional networking. YPIT's Series Events are our way of having fun with the community"
            image={network}
            color={purpleLight}
          />
        </div>
        <Card
          heading="Connect and Learn"
          body="Join YPIT community members at one of our in-person events or online talks and webinars. Whether we're sharing insights on the tech ecosystem or just hanging out with similar minds in the same space, you'll be sure to find meaningful connections and learning opportunities at YPIT"
          image={connect}
          color="rgba(136, 136, 136, 0.15)"
        />
      </div>
      <div style={containerStyle}>
        <div style={{ maxWidth: windowWidth > 767 ? "45%" : "100%" }}>
          <Card
            heading="Grow"
            body="YPIT's mentorship programs, monthly newsletters, and The Innovation Hub help us offer you a lot whether you're looking to expand your skillsets, industry-specific knowledge, or just become a better professional"
            image={grow}
            color="rgba(255, 216, 85, 0.15)"
          />
        </div>
        <Card
          heading="Do work that has Impact"
          body="Join the YPIT Innovation Hub to get your hands dirty helping to run the community and serve it's growing members. The work we do serves real people and is useful for more than just resume building"
          image={work}
          color="rgba(49, 255, 142, 0.15)"
        />
      </div>
    </div>
  );
};

export default CardsSection;
