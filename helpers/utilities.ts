
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
export function getWordWith (classes: string, substring: string) {
  const classesArray: string[] = classes?.split(" ") || []
  const foundClass: string = classesArray.find(item => item.includes(substring))
  return foundClass || ""
}

/*
  hasWord
  Accepts a space delimited string "classes" and returns true if any words match ones found in "substring" (another space delimited string)
*/
export function hasWord (classes: string, substring: string) {
  const classesArray: string[] = classes?.split(" ") || []
  const substringArray: string[] = substring.split(" ") || []
  const wasFound: boolean = classesArray.some(item => substringArray.includes(item))
  return wasFound
}

/*
  prefixSelectValues
  Accepts an array of objects representing a select menu and returns an array with the value attributes prefixed.
  This is generally used to prefix select menus that have tailwind classes as values.
*/
export function prefixSelectValues (options: {label: string, value: string}[], prefix: string) {
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
export function linkTarget (link: string) {
  const isExternalLink = isString(link) && (link.includes("http://") || link.includes("https://"))
  return isExternalLink ? '_blank' : ''
}

export const getStyleMatch = function (options: {label: string, value: string}[], styles: string): string {
  const optionValues = options.map(option => option.value);
  const currentStyles = styles?.split(" ") || [];
  const matches = optionValues.filter(element => currentStyles.includes(element))
  return matches[0];
}

export const getBorderWidth = function (options: {label: string, value: string}[], styles: string): string {
  const sides = ['', 't-', 'b-', 'l-', 'r-']
  const optionValues = sides.map(side => options.map(option => `border-${side}${option.value}`)).flat()
  const currentStyles = styles?.split(" ") || [];
  const match = optionValues.filter(option => currentStyles.includes(option))
  const width = match[0]?.split("-")?.pop()
  return width || "0";
}

export const getBorderSide = function (options: {label: string, value: string}[], styles: string): string {
  const widths = ['0', '1', '2', '3', '4', '6', '8']
  const optionValues = widths.map(width => options.map(option => `${option.value}${width}`)).flat()
  const currentStyles = styles?.split(' ') || [];
  const match = optionValues.filter(option => currentStyles.includes(option))
  const side = match[0]?.split('-').slice(0,-1).join('-')
  return side ? `${side}-` : 'border-';
}
