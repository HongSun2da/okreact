import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/">Home</Link> |{' '}
      <Link to="/about">About</Link> |{' '}
      <Link to="/pages/contact">Contact</Link> |{' '}
      <Link to="/pages/mypage">MyPage</Link> |{' '}
      <Link to="/pages/ajaxtest">AjaxTest</Link> |{' '}
      <a href="/">old tag</a>
    </header>
  );
}

export default Header;
