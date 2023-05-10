import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className='flex h-24 flex-col justify-center bg-slate-700'>
      <nav className='container'>
        <ul className='flex items-center justify-center gap-12 text-sm'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/todos'>Todos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
