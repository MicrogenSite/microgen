function unique(list) {
  return list.sort().filter(function(item, pos, ary) {
      return !pos || item != ary[pos - 1];
  });
}

export const googleFontsLink = (theme) => {
  const systemFonts = ['Arial','Courier','Geneva','Georgia', 'Helvetica','Impact','Lucida Console','Lucida Grande','Monaco','Palatino','Tahoma','Times New Roman','Verdana']
  const customFonts = ['Suisse Intl']
  const typographyFontFamilies = theme.typo?.map(item => {
    const fontObject = JSON.parse(item.typography)
    return fontObject.family || null
  }) || []
  const buttonFontFamilies = theme.buttons?.map(item => {
    const fontObject = JSON.parse(item.typography)
    return fontObject.family || null
  }) || []
  const fontFamilies = [...typographyFontFamilies, ...buttonFontFamilies]
  const uniqueFontList = unique(fontFamilies)
  const googleFontList = uniqueFontList.filter(item => !systemFonts.includes(item)).filter(item => !customFonts.includes(item))
  const formattedFontList = googleFontList.map(item => item?.split(' ').join('+'))
  const familyString = formattedFontList.join('&family=')
  const fontLink = `https://fonts.googleapis.com/css2?family=${familyString}&display=swap`
  return uniqueFontList.length > 0 ? fontLink : ''
}