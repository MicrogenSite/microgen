export function lowerDash(value) {
  if (typeof value === 'string' || value instanceof String) {
    return value?.toLowerCase()?.replace(/ /g, '-')
  }
  return ''
}

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