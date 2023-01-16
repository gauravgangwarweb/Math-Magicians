import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="px-5 py-2 bg-yellow-600 text-black">
      <nav className="text-center flex items-center justify-between">
        <h1 className="text-red-600 text-4xl">Math Magicians</h1>
        <div className="text-lg flex gap-10">
          <Link className="hover:text-red-600" to="/">HOME</Link>
          <Link className="hover:text-red-600" to="/calculator">CALCULATOR</Link>
          <Link className="hover:text-red-600" to="/quote">QUOTE</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;