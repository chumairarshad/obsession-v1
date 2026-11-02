const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', viewBox: '0 0 24 24' }
const I = (d) => (props) => <svg {...base} {...props}>{d}</svg>

export const Search = I(<><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>)
export const Heart = I(<path d="M12 20s-7.5-4.6-9-9.2C2 7.5 4.2 5 7 5c1.9 0 3.600 1 5 3 1.400-2 3.100-3 5-3 2.800 0 5 2.500 4 5.800-1.500 4.600-9 9.200-9 9.200z" />)
export const Bag = I(<><path d="M5 8h14l-1 12H6L5 8z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></>)
export const User = I(<><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /></>)
export const Truck = I(<><path d="M2 6h12v10H2zM14 10h4l4 3v3h-8" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></>)
export const Shield = I(<><path d="M12 3l8 3v6c0 5-3.500 8-8 9-4.500-1-8-4-8-9V6l8-3z" /><path d="m9 12 2 2 4-4" /></>)
export const Headset = I(<><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="3" y="14" width="4" height="6" rx="1.500" /><rect x="17" y="14" width="4" height="6" rx="1.500" /></>)
export const Return = I(<><path d="M4 12a8 8 0 1 1 3 6.200" /><path d="M4 18v-6h6" /></>)
export const Medal = I(<><circle cx="12" cy="9" r="6" /><path d="m8.500 14-2 7 5.500-3 5.500 3-2-7" /></>)
export const Tag = I(<><path d="M3 12V4h8l10 10-8 8L3 12z" /><circle cx="7.500" cy="8.500" r="1.200" /></>)
export const Globe = I(<><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></>)
export const Gift = I(<><rect x="3" y="9" width="18" height="12" rx="1" /><path d="M2 9h20v-3H2zM12 6v15M12 6c-1-4-6-4-5 0M12 6c1-4 6-4 5 0" /></>)
export const Arrow = I(<path d="M5 12h14m-6-6 6 6-6 6" />)
export const Check = I(<path d="m5 12 5 5L20 7" />)
