import { useDrag } from 'react-dnd';
import { Element } from '../styles';

const DraggableComponent = ({ type, content, className, style, block }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'COMPONENT',
    item: { type, content, className, style, block },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  if (type === 'img') {
    return (
      <Element
        ref={drag}
        as={type}
        className={className}
        style={{ opacity: isDragging ? 0.5 : 1, ...style }}
        src={content || 'https://via.placeholder.com/100'}
      />
    );
  }

  return (
    <Element
      ref={drag}
      as={type}
      className={className}
      style={{ opacity: isDragging ? 0.5 : 1, ...style }}
      dangerouslySetInnerHTML={block ? { __html: content } : undefined}
    >
      {!block ? (content || type) : null} 
    </Element>
  );
};

export default DraggableComponent;