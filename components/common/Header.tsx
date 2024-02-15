'use client';
import Link from 'next/link';
const pages = ['Products'];
const settings = ['Profile', 'Dashboard', 'Logout'];

function Header() {
  return (
    <div className="bg-primary py-5">
      <div className='flex container mx-auto'>
      {pages.map((page) => (
        <Link href={`/${page.toLowerCase()}`} key={page} className="mr-4">
          {page}
        </Link>
      ))}
      </div>
    </div>
  );
}
export default Header;
