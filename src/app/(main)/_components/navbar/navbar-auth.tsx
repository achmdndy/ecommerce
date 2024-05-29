import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function NavbarAuth() {
  return (
    <div className="aurora-flex aurora-items-center aurora-gap-x-1">
      <Link href={'/login'}>
        <Button variant="outline" className="aurora-h-6 !aurora-text-xs">
          Masuk
        </Button>
      </Link>
      <Link href={'/register'}>
        <Button className="aurora-h-6 !aurora-text-xs">Daftar</Button>
      </Link>
    </div>
  );
}
