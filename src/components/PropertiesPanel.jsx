import { PropertiesPanelStyled } from '../styles';

const PropertiesPanel = ({ element, onUpdate }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('style.')) {
      const styleKey = name.split('.')[1];
      onUpdate({ style: { ...element.style, [styleKey]: value } });
    } else {
      onUpdate({ [name]: value });
    }
  };

  return (
    <PropertiesPanelStyled className="p-3 border-start">
      <h5>Properties</h5>
      <div className="mb-3">
        <label className="form-label">Content</label>
        <input
          type="text"
          name="content"
          value={element.content || ''}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Background Color</label>
        <input
          type="color"
          name="style.backgroundColor"
          value={element.style?.backgroundColor || '#ffffff'}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Font Size (px)</label>
        <input
          type="number"
          name="style.fontSize"
          value={parseInt(element.style?.fontSize) || 16}
          onChange={handleChange}
          className="form-control"
        />
      </div>
    </PropertiesPanelStyled>
  );
};

export default PropertiesPanel;