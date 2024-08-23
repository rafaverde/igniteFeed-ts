import { PencilSimpleLine } from "@phosphor-icons/react"
import styles from "./Sidebar.module.css"
import { Avatar } from "./Avatar"

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=50&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className={styles.cover}
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/rafaverde.png" />
        <strong>Rafael Valverde</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimpleLine size={24} />
          Editar perfil
        </a>
      </footer>
    </aside>
  )
}
