import { useState } from 'react';
import DraggableComponent from './DraggableComponent';
import { ComponentTabsStyled } from '../styles';

const ComponentTabs = ({ onDrop }) => {
  const [activeTab, setActiveTab] = useState('components');
  const components = [
    { type: 'h1', content: 'Heading' },
    { type: 'p', content: 'Paragraph' },
    { type: 'button', content: 'Button', className: 'btn btn-primary' },
    { type: 'img', content: '', style: { width: '100px', height: '100px' } },
  ];
  const blocks = [
    { type: 'div', content: '<h2>Hero Title</h2><p>Hero description</p><button class="btn btn-primary">Click Me</button>', className: 'text-center p-3', block: true },
  ];

  return (
    <ComponentTabsStyled className="p-2">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'components' ? 'active' : ''}`} onClick={() => setActiveTab('components')}>
            Components
          </button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'blocks' ? 'active' : ''}`} onClick={() => setActiveTab('blocks')}>
            Blocks
          </button>
        </li>
      </ul>
      <div className="mt-2">
        {activeTab === 'components' &&
          components.map((comp, index) => (
            <DraggableComponent key={index} {...comp} />
          ))}
        {activeTab === 'blocks' &&
          blocks.map((block, index) => (
            <DraggableComponent key={index} {...block} />
          ))}
      </div>
    </ComponentTabsStyled>
  );
};

export default ComponentTabs;