import AlignmentControl from './components/tina/AlignmentControl'
import FillControl from './components/tina/FillControl'
import TypeControl from './components/tina/TypeControl'
import ImageControl from './components/tina/ImageControl'
import PaddingControl from './components/tina/PaddingControl'
import BorderControl from './components/tina/BorderControl'
import SelectField from './components/tina/SelectField'
import FeatureContentField from './components/tina/FeatureContentField'
import FeatureImageField from './components/tina/FeatureImageField'
import RuledTitle from './components/tina/RuledTitle'
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

export const selectFieldPlugin = {
  Component: SelectField,
  __type: 'field',
  name: 'selectField',
}

export const alignmentControlFieldPlugin = {
  Component: AlignmentControl,
  __type: 'field',
  name: 'alignmentControl',
}

export const typeControlFieldPlugin = {
    Component: TypeControl,
    __type: 'field',
    name: 'typeControl',
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

export const borderControlFieldPlugin = {
  Component: BorderControl,
  __type: 'field',
  name: 'borderControl',
}

export const featureContentFieldPlugin = {
  Component: FeatureContentField,
  __type: 'field',
  name: 'featureContentField',
}

export const featureImageFieldPlugin = {
  Component: FeatureImageField,
  __type: 'field',
  name: 'featureImageField',
}

export const ruledTitlePlugin = {
  Component: RuledTitle,
  __type: 'field',
  name: 'ruledTitle',
}