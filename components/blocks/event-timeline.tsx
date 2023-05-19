import React from "react";
import { dateRangeString } from '../../helpers/utilities';
import { Section } from "../section";
import { trackGoal } from "fathom-client";

const IconLink = ({width="12"}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={width} className="relative -top-1 inline-block ml-0.5 fill-current">
      <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/>
    </svg>
  )
}

const EventTimelineHeadline = ({name = "", website = "", fathomId = ""}) => {
  const handleClick = () => {
    if (fathomId !== "") {
      console.log(fathomId)
      trackGoal(fathomId, 0)
    }
  }
  if (!website) {
    return <span>{name}</span>
  }
  return (
    <a href={website} target="_blank" onClick={() => { handleClick() }}>
      {name} <IconLink width="12" />
    </a>
  )
}

export const EventTimeline = ({ data, events, parentField = "" }) => {
  const styles = data.style
  const padding = data.style?.padding
  const width = data.style?.fullWidth ? "" : "max-w-desktop-full mx-auto"
  const sortedEvents = events.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let labels = []

  return (
    <Section
      background={data.background}
      navigationLabel={data.navigationLabel}
    >
      <div className={`${width} ${padding} ${data.style?.minHeight}`}>
        {sortedEvents.length < 1 &&
          <p className={`${styles.labelStyles}`}>No events to display.</p>
        }
        {sortedEvents.length >= 1 &&
          (
          <div className="relative max-w-desktop-full mx-auto border-l border-primary mb-10 ml-60">
            {sortedEvents && sortedEvents.map((event, index) => {
              const startDate = new Date(event.date)
              const startMonth = months[startDate?.getMonth()]
              const date = event.date ? `${dateRangeString(event.date, event.days)}` : 'Date TBD'
              const hideMonthLabel = labels.includes(startMonth)
              if (!hideMonthLabel) {
                labels = [...labels, startMonth]
              }
              return (
                <div className={`mb-5 ml-4 ${!hideMonthLabel && index !== 0 &&  "mt-16"}`} key={index}>
                  {(!hideMonthLabel &&
                    <div className="absolute -left-36 w-32 text-right">{startMonth}</div>
                  )}
                  <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5"></div>
                  {date &&
                    <p className={`${styles.labelStyles}`} data-tinafield={`${parentField}.label`}>
                      {date}
                    </p>
                  }
                  <h2 className={`${styles.headlineStyles}`} data-tinafield={`${parentField}.headline`}>
                    <EventTimelineHeadline name={event.name} website={event.website} fathomId={data.fathomId} />
                  </h2>
                  {event.venueName && 
                    <h4 className={`${styles.subheadStyles}`} data-tinafield={`${parentField}.subhead`}>
                      {event.venueName}
                    </h4>
                  }
                  {event.tags &&
                    <div className="event-tags">
                      {event.tags?.map((tag, index) => (
                        <span className={`bg-gray inline-block px-3 py-1 mr-2 rounded-full relative -top-2 ${styles.textStyles}`} key={index}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  }
                </div>
              )
            })}
          </div>
          )
        }
      </div>
    </Section>
  );
};
