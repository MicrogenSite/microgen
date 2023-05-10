export const eventCollectionSchema: any = {
  label: "Events",
  name: "event",
  path: "content/events",
  format: "md",
  ui: {
    defaultItem: () => ({
      date: new Date().toISOString(),
    }),
  },
  fields: [
    {
      label: "Name",
      name: "name",
      type: "string",
      isTitle: true,
      required: true,
    },
    {
      label: "Description",
      name: "description",
      type: "rich-text",
    },
    {
      label: "Date",
      name: "date",
      type: "datetime",
      ui: {
        dateFormat: "MMMM DD YYYY",
      },
      required: true,
    },
    {
      label: "Days",
      name: "days",
      type: "number",
    },
    {
      label: "Times",
      name: "times",
      type: "string",
    },
    {
      type: "object",
      label: "Time Slots",
      name: "timeslots",
      description: "If your event needs multiple time slots, add them here. They will be displayed in the event modal.",
      list: true,
      ui: {
        component: "itemListField"
      },
      fields: [
        {
          label: "Time",
          name: "time",
          type: "string",
        },
        {
          label: "Speakers",
          name: "speakers",
          type: "string",
        },
        {
          label: "Name",
          name: "name",
          type: "string",
        },
        {
          label: "Description",
          name: "description",
          type: "rich-text",
        },
      ]
    },
    {
      label: "Venue Name",
      name: "venueName",
      type: "string",
    },
    {
      label: "Venue Address",
      name: "venueAddress",
      type: "string",
    },
    {
      label: "Event Website",
      name: "website",
      type: "string",
    },
    {
      label: "Logo",
      name: "logomark",
      type: "image",
      description: "Displayed in the corner of the event card. Should be a 48x48px png.",
    },
    {
      label: "Attendees",
      description: "Maximum number of attendees allowed",
      name: "attendees",
      type: "number",
    },
    {
      label: "Attendee Label",
      description: "A label next to the attendee count",
      name: "label",
      type: "string",
    },
    {
      label: "Organization",
      name: "org",
      type: "string",
    },
    {
      label: "Directly Responsible Individual",
      name: "dri",
      type: "string",
    },
    {
      label: "Tags",
      name: "tags",
      type: "string",
      list: true,
    },
    {
      label: "Priority",
      name: "priority",
      description: "Lower numbers are closer to the top of the event schedule.",
      type: "number",
    },
  ],
}