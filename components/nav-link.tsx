"use client"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export function NavLink({ href, children, className, style }: NavLinkProps) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    const id = href.replace("#", "")
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <a href={href} onClick={handleClick} className={className} style={style}>
      {children}
    </a>
  )
}
