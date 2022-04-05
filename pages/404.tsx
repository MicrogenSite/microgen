import { getStaticPropsForTina } from "tinacms";
import { Feature } from "../components/blocks/feature";
import { AsyncReturnType } from "./[filename]";

export default function FourOhFour(
  props: AsyncReturnType<typeof getStaticProps>["props"]
) {
  return (
    <Feature
      data={{
        color: "default",
        headline: "404 – Page Not Found",
        text: "Page not found",
        buttons: [
          {
            label: "Return Home",
            type: "button",
            icon: false,
            link: "/",
          },
        ],
      }}
    />
  );
}

export const getStaticProps = async () => {
  const tinaProps = await getStaticPropsForTina({
    query: `#graphql
      query PageQuery {
        getGlobalDocument(relativePath: "index.json") {
          data {
            siteUrl
            favicon
            gtmId
            redirects {
              from
              to
            }
            colors {
              primary
              accent1
              accent2
              accent3
              accent4
              white
              grayLight
              gray
              grayDark
              black
            }
            logo {
              logoType
              logoTypeStyle
              image
              imageWidth
              imageHeight
              imageMargin
            }
            nav {
              navItems {
                link
                label
              }
              navAlignment
              navTypeStyle
              navBackgroundColor
              padding
            }
          }
        }
      }
    `,
    variables: {},
  });

  return {
    props: {
      ...tinaProps,
    },
  };
};
