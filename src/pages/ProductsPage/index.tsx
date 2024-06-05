import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 1000px;
  background-color: yellow;
  padding-top: 100px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  button {
    padding: 10px 20px;
    border: 1px solid black;
    background-color: white;
    cursor: pointer;
    &:hover {
      background-color: lightgray;
    }
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin: 10px;
  padding: 20px;
  border: 1px solid black;
  background-color: white;

  img {
    width: 100%;
    height: auto;
  }

  button {
    margin-top: 10px;
    padding: 10px 20px;
    border: none;
    background-color: blue;
    color: white;
    cursor: pointer;
    &:hover {
      background-color: darkblue;
    }
  }

  div {
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
  }
`;

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const getData = async (): Promise<Product[]> => {
  const data = await fetch('https://fakestoreapi.com/products').then(
    (response) => response.json()
  );
  return data;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setProducts(data);
      setFilteredProducts(data);
    };

    fetchData();
  }, []);

  const onClickFilter = (category: String) => {
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      const newProducts = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(newProducts);
    }
  };

  return (
    <ProductsContainer>
      <Title>상품 정보</Title>
      <ButtonGroup>
        <button onClick={() => onClickFilter('all')}>모두</button>
        <button onClick={() => onClickFilter('electronics')}>전자기기</button>
        <button onClick={() => onClickFilter('jewelery')}>쥬얼리</button>
        <button onClick={() => onClickFilter("men's clothing")}>
          남성의류
        </button>
        <button onClick={() => onClickFilter("women's clothing")}>
          여성의류
        </button>
      </ButtonGroup>
      <div>Showing: items</div>
      <CardContainer>
        {filteredProducts.map((product) => (
          <Card key={product.id}>
            <img src={product.image} alt={product.title} />
            <button>장바구니에 담기</button>
            <div>${product.price}</div>
          </Card>
        ))}
      </CardContainer>
    </ProductsContainer>
  );
}
