import { Link } from 'react-router-dom'
export const ItemAction = ({title, description,icon,textButton}) => {
  return (
    <>
    <div className='bg-neutral-600 m-2 p-2 rounded-lg'>
      <p>{title}</p>
      <p>{description}</p>
      <img src={icon} />
      </div>
      <Link to='/'>{textButton}</Link>
    </>
  )
}
