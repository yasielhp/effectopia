import { Link } from "react-router-dom"
import { Button } from "./"
import { useAddress, useMetamask, useDisconnect } from "@thirdweb-dev/react"

export const Navbar = () => {

  const address = useAddress()
  const metamask = useMetamask()
  const disconnect = useDisconnect()

  const links = {
    home: {
      name: "What is EFFE?",
      path: "/#effe"
    },
    features: {
      name: "Features",
      path: "/#features"
    },
    community: {
      name: "Community",
      path: "/community"
    },
  }

  const styles = {
    navbar: `flex flex-row items-center justify-between px-24 py-7 text-center`,
    logo: `w-auto cursor-pointer select-none hover:opacity-60 transition ease-in-out`,
    ul: `flex flex-row items-center justify-center p-2`,
    li: `mx-2 pointer-events-auto select-none `,
    a: `cursor-pointer text-neutral-300 active:text-neutral-500 hover:text-neutral-500 focus:text-neutral-500 transition ease-in-out`,
  }

  return (
    <nav className={styles.navbar}>
      <Link to="/#">
        <img className={styles.logo} src="logo.svg" alt="Logo Effectopia"/>
      </Link>
      <ul className={styles.ul}>
        {Object.keys(links).map(key => {
          const link = links[key]
          return (
            <li className={styles.li} key={key} >
              <Link className={ styles.a} to={link.path} >{link.name}</Link>
            </li>
          )
        })}
      </ul>
      {!address ? (
        <Button title="Connect wallet" onClick={metamask} />
      ) : (
        <Button title="Disconnect" onClick={disconnect} />
      )}
    </nav>
  )
}
