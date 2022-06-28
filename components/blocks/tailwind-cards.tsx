import * as React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Buttons } from "../buttons";
import { isString } from "../../helpers/utilities";
import { Section } from "../section";

const linkTarget = (link) => {
  const isExternalLink = isString(link) && link.charAt(0) !== '#'
  return isExternalLink ? '_blank' : ''
}


const Card = ({ data, index, tw, parentField = ""  }) => {
  return (
    <div className={tw.card} data-tinafield={`${parentField}.${index}`}>
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
        <div className={`markdown ${tw.content}`}>
          {data.label &&<h4 className={tw.cardLabel} data-tinafield={`${parentField}.${index}.label`}>{data.label}</h4>}
          {data.headline && <h2 className={tw.cardHeadline} data-tinafield={`${parentField}.${index}.headline`}>{data.headline}</h2>}
          {data.subhead && <h3 className={tw.cardSubhead} data-tinafield={`${parentField}.${index}.subhead`}>{data.subhead}</h3>}
          {data.text?.children && (
            <div className={tw.cardText} data-tinafield={`${parentField}.${index}.text`}>
              <TinaMarkdown content={data.text} />
            </div>
          )}
        </div>
        {data.link && data.buttonLabel && (
          <div className={tw.cardButtons}>
            <a
              className={tw.cardButton}
              href={data.link}
              target={linkTarget(data.link)}
              key={index}
              data-tinafield={`${parentField}.${index}.buttonLabel`}
            >
              { data.buttonLabel }
            </a>
          </div>
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
            <div className={tw.buttons}>
              {data.buttons &&
                data.buttons.map(function (button, index) {
                  const element = (
                      <a
                        className={tw.button}
                        href={button.link}
                        target={linkTarget(button.link)}
                        key={index}
                        data-tinafield={`${parentField}.buttons.${index}`}
                      >
                        { button.label }
                      </a>
                    );
                  return element;
                })}
            </div>
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
