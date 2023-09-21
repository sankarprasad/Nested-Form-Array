import { FormElementType } from './FormElementType';

export const response = {
  type: 'field',
  label: 'Name',
  name: 'name',
  elementType: FormElementType.Input,
  parentField: true,
  elementProps: {},
  dependant: {
    isDependant: false,
    fieldName: '',
  },
  rules: [
    {
      required: true,
      message: 'Please enter a number between 0 and 100',
    },
  ],
};
