import { colorOptions, roundedOptions } from "../options";

export const themeCollectionSchema: any = {
  label: "Themes",
  name: "theme",
  path: "content/themes",
  format: "md",
  ui: {
    defaultItem: {
      name: "New Theme",
      desktopWidth: "1000",
      colors: {
        primary: "#0090FF",
        accent1: "#0E4465",
        accent2: "#1BBF6E",
        accent3: "#8a309b",
        accent4: "#a3154c",
        white: "#FFFFFF",
        grayLight: "#E8E8EF",
        gray: "#B0B0BF",
        grayDark: "#4F4C56",
        black: "#000000",
      },
      typo: [
        {
          label: "Headline",
          typography: '{"family":"Arial","size":"24","lineHeight":"36","letterSpacing":"0","margin":"36","smSize":"24","smLineHeight":"36","smLetterSpacing":"0","smMargin":"36"}',
        },
        {
          label: "Headline Small",
          typography: '{"family":"Arial","size":"48","lineHeight":"48","letterSpacing":"0","margin":"48","smSize":"48","smLineHeight":"48","smLetterSpacing":"0","smMargin":"48"}',
        },
        {
          label: "Copy",
          typography: '{"family":"Arial","size":"16","lineHeight":"30","letterSpacing":"0","margin":"30","smSize":"16","smLineHeight":"30","smLetterSpacing":"0","smMargin":"30"}',
        },
        {
          label: "Copy Small",
          typography: '{"family":"Arial","size":"13","lineHeight":"24","letterSpacing":"0","margin":"24","smSize":"13","smLineHeight":"24","smLetterSpacing":"0","smMargin":"24"}',
        },
      ],
      buttons: [
        {
          label: "Primary",
          fill: "bg-primary opacity-100",
          typography: '{"color":"white","family":"Arial","size":"18","lineHeight":"18","letterSpacing":"0","smSize":"18","smLineHeight":"18","smLetterSpacing":"0"}',
          padding: "pt-2.5 pb-2.5 pr-9 pl-9",
          primaryBorder: "border-primary border-0",
          primaryRounded: "rounded",
        },
      ],
      linkColor: "primary",
      filename: "new-theme",
    },
    router: ({ document }) => {
      return `/themes/${document._sys.filename}`;
    },
  },
  fields: [
    {
      label: "Name",
      name: "name",
      type: "string",
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
        component: "itemListField",
        defaultItem: {
          label: "Button",
          fill: "bg-primary opacity-100",
          typography: '{"color":"white","family":"Arial","size":"18","lineHeight":"18","letterSpacing":"0","smSize":"18","smLineHeight":"18","smLetterSpacing":"0"}',
          padding: "pt-2.5 pb-2.5 pr-9 pl-9",
          primaryBorder: "border-primary border-0",
        },
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