export const backgroundSchema = {
  label: "Background",
  name: "background",
  type: "object",
  fields: [
    {
      type: "string",
      label: "Background",
      name: "fillStyles",
      ui: {
        component: "fillControl"
      }
    },
    {
      type: "string",
      label: "Wrap Background",
      name: "wrapFillStyles",
      ui: {
        component: "fillControl"
      }
    },
    {
      label: "Image",
      name: "src",
      type: "image",
      ui: {
        clearable: true,
      }
    },
    {
      label: "Image Style",
      name: "style",
      type: "string",
      ui: {
        component: "select",
      },
      options: [
        { label: "Cover", value: "bg-cover" },
        { label: "Tile", value: "bg-repeat" },
      ],
    },
    {
      label: "Image Position",
      name: "position",
      type: "string",
      ui: {
        component: "select",
      },
      options: [
        { label: "Center", value: "bg-center" },
        { label: "Top", value: "bg-top" },
        { label: "Right Top", value: "bg-right-top" },
        { label: "Right", value: "bg-right" },
        { label: "Right Bottom", value: "bg-right-bottom" },
        { label: "Bottom", value: "bg-bottom" },
        { label: "Left Bottom", value: "bg-left-bottom" },
        { label: "Left", value: "bg-left" },
        { label: "Left Top", value: "bg-left-top" },
      ],
    },
    {
      label: "",
      name: "typographyTitle",
      type: "string",
      ui: {
        component: "ruledTitle",
      },
    },
    {
      label: 'Ornaments',
      name: 'ornaments',
      type: "object",
      list: true,
      ui: {
        defaultItem: {
          scrollOffset: -500,
          duration: 1200,
        }
      },
      itemProps: (item) => ({
        label: item.src?.replace('/uploads/', ''),
      }),
      fields: [
        {
          label: " ",
          name: "src",
          type: "image",
          ui: {
            clearable: true,
          }
        },
        {
          label: "Size & Alignment",
          name: "ornamentControl",
          type: "string",
          ui: {
            component: "ornamentControl",
          },
        },
        {
          label: "Transform",
          name: "transform",
          type: "string",
          ui: {
            component: "transformControl",
          },
        },
        {
          label: "Animation",
          name: "animationTitle",
          type: "string",
          ui: {
            component: "ruledTitle",
          },
        },
        {
          label: "Animation Type",
          name: "animationType",
          ui: {
            component: "select",
          },
          type: "string",
          options: [
            { label: "Scroll Based", value: "scroll" },
          ],
        },
        {
          label: "Duration in Pixels or Percentage",
          name: "duration",
          type: "string",
        },
        {
          label: "Scroll Trigger Offset",
          description: "Animation begins when the middle of the element hits the top of the viewport. Offset should be a negative value.",
          name: "scrollOffset",
          type: "string",
        },
        {
          label: "Animate To",
          name: "endTransform",
          type: "string",
          ui: {
            component: "transformDesktopControl",
          },
        },
      ],
    },
  ],
}
