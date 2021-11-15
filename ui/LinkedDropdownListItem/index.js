import Link from 'next/link';

export default function DropdownListItem ({ children, className }) {
  return (
    <Link href="/#">
      <a className={`block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 hover:text-gray-900 hover:bg-gray-200 border-solid border-b ${className}`} href="#">
        {children}
      </a>
    </Link>
  )
}