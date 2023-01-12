import { colorOptions, roundedOptions } from "../options";

export const themeCollectionSchema: any = {
  label: "Themes",
  name: "theme",
  path: "content/themes",
  format: "md",
  fields: [
    {
      label: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      type: "string",
      label: "Desktop Width",
      name: "desktopWidth",
    },
    {
      type: "object",
      label: "Colors",
      name: "colors",
      fields: [
        {
          type: "string",
          label: "Primary",
          name: "primary",
          ui: {
            component: "color",
          },
        },
        {
          type: "string",
          label: "Accent 1",
          name: "accent1",
          ui: {
            component: "color",
          },
        },
        {
          type: "string",
          label: "Accent 2",
          name: "accent2",
          ui: {
            component: "color",
          },
        },
        {
          type: "string",
          label: "Accent 3",
          name: "accent3",
          ui: {
            component: "color",
          },
        },
        {
          type: "string",
          label: "Accent 4",
          name: "accent4",
          ui: {
            component: "color",
          },
        },
        {
          type: "string",
          label: "White",
          name: "white",
          ui: {
            component: "color",
          },
        },
        {
          type: "string",
          label: "Gray Light",
          name: "grayLight",
          ui: {
            component: "color",
          },
        },
        {
          type: "string",
          label: "Gray",
          name: "gray",
          ui: {
            component: "color",
          },
        },
        {
          type: "string",
          label: "Gray Dark",
          name: "grayDark",
          ui: {
            component: "color",
          },
        },
        {
          type: "string",
          label: "Black",
          name: "black",
          ui: {
            component: "color",
          },
        },
      ]
    },
    {
      type: "object",
      label: "Typography",
      name: "typo",
      list: true,
      ui: {
        component: "itemListField"
      },
      fields: [
        {
          label: "Label",
          name: "label",
          type: "string",
        },
        {
          type: "string",
          label: "Settings",
          name: "typography",
          ui: {
            component: "typographyControl",
          },
        },
      ]
    },
    {
      type: "object",
      label: "Buttons",
      name: "buttons",
      list: true,
      ui: {
        component: "itemListField"
      },
      fields: [
        {
          label: "Label",
          name: "label",
          type: "string",
        },
        {
          label: "Fill",
          name: "fill",
          type: "string",
          ui: {
            component: "fillControl",
          },
        },
        {
          label: "Typography",
          name: "typography",
          type: "string",
          ui: {
            component: "buttonTypographyControl",
          },
        },
        {
          label: "Padding",
          name: "padding",
          type: "string",
          ui: {
            component: "paddingControl",
          }
        },
        {
          label: "Border",
          name: "primaryBorder",
          type: "string",
          ui: {
            component: "borderControl",
          },
        },
        {
          label: "Rounded",
          name: "primaryRounded",
          type: "string",
          ui: {
            component: "selectField",
          },
          options: roundedOptions,
        },
      ]
    },
    {
      type: "string",
      label: "Link Color",
      name: "linkColor",
      ui: {
        component: "colorControl",
      },
      options: colorOptions,
    },
  ]
}