import { FileManagerStyled } from '../styles';

const FileManager = () => {
  const pages = ['Landing Page', 'Blog', 'Contact']; // Mock data
  return (
    <FileManagerStyled className="p-2 border-bottom">
      <h5>Pages</h5>
      <ul className="list-unstyled">
        {pages.map((page, index) => (
          <li key={index} className="p-1">{page}</li>
        ))}
      </ul>
    </FileManagerStyled>
  );
};

export default FileManager;