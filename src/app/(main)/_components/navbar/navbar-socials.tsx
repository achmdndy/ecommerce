import { FaFacebook, FaInstagram } from 'react-icons/fa';

export function NavbarSocials() {
  return (
    <div className="aurora-flex aurora-items-center aurora-text-sm aurora-gap-x-1">
      Ikuti kami di
      <div className="aurora-flex aurora-items-center aurora-gap-x-2 aurora-text-lg">
        <FaFacebook />
        <FaInstagram />
      </div>
    </div>
  );
}
