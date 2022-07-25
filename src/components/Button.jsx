export const Button = ({ title, onClick, disabled = false, style=""}) => {
  return (
    <button
      className={`px-4 py-2 w-full flex flex-row items-center justify-center rounded-lg transition-colors duration-150 ease-in-out text-orange-900 hover:text-orange-200 bg-orange-600 hover:bg-orange-800 font-semibold ${style}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  )
}
