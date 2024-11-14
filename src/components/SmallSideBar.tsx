import { ElementType } from 'react';
import { twMerge } from 'tailwind-merge';
import { buttonStyles } from './Button';

type Props = {
  url: string;
  Icon: ElementType;
  title?: string;
};

export const SmallSideBar = ({ url, Icon }: Props) => {
  return (
    <a
      href={url}
      className={twMerge(buttonStyles({ variant: 'ghost' }), 'p-5')}
    >
      <Icon className="size-5 flex-shrink-0" />
    </a>
  );
};

/* <span className="whitespace-nowrap text-ellipsis">{title}</span> */
