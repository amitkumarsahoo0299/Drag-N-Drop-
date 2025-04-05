import { useDrop } from 'react-dnd';
import { Canvas } from '../styles';

const DroppableCanvas = ({ elements, onDrop, onSelect, viewport, zoom }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'COMPONENT',
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const getViewportWidth = () => {
    switch (viewport) {
      case 'mobile': return '100%';
      case 'tablet': return '768px';
      default: return '100%';
    }
  };

  return (
    <Canvas
      ref={drop}
      className="p-3 border"
      style={{ background: isOver ? '#e0f7fa' : '#fff', maxWidth: getViewportWidth(), transform: `scale(${zoom})`, transformOrigin: 'top left' }}
    >
      {elements.length === 0 && <p className="text-muted">Drop components here</p>}
      {elements.map((el) => (
        <div
          key={el.id}
          as={el.type}
          className={el.className}
          style={el.style}
          onClick={() => onSelect(el)}
          onDoubleClick={(e) => el.type === 'p' && e.target.setAttribute('contenteditable', true)}
          dangerouslySetInnerHTML={el.block ? { __html: el.content } : undefined}
        >
          {!el.block ? (el.content || el.type) : null}
        </div>
      ))}
    </Canvas>
  );
};

export default DroppableCanvas;