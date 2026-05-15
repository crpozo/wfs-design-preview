/* Shared UI bits for WFS homepage */

const Logo = ({ light = false }) => {
  const src = light
    ? 'https://westernfencesupply.com/wp-content/themes/westernfencesupply/img/global/wfs-logo-wht.svg'
    : 'https://westernfencesupply.com/wp-content/themes/westernfencesupply/img/global/western-fence-supply-logo.svg';
  return (
    <a href="#" style={{ display: 'inline-flex', alignItems: 'center', height: 36 }}>
      <img src={src} alt="Western Fence Supply" style={{ height: 36, width: 'auto' }} />
    </a>
  );
};

const FENCE_IMG = {
  aluminum: 'https://westernfencesupply.com/wp-content/themes/westernfencesupply/img/aluminum-fence/wfs_aluminum_fence_tab.jpg',
  chainlink: 'https://westernfencesupply.com/wp-content/themes/westernfencesupply/img/chainlink-fence/wfs_chain_link_tab.jpg',
  metal: 'https://westernfencesupply.com/wp-content/themes/westernfencesupply/img/metal-fence/wfs_metal_fence_tab.jpg',
  vinyl: 'https://westernfencesupply.com/wp-content/themes/westernfencesupply/img/home/wfs_style_tab_vinyl_fence_sw_florida.jpg',
  ecfence: 'assets/ec-fence.jpg',
  shop: 'assets/wfs-shop.webp',
  // Gate systems
  'gate-single':     'assets/gate-single-swing.jpg',
  'gate-double':     'assets/gate-double.jpg',
  'gate-sliding':    'assets/gate-sliding.jpg',
  'gate-cantilever': 'assets/gate-cantilever.jpg',
  'gate-rolling':    'assets/gate-rolling.jpg',
};

const FENCE_ICON = {
  aluminum: 'https://westernfencesupply.com/wp-content/themes/westernfencesupply/img/global/aluminum-fence-icon.svg',
  chainlink: 'https://westernfencesupply.com/wp-content/themes/westernfencesupply/img/global/chainlink-fence-icon.svg',
  metal: 'https://westernfencesupply.com/wp-content/themes/westernfencesupply/img/global/metal-fence-icon.svg',
  vinyl: 'https://westernfencesupply.com/wp-content/themes/westernfencesupply/img/global/vinyl-fence-icon.svg',
};

const ArrowRight = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="miter"/>
  </svg>
);

const ArrowDown = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 2 V13 M4 9 L8 13 L12 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
  </svg>
);

const ImgSlot = ({ label, dark = false, height = 280, style = {}, children }) => (
  <div
    className={`img-placeholder ${dark ? 'dark' : ''}`}
    style={{ height, ...style }}
  >
    {children}
    <span className="label">{label}</span>
  </div>
);

/* SVG patterns for product cards */
const ChainLinkSVG = ({ color = '#2e59c1', opacity = 0.45 }) => (
  <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
    <defs>
      <pattern id="chainP" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M0 20 L10 10 L20 20 L10 30 Z M20 20 L30 10 L40 20 L30 30 Z M0 0 L10 10 M20 0 L30 10 M40 0 L30 10 M0 40 L10 30 M20 40 L30 30 M40 40 L30 30"
          stroke={color} strokeWidth="1.6" fill="none" opacity={opacity}/>
      </pattern>
    </defs>
    <rect width="200" height="200" fill="url(#chainP)"/>
  </svg>
);

const AluminumSVG = ({ color = '#263166', opacity = 0.7 }) => (
  <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
    {Array.from({ length: 12 }).map((_, i) => (
      <rect key={i} x={i * 17 + 4} y="20" width="6" height="160" rx="2" fill={color} opacity={opacity}/>
    ))}
    <rect x="0" y="40" width="200" height="3" fill={color} opacity={opacity}/>
    <rect x="0" y="160" width="200" height="3" fill={color} opacity={opacity}/>
  </svg>
);

const VinylSVG = ({ color = '#263166', opacity = 0.6 }) => (
  <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
    {Array.from({ length: 8 }).map((_, i) => (
      <rect key={i} x={i * 25 + 6} y="20" width="14" height="160" rx="2" fill={color} opacity={opacity}/>
    ))}
    <rect x="0" y="48" width="200" height="4" fill={color} opacity={opacity}/>
    <rect x="0" y="148" width="200" height="4" fill={color} opacity={opacity}/>
  </svg>
);

const MetalSVG = ({ color = '#263166', opacity = 0.7 }) => (
  <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
    {Array.from({ length: 9 }).map((_, i) => (
      <g key={i}>
        <rect x={i * 22 + 6} y="40" width="4" height="140" fill={color} opacity={opacity}/>
        <path d={`M${i * 22 + 8} 30 L${i * 22 + 4} 40 L${i * 22 + 12} 40 Z`} fill={color} opacity={opacity}/>
      </g>
    ))}
    <rect x="0" y="60" width="200" height="3" fill={color} opacity={opacity}/>
    <rect x="0" y="170" width="200" height="3" fill={color} opacity={opacity}/>
  </svg>
);

const DiamondGrid = ({ color = '#ff7133', opacity = 0.4 }) => (
  <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
    <defs>
      <pattern id="dP" width="28" height="28" patternUnits="userSpaceOnUse">
        <path d="M14 0 L28 14 L14 28 L0 14 Z" stroke={color} strokeWidth="1" fill="none" opacity={opacity}/>
      </pattern>
    </defs>
    <rect width="200" height="200" fill="url(#dP)"/>
  </svg>
);

Object.assign(window, {
  Logo, ArrowRight, ArrowDown, ImgSlot,
  ChainLinkSVG, AluminumSVG, VinylSVG, MetalSVG, DiamondGrid,
  FENCE_IMG, FENCE_ICON,
});

/* ───── Global Mode (Homeowner / Contractor) ───── */
const __WFS_MODE_KEY = 'wfs:mode';
const __WFS_MODE_EVENT = 'wfs:mode-change';

const useMode = () => {
  const [mode, setModeState] = React.useState(() => {
    try { return localStorage.getItem(__WFS_MODE_KEY) || 'HOMEOWNER'; }
    catch (e) { return 'HOMEOWNER'; }
  });
  React.useEffect(() => {
    const onChange = (e) => setModeState(e.detail);
    window.addEventListener(__WFS_MODE_EVENT, onChange);
    return () => window.removeEventListener(__WFS_MODE_EVENT, onChange);
  }, []);
  const set = (m) => {
    try { localStorage.setItem(__WFS_MODE_KEY, m); } catch (e) {}
    window.dispatchEvent(new CustomEvent(__WFS_MODE_EVENT, { detail: m }));
  };
  return [mode, set];
};

window.useMode = useMode;
