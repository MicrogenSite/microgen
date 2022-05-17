# Editing

## Logging In
Login to your site by going to the staging domain followed by "/admin"  
```https://www.yourstagingsite.com/admin```

You will be asked to sign into Tina Cloud. Once logged in go back to the home page and you will now have a blue button with a pencil in the lower left of the site. Click this to open the side bar and begin editing.


## Editing Pages

Pages are made up of stacks of sections. Add, move and delete sections to create your page. There are currently four section types.

**Banner**
A section with text and an image above or below it.

**Feature**
A section with text and an image to the left or right.

**Text Cards**
A heading and cards without photos below.

**Photo Cards**
A heading and cards with photos below.

Click on a section to edit its content.

## Styling Sections
All sections have a "Section Style" button and some also have a "Card Style" button. Dive into these menus to choose section colors, backgrounds, layouts and type settings.

## Navigation
A navigation bar can be drawn across the top of the page. Settings for this are available from the navigation button on the main page sidebar. Navigation is comprised of two types of links.

**Anchor Jumps**  
Sections that have a navigation label will have that label drawn in the top nav. Clicking that item will scroll down to the section.

**Additional Links**  
Links to external pages can be added from the navigation menu.

## Meta Data
The main page sidebar contains a Meta button which brings you to the Meta sidebar. This information is used for the site title and description as well as open graph for social sharing.

## Push staging to production
Tina edits are made on a staging site. To push staging edits to production create a pull request in github with merging main into production.
## Known Issues

**No Media Manager with Safari**  
You cannot login to the media manager when using the latest Safari browser.

**Missing Markdown Styles**
The wysiwyg body field does not support all listed styles. Tables and headings do not work but bold, italic and links do.