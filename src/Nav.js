import { Link } from "react-router-dom";

const dogs = ["Whiskey", "Duke", "Perry"]

function Nav({ names= dogs}) {
  return (
    <div className="Nav">
      {names.map(name => (
        <Link to={`/dogs/${name}`} key={name}>
          {name}
        </Link>
      ))}
    </div>
  );
}

export default Nav
