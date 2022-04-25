import * as React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Buttons } from "../buttons";
import { Section } from "../section";

const Card = ({ data, index, tw, parentField = ""  }) => {
  return (
    <div className={tw.card}>
      <div className={tw.cardImageWrap}>
        {data.image && (
          <img
            alt={data.image.alt || data.headline}
            src={data.image.src}
            className={tw.cardImage}
            data-tinafield={`${parentField}.${index}.image`}
          />
        )}
      </div>
      <div className={tw.cardContentWrap}>
        <div className={tw.cardContent}>
          {data.label &&<h4 className={tw.cardLabel} data-tinafield={`${parentField}.label`}>{data.label}</h4>}
          {data.headline && <h2 className={tw.cardHeadline} data-tinafield={`${parentField}.headline`}>{data.headline}</h2>}
          {data.subhead && <h3 className={tw.cardSubhead} data-tinafield={`${parentField}.subhead`}>{data.subhead}</h3>}
          {data.body?.children && (
            <div className={tw.cardText} data-tinafield={`${parentField}.body`}>
              <TinaMarkdown content={data.body} />
            </div>
          )}
        </div>
        {data.link && data.buttonLabel && (
          <Buttons buttons={[{
            link: data.link,
            label: data.buttonLabel,
          }]} className={tw.cardButtons} data-tinafield={`${parentField}.${index}.link`} />
        )}
      </div>
    </div>
  )
}


export const TailwindCards = ({ data, parentField = "" }) => {
  const tw = data.tailwind || {};
  return (
    <Section className={tw.section} background={data.background} navigationLabel={data.navigationLabel}>
      <div className={tw.background}></div>
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
      <div className={tw.cardWrap}>
        {data.items && (
          data.items.map(function (block, index) {
            return <Card
              key={index}
              index={index}
              data={block}
              tw={data.tailwind || {}}
              parentField={`${parentField}.items`}
            />
          })
        )}
      </div>
    </Section>
  );
};
