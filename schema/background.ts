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
      itemProps: (item) => ({
        label: item.src?.replace('/uploads/', ''),
      }),
      fields: [
        {
          label: "Image",
          name: "src",
          type: "image",
          ui: {
            clearable: true,
          }
        },
        {
          label: "Alignment",
          name: "alignment",
          ui: {
            component: "select",
          },
          type: "string",
          options: [
            { label: "Center", value: "center" },
            { label: "Top", value: "top" },
            { label: "Right Top", value: "top-right" },
            { label: "Right", value: "right" },
            { label: "Right Bottom", value: "bottom-right" },
            { label: "Bottom", value: "bottom" },
            { label: "Left Bottom", value: "bottom-left" },
            { label: "Left", value: "left" },
            { label: "Left Top", value: "top-left" },
          ],
        },
        {
          label: "Width",
          name: "width",
          type: "string",
        },
        {
          label: "Height",
          name: "height",
          type: "string",
        },
        {
          label: "Horizontal Offset",
          name: "xOffset",
          type: "string",
        },
        {
          label: "Vertical Offset",
          name: "yOffset",
          type: "string",
        },
      ],
    },
  ],
}
