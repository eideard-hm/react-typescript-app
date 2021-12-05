import logo from "../logo.svg";

interface Props {
  brand?: string;
}

const Navbar = ({ brand }: Props) => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src={logo} alt="react logo" style={{ width: "4rem" }} />
          {brand}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
