import { Link } from 'react-router-dom';
export const ItemAction = ({
  title,
  description,
  icon,
  textButton,
  to,
}) => {
  return (
    <div className="flex p-6 flex-col items-center justify-center text-center w-full overflow-hidden  md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-5 xl:px-5 xl:w-1/4">
      <div className="flex flex-col items-center justify-center text-center">
        <img
          className="w-1/5 p-2 my-2 rounded-lg bg-neutral-600"
          src={icon}
          alt={title}
        />
        <p className="text-lg font-semibold mb-2 text">{title}</p>
        <p className="mb-4">{description}</p>
        <Link
          className="w-full h-11 text-orange-100 bg-orange-500 hover:bg-orange-600 focus:ring-1 focus:outline-none focus:ring-orange-400 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-3 md:mr-0"
          to={to}
        >
          {textButton}
        </Link>
      </div>
    </div>
  );
};
