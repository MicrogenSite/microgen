---
title: Tina Cloud Starter
blocks:
  - style:
      alignment: 'flex-row-reverse items-start '
      padding: 'pt-10 pb-10 pr-10 pl-10 sm:pt-10 sm:pb-10 sm:pr-5 sm:pl-5'
      featureImage: '  mr-auto'
      featureContent: w-1/2 undefined text-left
      labelStyles: text-white mg-headline-xs undefined
      headlineStyles: text-primary mg-headline-lg mb-0
      subheadStyles: text-gray mg-headline-sm mb-5
      textStyles: text-white mg-body-sm undefined
    background:
      fillStyles: from-accent1 to-accent3 bg-gradient-to-br opacity-100
    label: Label
    headline: Headline
    subhead: Subhead
    body: |
      Copy
    buttons:
      - label: Button Label
        link: google.com
        buttonStyle: primary
    _template: feature
  - tailwind:
      section: ''
      wrap: ''
      imageWrap: ''
      image: ''
      contentWrap: ''
      content: ''
      label: ''
      headline: ''
      subhead: ''
      text: ''
      buttons: ''
    label: ''
    headline: This is the main headline
    subhead: Here is a subhead
    body: |
      This is a rich text component you can add hyperlinks, etc.
    buttons:
      - label: one
        link: '#one'
    _template: tailwindFeature
  - style:
      minHeight: min-h-0
      padding: pt-5 pb-6 undefined pl-10
    background:
      fillStyles: bg-gray-light opacity-100
    markup: I'm an embed
    _template: embed
---

