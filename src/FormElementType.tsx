import React from 'react';
import {
  Form,
  Input,
  Button,
  Collapse,
  Switch,
  Select,
  Checkbox,
  Radio,
  DatePicker,
  TimePicker,
  Upload,
  // Icon,
  AutoComplete,
} from 'antd';

export enum IconType {
  ADD = 'plus',
  REMOVE = 'close',
  RESET = 'reload',
}

export enum FormElementType {
  Input = 'input',
  Select = 'select',
  MultiSelect = 'multiselect',
  Switch = 'switch',
  Checkbox = 'checkbox',
  Radio = 'radio',
  TextArea = 'textarea',
  DatePicker = 'datepicker',
  TimePicker = 'timepicker',
  TagInput = 'taginput',
  FileUpload = 'fileupload',
  Slider = 'slider',
  AutoComplete = 'autocomplete',
  Text = 'text',
}

export function getFieldElement({ formElement, handleFieldChange }) {
  const { Option } = Select;
  const { elementType, label, name, elementProps = {} } = formElement;

  const options = 'options' in formElement ? formElement.options : [];

  const commonProps = {
    value: formElement.elementProps?.value,
    onChange: (value, event?) =>
      handleFieldChange({
        value: value,
        node: formElement,
        event,
      }),
  };

  switch (elementType) {
    case FormElementType.Input:
      return (
        <Input
          value={elementProps?.value}
          onChange={(e) =>
            handleFieldChange({
              value: e.target.value,
              node: formElement,
              event: e,
            })
          }
          {...elementProps}
        />
      );

    case FormElementType.Select:
      return (
        <Select {...commonProps} {...elementProps}>
          {options?.map((option, optionIndex) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      );

    case FormElementType.MultiSelect:
      return (
        <Select mode="multiple" {...commonProps} {...elementProps}>
          {options?.map((option, optionIndex) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      );

    case FormElementType.Switch:
      return (
        <Switch
          checked={elementProps?.value}
          {...commonProps}
          {...elementProps}
        />
      );

    case FormElementType.Checkbox:
      return (
        <Checkbox.Group
          options={options}
          value={elementProps?.value}
          {...commonProps}
          {...elementProps}
        />
      );
    case FormElementType.Radio:
      return (
        <Radio.Group
          options={options}
          value={elementProps?.value}
          // onChange={(e) =>
          //   handleFieldChange({
          //     value: e.target.value,
          //     parentIndex,
          //     childIndex,
          //     fieldName: name,
          //   })
          // }
          {...elementProps}
        />
      );

    case FormElementType.TextArea:
      const { TextArea } = Input;
      return (
        <TextArea
          value={elementProps?.value}
          // onChange={(e) =>
          //   handleFieldChange({
          //     value: e.target.value,
          //     parentIndex,
          //     childIndex,
          //     fieldName: name,
          //   })
          // }
          {...elementProps}
        />
      );

    case FormElementType.DatePicker:
      return (
        <DatePicker
          value={elementProps?.value}
          {...commonProps}
          {...elementProps}
        />
      );

    case FormElementType.TimePicker:
      return (
        <TimePicker
          value={elementProps?.value}
          {...commonProps}
          {...elementProps}
        />
      );

    case FormElementType.TagInput:
      return (
        <Select
          mode="tags"
          value={elementProps?.value}
          {...commonProps}
          {...elementProps}
        >
          {options.map((tag, tagIndex) => (
            <Option key={tagIndex} value={tag}>
              {tag}
            </Option>
          ))}
        </Select>
      );

    case FormElementType.FileUpload:
      return (
        <Upload>
          <Button>
            <Icon type="upload" /> {label}
          </Button>
        </Upload>
      );

    case FormElementType.Slider:
      return (
        <>
          <Input
            type="range"
            min="0"
            max="100"
            step="1"
            value={elementProps?.value}
            // onChange={(e) =>
            //   handleFieldChange({
            //     value: e.target.value,
            //     parentIndex,
            //     childIndex,
            //     fieldName: name,
            //   })
            // }
            {...elementProps}
          />{' '}
          {label}{' '}
        </>
      );

    case FormElementType.AutoComplete:
      return (
        <AutoComplete
          dataSource={options}
          placeholder={`Select ${label}`}
          {...commonProps}
          {...elementProps}
        />
      );

    default:
      console.error('UNKNOWN FIELD TYPE: ', formElement.elementType);
      return null;
  }
}
