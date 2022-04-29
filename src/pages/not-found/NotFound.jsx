import { Link } from 'react-router-dom';

function NotFound(props) {
  return (
    <div>
      Такой страницы не существует Вернуться <Link to="/">назад</Link>
    </div>
  );
}

export default NotFound;
