import { client } from "../../.tina/__generated__/client";
import { useTina } from "tinacms/dist/react";
import { ThemeLayout } from "../../components/layout/theme-layout";

function slugify(string: string) {
  return string.replace(" ", "-").toLowerCase()
}

const Typography = ({ item, index, parentField = "" }) => {
  const typography = JSON.parse(item.typography)
  let sample
  if (Number(typography.size) > 40) {
    sample = 'The quick brown fox jumps over the lazy dog'
  } else if (Number(typography.size) > 20) {
    sample = 'The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog'
  } else {
    sample = 'The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog'
  }

  return (
    <div className="flex items-center gap-10 mb-16">
      <div className="flex-none text-gray text-right uppercase w-40">
        <div style={{fontSize: "14px" }}>{item.label}</div>
        <div style={{fontSize: "12px" }}>{typography.family}</div>
        <div style={{fontSize: "12px" }}>{typography.size}px / {typography.lineHeight}px</div>
      </div>
      <div className=" w-full rounded overflow-hidden border-b border-gray-light">
        <h3 className={`mg-${slugify(item.label)}`}>{sample}</h3>
      </div>
    </div>
  )
}

// Use the props returned by get static props
export default function ThemePage(
  props: AsyncReturnType<typeof getStaticProps>["props"]
) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  if (data) {
    return (
      <ThemeLayout theme={data.theme}>
        <div className="mx-auto max-w-desktop-full w-full p-10 py-20">
          <div className="flex items-center gap-10 mb-10">
            <div className="flex-none text-gray text-right uppercase w-40">
              <div style={{fontSize: "14px" }}>Colors</div>
            </div>
            <div className="grid grid-cols-5 gap-4 w-full">
              <div className="bg-primary rounded" style={{paddingBottom: "100%"}}></div>
              <div className="bg-accent1 rounded" style={{paddingBottom: "100%"}}></div>
              <div className="bg-accent2 rounded" style={{paddingBottom: "100%"}}></div>
              <div className="bg-accent3 rounded" style={{paddingBottom: "100%"}}></div>
              <div className="bg-accent4 rounded" style={{paddingBottom: "100%"}}></div>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex-none text-gray text-right uppercase w-40">
              <div style={{fontSize: "14px" }}>Grays</div>
            </div>
            <div className="grid grid-cols-5 gap-4 w-full">
              <div className="border-2 border-gray-light bg-white rounded" style={{paddingBottom: "100%"}}></div>
              <div className="bg-gray-light rounded" style={{paddingBottom: "100%"}}></div>
              <div className="bg-gray rounded" style={{paddingBottom: "100%"}}></div>
              <div className="bg-gray-dark rounded" style={{paddingBottom: "100%"}}></div>
              <div className="bg-black rounded" style={{paddingBottom: "100%"}}></div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-desktop-full p-10">
          {data.theme.typo &&
            data.theme.typo.map(function (item, index) {
              return <Typography key={index} index={index} item={item} />;
            })
          }
        </div>
        <div className="mx-auto max-w-desktop-full w-full p-10">
          {data.theme.buttons &&
            data.theme.buttons.map(function (item, index) {
              return (
                <div className="flex items-center gap-10 mb-16">
                  <div className="flex-none text-gray text-right uppercase w-40">
                    <div style={{fontSize: "14px" }}>{item.label}</div>
                  </div>
                  <div className="w-full">
                    <a className={`btn-${slugify(item.label)}`} href="#">Do Nothing</a>
                  </div>
                </div>
              )
            })
          }
        </div>
      </ThemeLayout>
    );
  }
  return (
    <div>No data</div>
  );
}

export const getStaticProps = async ({ params }) => {
  const tinaProps = await client.queries.themeQuery({
    relativePath: `${params.filename}.md`,
  });
  return {
    props: {
      ...tinaProps,
    },
  };
};

/**
 * To build the blog post pages we just iterate through the list of
 * posts and provide their "filename" as part of the URL path
 *
 * So a blog post at "content/posts/hello.md" would
 * be viewable at http://localhost:3000/posts/hello
 */
export const getStaticPaths = async () => {
  const postsListData = await client.queries.postConnection();
  return {
    paths: postsListData.data.postConnection.edges.map((post) => ({
      params: { filename: post.node._sys.filename },
    })),
    fallback: "blocking",
  };
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;
