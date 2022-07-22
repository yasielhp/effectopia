
export const Button = ({title, onClick}) => {
  const styles = {
    button: `px-4 py-2 w-full rounded-lg font-semibold  transition-colors duration-150 ease-in-out text-orange-900 hover:text-orange-200 bg-orange-600 hover:bg-orange-800 font-semibold `,
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
