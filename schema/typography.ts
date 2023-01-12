export const typographySchema = [
  {
    label: "Typography",
    name: "typographyTitle",
    type: "string",
    ui: {
      component: "ruledTitle",
    },
  },
  {
    type: "string",
    label: "Label",
    name: "labelStyles",
    ui: {
      component: "typeControl"
    }
  },
  {
    type: "string",
    label: "Headline",
    name: "headlineStyles",
    ui: {
      component: "typeControl"
    }
  },
  {
    type: "string",
    label: "Subhead",
    name: "subheadStyles",
    ui: {
      component: "typeControl"
    }
  },
  {
    type: "string",
    label: "Text",
    name: "textStyles",
    ui: {
      component: "typeControl"
    }
  }
]
