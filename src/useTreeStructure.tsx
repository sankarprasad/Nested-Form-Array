import { useState } from 'react';

export function useTreeStructure(initialData) {
  const [data, setData] = useState(initialData);
  const addField = (parentId, field) => {
    const newFieldId = data.length;
    setData([
      ...data,
      {
        ...field,
      },
    ]);
  };

  const addSection = (parentId, section) => {
    setData([...data, ...section]);
  };

  const removeField = (fieldId) => {
    const modifiedData = data.filter((el) => el.id !== fieldId);
    setData(modifiedData);
  };

  const removeSection = (sectionId) => {
    const modifiedData = data.filter((el) => el.id !== sectionId);
    setData(removeRecursively(modifiedData, sectionId));
  };

  const removeRecursively = (modifiedData, id) => {
    for (let el of modifiedData) {
      if (el.parentId === id) {
        modifiedData = modifiedData.filter((el) => el.id !== id);
        removeRecursively(modifiedData, el.id);
      }
    }
    return modifiedData;
  };

  const resetSection = (form) => {
    // form.resetFields(); // This resets the fields
    // form.setFields({});
    setData(initialData);
    console.info('data', data);
  };

  // function createFormObject(data) {
  //   const formObject = {};

  //   for (const item of data) {
  //     if (item.parentId === null) {
  //       if (item.type === 'section') {
  //         formObject[item.name] = {};
  //       } else {
  //         formObject[item.name] = '';
  //       }
  //     } else {
  //     }
  //   }

  //   return formObject;
  // }

  return {
    data,
    addField,
    addSection,
    resetSection,
    removeField,
    removeSection,
    // formObject,
  };
}
