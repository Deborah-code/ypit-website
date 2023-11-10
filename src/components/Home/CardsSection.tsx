import { CSSProperties } from "react";
import connect from "~/assets/home/connect.png";
import network from "~/assets/home/network.png";
import { gradientStyle } from "~/styles/Theme";
import Card from "./Card";

const CardsSection = () => {
  const containerStyle: CSSProperties = {
    display: "flex",
    gap: 28,
    maxWidth: 1220,
    margin: "auto",
    paddingBottom: 32,
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
        <div style={{ maxWidth: "32%" }}>
          <Card
            heading="Network"
            body="We're trying to take the awkwardness out of professional networking. YPIT's Series Events are our way of having fun with the community"
            image={network}
          />
        </div>
        <Card
          heading="Connect and Learn"
          body="Join YPIT community members at one of our in-person events or online talks and webinars. Whether we're sharing insights on the tech ecosystem or just hanging out with similar minds in the same space, you'll be sure to find meaningful connections and learning opportunities at YPIT"
          image={connect}
        />
      </div>
      <div style={containerStyle}>
        <div style={{ maxWidth: "45%" }}>
          <Card
            heading="Grow"
            body="YPIT's mentorship programs, monthly newsletters, and The Innovation Hub help us offer you a lot whether you're looking to expand your skillsets, industry-specific knowledge, or just become a better professional"
            image={network}
          />
        </div>
        <Card
          heading="Do work that has Impact"
          body="Join the YPIT Innovation Hub to get your hands dirty helping to run the community and serve it's growing members. The work we do serves real people and is useful for more than just resume building"
          image={connect}
        />
      </div>
    </div>
  );
};

export default CardsSection;
