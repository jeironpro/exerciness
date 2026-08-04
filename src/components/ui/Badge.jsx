/* Hallmark · genre: playful · theme: Hum · design-system: design.md · designed-as-app */
const tones = {
  default: 'border border-rule bg-paper-2 text-ink-2',
  primary: 'bg-accent/12 text-accent',
  secondary: 'bg-accent-2/12 text-accent-2',
  pop: 'bg-accent-3/12 text-accent-3',
  mint: 'bg-mint/12 text-mint',
  lavender: 'bg-lavender/12 text-lavender',
}

const Badge = ({ tone = 'default', className = '', children, ...props }) => (
  <span
    className={`inline-flex items-center rounded-pill px-2.5 py-0.5 font-mono text-xs font-medium uppercase tracking-wider ${tones[tone]} ${className}`}
    {...props}
  >
    {children}
  </span>
)

export default Badge
