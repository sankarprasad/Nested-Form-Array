import React from 'react';
import { Button } from 'antd';
import {
  DeleteOutlined,
  PlusOutlined,
  ReloadOutlined,
} from '@ant-design/icons';
import { IconType } from './FormElementType';

const ActionButton = ({ label, type, ...props }) => {
  return (
    <Button type="link" size="large" block {...props}>
      {type === IconType.REMOVE ? (
        <DeleteOutlined />
      ) : type === IconType.ADD ? (
        <PlusOutlined />
      ) : type === IconType.RESET ? (
        <ReloadOutlined />
      ) : (
        <PlusOutlined />
      )}

      {label}
    </Button>
  );
};

export default ActionButton;
