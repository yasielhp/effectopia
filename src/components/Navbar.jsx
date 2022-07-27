import { Link } from 'react-router-dom';
import { Button } from './';
import {
  useAddress,
  useMetamask,
  useDisconnect,
} from '@thirdweb-dev/react';

export const Navbar = () => {
  const address = useAddress();
  const metamask = useMetamask();
  const disconnect = useDisconnect();

  return (
    <header className="flex items-center p-6 justify-between">
      <input type="checkbox" id="menu" hidden className="peer" />
      <label
        htmlFor="menu"
        className="z-50 relative flex w-full flex-row justify-between items-center lg:hidden peer-checked:[&>.first]:hidden peer-checked:[&>.last]:block"
      >
        <Link
          className="flex cursor-pointer select-none hover:opacity-60 transition ease-in-ou"
          to="/"
        >
          <img
            className="w-10 h-10 mr-2"
            src="favicon.svg"
            alt="Logo Effectopia"
          />
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-9 h-9 first stroke-orange-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h8m-8 6h16"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="hidden w-9 h-9 last stroke-orange-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </label>
      <nav className="absolute top-0 left-0 right-0 z-40 hidden min-h-full pt-4 bg-neutral-900 peer-checked:block lg:block lg:static lg:bg-inherit lg:py-0 lg:min-h-0 bg-opacity-40 backdrop-blur-lg lg:backdrop-blur-0">
        <ul className=" flex flex-col items-center lg:items-start lg:flex-row font-medium  gap-y-1 gap-x-4">
          <li className="invisible sm:invisible md:invisible lg:invisible xl:visible 2xl:visible mx-10">
            <Link
              className="flex cursor-pointer select-none hover:opacity-60 transition ease-in-ou"
              to="/"
            >
              <img
                className="w-10 h-10 mr-2"
                src="favicon.svg"
                alt="Logo Effectopia"
              />
              <span className="self-center text-3xl font-medium text-orange-500 uppercase">
                Effectopia
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="block py-2 pr-4 pl-3 text-base text-orange-50 active:text-orange-800 hover:text-opacity-60 focus:text-orange-600 transition ease-in-out"
              to="/#effe"
            >
              What is EFFE?
            </Link>
          </li>
          <li>
            <Link
              className="block py-2 pr-4 pl-3 text-base text-orange-50 active:text-orange-800 hover:text-opacity-60 focus:text-orange-600 transition ease-in-out"
              to="/#features"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              className="block py-2 pr-4 pl-3 text-base text-orange-50 active:text-orange-800 hover:text-opacity-60 focus:text-orange-600 transition ease-in-out"
              to="/community"
            >
              Community
            </Link>
          </li>
          <li>
            {!address ? (
              <Button
                title="Connect metamask"
                style="w-auto"
                onClick={metamask}
              />
            ) : (
              <Button
                title="Disconnect"
                style="w-auto"
                onClick={disconnect}
              />
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};
