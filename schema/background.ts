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
            { label: "None", value: "none" },
            { label: "Scroll Based", value: "scroll" },
          ],
        },
        {
          label: "Duration in Pixels or Percentage",
          name: "duration",
          type: "string",
        },
        {
          label: "Scroll Offset",
          name: "scrollOffset",
          type: "string",
        },
        {
          label: "Start Vertical Offset",
          name: "startOffsetY",
          type: "string",
        },
        {
          label: "Start Horizontal Offset",
          name: "startOffsetX",
          type: "string",
        },
        {
          label: "Start Opacity",
          name: "startOpacity",
          ui: {
            component: "select",
          },
          type: "string",
          options: [
            { label: "0%", value: "0" },
            { label: "10%", value: "0.1" },
            { label: "20%", value: "0.2" },
            { label: "30%", value: "0.3" },
            { label: "40%", value: "0.4" },
            { label: "50%", value: "0.5" },
            { label: "60%", value: "0.6" },
            { label: "70%", value: "0.7" },
            { label: "80%", value: "0.8" },
            { label: "90%", value: "0.9" },
            { label: "100%", value: "1" },
          ],
        },
        {
          label: "Start Scale",
          name: "startScale",
          type: "string",
        },
        {
          label: "Start Rotation",
          name: "startRotation",
          type: "string",
        },
        {
          label: "End Vertical Offset",
          name: "endOffsetY",
          type: "string",
        },
        {
          label: "End Horizontal Offset",
          name: "endOffsetX",
          type: "string",
        },
        {
          label: "End Opacity",
          name: "endOpacity",
          ui: {
            component: "select",
          },
          type: "string",
          options: [
            { label: "0%", value: "0" },
            { label: "10%", value: "0.1" },
            { label: "20%", value: "0.2" },
            { label: "30%", value: "0.3" },
            { label: "40%", value: "0.4" },
            { label: "50%", value: "0.5" },
            { label: "60%", value: "0.6" },
            { label: "70%", value: "0.7" },
            { label: "80%", value: "0.8" },
            { label: "90%", value: "0.9" },
            { label: "100%", value: "1" },
          ],
        },
        {
          label: "End Scale",
          name: "endScale",
          type: "string",
        },
        {
          label: "End Rotation",
          name: "endRotation",
          type: "string",
        },
      ],
    },
  ],
}
