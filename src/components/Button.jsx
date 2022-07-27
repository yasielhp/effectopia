export const Button = ({
  title,
  onClick,
  disabled = false,
  style = '',
  type = 'button',
}) => {
  return (
    <button
      className={`w-full h-11 text-orange-100 bg-orange-500 hover:bg-orange-600 focus:ring-1 focus:outline-none focus:ring-orange-400 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-3 md:mr-0 ${style}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {title}
    </button>
  );
};
