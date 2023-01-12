export const imageSchema = {
  label: "Image",
  name: "image",
  type: "object",
  fields: [
    {
      label: "Image Source",
      name: "src",
      type: "image",
      ui: {
        clearable: true,
      }
    },
    {
      name: "alt",
      label: "Alt Text",
      type: "string",
    }
  ],
}
