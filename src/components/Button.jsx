
export const Button = ({title, onClick}) => {
  const styles = {
    button: `px-4 py-2 w-full transition duration-150 ease-in-out bg-orange-500 rounded-lg shadow-md text-neutral-900 border border-orange-500 shadow hover:text-neutral-800 hover:border-orange-700`,
  }
  return (
    <button
      className={styles.button}
      onClick={onClick}
      >
      {title}
    </button>
  )
}
