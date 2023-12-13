import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const DraggableDiv = styled.div`
  width: 100%;
  height: 15rem;
  border-bottom : 1px solid black;
  overflow-x: scroll;
  white-space: nowrap;
  cursor: grab;
  overflow-y: hidden;
  margin-bottom: 5rem;
  
  &:active {
    cursor: grabbing;
  }

  &::-webkit-scrollbar {
    height: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }
`;
