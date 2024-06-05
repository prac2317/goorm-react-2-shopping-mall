import styled from 'styled-components';

export default function ProductsPage() {
  const ProductsContainer = styled.div`
    width: 100%;
    height: 1000px;
    background-color: yellow;
    padding-top: 100px;
  `;
  return (
    <ProductsContainer>
      <div>상품 정보</div>
    </ProductsContainer>
  );
}
