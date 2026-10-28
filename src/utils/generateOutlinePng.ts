export function generateWebsiteOutlinePng(): string {
  // Create an offscreen canvas with high resolution (1920x2400)
  const canvas = document.createElement('canvas');
  canvas.width = 1600;
  canvas.height = 2400;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Background: Deep Dark Blueprint Charcoal
  ctx.fillStyle = '#080B0A';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Subtle architectural grid
  ctx.strokeStyle = 'rgba(143, 180, 157, 0.08)';
  ctx.lineWidth = 1;
  const gridSize = 40;
  for (let x = 0; x < canvas.width; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }
  for (let y = 0; y < canvas.height; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  // Header Title of Blueprint
  ctx.fillStyle = '#E61E2B';
  ctx.font = 'bold 28px monospace';
  ctx.fillText('PORTFOLIO WEBSITE ARCHITECTURAL OUTLINE & BLUEPRINT', 80, 70);

  ctx.fillStyle = '#8FB49D';
  ctx.font = '16px monospace';
  ctx.fillText('DESIGN SYSTEM & SECTION SCHEMATIC  //  SPECIFICATION V1.0', 80, 100);

  ctx.fillStyle = '#6D7873';
  ctx.font = '14px monospace';
  ctx.fillText('COLOR PALETTE: #171717 (CHARCOAL) | #06110C (FOREST GREEN) | #A31C1B (CRIMSON) | #F2EEE8 (IVORY) | #30312F (HOODIE)', 80, 125);

  // Divider line
  ctx.strokeStyle = '#E61E2B';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(80, 145);
  ctx.lineTo(1520, 145);
  ctx.stroke();

  // Helper function to draw wireframe blocks
  const drawBlock = (
    x: number,
    y: number,
    w: number,
    h: number,
    label: string,
    sublabel: string,
    accentColor = '#8FB49D',
    fillColor = 'rgba(16, 22, 20, 0.6)'
  ) => {
    // Fill
    ctx.fillStyle = fillColor;
    ctx.fillRect(x, y, w, h);

    // Border
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 1.5;
    ctx.strokeRect(x, y, w, h);

    // Corner crosshairs
    const arm = 8;
    ctx.strokeStyle = '#E61E2B';
    ctx.beginPath();
    // Top-left
    ctx.moveTo(x - arm, y); ctx.lineTo(x + arm, y);
    ctx.moveTo(x, y - arm); ctx.lineTo(x, y + arm);
    // Top-right
    ctx.moveTo(x + w - arm, y); ctx.lineTo(x + w + arm, y);
    ctx.moveTo(x + w, y - arm); ctx.lineTo(x + w, y + arm);
    // Bottom-left
    ctx.moveTo(x - arm, y + h); ctx.lineTo(x + arm, y + h);
    ctx.moveTo(x, y + h - arm); ctx.lineTo(x, y + h + arm);
    // Bottom-right
    ctx.moveTo(x + w - arm, y + h); ctx.lineTo(x + w + arm, y + h);
    ctx.moveTo(x + w, y + h - arm); ctx.lineTo(x + w, y + h + arm);
    ctx.stroke();

    // Label
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 15px monospace';
    ctx.fillText(label, x + 16, y + 26);

    // Sublabel
    if (sublabel) {
      ctx.fillStyle = '#8FB49D';
      ctx.font = '12px monospace';
      ctx.fillText(sublabel, x + 16, y + 46);
    }

    // Dimensions badge
    ctx.fillStyle = '#4E5A54';
    ctx.font = '11px monospace';
    ctx.fillText(`${w}px × ${h}px`, x + w - 100, y + 24);
  };

  // 1. NAVIGATION BAR OUTLINE (y = 175)
  drawBlock(80, 175, 1440, 60, '1. TOP NAVIGATION BAR [FIXED / GLASSMORPHIC]', 'LOGO "BUILT" | LINKS: HOME · COLLECTION · JOURNAL · ABOUT | SEARCH · PHOTO UPLOAD · OUTLINE');

  // 2. HERO SECTION OUTLINE (y = 260)
  drawBlock(80, 260, 1440, 720, '2. HERO STAGE [VIEWPORT 100VH / PARALLAX INTERACTION]', 'DYNAMIC CAR SHOWCASE · CRIMSON BEAM · ROTATING SLIDES (01/03)', '#E61E2B');

  // Inner Hero Left: Car Canvas
  drawBlock(110, 330, 680, 620, 'HERO VEHICLE FRAME [CUSTOM SAGE 911 COUPE]', '3/4 REAR ANGLE · DYNAMIC RED TAILLIGHTS · REFLECTIVE ASPHALT', '#8FB49D', 'rgba(20, 30, 26, 0.4)');
  // Crimson laser beam representation
  ctx.fillStyle = 'rgba(230, 30, 43, 0.35)';
  ctx.fillRect(720, 330, 30, 620);
  ctx.strokeStyle = '#E61E2B';
  ctx.strokeRect(720, 330, 30, 620);
  ctx.fillStyle = '#FF2E3E';
  ctx.font = 'bold 11px monospace';
  ctx.fillText('CRIMSON BEAM', 680, 360);

  // Inner Hero Right: Editorial Typography
  drawBlock(820, 330, 670, 620, 'HERO EDITORIAL TYPOGRAPHY & CONTROLS', 'HIGH-CONTRAST LUXURY SERIF HIERARCHY', '#E61E2B', 'rgba(24, 18, 18, 0.4)');

  // Tagline mock
  ctx.fillStyle = '#8FB49D';
  ctx.font = '13px monospace';
  ctx.fillText('SAME ROADS · NEW PERSPECTIVES', 850, 410);

  // Red BUILT text
  ctx.fillStyle = '#E61E2B';
  ctx.font = 'bold 64px serif';
  ctx.fillText('BUILT', 850, 480);

  // White DIFFERENTLY text
  ctx.fillStyle = '#F5F5F0';
  ctx.font = 'italic 52px serif';
  ctx.fillText('DIFFERENTLY', 850, 545);

  // Counter 01 / 03
  ctx.fillStyle = '#E61E2B';
  ctx.font = 'bold 18px monospace';
  ctx.fillText('01', 1420, 440);
  ctx.fillStyle = '#6D7873';
  ctx.fillText('——', 1420, 460);
  ctx.fillText('03', 1420, 480);

  // Description text
  ctx.fillStyle = '#A0ADA5';
  ctx.font = '14px sans-serif';
  ctx.fillText('"A fresh take on classic energy — where timeless design meets a bolder tomorrow."', 850, 600);

  // CTA Button Explore
  drawBlock(850, 630, 200, 48, 'CTA: EXPLORE ->', 'PILL BUTTON / GLOW', '#E61E2B', 'rgba(230, 30, 43, 0.15)');

  // Detail Thumbnail Preview (Bottom right like screenshot)
  drawBlock(1220, 720, 240, 200, 'DETAIL CARD [MACRO]', 'ZOOM & ANGLE PREVIEW', '#8FB49D', 'rgba(143, 180, 157, 0.15)');

  // 3. STATS & ARCHITECTURAL SPECS STRIP (y = 1010)
  drawBlock(80, 1010, 1440, 100, '3. TECHNICAL SPECIFICATIONS & BENCHMARK STRIP', 'CHASSIS SPECS · 4.0L AIR-COOLED · SAGE MATTE FINISH · BESPOKE EDITION COUNTER', '#8FB49D');

  // 4. COLLECTION / PHOTOGRAPHY GALLERY (y = 1140)
  drawBlock(80, 1140, 1440, 540, '4. PHOTO WORKS COLLECTION [DYNAMIC MASONRY GRID + LIGHTBOX]', 'AUTOMOTIVE · DETAILS · NIGHT RUN · EDITORIAL | REPAIR & USER PHOTO REPLACEMENT');
  // Sub-blocks for 3 gallery cards
  drawBlock(110, 1220, 440, 430, 'WORK #01: REAR QUARTER', 'CAMERA: HASSELBLAD H6D · ISO 64', '#8FB49D', 'rgba(20, 26, 24, 0.4)');
  drawBlock(580, 1220, 440, 430, 'WORK #02: AERODYNAMIC CURVE', 'CAMERA: MACRO 100MM · ISO 100', '#8FB49D', 'rgba(20, 26, 24, 0.4)');
  drawBlock(1050, 1220, 440, 430, 'WORK #03: MIDNIGHT MOUNTAIN', 'CAMERA: SONY FX3 · LONG EXPOSURE', '#8FB49D', 'rgba(20, 26, 24, 0.4)');

  // 5. JOURNAL & STORIES SECTION (y = 1710)
  drawBlock(80, 1710, 1440, 310, '5. JOURNAL / BEHIND THE SCENES EDITORIAL', 'ARTICLE BREAKDOWNS · LIGHTING MASTERCLASS · COCKPIT CRAFTSMANSHIP');
  drawBlock(110, 1780, 440, 210, 'STORY 1: GEOMETRY OF SPEED', 'PHILOSOPHY OF AIR-COOLED SILHOUETTE', '#8FB49D');
  drawBlock(580, 1780, 440, 210, 'STORY 2: CHASING CRIMSON', 'MIDNIGHT NEON LIGHTING TECHNIQUE', '#E61E2B');
  drawBlock(1050, 1780, 440, 210, 'STORY 3: ANALOG SOULS', 'VINTAGE GAUGES & VISCERAL FEEDBACK', '#8FB49D');

  // 6. ABOUT CREATOR & FOOTER (y = 2050)
  drawBlock(80, 2050, 950, 270, '6. ABOUT THE VISUAL ARTIST / CREATOR', 'PORTFOLIO CREATOR PROFILE · EQUIPMENT ARSENAL · CLIENT ROSTER & INQUIRIES');
  drawBlock(1060, 2050, 460, 270, '7. PALETTE TOKENS & SYSTEM', 'HEX CODES, CONTRAST RATIOS & EXPORT TOOLS', '#E61E2B');

  // Palette swatch boxes in section 7
  const swatches = [
    { hex: '#A31C1B', label: 'Crimson #A31C1B' },
    { hex: '#06110C', label: 'Forest #06110C' },
    { hex: '#171717', label: 'Charcoal #171717' },
    { hex: '#F2EEE8', label: 'Ivory #F2EEE8' },
    { hex: '#30312F', label: 'Hoodie #30312F' },
  ];
  swatches.forEach((s, idx) => {
    ctx.fillStyle = s.hex;
    ctx.fillRect(1090 + idx * 95, 2190, 80, 50);
    ctx.strokeStyle = '#FFFFFF';
    ctx.strokeRect(1090 + idx * 95, 2190, 80, 50);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '11px monospace';
    ctx.fillText(s.hex, 1090 + idx * 95, 2260);
    ctx.fillStyle = '#8FB49D';
    ctx.fillText(s.label, 1090 + idx * 95, 2275);
  });

  // Footer stamp
  ctx.fillStyle = '#4E5A54';
  ctx.font = '12px monospace';
  ctx.fillText('BUILT DIFFERENTLY ARCHITECTURAL SPECIFICATION — AUTOMOTIVE VISUAL PORTFOLIO ENGINE', 80, 2370);
  ctx.fillText('GENERATED ON CLIENT RUNTIME // VECTOR PRECISION', 1050, 2370);

  return canvas.toDataURL('image/png');
}

export function downloadOutlinePng() {
  const dataUrl = generateWebsiteOutlinePng();
  if (!dataUrl) return;
  const link = document.createElement('a');
  link.download = 'portfolio-website-outline.png';
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
