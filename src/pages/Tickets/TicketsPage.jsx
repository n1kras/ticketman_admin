import styles from './TicketsPage.module.css'

export default function TicketsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div>
          <h2 className={styles.pageTitle}>Ingressos</h2>
          <p className={styles.pageSubtitle}>Gerencie os tipos de ingresso por evento</p>
        </div>
      </div>

      <div className={styles.emptyState}>
        <div className={styles.emptyIcon}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z"/>
            <line x1="9" y1="9" x2="9" y2="15"/>
          </svg>
        </div>
        <h3 className={styles.emptyTitle}>Nenhum ingresso criado</h3>
        <p className={styles.emptyText}>Crie um evento primeiro e depois adicione os tipos de ingresso.</p>
      </div>
    </div>
  )
}
