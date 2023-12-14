import React from 'react';
import DefaultPagination from 'styles/components/commons/PaginationStyles';

const Pagination = ({ count, onChange, defaultPage }) => (
  <DefaultPagination count={count} variant="outlined" shape="rounded" onChange={onChange} defaultPage={defaultPage} />
);

export default Pagination;
