import { Link } from "react-router-dom";

function Nav({ names=["Whiskey", "Duke", "Perry"] }) {
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
