"use client"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  "aria-label"?: string
}

export function NavLink({ href, children, className, style, ...rest }: NavLinkProps) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    const id = href.replace("#", "")
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <a href={href} onClick={handleClick} className={className} style={style} {...rest}>
      {children}
    </a>
  )
}
