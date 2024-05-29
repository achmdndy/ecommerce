import { Button } from '@/components/ui/button';
import { FaChevronDown, FaMapMarkerAlt } from 'react-icons/fa';

export default function NavbarSentToLocation() {
  return (
    <>
      <Button
        variant="link"
        size="sm"
        className="!aurora-gap-x-1 !aurora-text-gray-500 !aurora-text-xs hover:!aurora-no-underline"
      >
        <FaMapMarkerAlt />
        <span>Dikirim ke</span>
        <span className="aurora-text-gray-900 aurora-font-bold aurora-flex aurora-items-center aurora-gap-x-1">
          Nama Lokasi <FaChevronDown />
        </span>
      </Button>
    </>
  );
}
