import { CSSProperties } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import { gradientStyle } from "~/styles/Theme";
import Image from "next/image";
import joinUs from "~/assets/home/ypitJoinUs.png";
import Card from "/Users/mac/Documents/Git_repository/ypit/ypit-website/src/components/Home/Card.tsx";
import { purpleLight } from "~/styles/Theme";
import whatsapp from "~/assets/home/whatsappLogo.png";
import slack from "~/assets/home/slackLogo.png";
import Button from "/Users/mac/Documents/Git_repository/ypit/ypit-website/src/components/Commons/Button.tsx";


export default function AboutUs() {
        const windowWidth = useWindowSize().width!;
      
        const joinUsText: CSSProperties = {
          textAlign: "center",
          fontFamily: "Neue Helvetica",
          fontSize: 40,
          fontStyle: "normal",
          fontWeight: 450,
          lineHeight: "normal",
          paddingTop: 55,
        };
        const joinUsParagragh: CSSProperties = {
          textAlign: "center",
          paddingTop: 16,
          fontFamily: "Neue Helvetica",
          fontSize: 24,
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "normal",
        //   maxWidth: 260,
          maxHeight: 62,
          display: "block",
          };
          const joinUsImage: CSSProperties = {
            textAlign: "center",
            height: "437px",
            width: "1147px",
            backgroundColor: purpleLight,
            borderRadius: 23,
            paddingTop: 24,
            paddingLeft: 22,
            paddingBottom: 24,
            paddingRight: 22,
            color: "black",
            marginTop: 20,
            };
            const containerStyle: CSSProperties = {
                // textAlign: "center",
                height: "70px",
                width: "607px",
                backgroundColor: purpleLight,
                borderRadius: 100,
                paddingTop: 24,
                paddingLeft: 22,
                paddingBottom: 24,
                paddingRight: 22,
                color: "black",
                marginTop: 20,
                display: "flex",
                justifyContent: "center",
                // flexDirection: "column",
                alignItems: "center",
                marginLeft: 390,
                gap: 50
                };

                const slackStyle: CSSProperties = {
                    alignItems: "left",
                    justifyContent: "left",
                    };
    return (
      <>
        <main>
          <div><h1 style={joinUsText}>Join our <span style={gradientStyle}>community</span></h1></div>
          <div ><p style={joinUsParagragh}><span >Join over +1000 young tech professionals ready to grow and learn</span></p></div>
          <div style={{maxWidth: 1196, textAlign: "center", paddingLeft: 145, paddingTop: 15, paddingBottom: 36}}><Image src={joinUs} style= {joinUsImage}/></div>
          <div><div style={containerStyle}>
          <Image src={slack} style= {slackStyle}/>
          <p style={{fontFamily: "Neue Helvetica", fontSize: 24, fontWeight: 400, lineHeight: "Normal", fontStyle: "normal"}}>Slack community</p>
          <Button text="Join us now" />
            </div></div>
          <div style={{paddingBottom: 36}}><div style={containerStyle}>
          <Image src={whatsapp} style= {slackStyle}/>
          <p style={{fontFamily: "Neue Helvetica", fontSize: 24, fontWeight: 400, lineHeight: "Normal", fontStyle: "normal"}}>WhatsApp community</p>
          <Button text="Join us now" />
            </div></div>
        </main>
      </>
    );
  }
