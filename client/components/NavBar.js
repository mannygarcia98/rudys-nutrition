import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <nav>
      <Link href="/">Rudy's Nutrition</Link>
      <ul>
        <li>
          <Link href="/posts">All posts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
