import classNames from 'classnames';
import React from 'react';

interface ButtonProps {
  content?: string | number;
  type?: 'outline' | 'primary';
}
const Button = (props: ButtonProps) => {
  return (
    <button
      className={classNames(
        'border-2 rounded-md outline-none px-4 py-6',
        props.type == 'outline' ? 'border-cyan-400' : 'bg-cyan-400'
      )}
      data-cy="button"
    >
      {props.content || 'No content'}
    </button>
  );
};

export default Button;
