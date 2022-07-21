import { Link } from 'react-router-dom'
export const ItemAction = ({title, description,icon,textButton}) => {
  return (
    <div className='flex flex-col p-4'>
      <div className='p-4 border-b border-orange-600'>
        <img className='bg-neutral-600 p-2 rounded-lg' src={icon} alt={title}/>
        <p>{title}</p>
        <p>{description}</p>
      </div>
      <Link className='px-4 py-2 leading-loose text-center w-full transition duration-150 ease-in-out bg-orange-500 rounded-lg border border-orange-500 text-neutral-900 hover:text-neutral-800 hover:border-orange-700' to='/'>{textButton}</Link>
    </div>
  )
}
