import React from "react";
import Link from "next/link"
//import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <li>
        <Link href="/">
          <a>Index</a>
        </Link>
      </li>
    </div>
  )
};

export default Navbar;