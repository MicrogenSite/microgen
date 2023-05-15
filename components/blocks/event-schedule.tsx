import { useRef, useEffect } from 'react'
import dayjs from 'dayjs'
import ScrollContainer from 'react-indiana-drag-scroll'
import { dayOffset, readableHash } from '../../helpers/utilities';

import { backgroundSchema } from "../../schema/background"
import { navigationLabelSchema } from "../../schema/navigation-label";

import { IconClickDrag } from './event-schedule/icons';
import { ScheduleTable } from './event-schedule/schedule-table';
import { Section } from "../section";

function annotateEvents(data, events) {
  const startDate = dayjs(data.scheduleStartDate)
  const endDate = dayjs(data.scheduleEndDate)
  const numDays = Number(dayOffset(startDate, endDate) + 1)
  const eventWithinRange = (e) => (e.startDay >= 0 && e.startDay < numDays)
  const uniqEventHashes = new Set()

  return Object.keys(events).map((fileName) => {
    const event = {
        ...events[fileName],
        fileName,
    }
    event.startDay = dayOffset(startDate, event.date)
    event.isWithinRange = eventWithinRange(event)
    event.hash = `#${readableHash(event.name)}`

    // To ensure our event modal hashes are unique we keep a Set of all the hashes
    if (uniqEventHashes.has(event.hash)) {
        // Filename is always unique
        event.hash = `#${readableHash(event.fileName)}`
    }

    uniqEventHashes.add(event.hash)

    return event
  })
}

export const EventSchedule = ({ data, events, parentField = "" }) => {
  const scrollContainer = useRef(null);

  useEffect(() => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollTo(0, 0);
    }
  });

  return (
    <Section
      background={data.background}
      navigationLabel={data.navigationLabel}
    >
      {events.length < 1 &&
        <div className="max-w-desktop-full mx-auto p-10">
          <p>No events to display on schedule.</p>
        </div>
      }
      {events.length >= 1 &&
        <>
          <div className="bg-gray-100 py-10 pb-0 text-center">
            <IconClickDrag />
            Click and drag the schedule to navigate
          </div>
          <div className='w-full max-w-desktop-full mx-auto min-h-[10vh]' id='schedule'>
            <ScrollContainer innerRef={scrollContainer} className="scroll-container bg-gray-100 py-10" ignoreElements='.modal'>
              <div className="flex-none min-h-full w-full">
                <div className="content">
                  <ScheduleTable events={annotateEvents(data, events)} data={data} />
                </div>
              </div>
            </ScrollContainer>
          </div>
        </>
      }
    </Section>
  );
};

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
