
export const Button = ({title, onClick}) => {
  const styles = {
    button: `px-4 py-2 w-full transition duration-300 ease-in-out delay-150 bg-orange-500 rounded-lg hover:bg-orange-600 text-neutral-800 shadow hover:text-neutral-900 hover:shadow-orange-500`,
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
