import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { IoNotificationsOutline } from 'react-icons/io5';

export function NavbarNotification() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="!aurora-rounded-full">
          <IoNotificationsOutline className="aurora-text-3xl" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56"></DropdownMenuContent>
    </DropdownMenu>
  );
}
