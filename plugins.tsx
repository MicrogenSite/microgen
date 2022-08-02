import AlignmentControl from './components/tina/AlignmentControl'
import BorderControl from './components/tina/BorderControl'
import ColorControl from './components/tina/ColorControl'
import FeatureContentControl from './components/tina/FeatureContentControl'
import FeatureImageControl from './components/tina/FeatureImageControl'
import FillControl from './components/tina/FillControl'
import ImageControl from './components/tina/ImageControl'
import PaddingControl from './components/tina/PaddingControl'
import RuledTitle from './components/tina/RuledTitle'
import SelectField from './components/tina/SelectField'
import TypeControl from './components/tina/TypeControl'
import TypeSizeControl from './components/tina/TypeSizeControl'
import { TextField, GroupListField } from 'tinacms'

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
    let isValidEmail = /.*@.*\..*/.test(email)
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

export const colorControlFieldPlugin = {
  Component: ColorControl,
  __type: 'field',
  name: 'colorControl',
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

export const typeSizeControlFieldPlugin = {
  Component: TypeSizeControl,
  __type: 'field',
  name: 'typeSizeControl',
}
