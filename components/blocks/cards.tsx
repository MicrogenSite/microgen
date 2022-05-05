import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Buttons } from "../buttons";
import { CardGrid } from "../card-grid";

const Card = ({ data, index, cardstyle, parentField = ""  }) => {
  const wrapClasses =  data.link && data.buttonLabel ? 'pb-20' : '';
  const backgroundClasses = {
    solid: `${cardstyle?.fillStyles}`,
    transparent: `${cardstyle?.fillStyles} opacity-70`,
    fadeH: `${cardstyle?.fillStyles}`,
  }

  return (
    <div className={`flex flex-col relative sm:mb-6 ${cardstyle?.borderStyles}`} data-tinafield={`${parentField}.${index}`}>
      <div>
        {data.image && (
          <img
            alt={data.image.alt || data.headline}
            src={data.image.src}
            className={`w-full ${cardstyle?.imageStyles}`}
            data-tinafield={`${parentField}.${index}.image`}
          />
        )}
      </div>
      <div
        className={` ${wrapClasses} relative flex-1 text-left border-box ${cardstyle?.padding}`}
      >
        <div className={`${backgroundClasses[cardstyle?.type]} absolute inset-0 -z-1`} />
        {data.label && (
          <p className={cardstyle?.labelStyles} data-tinafield={`${parentField}.${index}.label`}>{data.label}</p>
        )}
        {data.headline && (
          <h3 className={cardstyle?.headlineStyles} data-tinafield={`${parentField}.${index}.headline`}>{data.headline}</h3>
        )}
        {data.subhead && (
          <h4 className={cardstyle?.subheadStyles} data-tinafield={`${parentField}.${index}.subhead`}>{data.subhead}</h4>
        )}
        {data.text && (
          <div className={`markdown ${cardstyle?.textStyles}`} data-tinafield={`${parentField}.${index}.text`}>
            <TinaMarkdown content={data.text} />
          </div>
        )}
        {data.link && data.buttonLabel && (
          <Buttons buttons={[{
            link: data.link,
            label: data.buttonLabel,
            type: cardstyle?.buttonType
          }]} className="absolute bottom-4"  data-tinafield={`${parentField}.${index}.link`} />
        )}

      </div>
      {data.link && !data.buttonLabel && (
        <a href={data.link} className="absolute inset-0 z-20" data-tinafield={`${parentField}.${index}.link.0`} />
      )}
    </div>
  );
};

export const Cards = ({ data, parentField = "" }) => {
  return (
    <CardGrid data={data} parentField={parentField} children={(
      data.items &&
        data.items.map(function (block, index) {
          return <Card key={index} index={index} data={block} cardstyle={data.cardStyle} parentField={`${parentField}.items`} />;
        })
    )}/>
  );
};
