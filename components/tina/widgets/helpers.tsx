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
  return `${side}-`;
}