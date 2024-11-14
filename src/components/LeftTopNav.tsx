import { Menu } from 'lucide-react';
import { Button } from './Button';
import { logo } from '../assets';
import { useSideBarContext } from '../context/SideBarContext';

type Props = {
  fullSearchWidth: boolean;
};

export const LeftTopNav = ({ fullSearchWidth }: Props) => {
  const { toggle } = useSideBarContext();

  return (
    <div
      className={`flex-shrink-0 items-center gap-4 ${fullSearchWidth ? 'hidden' : 'flex'}`}
    >
      <Button variant="ghost" size="icon" onClick={toggle}>
        <Menu />
      </Button>

      <a href="/">
        <img src={logo} alt="logo" className="h-5" />
      </a>
    </div>
  );
};
