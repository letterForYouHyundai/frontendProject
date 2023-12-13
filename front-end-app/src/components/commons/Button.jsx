import React from 'react';
import * as StyledButton from 'styles/components/commons/ButtonStyles';

const Button = ({
  onClick, buttonStyle = 'default', style, children,
}) => (
  <>
    {buttonStyle === 'default' && <StyledButton.MyButton variant="outlined" style={style} onClick={onClick}>{children}</StyledButton.MyButton>}
    {buttonStyle === 'fill' && <StyledButton.FillButton variant="outlined" style={style} onClick={onClick}>{children}</StyledButton.FillButton>}
  </>
);

export default Button;
