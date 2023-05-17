import { backgroundSchema } from "../background"
import { navigationLabelSchema } from "../navigation-label";

export const eventScheduleBlockSchema: any = {
  label: "Event Schedule",
  name: "eventSchedule",
  ui: {
    defaultItem: {
      scheduleStartDate: new Date().toISOString(),
      scheduleEndDate: new Date().toISOString(),
      background: {
        style: "bg-cover",
        position: "bg-center",
      },
    }
  },
  fields: [
    backgroundSchema,
    navigationLabelSchema,
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
  ],
};
