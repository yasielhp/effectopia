import{ Button } from './'

export const Modal = ({ titleModal, textModal, textButton, actionButton }) => {
  const styles = {
    window: `w-full absolute top-0 right-0 backdrop-blur-sm h-screen bg-neutral-800  bg-opacity-60 flex flex-col items-center`,
    modal: `w-80 h-auto mt-32 bg-neutral-800 rounded-lg p-4 shadow-lg shadow-neutral-900`,
    title: `text-center pb-2 text-lg font-medium`,
    text: `text-neutral-300 text-justify pb-4`,
  }
  return (
    <div className={styles.window}>
      <div className={styles.modal}>
        <p className={styles.title}>{titleModal}</p>
        <p className={styles.text}>{textModal}</p>
        <Button onClick={actionButton} title={textButton} />
      </div>
    </div>
  )
}
