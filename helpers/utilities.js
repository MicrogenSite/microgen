import dayjs from 'dayjs'

/*
  lowerDash
  Replace spaces with dashes
*/
export function lowerDash(value) {
  if (typeof value === 'string' || value instanceof String) {
    return value?.toLowerCase()?.replace(/ /g, '-')
  }
  return ''
}

/*
  isString
  Check if the value is of type string
*/ 
export function isString(value) {
  return Object.prototype.toString.call(value) === '[object String]'
}

/*
  getWordWith
  Accepts a space delimited string "classes" and returns the first word containing "substring"
*/
export function getWordWith (classes, substring) {
  const classesArray = classes?.split(" ") || []
  const foundClass = classesArray.find(item => item.includes(substring))
  return foundClass || ""
}

/*
  hasWord
  Accepts a space delimited string "classes" and returns true if any words match ones found in "substring" (another space delimited string)
*/
export function hasWord (classes, substring) {
  const classesArray = classes?.split(" ") || []
  const substringArray = substring.split(" ") || []
  const wasFound = classesArray.some(item => substringArray.includes(item))
  return wasFound
}

/*
  prefixSelectValues
  Accepts an array of objects representing a select menu and returns an array with the value attributes prefixed.
  This is generally used to prefix select menus that have tailwind classes as values.
*/
export function prefixSelectValues (options, prefix) {
  const prefixedOptions = options.map(option => {
    return {
      label: option.label,
      value: `${prefix}${option.value}`
    }
  });
  return prefixedOptions;
}

/*
  linkTarget
  Accepts a string representing a link and returns '_blank' if the string contains http or https
*/
export function linkTarget (link) {
  const isExternalLink = isString(link) && (link.includes("http://") || link.includes("https://"))
  return isExternalLink ? '_blank' : ''
}

export const getStyleMatch = function (options, styles) {
  const optionValues = options.map(option => option.value);
  const currentStyles = styles?.split(" ") || [];
  const matches = optionValues.filter(element => currentStyles.includes(element))
  return matches[0];
}

export const getBorderWidth = function (options, styles) {
  const sides = ['', 't-', 'b-', 'l-', 'r-']
  const optionValues = sides.map(side => options.map(option => `border-${side}${option.value}`)).flat()
  const currentStyles = styles?.split(" ") || [];
  const match = optionValues.filter(option => currentStyles.includes(option))
  const width = match[0]?.split("-")?.pop()
  return width || "0";
}

export const getBorderSide = function (options, styles) {
const widths = ['0', '1', '2', '3', '4', '6', '8']
const optionValues = widths.map(width => options.map(option => `${option.value}${width}`)).flat()
  const currentStyles = styles?.split(' ') || [];
  const match = optionValues.filter(option => currentStyles.includes(option))
  const side = match[0]?.split('-').slice(0,-1).join('-')
  return side ? `${side}-` : 'border-';
}

export const dateRangeString = function (date, days = 1) {
  const d1 = dayjs(date)

  if (days === 1 || days === null) {
    return d1.format("MMM DD")
  }

  const d2 = d1.add(days - 1, 'day')
  return `${d1.format("MMM DD")}-${d2.format("MMM DD")}`
}

export const dayOffset = function (start, date) {
  return dayjs(date).diff(dayjs(start), 'days')
}

export const readableHash = function (eventName) {
  return eventName.replace(/þ/g, 'th').replace(/[^a-zA-Z0-9þ]/g, ' ').replace(/\s+/g, '-')
}