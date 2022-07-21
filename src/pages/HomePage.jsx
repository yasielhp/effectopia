
import { Link } from 'react-router-dom';
export const HomePage = () => {
  const styles = {
    hero: ``,
  }
  return (
    <>
      <section className="flex flex-row h-full py-10">
        <div className="w-1/2 flex flex-col pt-16 justify-end">
          <h1 className="text-5xl font-semibold mb-7 w-4/5 text-left">Community as unique as its users</h1>
          <h2 className="text-4xl font-light mb-7">Learn. Enjoy. Explore the future of online communities</h2>
          <p className="w-11/12 text-lg font-normal mb-7">Effectopia is a revolutionary virtual community; a real-time peer-to-peer collaboration platform for teachers and students powered by the #MASSIVEADOPTION movement. Join the community and join us in our mission to provide diversity, individuality and freedom like never before.</p>
          <div className='w-11/12 flex flex-row gap-x-5'>
            <Link className='px-4 py-2 leading-loose text-center w-full transition duration-150 ease-in-out bg-orange-500 rounded-lg border border-orange-500 text-neutral-900 hover:text-neutral-800 hover:border-orange-700' to="/community">Community access</Link>
            <Link className='px-4 py-2 leading-loose text-center w-full transition duration-150 ease-in-out rounded-lg border text-neutral-100 hover:text-orange-600 hover:border-orange-600' to="/member">Join us now</Link></div>
        </div>
        <div className="w-1/2">
          <img className='w-full h-full select-none pointer-events-none' src='img/hero.svg' alt='hero image' />
        </div>
      </section>
    </>

  )
}



