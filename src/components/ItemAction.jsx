import { Link } from 'react-router-dom'
export const ItemAction = ({title, description,icon,textButton,to}) => {
  return (
    <div className='flex flex-col w-full p-4 px-1 my-1 overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-5 xl:px-5 xl:w-1/4'>
      <div className='flex flex-col items-center justify-center p-4 text-center'>
        <img className='w-1/6 p-2 my-2 rounded-lg bg-neutral-600' src={icon} alt={title}/>
        <p className='text-lg font-semibold'>{title}</p>
        <p>{description}</p>
      </div>
      <Link className='w-full px-4 py-2 leading-loose text-center transition duration-150 ease-in-out bg-orange-500 border border-orange-500 rounded-lg text-orange-900 hover:text-orange-700 hover:border-orange-700' to={to}>{textButton}</Link>
    </div>
  )
}
