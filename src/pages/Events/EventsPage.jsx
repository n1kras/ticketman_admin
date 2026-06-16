import styles from './EventsPage.module.css'

export default function EventsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div>
          <h2 className={styles.pageTitle}>Eventos</h2>
          <p className={styles.pageSubtitle}>Gerencie todos os seus eventos</p>
        </div>
        <button id="btn-new-event" className={styles.newBtn}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          Novo Evento
        </button>
      </div>

      <div className={styles.emptyState}>
        <div className={styles.emptyIcon}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
        </div>
        <h3 className={styles.emptyTitle}>Nenhum evento encontrado</h3>
        <p className={styles.emptyText}>Crie seu primeiro evento para começar a gerenciar ingressos.</p>
      </div>
    </div>
  )
}
