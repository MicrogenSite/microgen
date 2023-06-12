import * as React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import { linkTarget } from "../../helpers/utilities";
import { Section } from "../section";

export const TailwindFeature = ({ data, parentField = ""  }) => {
  const tw = data.tailwind || {};
  const headlineElement = () => {
    if (data?.headline && parentField === 'blocks.0') {
      return (
        <>
          <h1 className={tw.headline} data-tina-field={tinaField(data, "headline")}>{data.headline}</h1> 
          {data.subhead && <h2 className={tw.subhead} data-tina-field={tinaField(data, "subhead")}>{data.subhead}</h2>}
        </>
      )
    } else if (data?.headline) {
      return (
        <>
          <h2 className={tw.headline} data-tinafield={`${parentField}.headline`}>{data.headline}</h2>
          {data.subhead && <h3 className={tw.subhead} data-tina-field={tinaField(data, "subhead")}>{data.subhead}</h3>}
        </>
      )
    }
  }

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
            {data.label &&<h4 className={tw.label} data-tina-field={tinaField(data, "label")}>{data.label}</h4>}
            {headlineElement()}
            {data.body?.children && (
              <div className={tw.text} data-tina-field={tinaField(data, "body")}>
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
