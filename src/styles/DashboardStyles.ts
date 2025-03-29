import styled from "styled-components";

export const DashboardContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;
