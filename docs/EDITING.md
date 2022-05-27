# Editing

## Logging In
Login to your site by going to the staging domain followed by "/admin"  
```https://www.yourstagingsite.com/admin```

You will be asked to sign into Tina Cloud. Once logged in go back to the home page and you will now have a blue button with a pencil in the lower left of the site. Click this to open the side bar and begin editing.

--

# Editing Pages

Pages are made up of stacks of sections. Add, move and delete sections to create your page. There are currently four section types.

- **Banner:**
This section will be removed soon

- **Feature:**
The feature section contains a set of content elements and an image.

- **Cards:**
A heading and cards with photos below.

- **Embed:**
Intended for raw html, css or javascript. This section has the background settings of the stock sections as well as a few other settings.

# Styling Sections

All sections have a "Section Style" button and some also have a "Card Style" button. Dive into these menus to choose section colors, backgrounds, layouts and type settings. All sections support these features.

- **Background:**
Set a color, gradient or image to use for the background of this section. Backgrounds can have additional images layered over the top and positioned with offsets.

- **Typography:**
Control the color, font, size, margin and boldness of each piece of typography.

- **Content Order:**
Stock sections have the same content elements: Label, Headline, Subhead, Body and Buttons. These can be re-ordered for all sections.

- **Mobile Settings:**
Many settings can be set differently for mobile. These settings have a checkbox with a phone icon next to it. If the checkbox is checked there will be another row of settings with the mobile icon next to it.

---

## Feature Section

The feature section contains a set of content elements and an image.

### Alignment

- **Image Alignment:**
Image can be aligned to the left, right, top or bottom of the content. Can be set seperately for mobile.

- **Text Alignment:**
Text can be aligned inside the content section left, center or right. This will align all of the text elements as well as the buttons. Can be set seperately for mobile.

- **Axis Alignment:**
Controls how the content and image are aligned, this setting is horizontal or vertical depending on if the image is aligned left/right or top/bottom. Can be set seperately for mobile.

### Content

- **Content Width:**
A percentage width of the desktop site width. This is always 100% on mobile.

- **Content Height:**
This can be automatic, a fixed number of pixels, or the height of the browser window. This is minimum height as content can make this grow larger.

- **Content to Edge:**
If this setting is checked content will always stretch to the edge of the browser window. If content is below or above the image this will stretch to both edges.

- **Content Padding:**
Space surrounding the content.

### Image

- **Image Width:**
A percentage width of the desktop site width. This is always 100% on mobile.
*Coming Soon*

- **Image Height:**
This can be automatic, a fixed number of pixels, or the height of the browser window. This is minimum height as content can make this grow larger.
*Coming Soon*

- **Image to Edge:**
If this setting is checked the image area will always stretch to the edge of the browser window. If content is below or above the image this will stretch to both edges.

- **Image Fit:**
Three options exist for image fit...
  - Natural: Maximum size is the image's native dimensions, it can be scaled down but not up.
  - Fit: Image will be scaled up or down to fit area but it will not be cropped.
  - Fill: Image will be scaled up or down to fill area. Some of the image could be cropped.

- **Image Fit Position:**
This is how the image will align in the image area.

- **Image Padding:**
Space surrounding the image.

---

## Cards Section

The cards section contains a set of content elements and a set of cards composed of content elements and an image.

### Section Styles

- **Text Alignment:**
Text can be aligned inside the content section left, center or right. This will align all of the text elements as well as the buttons. Can be set seperately for mobile.

- **Minimum Height:**
This can be automatic, a fixed number of pixels, or the height of the browser window. This is minimum height as content can make this grow larger.

- **Content Padding:**
Space surrounding the content.

- **Content Width:**
A percentage width of the desktop site width. This is always 100% on mobile.

- **Columns:**
The number of cards to show per row.

### Card Styles

- **Background:**
The background color of the card. Can be transparent, solid or a gradient.

- **Padding:**
Space surrounding the card content.

- **Image Height:**
Height of the card image.

- **Image margin:**
The space below the image.

- **Image Fit:**
Three options exist for image fit...
- Natural: Maximum size is the image's native dimensions, it can be scaled down but not up.
- Fit: Image will be scaled up or down to fit area but it will not be cropped.
- Fill: Image will be scaled up or down to fill area. Some of the image could be cropped.

- **Image Fit Position:**
This is how the image will align in the image area.

- **Button Type:**
The button type to use for the card.

---

## Embed Section
Intended for raw html, css or javascript.

- **Minimum Height:**
The minumum height of the section. Can be none, a pixel value or the height of the screen.

- **Full Width:**
If off the section is the site width, if on the section goes edge to edge.

- **Padding:**
Space surrounding the the embed.

---

# Global Settings

You can customize colors, typography and other site wide settings from from the global settings menu (look for the gear icon). Many of these settings correspond to tailwind configuration settings.

**Site URL:**
The production url of your site without the protocol or slashes (example.com). This is used to identify the site you want to track analytics from.
 
**Google Tag Manager Id:**
If you setup a site in google analytics you can add the google tag manager id here to start tracking. (Also set the site url). Page jump navigations are tracked as events.

**Favicon:**
Upload a favicon to use for your site. This should be a 48x48 pixel png image.**Desktop Width:**
The maximum width of content on desktop.

**Colors:**
The color palette for the site. There is a primary color, 4 accent colors and a set of grays.**Fonts:**
The typography controls provide a choice of 4 fonts. These 4 fonts can be choose from a list of google fonts here. Custom fonts can be added.

**Type Size:**
Adjust all of the type sizes (and leadings) with precision here.

**Buttons & Links:**
Adjust settings for 3 button types and the default link color here.

**Logo:**
Choose a logo image, set the width and set a margin to the right of it. If you don't have a logo you can choose text instead, or just have nothing. This logo appears on all pages.

**Header:**
The header settings contain options to control the styling of the navigation.

---
# Other Topics

## Meta Data
The main page sidebar contains a Meta button which brings you to the Meta sidebar. This information is used for the site title and description as well as open graph for social sharing.

## Push staging to production
Tina edits are made on a staging site. To push staging edits to production create a pull request in github with merging main into production.

## Navigation
A navigation bar can be drawn across the top of the page. Settings for this are available from the navigation button on the main page sidebar. Navigation is comprised of two types of links.

## Page Jumps
Sections that have a navigation label will have that label drawn in the top nav. Clicking that item will scroll down to the section.

## Additional Links
Links to external pages can be added from the navigation menu.

## Technology

- [Tailwind](https://tailwindcss.com)

- [Tina](https://tina.io)

- [Next](https://nextjs.org)

- [React](https://reactjs.org/)

## Future Topics

- Draft Pages
- Multiple Pages
- Redirects
- Creating Custom Sections
- Adding Custom Fonts
- Collections/Posts