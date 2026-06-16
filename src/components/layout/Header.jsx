import { useAuth } from '../../context/AuthContext'
import styles from './Header.module.css'

export default function Header() {
  const { user, signOut } = useAuth()

  const handleSignOut = async () => {
    await signOut()
  }

  const initials = user?.email
    ? user.email.slice(0, 2).toUpperCase()
    : 'TM'

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1 className={styles.pageTitle}>Ticketman Admin</h1>
      </div>
      <div className={styles.right}>
        <div className={styles.userInfo}>
          <div className={styles.avatar}>{initials}</div>
          <div className={styles.userDetails}>
            <span className={styles.userEmail}>{user?.email ?? 'Usuário'}</span>
          </div>
        </div>
        <button
          id="btn-signout"
          onClick={handleSignOut}
          className={styles.signOutBtn}
          title="Sair"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
        </button>
      </div>
    </header>
  )
}
