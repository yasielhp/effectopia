import { shortenAddress } from '../helpers';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { Link } from 'react-router-dom';
export const MemberItem = ({ address, tokenAmount }) => {
  return (
    <div className="flex flex-row w-full overflow-hidden my-3 lg:my-3 lg:px-3 lg:w-1/3 xl:my-3 xl:px-3 xl:w-1/3 ">
      <div className="bg-neutral-600 rounded-lg flex justify-between w-full">
        <div className="flex flex-col justify-center items-center py-2 pl-4">
          <Jazzicon
            diameter={40}
            seed={jsNumberForAddress(address)}
            paperStyles={{
              borderRadius: '15%',
            }}
          />
        </div>
        <div className="flex flex-col justify-center p-3">
          <p className="text-sm lg:text-base font-semibold text-neutral-200">
            User address
          </p>
          <p className="text-xs lg:text-sm text-neutral-400">
            {shortenAddress(address)}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center bg-neutral-700 p-4">
          <p className="text-sm lg:text-base font-semibold text-neutral-200">
            Amount
          </p>
          <p className="text-xs lg:text-sm text-neutral-400 text-center">
            {Math.round(tokenAmount).toFixed(2)}
          </p>
        </div>
      </div>
      <Link
        className="flex rounded-r-lg items-center justify-center py-1 px-4 transition-colors duration-150 ease-in-out text-orange-100 bg-orange-500 hover:bg-orange-600 focus:ring-1 focus:outline-none focus:ring-orange-400 font-medium select-none"
        to="#"
      >
        View
      </Link>
    </div>
  );
};
