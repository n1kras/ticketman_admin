import styles from './Dashboard.module.css'

const STATS = [
  {
    id: 'stat-events',
    label: 'Eventos Ativos',
    value: '0',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    color: 'purple',
  },
  {
    id: 'stat-tickets',
    label: 'Ingressos Emitidos',
    value: '0',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z"/>
        <line x1="9" y1="9" x2="9" y2="15"/>
      </svg>
    ),
    color: 'amber',
  },
  {
    id: 'stat-revenue',
    label: 'Receita Total',
    value: 'R$ 0,00',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    color: 'green',
  },
  {
    id: 'stat-attendees',
    label: 'Participantes',
    value: '0',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    color: 'blue',
  },
]

export default function Dashboard() {
  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div>
          <h2 className={styles.pageTitle}>Dashboard</h2>
          <p className={styles.pageSubtitle}>Visão geral do seu sistema de eventos e ingressos</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className={styles.statsGrid}>
        {STATS.map((stat) => (
          <div key={stat.id} id={stat.id} className={`${styles.statCard} ${styles[`stat-${stat.color}`]}`}>
            <div className={styles.statIcon}>{stat.icon}</div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      <div className={styles.emptyState}>
        <div className={styles.emptyIcon}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
        </div>
        <h3 className={styles.emptyTitle}>Nenhum evento criado ainda</h3>
        <p className={styles.emptyText}>
          Comece criando seu primeiro evento para gerenciar ingressos e participantes.
        </p>
        <a href="/events" id="btn-create-first-event" className={styles.emptyBtn}>
          Criar primeiro evento
        </a>
      </div>
    </div>
  )
}
