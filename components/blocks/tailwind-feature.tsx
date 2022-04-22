import * as React from "react";
import { lowerDash } from "../../helpers/utilities"
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Buttons } from "../buttons";

export const TailwindFeature = ({ data, parentField = ""  }) => {
  const tw = data.tailwind || {};
  return (
    <section className={tw.section} id={lowerDash(data.navigationLabel)}>
      <div className={tw.background}></div>
      <div className={tw.wrap}>
        <div className={tw.imageWrap}>
          {data.image?.src && (
            <img className={tw.image} alt={data.image?.alt} src={data.image?.src} data-tinafield={`${parentField}.image`} />
          )}
        </div>
        <div className={tw.contentWrap}>
          <div className={tw.content}>
            {data.label &&<h4 className={tw.label} data-tinafield={`${parentField}.label`}>{data.label}</h4>}
            {data.headline && <h2 className={tw.headline} data-tinafield={`${parentField}.headline`}>{data.headline}</h2>}
            {data.subhead && <h3 className={tw.subhead} data-tinafield={`${parentField}.subhead`}>{data.subhead}</h3>}
            {data.body?.children && (
              <div className={tw.text} data-tinafield={`${parentField}.body`}>
                <TinaMarkdown content={data.body} />
              </div>
            )}
            {data.buttons && (
              <Buttons
                buttons={data.buttons}
                className={tw.buttons}
                parentField={`${parentField}.buttons`}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
