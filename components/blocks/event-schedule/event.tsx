import classNames from 'classnames'
import { dateRangeString } from '../../../helpers/utilities';
import { EventModal } from './event-modal'
import Link from 'next/link.js'
import { TinaMarkdown } from 'tinacms/dist/rich-text';

export function EventCard({ event, urlHash, style, modalStyle }) {
  const isWorkInProgress = event.tags?.some((el) => el.toLowerCase() === "wip")
  const attendees = () => {
    if (event.attendees && event.label) return `${event.attendees} (${event.label})`
    if (event.attendees && !event.label) return `${event.attendees}`
    if (!event.attendees && event.label) return `${event.label}`
    return null
  }

  return (
    <EventModal content={<EventModalContent event={event} urlHash={urlHash} modalStyle={modalStyle} />} name={event.name} link={event.website} hash={event.hash} urlHash={urlHash} modalStyle={modalStyle}>
      <Link href={`/${event.hash}`} scroll={false}>
        <div className={classNames('cursor-pointer', 'w-full', 'h-full', 'overflow-hidden', { 'opacity-70': isWorkInProgress })}>
          <div className={`relative block flex flex-col h-full ${style.padding} ${style.border} ${style.fill}`}>
            <div className="flex-1">
              <div className="flex gap-2">
                <h5 className={`flex-1 ${style.headline}`}>
                  {event.name}
                </h5>
                {event.isLive &&
                  <div className="flex-none w-12 mt-0.5">
                    <img width="48" height="18" src="/live-streaming.svg" />
                  </div>
                }
              </div>
              <div className={`${style.text}`}>
                {event.times !== "To be confirmed" &&
                  <div>{event.times}</div>
                }
                {event.venueName &&
                  <div>{event.venueName}</div>
                }
                {attendees() && 
                  <span>👤 {attendees()}</span>
                }
                {event.org &&
                  <div className="mt-3">
                    {event.org}
                  </div>
                }
              </div>
            </div>
            <div className="flex-1 flex items-end">
              <div className="event-tags w-full">
                {event.tags?.map((tag, i) => (
                  (tag && <Tag key={i}>{tag}</Tag>)
                ))}
              </div>
              {event.logomark &&
                <div className="logomark inline-block">
                  <img height="40" className="w-auto h-12 object-contain" src={event.logomark} />
                </div>
              }
            </div>
          </div>
        </div>
      </Link>
    </EventModal>
  )
}

function EventModalContent({ event, urlHash, modalStyle }) {
  const attendees = () => {
    if (event.attendees && event.label) return `${event.attendees} (${event.label})`
    if (event.attendees && !event.label) return `${event.attendees}`
    if (!event.attendees && event.label) return `${event.label}`
    return null
  }

  return (
    <>
      <ul className={`list-disc ml-4 ${modalStyle?.label}`}>
        <li><b>Date</b>: {dateRangeString(event.date, event.days)}</li>
        {event.times &&
          <li><b>Times</b>: {event.times}</li>
        }
        {event.venueName &&
          <li><b>Venue</b>: <span className="inline-block">
            {event.venueName}
          </span></li>
        }
        {event.org &&
          <li><b>Organization</b>: {event.org}</li>
        }
        {attendees() &&
          <li><b>Attendees</b>: {attendees()}</li>
        }
      </ul>
      <div className="event-tags">
        {event.tags?.map((tag, i) => (
          (tag && <Tag key={i}>{tag}</Tag>)
        ))}
      </div>
      {event.description && (
        <div className={`markdown ${modalStyle?.text}`}>
          <TinaMarkdown content={event.description} />
        </div>
      )}
      {event.timeslots?.length >= 1 && <TimeslotTable timeslots={event.timeslots} hash={event.hash} urlHash={urlHash} modalStyle={modalStyle} />}
    </>
  )
}

function TimeslotTable({ timeslots, hash, urlHash, modalStyle }) {
  const sortedTimeslots = timeslots.sort((a, b) => a.time.localeCompare(b.time))
  return (
    <div>
      <h4 className={`${modalStyle.timeslotHeadline}`}>Schedule</h4>
      <table className="w-full">
        <thead className={`bg-gray-light text-left`}>
          <tr>
            <th scope="col" className={`px-6 py-3 ${modalStyle.timeslotLabel}`}>TIME</th>
            <th scope="col" className={`px-6 py-3 ${modalStyle.timeslotLabel}`}>SPEAKER</th>
            <th scope="col" className={`px-6 py-3 ${modalStyle.timeslotLabel}`}>INFO</th>
          </tr>
        </thead>
        <tbody className={`${modalStyle.timeslotText}`}>
          {sortedTimeslots?.map((timeslot, index) => {
            const timeslotId = `${hash}-timeslot${index+1}`
            const currentTimeslot = urlHash?.replace('/', '-timeslot')
            const isCurrent = timeslotId === currentTimeslot
            return (
              <tr id={timeslotId} key={index} className={`border-b border-gray-light ${isCurrent ? 'bg-gray-light' : 'bg-white' }`} >
                <th scope="row" className="px-6 py-4 align-top whitespace-nowrap text-left">{timeslot.time}</th>
                <td className="px-6 py-4 align-top">{timeslot.speakers}</td>
                <td className="px-6 py-4">
                  <a className="font-bold underline" href={`/${hash}/${index+1}`}>{timeslot.title}</a>
                  {timeslot.description && (
                    <div className="markdown">
                      <TinaMarkdown content={timeslot.description} />
                    </div>
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

function Tag({ children }) {
  return (
    <span className="inline-block px-3 py-0.5 mr-1.5 my-1 border border-gray text-gray mg-copy-small rounded-full cursor-default">
      {children}
    </span>
  )
}
