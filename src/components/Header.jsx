import { Link  } from "react-router-dom";
function Header({ text }) {
  return (
    <header>
      <div className="container">
        <Link
          to={{
            pathname: "/",
            // search: '?sort=name',
            // hash: '#home',
          }}
        >
          <h2 className="font-bold text-[3rem]">{text}</h2>
        </Link>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
};
export default Header;
