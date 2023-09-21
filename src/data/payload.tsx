import ActionButton from '../ActionButton';
import { FormElementType, IconType } from '../FormElementType';
import { v4 as uuid } from 'uuid';

const generateSection = (id, parentId) => ({
  id,
  parentId,
  name: `Section`,
  type: 'section',
  actionPanel: [
    {
      id: uuid(),
      parentId: id,
      elementType: 'switch',
      label: 'Auto Negotiation',
      name: `autonegotiation_${id}`,
      type: 'field',
      elementProps: {},
      dependant: {
        isDependant: false,
        fieldName: '',
      },
      rules: [
        {
          required: true,
          message: 'This is required',
        },
      ],
    },
  ],
  config: {
    removeConfig: {
      show: true,
      template: (onClickHandler, props) => (
        <ActionButton
          label=""
          type={IconType.REMOVE}
          onClick={onClickHandler}
          {...props}
        />
      ),
    },
  },
});

const generateInputField = (id, parentId) => ({
  id,
  parentId,
  name: `INPUT`,
  type: 'field',
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
      message: 'This is required',
    },
  ],
});

const generateSelectField = (id, parentId) => ({
  id,
  parentId,
  name: `SELECT`,
  type: 'field',
  elementType: FormElementType.Select,
  parentField: true,
  elementProps: {},
  dependant: {
    isDependant: false,
    fieldName: '',
  },
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
  rules: [
    {
      required: true,
      message: 'This is required',
    },
  ],
});

const generateMultiSelectField = (id, parentId) => ({
  id,
  parentId,
  name: `MULTISELECT`,
  type: 'field',
  elementType: FormElementType.MultiSelect,
  parentField: true,
  elementProps: {},
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
  dependant: {
    isDependant: false,
    fieldName: '',
  },
  rules: [
    {
      required: true,
      message: 'This is required',
    },
  ],
});

export const initialData1: any[] = [
  {
    id: 0,
    parentId: null,
    name: 'section0',
    type: 'section',
    actionPanel: [
      {
        id: 119,
        parentId: 0,
        elementType: 'switch',
        label: 'Auto Negotiation',
        name: 'autonegotiation',
        type: 'field',
        elementProps: {},
        dependant: {
          isDependant: false,
          fieldName: '',
        },
        rules: [
          {
            required: true,
            message: 'This is required',
          },
        ],
      },
    ],
    config: {
      removeConfig: {
        show: true,
        template: (onClickHandler, props) => (
          <ActionButton
            label=""
            type={IconType.REMOVE}
            onClick={onClickHandler}
            {...props}
          />
        ),
      },
    },
  },
  {
    id: 1,
    parentId: null,
    name: 'section1',
    type: 'section',
    actionPanel: [
      {
        id: 120,
        parentId: 1,
        elementType: 'switch',
        label: 'Auto Negotiation',
        name: 'autonegotiation',
        type: 'field',
        elementProps: {},
        dependant: {
          isDependant: false,
          fieldName: '',
        },
        rules: [
          {
            required: true,
            message: 'This is required',
          },
        ],
      },
    ],
    config: {
      removeConfig: {
        show: true,
        template: (onClickHandler, props) => (
          <ActionButton
            label=""
            type={IconType.REMOVE}
            onClick={onClickHandler}
            {...props}
          />
        ),
      },
    },
  },
  {
    id: 2,
    parentId: 0,
    name: 'name02',
    type: 'field',
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
        message: 'This is required',
      },
    ],
  },
  {
    id: 3,
    parentId: 0,
    name: 'name03',
    type: 'field',
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
        message: 'This is required',
      },
    ],
  },
  {
    id: 4,
    parentId: 0,
    name: 'name14',
    type: 'section',
    config: {
      removeConfig: {
        show: true,
        template: (onClickHandler, props) => (
          <ActionButton
            label=""
            type={IconType.REMOVE}
            onClick={onClickHandler}
            {...props}
          />
        ),
      },
    },
  },
  {
    id: 5,
    parentId: 4,
    name: 'name45',
    type: 'field',
    elementType: FormElementType.Select,
    parentField: true,
    elementProps: {},
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    dependant: {
      isDependant: false,
      fieldName: '',
    },
    rules: [
      {
        required: true,
        message: 'This is required',
      },
    ],
  },
  {
    id: 6,
    parentId: 4,
    name: 'name46',
    type: 'field',
    elementType: FormElementType.MultiSelect,
    parentField: true,
    elementProps: {},
    dependant: {
      isDependant: false,
      fieldName: '',
    },
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    rules: [
      {
        required: true,
        message: 'This is required',
      },
    ],
  },
  {
    id: 7,
    parentId: 1,
    name: 'name17',
    type: 'field',
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
        message: 'This is required',
      },
    ],
  },
  {
    id: 8,
    parentId: 1,
    name: 'name18',
    type: 'field',
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
        message: 'This is required',
      },
    ],
  },
];

export const config = {
  resetConfig: {
    show: true,
    template: (onClickHandler, props) => (
      <ActionButton
        label="Reset Form"
        type={IconType.RESET}
        onClick={onClickHandler}
        {...props}
      />
    ),
  },
  addConfig: {
    show: true,
    template: (onClickHandler, ...props) => (
      <ActionButton
        label="Add Section"
        type={IconType.ADD}
        onClick={onClickHandler}
        {...props}
      />
    ),
  },
  // formLayoutCls: 'form-list-wrapper',
  formLayoutCls: null,
};

const generateChildData = (parentId, levels) => {
  if (levels === 0) {
    return [];
  }

  const newId = uuid();
  const data = [
    generateSection(newId, parentId),
    generateInputField(uuid(), newId),
    generateSelectField(uuid(), newId),
    generateMultiSelectField(uuid(), newId),
  ];

  // Recursively generate child data with one less level
  const childData = generateChildData(newId, levels - 1);

  return [...data, ...childData];
};

export const generateRowWithChildData = (parentId, levels) => {
  const data = [
    generateSection(parentId, null),
    generateInputField(uuid(), parentId),
    generateSelectField(uuid(), parentId),
    generateMultiSelectField(uuid(), parentId),
  ];

  const childData = generateChildData(parentId, levels);

  return [...data, ...childData];
};

export const initialData = (function generateRandomInitialData(count) {
  return Array(count)
    .fill(0)
    .reduce((acc, el) => {
      const newSectionId = uuid();
      return [...acc, ...generateRowWithChildData(newSectionId, 3)];
    }, []);
})(3);
