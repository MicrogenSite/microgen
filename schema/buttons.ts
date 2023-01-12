export const buttonsSchema = {
  label: "Buttons",
  name: "buttons",
  type: "object",
  list: true,
  fields: [
    {
      label: "Label",
      name: "label",
      type: "string",
    },
    {
      label: "Link",
      name: "link",
      type: "string",
    },
    {
      type: "string",
      label: "Button Style",
      name: "buttonStyle",
      ui: {
        component: "buttonControl",
      },
    },
    {
      label: "Fathom Tracking ID",
      name: "fathomId",
      type: "string",
    },
  ],
}
