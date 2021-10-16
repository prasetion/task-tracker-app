import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <p>Copyrigth &copy; 2021</p>
      <Link to="/about">About</Link>
    </footer>
  );
};

export default Footer;
