import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <section className="flex w-full justify-center items-center lg:py-11">
      <div className="flex flex-col justify-center items-center lg:w-1/2">
        <h1 className="w-full text-3xl lg:text-5xl font-semibold text-center">
          Lost in space?
        </h1>
        <img src="img/404.svg" alt="Error 404" />
        <p className="w-full text-center lg:text-lg font-normal mb-7">
          The page you requested could not be found
        </p>
        <Link
          className="w-full h-11 text-orange-100 bg-orange-500 hover:bg-orange-600 focus:ring-1 focus:outline-none focus:ring-orange-400 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-3 md:mr-0"
          to="/"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};
