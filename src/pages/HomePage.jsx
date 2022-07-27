import { Link } from 'react-router-dom';
export const HomePage = () => {
  const styles = {
    hero: ``,
  };
  return (
    <>
      <section className="flex flex-row h-full py-10">
        <div className="flex flex-col justify-center w-1/2 pt-16">
          <h1 className="w-4/5 text-5xl font-semibold text-left mb-7">
            Community as unique as its users
          </h1>
          <h2 className="text-4xl font-light mb-7">
            Learn. Enjoy. Explore the future of online communities
          </h2>
          <p className="w-11/12 text-lg font-normal mb-7">
            Effectopia is a revolutionary virtual community; a
            real-time peer-to-peer collaboration platform for teachers
            and students powered by the #MASSIVEADOPTION movement.
            Join the community and join us in our mission to provide
            diversity, individuality and freedom like never before.
          </p>
          <div className="flex flex-row w-11/12 gap-x-5">
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
        <div className="w-1/2">
          <img
            className="w-full h-full pointer-events-none select-none"
            src="img/hero.svg"
            alt="hero image"
          />
        </div>
      </section>
    </>
  );
};
