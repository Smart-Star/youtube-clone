import { useState } from 'react';
import { Button } from '../components/Button';
import { ArrowLeft, Bell, Mic, Search, Upload, User } from 'lucide-react';
import { LeftTopNav } from '../components';

export const Header = () => {
  const [fullSearchWidth, setFullSearchWidth] = useState(false);

  return (
    <header className="flex justify-between items-center gap-10 lg:gap-20 py-2 px-1">
      <LeftTopNav fullSearchWidth={fullSearchWidth} />

      <form
        className={`flex-grow justify-center gap-4 ${fullSearchWidth ? 'flex' : 'hidden lg:flex'}`}
      >
        <Button
          size="icon"
          variant="ghost"
          className={fullSearchWidth ? 'block' : 'hidden'}
          onClick={() => setFullSearchWidth(false)}
        >
          <ArrowLeft />
        </Button>

        <div className="flex flex-grow max-w-[500px]">
          <input
            type="search"
            placeholder="Search"
            className="bg-transparent outline-none w-full rounded-l-full px-4 border border-secondary-border/70 shadow-inner focus:border-blue-500 duration-300"
          />
          <Button
            size="icon"
            type="submit"
            className="rounded-l-none w-9 pr-2.5 border border-secondary-border/70 border-l-0"
          >
            <Search />
          </Button>
        </div>

        <Button size="icon">
          <Mic />
        </Button>
      </form>

      <div className={`${fullSearchWidth ? 'hidden' : 'flex'} flex-shrink-0`}>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setFullSearchWidth(true)}
        >
          <Search />
        </Button>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Mic />
        </Button>

        <Button variant="ghost" size="icon">
          <Upload />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell />
        </Button>
        <Button variant="ghost" size="icon">
          <User />
        </Button>
      </div>
    </header>
  );
};
