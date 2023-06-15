import * as React from "react";
import { Section } from "../section";

export const Video = ({ data }) => {
  const padding = data.padding

  return (
    <Section
      background={data.background}
      navigationLabel={data.navigationLabel}
    >
      <div className={`mx-auto max-w-desktop-full ${padding}`}>
        <div>{ JSON.stringify(data.style) }</div>
        <video width={data.videoWidth} height={data.videoHeight} className="rounded-lg mx-auto" autoPlay loop muted playsInline>
          <source src={`/uploads/${data.src}`} type="video/mp4" />
        </video>
      </div>
    </Section>
  );
};
