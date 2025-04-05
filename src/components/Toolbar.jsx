import { ToolbarStyled } from '../styles';

const Toolbar = ({ onUndo, onExport, setViewport, setZoom, toggleFullscreen }) => {
  return (
    <ToolbarStyled className="d-flex justify-content-between p-2 bg-light border-bottom">
      <div>
        <button className="btn btn-outline-secondary me-2" onClick={onUndo}>Undo</button>
        <button className="btn btn-outline-primary me-2" onClick={onExport}>Export</button>
        <button className="btn btn-outline-primary" onClick={toggleFullscreen}>
          {document.fullscreenElement ? 'Exit Fullscreen' : 'Fullscreen'}
        </button>
      </div>
      <div>
        <button className="btn btn-outline-secondary me-2" onClick={() => setViewport('mobile')}>Mobile</button>
        <button className="btn btn-outline-secondary me-2" onClick={() => setViewport('tablet')}>Tablet</button>
        <button className="btn btn-outline-secondary me-2" onClick={() => setViewport('desktop')}>Desktop</button>
        <select className="form-select d-inline-block w-auto" onChange={(e) => setZoom(parseFloat(e.target.value))}>
          <option value="0.5">50%</option>
          <option value="1" selected>100%</option>
          <option value="1.5">150%</option>
        </select>
      </div>
    </ToolbarStyled>
  );
};

export default Toolbar;