import React, { CSSProperties } from 'react'


export const HeroSection = (props: any) => {
  const Gradient: CSSProperties = {
      background: "linear-gradient(91deg, #5100BF 14.44%, #FFD855 119.53%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
  };
  const GeneralText: CSSProperties = {
    color: "#171717",
    textAlign: "center",
    fontFamily: "Big Shoulders Display, sans-serif", 
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal", 
    textTransform: "capitalize",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  };
  const NextLine: CSSProperties = {
    color: "rgba(0, 0, 0, 0.70)",
    fontFamily: "Helvetica Neue",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  }
  return (
    <div style={GeneralText}>
      <h1>Creating A Space For Young People To <span style={Gradient}>Connect And Grow</span></h1>
      <div style={{columnGap: 0}}>
      <div><h3 style={NextLine}>A community of young people in tech connecting, and growing, with a mission to make an impact in nigeria and africa using technology</h3></div>
      </div>
    </div>
  )
}
