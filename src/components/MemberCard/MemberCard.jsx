// MemberCard - avatar (initials), name, role badge and a small role-colored action button.
import styles from './MemberCard.module.css'

/**
 * @param {object} props
 * @param {{id: number, name: string, role: "Leader" | "Member" | "Guest", isActive: boolean}} props.member
 * @param {boolean} props.isSelected - true when this is the selected member (the card gets styles.selected)
 * @param {(memberId: number) => void} props.onSelect - call it with member.id when the card is clicked
 */
export default function MemberCard({ member, isSelected, onSelect }) {
  const initials = member.name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()

  let cardClass = styles.card
  if (isSelected) cardClass += ` ${styles.selected}`
  if (!member.isActive) cardClass += ` ${styles.inactive}`

  const roleClass = styles[member.role.toLowerCase()]

  return (
    <div className={cardClass} onClick={() => onSelect(member.id)}>
      <div className={styles.avatar}>{initials}</div>

      <div className={styles.info}>
        <div className={styles.name}>{member.name}</div>
        <span className={styles.badge}>{member.role}</span>
      </div>

      <button
        className={`${styles.roleButton} ${roleClass}`}
        disabled={!member.isActive}
      >
        Contact
      </button>
    </div>
  )
}
