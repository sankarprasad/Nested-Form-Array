import React, { FC, useState } from 'react';
import 'antd/dist/antd.css';
import { useTreeStructure } from './useTreeStructure';
import { getFieldElement, IconType } from './FormElementType';
import { Form, Button, Collapse } from 'antd';
import './style.css';
import { generateRowWithChildData } from './data/payload';
import ActionButton from './ActionButton';
import { v4 as uuid } from 'uuid';

interface TreeNodeData {
  id: number;
  parentId: number | null;
  name: string;
  type: 'field' | 'section';
}

const FormExample: FC<any> = ({
  name,
  onSubmit,
  onSubmitFailed,
  initialData,
  config,
}) => {
  const {
    data,
    addField,
    addSection,
    resetSection,
    removeField,
    removeSection,
  } = useTreeStructure(initialData);

  const rowToBeAdded = (function () {
    const newSectionId = uuid();
    return generateRowWithChildData(newSectionId, 2);
  })();

  const [form] = Form.useForm();

  const [errorData, setErrorData] = useState({});

  const rootNodes = data.filter((node) => node.parentId === null);

  const buildNestedName = (node) => {
    const nameParts = [];
    nameParts.push(node.name);
    let parent = node;
    while (parent.parentId !== null) {
      parent = data.find((item) => item.id === parent.parentId);
      nameParts.unshift(parent.name);
    }
    return nameParts;
  };

  const handleFieldChange = ({ value, node, event = null }) => {
    event?.stopPropagation?.();
  };

  const renderElement = (node, props = {}) => {
    const fieldPrefix = 'uniquePrefix_' + node.id.slice(0, 6);
    // const fieldName = `${fieldPrefix}_${buildNestedName(node)}`;
    const fieldName = `${node.id}__${node.name}`;
    return (
      <Form.Item
        className="row"
        label={node.name}
        id={node.id}
        rules={node.rules}
        name={fieldName}
        validateTrigger={['onChange', 'onBlur']}
        initialValue={node.elementProps.value}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        {...props}
      >
        {getFieldElement({
          formElement: node,
          handleFieldChange,
        })}
      </Form.Item>
    );
  };

  const renderHeaderPanel = (node) => (
    <div className="header-wrapper">
      <span className="title">{node.name} </span>
      {/* {errorData && errorData[node.name] && (
        <span className="danger">{errorData[node.name]} Errors</span>
      )} */}
      <div className="action-panel-wrapper">
        {node.type === 'section' &&
          node.actionPanel &&
          node.actionPanel.length &&
          node.actionPanel.map((item) =>
            renderElement(item, {
              label: null,
              style: { marginBottom: 0 },
            })
          )}
        {node.type === 'section' &&
          node.config &&
          node.config.removeConfig &&
          node.config.removeConfig.show && (
            <div>
              {node.config.removeConfig.template(
                (e) => {
                  e?.stopPropagation?.();
                  removeSection(node.id);
                },
                {
                  disabled: false,
                }
              )}
            </div>
          )}
      </div>
    </div>
  );

  const renderSection = (node, level) => (
    <>
      <Collapse className="section-item">
        <Collapse.Panel
          header={renderHeaderPanel(node)}
          key={'sectionHeader' + node.id}
        >
          <div className="section-container">
            {data
              .filter((item) => item.parentId === node.id)
              .map((childNode) => (
                <TreeNode
                  key={childNode.id}
                  node={childNode}
                  level={level + 1}
                />
              ))}
          </div>
        </Collapse.Panel>
      </Collapse>
    </>
  );

  const renderField = (node) => (
    <div className="field-item" id={node.id}>
      <pre>{node.id}</pre>
      <div>{renderElement(node)}</div>
    </div>
  );

  const renderFormActionPanel = () => (
    <div className="form-action-panel">
      {config.resetConfig.show && config.resetConfig.template && (
        <div>
          {config.resetConfig.template(() => resetSection(form), {
            disabled: false,
          })}
        </div>
      )}
      {config.addConfig.show ? (
        config.addConfig.template ? (
          <div>
            {config.addConfig.template(() => addSection(null, rowToBeAdded))}
          </div>
        ) : (
          <div>
            <ActionButton
              label="Add Section"
              type={IconType.ADD}
              onClick={() => addSection(null, rowToBeAdded)}
            />
          </div>
        )
      ) : (
        <></>
      )}
    </div>
  );

  const TreeNode = ({ node, level }) => {
    if (node.type === 'section') {
      return renderSection(node, level);
    } else {
      return renderField(node);
    }
  };

  const onFinish = (values) => {
    console.log(values);
    onSubmit(Object.values(values));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    // onSubmitFailed(errorInfo);
    let errors = {};
    for (let i = 0; i < errorInfo.errorFields.length; i++) {
      const f = errorInfo.errorFields[i];
      if (f.errors.length > 0) {
        errors[f.name.join('-')] = f.errors;
      }
    }
    const counts = {};
    for (const key in errors) {
      const parts = key.split('-');
      const prefix = parts[0];

      if (!counts[prefix]) {
        counts[prefix] = 0;
      }

      counts[prefix] += errors[key].length;
    }
    console.log(counts);
    setErrorData(counts);
  };

  return (
    <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <h1>Form Array Demo</h1>

      {renderFormActionPanel()}

      <div className={config?.formLayoutCls ?? 'default-form-list-wrapper'}>
        {rootNodes.map((node) => (
          <TreeNode key={node.id} node={node} level={0} />
        ))}
      </div>
      <div className="submit">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};
export default FormExample;
