import clsx from 'clsx';

const variants = {
  primary: 'bg-primary-500 text-white shadow disabled:bg-gray-400',
  transparent: 'bg-white/25 text-white',
  white: 'bg-white text-primary-600 font-medium text-lg shadow'
};

const sizes = {
  small:  'px-4 py-2',
  medium: 'px-5 py-3',
  large:  'px-8 py-3',
  full:   'px-4 py-3 w-full'
};

export const Button = ({ children, variant, size, disabled, className }) => (
  <button
    disabled={disabled}
    className={clsx(
      'flex items-center justify-center rounded transition-colors',
      sizes[size],
      variants[variant],
      className
    )}
  >
    { children }
  </button>
)
