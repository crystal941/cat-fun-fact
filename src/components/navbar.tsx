import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link to="/"> Random Facts </Link>
      <Link to="/login"> Liked Facts </Link>
    </div>
  );
};
