import { useRef, useEffect } from 'react'
import dayjs from 'dayjs'
import ScrollContainer from 'react-indiana-drag-scroll'
import { dayOffset, readableHash } from '../../helpers/utilities';
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

export const EventSchedule = ({ data, events }) => {
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
          <div className={`w-full mx-auto min-h-[10vh] ${ data?.style?.width === 'siteWidth' ? 'max-w-desktop-full' : '' }`} id='schedule'>
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