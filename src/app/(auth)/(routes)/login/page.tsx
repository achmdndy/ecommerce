'use client';

import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="aurora-flex aurora-items-center aurora-justify-center aurora-min-h-screen">
      <div>
        <div className="aurora-rounded-lg aurora-shadow-lg aurora-px-10 aurora-py-14 aurora-min-w-[350px]">
          <div className="aurora-flex aurora-items-end aurora-justify-between">
            <h1 className="aurora-text-2xl aurora-font-bold">Masuk</h1>

            <Link href={'/register'} className="aurora-text-sm">
              Daftar
            </Link>
          </div>

          <div className="aurora-mt-8"></div>
          <div className="aurora-mt-4">
            <Separator />
            <span>atau masuk dengan</span>
            <Separator />
          </div>
          <div className="aurora-mt-4"></div>
        </div>
      </div>
    </div>
  );
}
