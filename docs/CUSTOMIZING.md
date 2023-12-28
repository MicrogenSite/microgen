# Customizing Microgen

## Fonts

Microgen uses system fonts, Google fonts and Adobe Fonts. You can also add your own font files if you like.

### Adding Adobe Fonts

Adobe Fonts can be added without making any code changes.

1. Go to the theme section of your site and choose "fonts"

2. Add a link to your Adobe Fonts, i.e. <https://use.typekit.net/123abc.css>

3. For each font in your web project add a font. The font label can be whatever you like, the font family is the font name lowercase and hyphenated. If your font is named "Freight Sans Pro" in Adobe Fonts the font family would be "freight-sans-pro". Each weight you want to use needs to be added seperately. Do not use the word "Bold" in your font label, instead indicate the weight number, i.e. "Freight Sans Pro 700". Refer to your Adobe Web Project for the corret names.

### Adding Google Fonts

Microgen includes a collection of popular google fonts by default. If the one you want is not included you can add it to the list of google fonts located at `components/tina/options/google-font-options.js`.

### Add your own Font Files

You can add your own custom font files to Microgen as well.

1. Copy your woff font file to `/public/fonts/your-font.woff`

2. Add a link to your font file to the head section of `/components/layout/layout.tsx`

    ```html
      <link rel="stylesheet" type="text/css" href="/fonts/your-font.woff"></link>
    ```

3. Add your font to the custom font list `/components/tina/options/custom-font-options.js`. The value should be the name

    ```javascript
    { "label": "Your Font", "value": "yourfont:wght@400" },
    ```

4. Add a CSS rule for your font to `/components/layout/styles.tsx`. Refer to the instructions included with your webfont to determine the correct font-family and src values.

    ```css
    @font-face {
      font-family: 'YourFont';
      src: url('fonts/yourfont.woff') format('woff');
    }
    ```

## Icons

Microgen features a collection of icons that can be used in buttons.

1. Add the SVG code to `/components/icons/fa-icon.tsx`.

    ```javascript
      case "your-icon":
        return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5"/></svg>
    ```

2. Add the icon to the iconOptions array in `/schema/options.tsx`

    ```javascript
      { label: "Your Icon", value: "your-icon" },
    ```

## Custom Blocks

Coming Soon.
