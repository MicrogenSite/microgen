export const getStyleMatch = function (options: {label: string, value: string}[], styles: string): string {
  const optionValues = options.map(option => option.value);
  const currentStyles = styles?.split(" ") || [];
  const matches = optionValues.filter(element => currentStyles.includes(element))
  return matches[0];
}