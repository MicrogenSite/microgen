import React from "react";
import { TextField, GroupListField, BlocksFieldPlugin } from 'tinacms'
import AlignmentControl from './components/tina/AlignmentControl'
import BorderControl from './components/tina/BorderControl'
import ButtonControl from './components/tina/ButtonControl'
import ButtonTypographyControl from './components/tina/ButtonTypographyControl'
import CardAlignmentControl from './components/tina/CardAlignmentControl'
import ColorControl from './components/tina/ColorControl'
import FeatureContentControl from './components/tina/FeatureContentControl'
import FeatureImageControl from './components/tina/FeatureImageControl'
import FillControl from './components/tina/FillControl'
import GridControl from './components/tina/GridControl'
import ImageControl from './components/tina/ImageControl'
import PaddingControl from './components/tina/PaddingControl'
import RuledTitle from './components/tina/RuledTitle'
import SelectField from './components/tina/SelectField'
import TypeControl from './components/tina/TypeControl'
import TypographyControl from './components/tina/TypographyControl'

export const SectionListItemsPlugin = {
  ...BlocksFieldPlugin,
  Component: (props) => {
    const itemProps = (item) => {
      const templateNames = {
        banner: 'Banner',
        embed: 'Embed',
        feature: 'Feature',
        photoCards: 'Photo Cards',
        postCards: 'Post Cards',
        tailwindCards: 'Cards TW',
        tailwindFeature: 'Feature TW',
        textCards: 'Text Cards',
      }
      const sectionName = item.headline || item.subhead || item.label || item.title || ''
      const sectionNameShort = sectionName.match(/^.{24}\w*/)
      const sectionLabel = sectionNameShort || sectionName || ''
      const label = sectionLabel ? `${sectionLabel} - ${templateNames[item._template]}` : `${templateNames[item._template]}`
      return { ...item, label: label }
    }
    
    const templates = {}
    Object.keys(props.field.templates).forEach((key) => {
      templates[key] = {
        ...props.field.templates[key],
        itemProps,
      }
    })
    
    return <BlocksFieldPlugin.Component {...props} field={{ ...props.field, templates }} />
  },
  __type: 'field',
  name: "sectionListItems",
}
export const itemListFieldPlugin = {
  Component: (props) => {
    const field = {
      ...props.field,
      itemProps: (item) => {
        return { label: item.headline || item.subhead || item.label }
      },
    }
    return <GroupListField {...props} field={field} />
  },
  __type: 'field',
  name: 'itemListField'
}

export const emailFieldPlugin = {
  Component: TextField,
  __type: 'field',
  name: 'emailField',
  validate: (email, allValues, meta, field) => {
    const isValidEmail = /.*@.*\..*/.test(email)
    if (!isValidEmail) return 'Invalid email address'
  },
}

export const alignmentControlFieldPlugin = {
  Component: AlignmentControl,
  __type: 'field',
  name: 'alignmentControl',
}

export const borderControlFieldPlugin = {
  Component: BorderControl,
  __type: 'field',
  name: 'borderControl',
}


export const buttonTypographyControlFieldPlugin = {
  Component: ButtonTypographyControl,
  __type: 'field',
  name: 'buttonTypographyControl',
}

export const cardAlignmentControlFieldPlugin = {
  Component: CardAlignmentControl,
  __type: 'field',
  name: 'cardAlignmentControl',
}


export const colorControlFieldPlugin = {
  Component: ColorControl,
  __type: 'field',
  name: 'colorControl',
}

export const buttonControlFieldPlugin = {
  Component: ButtonControl,
  __type: 'field',
  name: 'buttonControl',
}

export const featureContentControlPlugin = {
  Component: FeatureContentControl,
  __type: 'field',
  name: 'featureContentControl',
}

export const featureImageControlPlugin = {
  Component: FeatureImageControl,
  __type: 'field',
  name: 'featureImageControl',
}

export const fillControlFieldPlugin = {
  Component: FillControl,
  __type: 'field',
  name: 'fillControl',
}

export const gridControlFieldPlugin = {
  Component: GridControl,
  __type: 'field',
  name: 'gridControl',
}

export const imageControlFieldPlugin = {
  Component: ImageControl,
  __type: 'field',
  name: 'imageControl',
}

export const paddingControlFieldPlugin = {
  Component: PaddingControl,
  __type: 'field',
  name: 'paddingControl',
}

export const ruledTitlePlugin = {
  Component: RuledTitle,
  __type: 'field',
  name: 'ruledTitle',
}

export const selectFieldPlugin = {
  Component: SelectField,
  __type: 'field',
  name: 'selectField',
}

export const typeControlFieldPlugin = {
  Component: TypeControl,
  __type: 'field',
  name: 'typeControl',
}

export const typographyControlFieldPlugin = {
  Component: TypographyControl,
  __type: 'field',
  name: 'typographyControl',
}
