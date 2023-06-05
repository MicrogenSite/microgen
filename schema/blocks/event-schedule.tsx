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
        calendarFill: "bg-white",
        calendarHover: "bg-gray-light",
        calendarBorder: "",
        calendarPadding: "pt-4 pb4 pr-4 pl-4",
        calendarLabel: "text-black",
        calendarHeadline: "text-black",
        calendarText: "text-black",
        modalFill: "bg-white",
        modalBorder: "",
        modalPadding: "pt10 pb-10 pr-10 pl-10",
        modalLabel: "text-black",
        modalHeadline: "text-black",
        modalText: "text-black",
        timelineLabel: "text-black",
        timelineHeadline: "text-black",
        timelineText: "text-black",
      },
    }
  },
  fields: [
    {
      label: "Section Style",
      name: "style",
      type: "object",
      fields: [
        {
          type: "string",
          label: "Background",
          name: "calendarFill",
          ui: {
            component: "fillControl"
          }
        },
        {
          type: "string",
          label: "Hover",
          name: "calendarHover",
          ui: {
            component: "fillControl"
          }
        },
        {
          type: "string",
          label: "Border",
          name: "calendarBorder",
          ui: {
            component: "borderControl"
          }
        },
        {
          label: "Padding",
          name: "calendarPadding",
          type: "string",
          ui: {
            component: "paddingControl",
          }
        },
        {
          type: "string",
          label: "Label",
          name: "calendarLabel",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Headline",
          name: "calendarHeadline",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Text",
          name: "calendarText",
          ui: {
            component: "typeControl"
          }
        },

        {
          label: "Modal",
          name: "modalTitle",
          type: "string",
          ui: {
            component: "ruledTitle",
          },
        },
        {
          type: "string",
          label: "Background",
          name: "modalFill",
          ui: {
            component: "fillControl"
          }
        },
        {
          type: "string",
          label: "Border",
          name: "modalBorder",
          ui: {
            component: "borderControl"
          }
        },
        {
          label: "Padding",
          name: "modalPadding",
          type: "string",
          ui: {
            component: "paddingControl",
          }
        },
        {
          type: "string",
          label: "Label",
          name: "modalLabel",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Headline",
          name: "modalHeadline",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Text",
          name: "modalText",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Timeslot Label",
          name: "timeslotLabel",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Timeslot Headline",
          name: "timeslotHeadline",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Timeslot Text",
          name: "timeslotText",
          ui: {
            component: "typeControl"
          }
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
    {
      label: "Add Event Link",
      name: "addEventLink",
      description: "A link to a form or repo to add an event to the schedule",
      type: "string",
    },
    navigationLabelSchema,
  ],
};