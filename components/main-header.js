
import Link from 'next/link';
import NavLink from './navLinks';

export default function MainHeader() {
  
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink link={'/news'}>news</NavLink>
          </li>
          <li>
            <NavLink link={'/archive'}>Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}