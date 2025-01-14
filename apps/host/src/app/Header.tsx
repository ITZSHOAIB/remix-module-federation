import type * as React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          ModuleFed Dashboard
        </Link>
        <nav>
          <ul className="flex space-x-4 text-white">
            <li>
              <Link
                to="/remote1"
                className="hover:text-purple-200 transition-colors"
              >
                Remote 1
              </Link>
            </li>
            <li>
              <Link
                to="/remote2"
                className="hover:text-purple-200 transition-colors"
              >
                Remote 2
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
