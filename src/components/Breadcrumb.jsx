import { BreadcrumbStyled } from '../styles';

const Breadcrumb = ({ elements, onSelect }) => {
  return (
    <BreadcrumbStyled className="p-2 bg-light border-top">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">Page</li>
          {elements.map((el) => (
            <li key={el.id} className="breadcrumb-item" onClick={() => onSelect(el)}>
              {el.type}
            </li>
          ))}
        </ol>
      </nav>
    </BreadcrumbStyled>
  );
};

export default Breadcrumb;