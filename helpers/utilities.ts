export function lowerDash(value) {
  if (typeof value === 'string' || value instanceof String) {
    return value?.toLowerCase()?.replace(/ /g, '-')
  }
  return ''
}

export function isString(value) {
  return Object.prototype.toString.call(value) === '[object String]'
}