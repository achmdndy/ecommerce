import Link from 'next/link';

export function NavbarTopKeyword() {
  return (
    <div className="aurora-flex aurora-items-center aurora-gap-x-2 aurora-mt-2">
      {[...Array(6)].map((_, index) => (
        <Link
          key={index}
          href={`/search?keyword=${index}`}
          className="aurora-text-xs aurora-text-gray-500 hover:aurora-text-gray-900"
        >
          Keyword {index}
        </Link>
      ))}
    </div>
  );
}
