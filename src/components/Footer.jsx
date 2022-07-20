export const Footer = () => {
  const styles = {
    footer: `flex flex-col items-center justify-center py-2`,
    text:`text-xs select-none text-neutral-600`,
  }
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>Effectopia {year} © Copyright | Developer Yasielhp</p>
    </footer>
  )
}
