import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/commons/Header';

const PageLayout = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
