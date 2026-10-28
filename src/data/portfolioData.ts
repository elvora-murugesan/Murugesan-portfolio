import { PortraitPose, PortfolioSlide, GalleryItem, JournalArticle, ColorToken, ProjectItem } from '../types';

export const PORTRAIT_POSES: PortraitPose[] = [
  {
    id: 'pose-1',
    poseNumber: '01',
    name: 'Primary Standing Portrait',
    filename: 'portfolio-standing-main.jpg',
    image: '/images/portfolio-standing-main.jpg',
    description: 'A relaxed, natural standing pose facing the camera. Shoulders relaxed, arms resting comfortably, natural approachable expression with recognizable sunglasses and styled wavy hair.',
    idealUsage: 'Homepage Hero Section & Primary Identity Display',
    cameraAngle: 'Frontal eye-level, 85mm prime lens perspective',
    lightingSpecs: {
      key: 'Large 5600K soft neutral studio key light preserving authentic warm skin tone',
      ambient: 'Deep forest green (#06110C) soft environmental gradient behind subject',
      rim: 'Restrained crimson red (#A31C1B) edge separation along the right shoulder'
    }
  },
  {
    id: 'pose-2',
    poseNumber: '02',
    name: 'Three-Quarter Standing Portrait',
    filename: 'portfolio-standing-three-quarter.jpg',
    image: '/images/portfolio-standing-three-quarter.jpg',
    description: 'Natural three-quarter body orientation, torso turned slightly to one side with head comfortably oriented toward the camera. Authentic, candid stance in charcoal-grey hoodie.',
    idealUsage: 'Interactive Pose Transition & About Section Introduction',
    cameraAngle: 'Three-quarter oblique angle, 70mm studio prime',
    lightingSpecs: {
      key: 'Neutral wrap-around key light with gentle facial shadow modeling',
      ambient: 'Dual-tone background with deep forest green left fill',
      rim: 'Subtle crimson red rim light along the back neck and hood edge'
    }
  },
  {
    id: 'pose-3',
    poseNumber: '03',
    name: 'Mid-Step Walking Portrait',
    filename: 'portfolio-walking.jpg',
    image: '/images/portfolio-walking.jpg',
    description: 'Realistic mid-step walking movement across a contemporary minimalist architectural studio. Natural arm swing, relaxed shoulders, and confident forward momentum.',
    idealUsage: 'Scroll-driven Entrance Animation & Interactive Storytelling',
    cameraAngle: 'Full-body environmental landscape (3:2 aspect ratio)',
    lightingSpecs: {
      key: 'Diffused top overhead light preserving hoodie texture and natural stride',
      ambient: 'Soft charcoal studio shadows with subtle emerald tone',
      rim: 'Vertical crimson accent tube softly illuminating background wall'
    }
  },
  {
    id: 'pose-4',
    poseNumber: '04',
    name: 'Thoughtful Side-Facing Portrait',
    filename: 'portfolio-side-facing.jpg',
    image: '/images/portfolio-side-facing.jpg',
    description: 'Relaxed standing pose with the head and body oriented thoughtfully toward the side as if observing a display, retaining recognizable facial features and sunglasses.',
    idealUsage: 'Projects & Engineering Philosophy Transitions',
    cameraAngle: 'Profile-oriented candid framing, 90mm focal length',
    lightingSpecs: {
      key: 'Soft frontal fill preserving jawline and natural skin texture',
      ambient: 'Deep forest green (#06110C) studio wall gradation',
      rim: 'Gentle crimson red accent along rear contours'
    }
  },
  {
    id: 'pose-5',
    poseNumber: '05',
    name: 'Casual Leaning Pose',
    filename: 'portfolio-leaning.jpg',
    image: '/images/portfolio-leaning.jpg',
    description: 'Natural posture lightly leaning against a sleek modern architectural charcoal studio surface. Arms comfortably folded, relaxed demeanor, authentic hoodie fabric folds.',
    idealUsage: 'Technical Arsenal & Automation Systems Overview',
    cameraAngle: 'Medium-close composition, 50mm natural perspective',
    lightingSpecs: {
      key: 'Soft frontal beauty dish with honeycomb grid to prevent spill',
      ambient: 'Direct architectural shadow edge with deep charcoal tone',
      rim: 'Restrained crimson glow pool centered behind the subject'
    }
  },
  {
    id: 'pose-6',
    poseNumber: '06',
    name: 'Natural Conversational Gesture',
    filename: 'portfolio-conversational.jpg',
    image: '/images/portfolio-conversational.jpg',
    description: 'Chest-up to waist-up composition with natural conversational engagement. Realistic anatomical posture, approachable presence, and clean studio lighting.',
    idealUsage: 'Contact, Commission & Collaboration Section',
    cameraAngle: 'Medium close-up portrait, 85mm portrait focal length',
    lightingSpecs: {
      key: 'Soft broad key light creating crisp catchlights on sunglasses',
      ambient: 'Balanced charcoal studio backdrop (#171717)',
      rim: 'Balanced dual subtle rim separating silhouette from dark void'
    }
  }
];

export const COLOR_PALETTE_TOKENS: ColorToken[] = [
  {
    name: 'Charcoal Black',
    hex: '#171717',
    role: 'Base Studio Background',
    usage: 'Clean, predominantly dark canvas with subtle depth gradients and ultra-matte texture'
  },
  {
    name: 'Deep Forest Green',
    hex: '#06110C',
    role: 'Subtle Atmospheric Ambient',
    usage: 'Soft environmental illumination, restrained architectural gradients behind the subject'
  },
  {
    name: 'Crimson Red',
    hex: '#A31C1B',
    role: 'Restrained Rim Light Accent',
    usage: 'Distant edge illumination behind silhouette, interactive hover highlights, and active indicators'
  },
  {
    name: 'Warm Ivory',
    hex: '#F2EEE8',
    role: 'High-Contrast Typography',
    usage: 'Headings, crisp technical specs, navigation links, and editorial highlights'
  },
  {
    name: 'Charcoal Grey Hoodie',
    hex: '#30312F',
    role: 'Wardrobe Specification',
    usage: 'Authentic cotton fabric texture with natural folds, seams, and distinct separation from black'
  }
];

export const INITIAL_SLIDES: PortfolioSlide[] = [
  {
    id: 'slide-1',
    number: '01',
    tagline: 'AI & DATA SCIENCE · AUTOMATION SYSTEMS',
    titleRed: 'BUILT',
    titleWhite: 'DIFFERENTLY',
    description: 'Engineering intelligent autonomous systems, high-throughput pipelines, and real-time computer vision where rigorous engineering meets bold vision.',
    image: '/images/portfolio-standing-main.jpg',
    detailImage: '/images/portfolio-standing-three-quarter.jpg',
    badge: 'POSE 01 // PRIMARY STANDING',
    year: 'PORTFOLIO 2025',
    specs: [
      { label: 'FOCUS', value: 'AI & Data Science' },
      { label: 'WARDROBE', value: 'Charcoal Hoodie #30312F' },
      { label: 'LIGHTING', value: 'Neutral Key + Crimson Rim' },
      { label: 'STATUS', value: 'Open to Commissions & Roles' },
    ]
  },
  {
    id: 'slide-2',
    number: '02',
    tagline: 'MOTION & ARCHITECTURE · SCROLL DYNAMICS',
    titleRed: 'ENGINEERED',
    titleWhite: 'VELOCITY',
    description: 'Every movement captured with photographic authenticity across minimalist studio spaces. Smooth animation transitions between 6 dedicated studio poses.',
    image: '/images/portfolio-walking.jpg',
    detailImage: '/images/portfolio-leaning.jpg',
    badge: 'POSE 03 // WALKING MOTION',
    year: 'STUDIO STRIDE',
    specs: [
      { label: 'POSE TYPE', value: 'Mid-Step Walking Stride' },
      { label: 'PALETTE', value: '#171717 | #06110C | #A31C1B' },
      { label: 'LENS', value: 'Medium Format 50mm' },
      { label: 'ATMOSPHERE', value: 'Minimalist Architecture' },
    ]
  },
  {
    id: 'slide-3',
    number: '03',
    tagline: 'SYSTEMS ARCHITECTURE & AUTOMATION',
    titleRed: 'SYSTEM',
    titleWhite: 'DISCIPLINE',
    description: 'Bridging algorithmic models with real-world mechanical and software automation. Clean data contracts, scalable pipelines, and continuous optimization.',
    image: '/images/portfolio-leaning.jpg',
    detailImage: '/images/portfolio-standing-main.jpg',
    badge: 'POSE 05 // CASUAL LEANING',
    year: 'ARCHITECTURAL LEAN',
    specs: [
      { label: 'BACKGROUND', value: 'Charcoal Minimalist Wall' },
      { label: 'IDENTITY', value: '100% Preserved Likeness' },
      { label: 'REFLECTIONS', value: 'Restrained Glass Optics' },
      { label: 'POSTURE', value: 'Relaxed Analytical Focus' },
    ]
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: 'item-1',
    title: 'Primary Standing Portrait (Hero)',
    category: 'Portraits',
    image: '/images/portfolio-standing-main.jpg',
    aspectRatio: 'aspect-[2/3]',
    location: 'Minimal Studio Stage A',
    camera: 'Hasselblad H6D-100c',
    iso: '64',
    shutter: '1/160s',
    description: 'Pose 01: Frontal standing portrait facing the camera. Neutral 5600K key light on face, natural warm skin tone, authentic wavy hair and browline sunglasses.'
  },
  {
    id: 'item-2',
    title: 'Three-Quarter Standing Portrait',
    category: 'Portraits',
    image: '/images/portfolio-standing-three-quarter.jpg',
    aspectRatio: 'aspect-[2/3]',
    location: 'Studio Stage B',
    camera: 'Leica SL2-S 70mm',
    iso: '100',
    shutter: '1/200s',
    description: 'Pose 02: Torso turned three-quarters with head oriented toward lens. Soft forest green fill on the left and restrained crimson rim on the right.'
  },
  {
    id: 'item-3',
    title: 'Mid-Step Walking Stride',
    category: 'Portraits',
    image: '/images/portfolio-walking.jpg',
    aspectRatio: 'aspect-[16/10]',
    location: 'Architectural Corridor',
    camera: 'Phase One IQ4 150MP',
    iso: '50',
    shutter: '1/500s',
    description: 'Pose 03: Full-body walking movement with natural balance and arm swing across a minimalist modern space with subtle crimson tube accent.'
  },
  {
    id: 'item-4',
    title: 'Thoughtful Side-Facing Profile',
    category: 'Portraits',
    image: '/images/portfolio-side-facing.jpg',
    aspectRatio: 'aspect-[2/3]',
    location: 'Studio Reflection Bay',
    camera: 'Sony A1 90mm Macro',
    iso: '100',
    shutter: '1/250s',
    description: 'Pose 04: Relaxed posture turned thoughtfully to the side with natural facial expression and dark charcoal background separation.'
  },
  {
    id: 'item-5',
    title: 'Casual Leaning Posture',
    category: 'Portraits',
    image: '/images/portfolio-leaning.jpg',
    aspectRatio: 'aspect-[16/10]',
    location: 'Minimalist Charcoal Wall',
    camera: 'Hasselblad 100c 50mm',
    iso: '80',
    shutter: '1/160s',
    description: 'Pose 05: Casual pose leaning lightly against a dark charcoal architectural surface with arms comfortably folded and subtle crimson rear pool.'
  },
  {
    id: 'item-6',
    title: 'Conversational Engagement',
    category: 'Portraits',
    image: '/images/portfolio-conversational.jpg',
    aspectRatio: 'aspect-[2/3]',
    location: 'Studio Dialogue Set',
    camera: 'Leica M11 85mm',
    iso: '125',
    shutter: '1/200s',
    description: 'Pose 06: Medium close-up with approachable presence and conversational focus, wearing the authentic charcoal-grey hoodie.'
  }
];

export const ENGINEERING_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Neural Vision & Object Tracking Pipeline',
    category: 'Computer Vision & Automation',
    tags: ['PyTorch', 'TensorRT', 'CUDA', 'OpenCV'],
    description: 'Real-time multi-stream object detection and spatial tracking system processing 120 FPS with sub-8ms latency on edge hardware.',
    metrics: '99.4% Precision · Sub-8ms Inference'
  },
  {
    id: 'proj-2',
    title: 'Distributed Sensor Telemetry Engine',
    category: 'Data Engineering & IoT',
    tags: ['Kafka', 'Rust', 'TimescaleDB', 'Docker'],
    description: 'High-throughput time-series event ingestion platform handling 250,000 telemetry events/sec with automated anomaly detection.',
    metrics: '250k events/sec · 99.99% Uptime'
  },
  {
    id: 'proj-3',
    title: 'Autonomous Robotics Path Planner',
    category: 'Robotics & Control Systems',
    tags: ['ROS 2', 'C++', 'Kinematics', 'SLAM'],
    description: 'Dynamic collision avoidance and trajectory generation using hybrid A* and MPC algorithms for indoor industrial automated guided vehicles.',
    metrics: '0.04m Accuracy · Real-Time Re-planning'
  },
  {
    id: 'proj-4',
    title: 'Multimodal Generative Document Analyzer',
    category: 'Generative AI & LLMs',
    tags: ['Transformers', 'LangChain', 'FastAPI', 'Qdrant'],
    description: 'Enterprise RAG system integrating vision-language models for technical blueprint parsing, tabular extraction, and semantic search.',
    metrics: '10x Faster Retrieval · 94% Answer Exactness'
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'journal-1',
    title: 'Studio Lighting Architecture: Balancing Crimson Rims with Natural Skin',
    date: 'APRIL 2025',
    readTime: '5 MIN READ',
    summary: 'A technical breakdown of how we sculpted neutral 5600K key light on the face while introducing #A31C1B crimson separation strictly along the background silhouette.',
    coverImage: '/images/portfolio-standing-main.jpg',
    tags: ['LIGHTING DESIGN', 'STUDIO RIGGING']
  },
  {
    id: 'journal-2',
    title: 'Six Poses, One Identity: Preserving Likeness Across Animation Keyframes',
    date: 'MARCH 2025',
    readTime: '4 MIN READ',
    summary: 'Why AI portraiture fails at animation transitions—and how we locked sunglasses geometry, hair volume, and charcoal-grey fabric texture across all 6 photographic setups.',
    coverImage: '/images/portfolio-standing-three-quarter.jpg',
    tags: ['ANIMATION', 'IDENTITY PRESERVATION']
  },
  {
    id: 'journal-3',
    title: 'From Computer Vision to Industrial Automation: Engineering Edge ML',
    date: 'FEBRUARY 2025',
    readTime: '6 MIN READ',
    summary: 'Translating deep learning neural architectures into low-power FPGA and edge silicon for millisecond-level industrial automation decisions.',
    coverImage: '/images/portfolio-walking.jpg',
    tags: ['EDGE AI', 'AUTOMATION']
  }
];
