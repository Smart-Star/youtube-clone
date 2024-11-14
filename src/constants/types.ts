import { ElementType } from 'react';

export type CategoriesType = string[];

export type VideoType = {
  id: string;
  title: string;
  channel: {
    name: string;
    id: string;
    profileUrl: string;
  };
  views: number;
  postedAt: Date;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
};

export type SmallSidebarIconsType = {
  id: number;
  Icon: ElementType;
  title: string;
  url: string;
};

export type LargeSidebarIconsType = {
  id: number;
  itemCount?: number;
  header?: string;
  links: {
    id: string;
    IconOrImgUrl: ElementType | string;
    title: string;
    url: string;
    isActive: boolean;
  }[];
};

export type SubscriptionsType = {
  channelName: string;
  id: string;
  imgUrl: string;
};

export type PlaylistsType = {
  id: string;
  name: string;
};

/* 
IconOrImgUrl:
  | React.ForwardRefExoticComponent<
      Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
    >
  | string;
*/
