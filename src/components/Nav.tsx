import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Nav() {
  const Nav = styled.nav`
    display: flex;

    justify-content: space-between;
    align-items: center;

    position: fixed;
    width: 100%;
    height: 50px;

    padding: 15px;

    background-color: blue;
    z-index: 1;
  `;

  return (
    <Nav className="nav">
      <div>
        <h2>shop</h2>
      </div>
      <div>
        <Link to="/cartlist">
          <button>장바구니</button>
        </Link>
        <Link to="/login">
          <button>로그인/로그아웃</button>
        </Link>
      </div>
    </Nav>
  );
}
