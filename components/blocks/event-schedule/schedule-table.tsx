import dayjs from 'dayjs'
import { EventCard } from './event'
import Link from 'next/link.js'

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

function EventCardWrapper({e, i}) {
  if (!e.isWithinRange) {
    return null
  }
  return (
    <div className={`col-start-${(e.startDay + 1)} col-end-${(e.startDay + e.days + 1)} shrink-0 h-full auto-rows-fr`}>
        <Link href={`/${e.hash}`} scroll={false}>
          <EventCard event={e} key={i} />
        </Link>
    </div>
  )
}

export function ScheduleTable({ events, data }) {
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
        {days.map((d, i) => (
          <div className={`flex col-start-${(i + 1)} col-span-1 text-center p-3 bg-primary text-white text-xl shrink-0`} key={i}>
            <p className="flex-1 mx-2 text-left">{d.format('ddd')}</p>
            <p className="flex-1 mx-2 text-right">{d.format('MMM DD')}</p>
          </div>
        ))}
        {prioritizedEvents.map((e, i) => (<EventCardWrapper e={e} i={i}  key={i} />))}
      </div>

      <div className="invisible"> {/* trick tailwindcss to generate the required columns */}
        <div className="grid grid-cols-1  w-[250px]"> <div className="col-span-1  col-start-1  col-end-1"></div></div>
        <div className="grid grid-cols-2  w-[500px]"> <div className="col-span-2  col-start-2  col-end-2"></div></div>
        <div className="grid grid-cols-3  w-[750px]"> <div className="col-span-3  col-start-3  col-end-3"></div></div>
        <div className="grid grid-cols-4  w-[1000px]"><div className="col-span-4  col-start-4  col-end-4"></div></div>
        <div className="grid grid-cols-5  w-[1250px]"><div className="col-span-5  col-start-5  col-end-5"></div></div>
        <div className="grid grid-cols-6  w-[1500px]"><div className="col-span-6  col-start-6  col-end-6"></div></div>
        <div className="grid grid-cols-7  w-[1750px]"><div className="col-span-7  col-start-7  col-end-7"></div></div>
        <div className="grid grid-cols-8  w-[2000px]"><div className="col-span-8  col-start-8  col-end-8"></div></div>
        <div className="grid grid-cols-9  w-[2250px]"><div className="col-span-9  col-start-9  col-end-9"></div></div>
        <div className="grid grid-cols-10 w-[2500px]"><div className="col-span-10 col-start-10 col-end-10"></div></div>
        <div className="grid grid-cols-11 w-[2750px]"><div className="col-span-11 col-start-11 col-end-11"></div></div>
        <div className="grid grid-cols-12 w-[3000px]"><div className="col-span-12 col-start-12 col-end-12"></div></div>
        <div className="grid grid-cols-13 w-[3250px]"><div className="col-span-13 col-start-13 col-end-13"></div></div>
        <div className="grid grid-cols-14 w-[3500px]"><div className="col-span-14 col-start-14 col-end-14"></div></div>
        <div className="grid grid-cols-15 w-[3750px]"><div className="col-span-15 col-start-15 col-end-15"></div></div>
        <div className="grid grid-cols-16 w-[4000px]"><div className="col-span-16 col-start-16 col-end-16"></div></div>
        <div className="grid grid-cols-17 w-[4250px]"><div className="col-span-17 col-start-17 col-end-17"></div></div>
        <div className="grid grid-cols-18 w-[4500px]"><div className="col-span-18 col-start-18 col-end-18"></div></div>
        <div className="grid grid-cols-19 w-[4750px]"><div className="col-span-19 col-start-19 col-end-19"></div></div>
        <div className="grid grid-cols-20 w-[5000px]"><div className="col-span-20 col-start-20 col-end-20"></div></div>
      </div>
    </>
  )
}

export default ScheduleTable
