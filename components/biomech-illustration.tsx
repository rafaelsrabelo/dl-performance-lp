/**
 * Ilustração em SVG de um corredor em vista lateral feito de linhas brancas,
 * com círculos na cor primária nas articulações e rótulos QUADRIL, JOELHO e
 * TORNOZELO. Sem números.
 */
export function BiomechIllustration({ className }: { className?: string }) {
  const accent = "var(--color-primary)"
  const joints: Array<[number, number]> = [
    [244, 104],
    [214, 146],
    [274, 142],
    [232, 190],
    [285, 232],
    [268, 296],
    [205, 250],
    [150, 238],
  ]
  return (
    <svg
      role="img"
      aria-label="Ilustração de análise biomecânica: corredor em vista lateral com marcadores no quadril, joelho e tornozelo"
      viewBox="60 30 380 310"
      className={className}
    >
      <line x1="80" y1="312" x2="420" y2="312" stroke="#5c5c5c" strokeWidth="1.5" strokeDasharray="4 6" />
      <line x1="232" y1="50" x2="232" y2="312" stroke="#5c5c5c" strokeWidth="1" strokeDasharray="3 6" />
      <g fill="none" stroke="#f5f5f5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="252" cy="72" r="16" />
        <path d="M244 104L232 190" />
        <path d="M244 104L214 146L196 178" />
        <path d="M244 104L274 142L302 120" />
        <path d="M232 190L285 232L268 296L298 304" />
        <path d="M232 190L205 250L150 238L136 222" />
      </g>
      <g fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round">
        <path d="M269.3 219.6Q262 238 279.9 251.3" />
        <path d="M235 168.2Q256 178 249.2 203.7" />
      </g>
      <g fill="var(--surface-dark)" stroke={accent} strokeWidth="2.5">
        {joints.map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5.5" />
        ))}
      </g>
      <g stroke="#8a8a8a" strokeWidth="1">
        <line x1="240" y1="190" x2="330" y2="190" />
        <line x1="293" y1="232" x2="350" y2="232" />
        <line x1="276" y1="296" x2="350" y2="280" />
      </g>
      <g
        fill="#c4c4c4"
        fontFamily="var(--font-sans), system-ui, sans-serif"
        fontSize="12"
        fontWeight="500"
        letterSpacing="0.8"
      >
        <text x="336" y="194">QUADRIL</text>
        <text x="356" y="236">JOELHO</text>
        <text x="356" y="284">TORNOZELO</text>
      </g>
    </svg>
  )
}
