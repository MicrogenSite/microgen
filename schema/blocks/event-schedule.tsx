import { backgroundSchema } from "../background"
import { navigationLabelSchema } from "../navigation-label";

export const eventScheduleBlockSchema: any = {
  label: "Event Schedule",
  name: "eventSchedule",
  ui: {
    defaultItem: {
      scheduleStartDate: new Date().toISOString(),
      scheduleEndDate: new Date().toISOString(),
      style: {
        width: "siteWidth",
        labelFill: "bg-black",
        labelBorder: "",
        labelPadding: "pt-4 pb-4 pr-4 pl-4",
        label: "text-white",
        fill: "bg-gray-light",
        border: "",
        padding: "pt-4 pb-4 pr-4 pl-4",
        headline: "text-black",
        text: "text-black",
      },
      modalStyle: {
        fill: "bg-white",
        border: "",
        padding: "pt-5 pb-5 pr-5 pl-5",
        label: "text-black",
        headline: "text-black",
        text: "text-black",
        timelineLabel: "text-black",
        timelineHeadline: "text-black",
        timelineText: "text-black",
        modalButtonStyle: "primary",
      },
    }
  },
  fields: [
    {
      label: "Calendar Style",
      name: "style",
      type: "object",
      fields: [
        {
          label: 'Calendar Width',
          name: 'width',
          type: 'string',
          list: false,
          options: [
            {
              value: 'siteWidth',
              label: 'Site Width',
            },
            {
              value: 'windowWidth',
              label: 'Window Width',
            },
          ],
        },
        {
          label: "Label Styles",
          name: "labelStyles",
          type: "string",
          ui: {
            component: "ruledTitle",
          },
        },
        {
          type: "string",
          label: "Background",
          name: "labelFill",
          ui: {
            component: "fillControl"
          }
        },
        {
          type: "string",
          label: "Border",
          name: "labelBorder",
          ui: {
            component: "borderControl"
          }
        },
        {
          label: "Padding",
          name: "labelPadding",
          type: "string",
          ui: {
            component: "paddingControl",
          }
        },
        {
          type: "string",
          label: "Label",
          name: "label",
          ui: {
            component: "typeControl"
          }
        },
        {
          label: "Day Styles",
          name: "dayStyles",
          type: "string",
          ui: {
            component: "ruledTitle",
          },
        },
        {
          type: "string",
          label: "Background",
          name: "fill",
          ui: {
            component: "fillControl"
          }
        },
        {
          type: "string",
          label: "Border",
          name: "border",
          ui: {
            component: "borderControl"
          }
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
          type: "string",
          label: "Headline",
          name: "headline",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Text",
          name: "text",
          ui: {
            component: "typeControl"
          }
        },
      ],
    },
    {
      label: "Modal Style",
      name: "modalStyle",
      type: "object",
      fields: [
        {
          type: "string",
          label: "Background",
          name: "fill",
          ui: {
            component: "fillControl"
          }
        },
        {
          type: "string",
          label: "Border",
          name: "border",
          ui: {
            component: "borderControl"
          }
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
          type: "string",
          label: "Headline",
          name: "headline",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Details",
          name: "label",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Text",
          name: "text",
          ui: {
            component: "typeControl"
          }
        },
        {
          label: "Schedule",
          name: "title",
          type: "string",
          ui: {
            component: "ruledTitle",
          },
        },
        {
          type: "string",
          label: "Schedule Headline",
          name: "timeslotHeadline",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Schedule Label",
          name: "timeslotLabel",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Schedule Text",
          name: "timeslotText",
          ui: {
            component: "typeControl"
          }
        },
        {
          label: "",
          name: "modalButton",
          type: "string",
          ui: {
            component: "ruledTitle",
          },
        },
        {
          type: "string",
          label: "Button Style",
          name: "modalButtonStyle",
          ui: {
            component: "buttonControl",
          },
        },
      ],
    },
    backgroundSchema,
    {
      label: "Schedule Start Date",
      name: "scheduleStartDate",
      description: "The first day of the schedule",
      type: "datetime",
      required: true,
    },
    {
      label: "Schedule End Date",
      name: "scheduleEndDate",
      description: "The last day of the schedule",
      type: "datetime",
      required: true,
    },
    navigationLabelSchema,
  ],
};