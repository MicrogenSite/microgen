import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import { EventCard } from './event'

function genDates(start, numDays) {
  const days = []
  const d = dayjs(start)
  for (let i = 0; i < numDays; i++) {
    days.push(d.add(i, 'day'))
  }
  return days
}

function dayOffset(start, date) {
  return dayjs(date).diff(dayjs(start), 'days')
}

function EventCardWrapper({event, index, urlHash}) {
  if (!event.isWithinRange) {
    return null
  }
  return (
    <div className={`col-start-${(event.startDay + 1)} col-end-${(event.startDay + event.days + 1)} shrink-0 h-full auto-rows-fr`}>
      <div className={`col-start-${(event.startDay + 1)} col-end-${(event.startDay + event.days + 1)} shrink-0 h-full auto-rows-fr`}>
        <EventCard event={event} key={index} urlHash={urlHash} />
      </div>
    </div>
  )
}

export function ScheduleTable({ events, data }) {
  const [urlHash, setUrlHash] = useState('');
  const [hashChangeEventRegistered, setHashChangeEventRegistered] = useState(false);

  useEffect(() => {
    setUrlHash(window.location.hash)
    if (!hashChangeEventRegistered) {
      window.addEventListener('hashchange', (hashChangeEvent) => {
        setUrlHash( (new URL(hashChangeEvent.newURL)).hash)
      });
      setHashChangeEventRegistered(true)
    }
  }, []);
  
  const scheduleStartDate = dayjs(data.scheduleStartDate)
  const scheduleEndDate = dayjs(data.scheduleEndDate)
  const numDays = Number(dayOffset(scheduleStartDate, scheduleEndDate) + 1)
  const days = genDates(scheduleStartDate, numDays)
  const prioritizedEvents = events.sort((a, b) => {
    const aPriority = a.priority || 10
    const bPriority = b.priority || 10
    return aPriority - bPriority
  })

  return (
    <>
      <div className={`schedule-days px-10 no-flex grid grid-flow-col-dense grid-cols-${numDays} gap-4`} style={{ "width": `${numDays * 250}px`}}>
        {days.map((day, index) => (
          <div className={`flex col-start-${(index + 1)} col-span-1 text-center p-3 bg-primary text-white text-xl shrink-0`} key={index}>
            <p className="flex-1 mx-2 text-left">{day.format('ddd')}</p>
            <p className="flex-1 mx-2 text-right">{day.format('MMM DD')}</p>
          </div>
        ))}
        {prioritizedEvents.map((event, index) => (<EventCardWrapper event={event} index={index} urlHash={urlHash} key={index} />))}
      </div>
    </>
  )
}

export default ScheduleTable
