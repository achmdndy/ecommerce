import Image from 'next/image';

export function NavbarLogo() {
  return (
    <div>
      <Image
        src="/favicon.ico"
        alt="Aurora Store - Logo"
        width={75}
        height={75}
        priority
      />
    </div>
  );
}
