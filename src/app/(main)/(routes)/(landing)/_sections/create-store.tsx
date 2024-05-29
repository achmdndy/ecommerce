import { Button } from '@/components/ui/button';

export default function CreateStore() {
  return (
    <div className="aurora-py-4">
      <div className="aurora-border aurora-rounded-lg aurora-flex aurora-items-center aurora-justify-center aurora-flex-col aurora-gap-2 aurora-py-10">
        <h1 className="aurora-font-bold aurora-text-lg">
          Ingin Ekspansi Bisnis Anda? Buka Toko di &quot;NAMA TOKO&quot;
          Sekarang!
        </h1>
        <p className="aurora-text-sm aurora-text-gray-500">
          Mudah, nyaman dan bebas Biaya Layanan Transaksi.{' '}
          <b className="aurora-text-gray-900">GRATIS!</b>
        </p>

        <div>
          <Button>Buka Toko</Button>
          <Button variant="link">Pelajari lebih lanjut</Button>
        </div>
      </div>
    </div>
  );
}
