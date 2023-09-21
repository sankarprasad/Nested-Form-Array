import React, { FC, useState } from 'react';
import 'antd/dist/antd.css';
import './style.css';
import { initialData, config } from './data/payload';
import FormExample from './FormExample';

interface TreeNodeData {
  id: number;
  parentId: number | null;
  name: string;
  type: 'field' | 'section';
}

export const App: FC<any> = () => {
  const handleSubmit = () => {};
  const handleError = () => {};

  return (
    <FormExample
      name={name}
      onSubmit={handleSubmit}
      onSubmitFailed={handleError}
      initialData={initialData}
      config={config}
    />
  );
};
