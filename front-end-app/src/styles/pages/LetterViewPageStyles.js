import styled from 'styled-components';

export const PageTemplate = styled.div`
display: grid;
justify-content: center;
grid-template-columns: repeat(5, 1fr);
gap: 1rem;
width: 100%;
background-color: rgba(149, 99, 63, 0.5);
border-radius: 5px;
margin: 3rem auto 0;

@media (max-width: 1200px) {
  grid-template-columns: repeat(3, 1fr); // 3 columns for smaller screens
}

@media (max-width: 768px) {
  grid-template-columns: repeat(2, 1fr); // 2 columns for even smaller screens
}
`;

export const TitleText = styled.div`
color: black;
 font-size: 3rem;
 word-wrap: break-word;
 text-align: center;
 margin: 2rem;
`;
