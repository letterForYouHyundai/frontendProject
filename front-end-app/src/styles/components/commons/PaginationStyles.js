import Pagination from '@mui/material/Pagination';
import styled from 'styled-components';

export const DefaultPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  button {
    border-radius: 0;
  }
  .MuiPaginationItem-root.Mui-selected {
    background-color: rgba(0, 0, 0, 1);
    color: white;
  }
`;

export default DefaultPagination;
