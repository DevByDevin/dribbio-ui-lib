import React from 'react';
import clsx from 'clsx';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export const Input: React.FC<InputProps> = ({
  hasError = false,
  className,
  ...props
}) => {
  return (
    <input
      className={clsx(
        'px-3 py-2 border rounded w-full focus:outline-none focus:ring',
        hasError
          ? 'border-red-500 focus:ring-red-300'
          : 'border-gray-300 focus:ring-blue-300',
        className
      )}
      {...props}
    />
  );
};
