import React from 'react';
import Link from 'next/link';

const MainLayout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          {/* Adicione mais itens de menu conforme necessário */}
        </ul>
      </nav>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};


export default MainLayout;
