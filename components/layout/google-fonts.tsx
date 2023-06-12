import { googleFontOptions } from '../tina/options/google-font-options'

function unique(list) {
  return list.sort().filter(function(item, pos, ary) {
      return !pos || item != ary[pos - 1];
  });
}

export const googleFontsLink = (theme) => {
  const typographyFontFamilies = theme.typo?.map(item => {
    const fontObject = JSON.parse(item.typography)
    return fontObject?.family || null
  }) || []
  const buttonFontFamilies = theme.buttons?.map(item => {
    const fontObject = JSON.parse(item.typography)
    return fontObject?.family || null
  }) || []
  const themeFontFamilies = [...typographyFontFamilies, ...buttonFontFamilies]
  const uniqueFontList = unique(themeFontFamilies)
  const googleFontOptionsValues = googleFontOptions.map(item => item.value)
  const googleFontList = uniqueFontList.filter(item => googleFontOptionsValues.includes(item))
  const formattedGoogleFontList = googleFontList.map(item => item?.split(' ').join('+'))
  const familyString = formattedGoogleFontList.join('&family=')
  const googleFontsLink = `https://fonts.googleapis.com/css2?family=${familyString}&display=swap`
  return uniqueFontList.length > 0 ? googleFontsLink : ''
}