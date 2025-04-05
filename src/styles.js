import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex: 1;
`;

export const Col = styled.div`
  width: ${(props) => props.width || 'auto'};
  padding: 10px;
`;

export const ToolbarStyled = styled.div`
  background: #f8f9fa;
`;

export const Canvas = styled.div`
  min-height: 400px;
  background: #fff;
  overflow-y: auto;
`;

export const PropertiesPanelStyled = styled.div`
  background: #f8f9fa;
`;

export const FileManagerStyled = styled.div`
  background: #f8f9fa;
`;

export const ComponentTabsStyled = styled.div`
  background: #f8f9fa;
`;

export const BreadcrumbStyled = styled.div`
  background: #f8f9fa;
`;

export const Element = styled.div`
  padding: 10px;
  margin: 5px;
  background: #e9ecef;
  cursor: move;
  display: inline-block;
`;