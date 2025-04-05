import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Toolbar from './components/Toolbar';
import FileManager from './components/FileManager';
import ComponentTabs from './components/ComponentTabs';
import DroppableCanvas from './components/DroppableCanvas';
import PropertiesPanel from './components/PropertiesPanel';
import Breadcrumb from './components/Breadcrumb';
import { Container, Row, Col } from './styles';

function App() {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [history, setHistory] = useState([]);
  const [viewport, setViewport] = useState('desktop');
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleDrop = (item) => {
    const newElement = { ...item, id: Date.now(), style: {} };
    setElements((prev) => [...prev, newElement]);
    setHistory((prev) => [...prev, elements]);
  };

  const handleSelect = (element) => {
    setSelectedElement(element);
  };

  const updateElement = (updatedProps) => {
    setElements((prev) =>
      prev.map((el) => (el.id === selectedElement.id ? { ...el, ...updatedProps } : el))
    );
    setSelectedElement((prev) => ({ ...prev, ...updatedProps }));
  };

  const undo = () => {
    if (history.length > 0) {
      setElements(history[history.length - 1]);
      setHistory((prev) => prev.slice(0, -1));
    }
  };

  const exportHTML = () => {
    const html = elements
      .map((el) =>
        el.type === 'img'
          ? `<${el.type} src="${el.content || 'https://via.placeholder.com/100'}" style="${Object.entries(el.style).map(([k, v]) => `${k}: ${v}`).join(';')}">`
          : `<${el.type} style="${Object.entries(el.style).map(([k, v]) => `${k}: ${v}`).join(';')}">${el.content || ''}</${el.type}>`
      )
      .join('\n');
    console.log(`<!DOCTYPE html><html><body><div class="container">\n${html}\n</div></body></html>`);
    alert('Check console for exported HTML');
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) document.documentElement.requestFullscreen();
    else document.exitFullscreen();
    setIsFullscreen(!isFullscreen);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Container>
        <Toolbar
          onUndo={undo}
          onExport={exportHTML}
          setViewport={setViewport}
          setZoom={setZoom}
          toggleFullscreen={toggleFullscreen}
        />
        <Row>
          <Col width="20%">
            <FileManager />
            <ComponentTabs onDrop={handleDrop} />
          </Col>
          <Col width="60%">
            <DroppableCanvas
              elements={elements}
              onDrop={handleDrop}
              onSelect={handleSelect}
              viewport={viewport}
              zoom={zoom}
            />
          </Col>
          <Col width="20%">
            {selectedElement && <PropertiesPanel element={selectedElement} onUpdate={updateElement} />}
          </Col>
        </Row>
        <Breadcrumb elements={elements} onSelect={handleSelect} />
      </Container>
    </DndProvider>
  );
}

export default App;