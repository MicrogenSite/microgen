import * as React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { isString } from "../../helpers/utilities";
import { Section } from "../section";

const linkTarget = (link) => {
  const isExternalLink = isString(link) && link.charAt(0) !== '#'
  return isExternalLink ? '_blank' : ''
}

export const TailwindFeature = ({ data, parentField = ""  }) => {
  const tw = data.tailwind || {};
  

  return (
    <Section className={tw.section} background={data.background} navigationLabel={data.navigationLabel}>
      <div className={tw.background}></div>
      <div className={tw.wrap}>
        <div className={tw.imageWrap}>
          {data.image?.src && (
            <img className={tw.image} alt={data.image?.alt} src={data.image?.src} data-tinafield={`${parentField}.image`} />
          )}
        </div>
        <div className={tw.contentWrap}>
          <div className={`markdown ${tw.content}`}>
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
      </div>
    </Section>
  );
};
