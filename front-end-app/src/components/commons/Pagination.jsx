import React from 'react';
import DefaultPagination from 'styles/components/commons/PaginationStyles';

const Pagination = ({ count }) => (
  <DefaultPagination count={count} variant="outlined" shape="rounded" />
);

export default Pagination;
