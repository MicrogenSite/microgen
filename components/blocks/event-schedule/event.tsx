import classNames from 'classnames'
import { dateRangeString } from '../../../helpers/utilities';
import { EventModal } from './event-modal'
import Link from 'next/link.js'
import { TinaMarkdown } from 'tinacms/dist/rich-text';

function Card({ children, color }) {
  let bgColor = 'bg-white'

  if (color) {
    bgColor = 'bg-' + color
  }

  return (
    <>
      <div className={classNames(
        'cursor-pointer p-0.5 shadow-md h-full whitespace-normal bg-gray bg-gradient-to-br hover:from-accent4 hover:via-accent2 hover:to-accent3'
      )}>
        <div className={classNames(
          bgColor,
          'event-card-background relative block p-3 sm:px-3 sm:py-2 h-full bg-white'
        )}>
          <div className="flex flex-col h-full text-xs text-gray-600">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export function EventCard({ event, urlHash }) {
  const isWorkInProgress = event.tags?.some((el) => el.toLowerCase() === "wip")
  const attendees = () => {
    if (event.attendees && event.label) return `${event.attendees} (${event.label})`
    if (event.attendees && !event.label) return `${event.attendees}`
    if (!event.attendees && event.label) return `${event.label}`
    return null
  }
  
  return (
    <EventModal content={<EventModalContent event={event} urlHash={urlHash}/>} name={event.name} link={event.website} hash={event.hash} urlHash={urlHash}>
      <Link href={`/${event.hash}`} scroll={false}>
        <div className={classNames('w-full', 'h-full', 'overflow-hidden', { 'opacity-70': isWorkInProgress })}>
          <Card color={event.color}>
            <div className="flex-1">
              <div className="flex gap-2">
                <h5 className="flex-1 text-black mg-headline-small">
                  {event.name}
                </h5>
                {event.isLive &&
                  <div className="w-12 mt-0.5 flex-none">
                    <img width="48" height="18" src="/live-streaming.svg" />
                  </div>
                }
              </div>
              <div className="mg-copy-small mt-2">
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
          </Card>
        </div>
      </Link>
    </EventModal>
  )
}

function EventModalContent({ event, urlHash }) {
  const attendees = () => {
    if (event.attendees && event.label) return `${event.attendees} (${event.label})`
    if (event.attendees && !event.label) return `${event.attendees}`
    if (!event.attendees && event.label) return `${event.label}`
    return null
  }

  return (
    <>
      <ul className="list-disc mg-copy-small ml-4">
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
        <div className="markdown mg-copy-small mt-4">
          <TinaMarkdown content={event.description} />
        </div>
      )}
      {event.timeslots?.length >= 1 && <TimeslotTable timeslots={event.timeslots} hash={event.hash} urlHash={urlHash} />}
    </>
  )
}

export function AddCard({ addEventlink }) {
  return (
    // <Modal content={<AddEventModalContent config={config} />} name="Submit a track or talk" link="" hash="#add-event">
    <a target="_blank" href={addEventlink}>
      <Card color="white">
        <div className="place-content-center w-full m-0 py-5 text-center text-gray-300 hover:text-gray-500">
          <div className="text-6xl">
            +
          </div>
          <div className="text-xl font-bold">
            Submit a track or talk
          </div>
        </div>
      </Card>
    </a>
    // </Modal>
  )
}

function AddEventModalContent({ config }) {
  return (
    <>
      <p>The event listings in this website are coordinated through GitHub.</p>
      <p>Steps to list your event:</p>
      <ol className="list-decimal ml-4 mt-3">
        <li><b>Step 1</b>: Read & file a pull-request in this repo: <br />
          <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            href={config.repo} target="_blank">{config.repo}</a>
        </li>
        <li><b>Step 2</b>: Address any comments until your PR is merged.</li>
        <li><b>Step 3</b>: Blastoff! ⭐️💙</li>
      </ol>
    </>
  )
}

function TimeslotTable({ timeslots, hash, urlHash }) {
  const sortedTimeslots = timeslots.sort((a, b) => a.time.localeCompare(b.time))
  return (
    <div>
      <h4 className="py-3 mg-small text-black font-bold">Schedule</h4>
      <table className="w-full">
        <thead className="bg-gray-light text-left mg-copy-xs">
          <tr>
            <th scope="col" className="px-6 py-3">TIME</th>
            <th scope="col" className="px-6 py-3">SPEAKER</th>
            <th scope="col" className="px-6 py-3">INFO</th>
          </tr>
        </thead>
        <tbody className="mg-copy-small">
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
