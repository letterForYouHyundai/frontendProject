// HeaderStyles.js
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  /* Default NavLink style */
  color: #000; // Example default color
  text-decoration: none;
`;

export const DivWrapper = styled.div`
  background-color: var(--j-i9-zww);
  height: 120px;
  position: relative;
  width: 100%; // Set to full width

  @media (max-width: 768px) {
    height: 80px; // Adjust height for smaller screens
  }
`;

export const VectorImg = styled.img`
  height: 1px;
  left: 135px;
  object-fit: cover;
  position: absolute;
  top: 120px;
  width: 1650px;
`;

export const TextWrapper = styled.div`
  color: #000000;
  font-family: "GungSeo-Regular", Helvetica;
  font-size: 48px;
  font-weight: 400;
  height: 48px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  white-space: nowrap;
  left: 50%;
  transform: translateX(-50%); // Center align on all screen sizes

  @media (max-width: 768px) {
    font-size: 24px; // Smaller font for smaller screens
  }
`;

export const DivText = styled.div`
  color: #000000;
  font-family: "GungSeo-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  height: 20px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 48px;
  white-space: nowrap;
  left: calc(50% + 200px); // Adjust based on screen size

  @media (max-width: 1024px) {
    left: calc(50% + 100px); // Adjust position for medium screens
  }

  @media (max-width: 768px) {
    left: calc(50% + 50px); // Adjust position for small screens
    font-size: 16px; // Smaller font for smaller screens
  }
`;

// ... similar adjustments for other styled components

export const Ellipse = styled.div`
  // ... Ellipse styles
  // Adjust position or size as needed for responsiveness
`;

export const LoginText = styled(DivText)`
  font-size: 1.5rem; // Using rem instead of px
  left: calc(100% - 117px); // Example of using percentage with a slight adjustment
`;

export const TemplateText = styled(DivText)`
  left: 75%; // Adjusted to percentage
`;

export const MyPageText = styled(DivText)`
  left: 85%; // Adjusted to percentage
`;

export const LetterWriteText = styled(DivText)`
  left: 68%; // Adjusted to percentage
`;
