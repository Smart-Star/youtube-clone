import { ElementType } from 'react';
import { buttonStyles } from './Button';
import { twMerge } from 'tailwind-merge';

type Props = {
  IconOrImgUrl: ElementType | string;
  title: string;
  url: string;
  isActive: boolean;
};

export const LargeSideBarItem = ({
  IconOrImgUrl,
  title,
  url,
  isActive,
}: Props) => {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: 'ghost' }),
        `w-full flex items-center gap-3 p-2 pl-3 ${isActive && 'font-semibold bg-secondary hover:bg-secondary-hover'}`
      )}
    >
      {typeof IconOrImgUrl === 'string' ? (
        <img src={IconOrImgUrl} className="size-5 rounded-full" />
      ) : (
        <IconOrImgUrl className="size-5 flex-shrink-0" />
      )}
      <span className="whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </span>
    </a>
  );
};
