import { useState } from 'react'

// Curated photography for each product/category with SVG vector fallback
const defaultImages = {
  earbuds: '/images/products/earbuds.jpg',
  watch: '/images/products/watch.jpg',
  perfume: '/images/products/perfume.jpg',
  dryer: '/images/products/dryer.jpg',
  speaker: '/images/products/speaker.jpg',
  makeup: '/images/products/makeup.jpg',
  bottle: '/images/products/bottle.jpg',
  airfryer: '/images/products/airfryer.jpg',
  bag: '/images/products/bag.jpg',
  abaya: '/images/products/abaya.jpg',
  headphones: '/images/products/headphones.jpg',
  vitamin: '/images/products/vitamin.jpg',
  toy: '/images/products/toy.jpg',
  dumbbell: '/images/products/dumbbell.jpg',
  pot: '/images/products/pot.jpg',
  scarf: '/images/products/scarf.jpg',
}

const W = '#6b1428', G = '#c8a45a', S = '#e9d9c6', D = '#2b1a1e', P = '#e8b9b6'

const shapes = {
  earbuds: (<g><rect x="55" y="70" width="90" height="70" rx="30" fill="#fff" stroke={S} strokeWidth="2" /><ellipse cx="85" cy="55" rx="14" ry="22" fill="#fff" stroke={S} strokeWidth="2" /><ellipse cx="115" cy="55" rx="14" ry="22" fill="#fff" stroke={S} strokeWidth="2" /><rect x="90" y="108" width="20" height="3" rx="1.5" fill={G} /></g>),
  watch: (<g><rect x="82" y="20" width="36" height="30" fill={D} /><rect x="82" y="150" width="36" height="30" fill={D} /><rect x="64" y="50" width="72" height="100" rx="22" fill={D} /><rect x="71" y="58" width="58" height="84" rx="16" fill="#f4ece3" /><path d="M100 78v24l14 10" stroke={W} strokeWidth="4" fill="none" strokeLinecap="round" /></g>),
  perfume: (<g><rect x="85" y="28" width="30" height="22" rx="4" fill={G} /><rect x="92" y="50" width="16" height="14" fill={S} /><rect x="60" y="64" width="80" height="100" rx="12" fill="#f6d9a3" stroke={G} strokeWidth="2" /><rect x="72" y="90" width="56" height="34" rx="4" fill="#fff" opacity=".8" /><rect x="82" y="102" width="36" height="3" fill={W} /><rect x="88" y="110" width="24" height="3" fill={W} opacity=".5" /></g>),
  dryer: (<g><path d="M50 60c0-20 20-30 50-30h30c14 0 22 10 22 22v10c0 12-8 22-22 22H100c-30 0-50-10-50-24z" fill={D} /><rect x="98" y="104" width="26" height="70" rx="8" fill={D} /><rect x="42" y="56" width="14" height="30" rx="4" fill={G} /></g>),
  speaker: (<g><rect x="30" y="76" width="140" height="56" rx="28" fill={D} /><circle cx="64" cy="104" r="16" fill="#46303a" /><circle cx="136" cy="104" r="16" fill="#46303a" /><circle cx="100" cy="104" r="5" fill={G} /></g>),
  makeup: (<g><rect x="50" y="100" width="100" height="60" rx="8" fill={W} /><circle cx="78" cy="130" r="14" fill={P} /><circle cx="116" cy="130" r="14" fill={G} /><rect x="64" y="30" width="8" height="64" rx="4" fill={G} /><ellipse cx="68" cy="30" rx="8" ry="16" fill={D} /><rect x="96" y="40" width="22" height="54" rx="5" fill={W} /><rect x="96" y="30" width="22" height="14" rx="3" fill={G} /></g>),
  bottle: (<g><rect x="84" y="24" width="32" height="20" rx="5" fill={W} /><rect x="72" y="44" width="56" height="130" rx="18" fill={P} /><rect x="72" y="84" width="56" height="26" fill="#fff" opacity=".5" /></g>),
  airfryer: (<g><rect x="52" y="30" width="96" height="140" rx="26" fill={D} /><rect x="70" y="54" width="60" height="50" rx="12" fill="#46303a" /><circle cx="100" cy="132" r="12" fill="#46303a" /><rect x="96" y="128" width="8" height="8" rx="2" fill={G} /></g>),
  bag: (<g><path d="M75 80c0-30 50-30 50 0" stroke={G} strokeWidth="6" fill="none" /><path d="M52 80h96l10 90H42z" fill="#a8683f" /><rect x="88" y="94" width="24" height="16" rx="3" fill={G} /></g>),
  abaya: (<g><path d="M100 24c18 0 24 14 22 28l22 112H56l22-112c-2-14 4-28 22-28z" fill={D} /><path d="M100 60v104" stroke={G} strokeWidth="2" /><path d="M82 70h36" stroke={G} strokeWidth="2" /></g>),
  headphones: (<g><path d="M52 110c0-60 96-60 96 0" stroke={D} strokeWidth="10" fill="none" /><rect x="40" y="104" width="28" height="48" rx="12" fill={W} /><rect x="132" y="104" width="28" height="48" rx="12" fill={W} /></g>),
  vitamin: (<g><rect x="60" y="64" width="80" height="100" rx="14" fill="#f3e3c5" stroke={G} strokeWidth="2" /><rect x="56" y="44" width="88" height="26" rx="8" fill={W} /><rect x="76" y="94" width="48" height="36" rx="6" fill="#fff" /><circle cx="100" cy="112" r="8" fill={G} /></g>),
  toy: (<g><circle cx="72" cy="46" r="14" fill="#c99a6b" /><circle cx="128" cy="46" r="14" fill="#c99a6b" /><circle cx="100" cy="74" r="34" fill="#d8ac7c" /><ellipse cx="100" cy="136" rx="38" ry="40" fill="#d8ac7c" /><circle cx="88" cy="70" r="4" fill={D} /><circle cx="112" cy="70" r="4" fill={D} /><ellipse cx="100" cy="82" rx="9" ry="6" fill="#f4e0c8" /><path d="M86 120l28 0-14 12z" fill={W} /></g>),
  dumbbell: (<g><rect x="60" y="96" width="80" height="10" rx="5" fill={D} /><rect x="38" y="76" width="22" height="50" rx="6" fill={W} /><rect x="140" y="76" width="22" height="50" rx="6" fill={W} /><rect x="26" y="86" width="12" height="30" rx="4" fill={D} /><rect x="162" y="86" width="12" height="30" rx="4" fill={D} /></g>),
  pot: (<g><rect x="40" y="86" width="120" height="70" rx="12" fill={W} /><rect x="30" y="80" width="140" height="12" rx="6" fill={G} /><path d="M60 80c0-24 80-24 80 0z" fill="#8a2238" /><circle cx="100" cy="58" r="6" fill={G} /></g>),
  scarf: (<g><path d="M60 40c40 20 40 50 0 70s-30 50 10 60l70-10c-40-20-30-50 0-70z" fill={P} /><path d="M70 60c20 10 20 25 0 38" stroke={G} strokeWidth="2" fill="none" /></g>),
}

const bgs = ['#f6ece0', '#f4e1dd', '#efe6d6', '#f3e8e6']

export default function ProductArt({ kind = 'bag', seed = 0, className = 'art', image, src, alt }) {
  const [hasError, setHasError] = useState(false)
  const candidate = image || src || defaultImages[kind]
  const showImage = Boolean(candidate && !hasError)

  return (
    <div className={className} style={{ background: bgs[seed % bgs.length] }}>
      {showImage ? (
        <img
          src={candidate}
          alt={alt || kind}
          loading="lazy"
          className="art-img"
          onError={() => setHasError(true)}
        />
      ) : (
        <svg viewBox="0 0 200 200" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <ellipse cx="100" cy="176" rx="52" ry="7" fill="#000" opacity=".07" />
          {shapes[kind] || shapes.bag}
        </svg>
      )}
    </div>
  )
}
