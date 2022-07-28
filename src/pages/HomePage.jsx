import { Link } from 'react-router-dom';
export const HomePage = () => {
  return (
    <>
      <section className="flex flex-col-reverse lg:flex-row w-full ">
        <div className="flex flex-col justify-center lg:w-1/2">
          <h1 className="lg:w-4/5 text-3xl lg:text-5xl  font-semibold text-left mb-7">
            Community as unique as its users
          </h1>
          <h2 className="text-2xl lg:text-4xl font-light mb-7">
            Learn. Enjoy. Explore the future of online communities
          </h2>
          <p className="lg:w-11/12 text-base lg:text-lg font-normal mb-7">
            Effectopia is a revolutionary virtual community; a
            real-time peer-to-peer collaboration platform for teachers
            and students powered by the #MassiveAdoption movement.
            Join the community and join us in our mission to provide
            diversity, individuality and freedom like never before.
          </p>
          <div className="flex flex-col lg:flex-row lg:w-11/12 gap-x-5 gap-y-5">
            <Link
              className="w-full h-11 text-orange-100 bg-orange-500 hover:bg-orange-600 focus:ring-1 focus:outline-none focus:ring-orange-400 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-3 md:mr-0"
              to="/membership"
            >
              Join us now
            </Link>
            <Link
              className="w-full h-11 text-orange-400 border border-orange-400 hover:border-orange-300 hover:text-orange-300 focus:ring-1 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-3 md:mr-0"
              to="/community"
            >
              Community access
            </Link>
          </div>
        </div>
        <div className="">
          <img className="" src="img/hero.svg" alt="hero image" />
        </div>
      </section>
    </>
  );
};
