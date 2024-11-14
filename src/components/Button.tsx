import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export const buttonStyles = cva('transition-all duration-300', {
  variants: {
    variant: {
      default: 'bg-secondary hover:bg-secondary-hover',
      ghost: 'hover:bg-gray-100',
      dark: 'bg-secondary-dark hover:bg-secondary-dark-hover text-secondary',
    },

    size: {
      default: 'py-1 px-3 rounded-md whitespace-nowrap',
      icon: 'rounded-full size-8 flex items-center justify-center p-2',
    },
  },

  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

type Props = VariantProps<typeof buttonStyles> & ComponentProps<'button'>;

export const Button = ({ variant, size, className, ...props }: Props) => {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, size }), className)}
    />
  );
};
