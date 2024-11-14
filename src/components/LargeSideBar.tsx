import { Children, ReactNode, useState } from 'react';
import { Button } from './Button';
import { ChevronDown, ChevronUp } from 'lucide-react';

type Props = {
  title?: string;
  itemCount?: number;
  children: ReactNode;
};

export const LargeSideBar = ({
  title,
  children,
  itemCount = Number.POSITIVE_INFINITY,
}: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const childrenArray = Children.toArray(children).flat();
  const visibleChildren = isExpanded
    ? childrenArray
    : childrenArray.slice(0, itemCount);

  return (
    <>
      {title && <h2 className="text-base mt-1">{title}</h2>}

      {visibleChildren}

      {childrenArray.length > itemCount && (
        <Button
          variant="ghost"
          className="flex items-center p-2 gap-3 w-full"
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          {!isExpanded ? (
            <ChevronDown className="size-5" />
          ) : (
            <ChevronUp className="size-5" />
          )}
          {!isExpanded ? 'Show More' : 'Show Less'}
        </Button>
      )}
    </>
  );
};
