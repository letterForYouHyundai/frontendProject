import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/commons/Header';
import { WrapperDiv, ContentDiv } from 'styles/components/commons/WrapperStyles';

const PageLayout = ({ children }) => (
  <WrapperDiv>
    <ContentDiv>
      <Header />
      {children}
    </ContentDiv>
  </WrapperDiv>
);

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
