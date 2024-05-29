import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';
import { helpAndGuidance, securityAndPrivacy, socials, store } from './data';

export default function Footer() {
  return (
    <footer className="aurora-px-24 aurora-pt-10 aurora-pb-16 aurora-border-t">
      <div className="aurora-flex aurora-flex-wrap aurora-flex-col aurora-max-h-[250px] aurora-gap-4 aurora-max-w-[1500px] aurora-mx-auto">
        <nav>
          <p className="aurora-text-lg aurora-font-bold aurora-text-gray-900">
            Toko
          </p>
          <ul>
            {store.map(({ label, href }, index) => (
              <li key={index} className="aurora-mt-1">
                <Link
                  href={href}
                  className="aurora-text-sm aurora-text-gray-500 hover:aurora-text-gray-900"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav>
          <p className="aurora-text-lg aurora-font-bold aurora-text-gray-900">
            Bantuan dan Panduan
          </p>
          <ul>
            {helpAndGuidance.map(({ label, href }, index) => (
              <li key={index} className="aurora-mt-1">
                <Link
                  href={href}
                  className="aurora-text-sm aurora-text-gray-500 hover:aurora-text-gray-900"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav>
          <p className="aurora-text-lg aurora-font-bold aurora-text-gray-900">
            Keamanan dan Privasi
          </p>
          <ul className="aurora-flex aurora-items-center aurora-gap-x-2">
            {securityAndPrivacy.map(({ href }, index) => (
              <li key={index} className="aurora-mt-1">
                <Link
                  href={href}
                  className="aurora-text-sm aurora-text-gray-500 hover:aurora-text-gray-900"
                >
                  <Skeleton className="aurora-h-[40px] aurora-w-[80px] !aurora-bg-gray-400 !aurora-rounded-lg" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav>
          <p className="aurora-text-lg aurora-font-bold aurora-text-gray-900">
            Ikuti Kami
          </p>
          <ul className="aurora-flex aurora-items-center aurora-gap-x-2">
            {socials.map(({ icon: Icon, href }, index) => (
              <li key={index} className="aurora-mt-1">
                <Link href={href}>
                  <Icon className="aurora-text-2xl" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="aurora-flex aurora-flex-col aurora-items-center aurora-justify-center">
          <Skeleton className="aurora-h-[150px] aurora-w-full !aurora-bg-gray-400 !aurora-rounded-lg" />
          <div className="aurora-flex aurora-items-center aurora-gap-x-2 aurora-w-full aurora-mt-2">
            <Skeleton className="aurora-h-[50px] aurora-w-full !aurora-bg-gray-400 !aurora-rounded-lg" />
            <Skeleton className="aurora-h-[50px] aurora-w-full !aurora-bg-gray-400 !aurora-rounded-lg" />
          </div>
          <span className="aurora-mt-4 aurora-font-bold aurora-text-gray-500">
            &copy; 2024, PT. TOKO.
          </span>
        </div>
      </div>
    </footer>
  );
}
