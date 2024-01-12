import { InputHTMLAttributes } from 'react';

const Input = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  /**
   * input name would be used as id for the label
   * input placeholder would be used as label text
   */
  return (
    <div className="relative bg-background-lighter w-full">
      <input
        {...props}
        className="peer bg-transparent h-10 w-full rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
      />
      <label
        htmlFor={props.id}
        className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
      >
        {props.placeholder}
      </label>
    </div>
  );
};

export default Input;
