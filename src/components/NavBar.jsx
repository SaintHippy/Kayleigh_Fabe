import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="Nav">
      <Link to="">
        <p className="NavLink">Gallery</p>
      </Link>
      <Link to="">
        <p className="NavLink">Videos</p>
      </Link>
      <Link to="">
        <p className="NavLink">Off The Shelf Gear</p>
      </Link>
      <Link to="">
        <p className="NavLink">Contact Kayleigh</p>
      </Link>
      <Link to="">
        <p className="NavLink">Request Your Gear</p>
      </Link>
      <Link to="">
        <p className="NavLink">Bio & links</p>
      </Link>
      <Link to="">
        <p className="NavLink">Log In/Sign Up</p>
      </Link>
      <Link to="">
        <p className="NavLink">Dark Mode button</p>
      </Link>
    </div>
  );
};

export default Nav;
