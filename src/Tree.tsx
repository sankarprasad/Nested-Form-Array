// import { FC, useState } from 'react';

// interface TreeNodeData {
//   id: number;
//   parentId: number | null;
//   name: string;
//   type: 'field' | 'section';
// }

// const initialData: TreeNodeData[] = [
//   {
//     id: 0,
//     parentId: null,
//     name: 'nameX',
//     type: 'field',
//   },
//   {
//     id: 1,
//     parentId: null,
//     name: 'nameY',
//     type: 'field',
//   },
//   {
//     id: 2,
//     parentId: 0,
//     name: 'name02',
//     type: 'field',
//   },
//   {
//     id: 3,
//     parentId: 0,
//     name: 'name03',
//     type: 'section',
//   },
//   {
//     id: 4,
//     parentId: 1,
//     name: 'name14',
//     type: 'field',
//   },
//   {
//     id: 5,
//     parentId: 1,
//     name: 'name15',
//     type: 'section',
//   },
//   {
//     id: 6,
//     parentId: 3,
//     name: 'name36',
//     type: 'field',
//   },
//   {
//     id: 7,
//     parentId: 3,
//     name: 'name37',
//     type: 'section',
//   },
//   {
//     id: 8,
//     parentId: 7,
//     name: 'name78',
//     type: 'field',
//   },
// ];

// export const App: FC<{ name: string }> = ({ name }) => {
//   const [data, setData] = useState<TreeNodeData[]>(initialData);
//   console.info('logged');
//   const addField = (parentId: number) => {
//     const newFieldId = data.length;
//     setData([
//       ...data,
//       {
//         id: newFieldId,
//         parentId,
//         name: `New Field ${newFieldId}`,
//         type: 'field',
//       },
//     ]);
//   };

//   const addSection = (parentId: number) => {
//     const newSectionId = data.length;
//     setData([
//       ...data,
//       {
//         id: newSectionId,
//         parentId,
//         name: `New Section ${newSectionId}`,
//         type: 'section',
//       },
//     ]);
//   };

//   const resetSection = () => {
//     setData(initialData);
//   };

//   const TreeNode = ({ node, level }) => {
//     return (
//       <div>
//         <div style={{ marginLeft: `${level * 2}rem`, display: 'flex' }}>
//           {node.type === 'section' ? (
//             <div style={{ border: '1px solid' }}>{node.name}</div>
//           ) : (
//             <div>{node.name}</div>
//           )}
//           <button onClick={() => addField(node.id)}>Add Field</button>
//           <button onClick={() => addSection(node.id)}>Add Section</button>
//         </div>
//         {data
//           .filter((item) => item.parentId === node.id)
//           .map((childNode) => (
//             <TreeNode key={childNode.id} node={childNode} level={level + 1} />
//           ))}
//       </div>
//     );
//   };

//   // Find root nodes (items with no parent)
//   const rootNodes = data.filter((node) => node.parentId === null);

//   return (
//     <div>
//       <h1>Tree Structure</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//       <button onClick={() => addField(null)}>Add Field</button>
//       <button onClick={() => addSection(null)}>Add Section</button>
//       <button onClick={() => resetSection()}>Reset Section</button>
//       {rootNodes.map((node) => (
//         <>
//           <TreeNode key={node.id} node={node} level={0} />
//         </>
//       ))}
//     </div>
//   );
// };
// Create a custom hook for it

import { useTreeStructure } from './useTreeStructure'; // Replace with the correct path
import React, { FC, useState } from 'react';
interface TreeNodeData {
  id: number;
  parentId: number | null;
  name: string;
  type: 'field' | 'section';
}

const initialData: TreeNodeData[] = [
  {
    id: 0,
    parentId: null,
    name: 'nameX',
    type: 'field',
  },
  {
    id: 1,
    parentId: null,
    name: 'nameY',
    type: 'field',
  },
  {
    id: 2,
    parentId: 0,
    name: 'name02',
    type: 'field',
  },
  {
    id: 3,
    parentId: 0,
    name: 'name03',
    type: 'section',
  },
  {
    id: 4,
    parentId: 1,
    name: 'name14',
    type: 'field',
  },
  {
    id: 5,
    parentId: 1,
    name: 'name15',
    type: 'section',
  },
  {
    id: 6,
    parentId: 3,
    name: 'name36',
    type: 'field',
  },
  {
    id: 7,
    parentId: 3,
    name: 'name37',
    type: 'section',
  },
  {
    id: 8,
    parentId: 7,
    name: 'name78',
    type: 'field',
  },
];

export const App: FC<{ name: string }> = ({ name }) => {
  const { data, addField, addSection, resetSection } =
    useTreeStructure(initialData);

  const TreeNode = ({ node, level }) => {
    return (
      <div>
        <div style={{ marginLeft: `${level * 2}rem`, display: 'flex' }}>
          {node.type === 'section' ? (
            <div style={{ border: '1px solid' }}>{node.name}</div>
          ) : (
            <div>{node.name}</div>
          )}
          <button onClick={() => addField(node.id)}>Add Field</button>
          <button onClick={() => addSection(node.id)}>Add Section</button>
        </div>
        {data
          .filter((item) => item.parentId === node.id)
          .map((childNode) => (
            <TreeNode key={childNode.id} node={childNode} level={level + 1} />
          ))}
      </div>
    );
  };

  // Find root nodes (items with no parent)
  const rootNodes = data.filter((node) => node.parentId === null);

  return (
    <div>
      <h1>Tree Structure</h1>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <button onClick={() => addField(null)}>Add Field</button>
      <button onClick={() => addSection(null)}>Add Section</button>
      <button onClick={() => resetSection()}>Reset Section</button>
      {rootNodes.map((node) => (
        <>
          <TreeNode key={node.id} node={node} level={0} />
        </>
      ))}
    </div>
  );
};
