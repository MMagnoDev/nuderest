import { Product } from '@/types/ecommerce';

export const SIGNATURE_COLORS = [
  { id: 'alabaster-nude', name: 'Alabaster Nude', hex: '#F7F2ED' },
  { id: 'linen-nude', name: 'Linen Nude', hex: '#ECE2D8' },
  { id: 'taupe-greige', name: 'Taupe Greige', hex: '#988A7C' },
  { id: 'mocha-noir', name: 'Mocha Espresso', hex: '#28201B' }
];

export const PRODUCTS_CATALOG: Product[] = [
  {
    id: 'nr-modelo-1-sculpt',
    slug: 'maca-modelo-1',
    name: 'Maca Modelo 1 — Sculpt Wave',
    subtitle: 'Silhueta em arco contínuo escultural com suporte ergonômico para Spas e Estética Avançada',
    category: 'luxo',
    price: 4290.00,
    originalPrice: 4990.00,
    pixDiscountPercent: 5,
    rating: 5.0,
    reviewCount: 88,
    badge: 'Design Assinatura',
    leadTime: 'Confecção em 7 a 10 dias úteis',
    image: '/assets/maca1/maca1_main.png',
    gallery: [
      '/assets/maca1/maca1_main.png',
      '/assets/maca1/maca1_angle2.png',
      '/assets/maca1/maca1_detail.png',
      '/assets/maca1/maca1_close.png'
    ],
    description: 'Design curvo fluido contínuo com acabamento arquitetônico em tecido nobre, base estrutural em cilindro e curva anatômica para alívio da coluna lombar.',
    longDescription: 'A Maca Modelo 1 — Sculpt Wave é a expressão máxima do design contemporâneo para ambientes de estética de luxo. Concebida como uma escultura funcional, sua curvatura proporciona relaxamento imediato para a cliente e ergonomia impecável para a profissional.',
    dimensions: {
      length: '192 cm',
      width: '76 cm',
      height: '78 cm (padrão ergonômico)',
      weightCapacity: 'Até 260 kg estáticos'
    },
    features: [
      'Design em arco escultural contínuo sem emendas aparentes',
      'Estrutura em multilaminado naval com reforço duplo de sustentação',
      'Revestimento texturizado nobre resistente a assepsia hospitalar com álcool 70%',
      'Espuma D33 Ultra Soft com memória postural',
      'Garantia estrutural de 5 anos'
    ],
    availableColors: SIGNATURE_COLORS,
    baseFinishes: [
      { id: 'base-cilindrica-nude', name: 'Base Cilíndrica Revestida Nude', extraPrice: 0 },
      { id: 'base-madeira-nobre', name: 'Base em Madeira Maciça Jequitibá Rosa', extraPrice: 350 },
      { id: 'base-taupe-mate', name: 'Base em Acabamento Taupe Esculpido', extraPrice: 280 }
    ],
    optionalAddons: [
      { id: 'embroidery-logo', name: 'Bordado Personalizado com sua Marca/Monograma', price: 190, description: 'Bordado em alta definição com fios acetinados' },
      { id: 'crystal-cover', name: 'Capa Protetora Cristal Náutico Flexível', price: 150, description: 'Proteção sob medida de alta transparência' },
      { id: 'ergonomic-pillow', name: 'Manta & Almofada Cervical Magnética', price: 180, description: 'Suporte cervical anatômico para procedimentos' }
    ]
  },
  {
    id: 'nr-modelo-2-royale',
    slug: 'maca-modelo-2',
    name: 'Maca Modelo 2 — Royale Anatômica',
    subtitle: 'Estofamento capitonê acolchoado de alto luxo com estrutura metálica dourada Champagne para Lash Designers',
    category: 'anatomica',
    price: 3890.00,
    originalPrice: 4490.00,
    pixDiscountPercent: 5,
    rating: 5.0,
    reviewCount: 112,
    badge: 'Mais Desejada',
    leadTime: 'Confecção em 7 a 10 dias úteis',
    image: '/assets/maca2/maca2_main.png',
    gallery: [
      '/assets/maca2/maca2_main.png',
      '/assets/maca2/maca2_angle2.png',
      '/assets/maca2/maca2_detail.png',
      '/assets/maca2/maca2_gallery1.png',
      '/assets/maca2/maca2_gallery2.png',
      '/assets/maca2/maca2_close.png'
    ],
    description: 'Estofamento acolchoado com gomos anatômicos, curvatura suave e pés em X em aço carbono com banho dourado Champagne fosco de altíssima durabilidade.',
    longDescription: 'A Maca Modelo 2 — Royale Anatômica une a tradição do estofamento nobre ao suporte ortopédico ativo. Idealizada para procedimentos de longa duração, suas almofadas anatômicas acolhem a cliente eliminando qualquer ponto de pressão.',
    dimensions: {
      length: '188 cm',
      width: '74 cm',
      height: '76 cm',
      weightCapacity: 'Até 250 kg estáticos'
    },
    features: [
      'Costura capitonê modular com espuma multi-densidade D33 Soft',
      'Estrutura dos pés em X em aço com pintura eletrostática dourada Champagne',
      'Almofada cervical com encaixe anatômico integrada',
      'Revestimento sintético impermeável com proteção contra manchas e pigmentos',
      'Garantia estrutural de 5 anos'
    ],
    availableColors: SIGNATURE_COLORS,
    baseFinishes: [
      { id: 'pes-dourado-champagne', name: 'Pés em X Dourado Champagne Escovado', extraPrice: 0 },
      { id: 'pes-aco-preto-mate', name: 'Pés em X Aço Carbono Negro Fosco', extraPrice: 0 },
      { id: 'pes-madeira-nobre', name: 'Pés em Madeira Maciça Jequitibá Rosa', extraPrice: 380 }
    ],
    optionalAddons: [
      { id: 'embroidery-logo', name: 'Bordado Personalizado com sua Marca/Monograma', price: 190, description: 'Gravação em alta definição no cabeçote' },
      { id: 'crystal-cover', name: 'Capa Protetora Cristal Náutico Flexível', price: 150, description: 'Proteção invisível sob medida' },
      { id: 'ergonomic-pillow', name: 'Almofada Cervical Anatômica Magnética', price: 180, description: 'Apoio de cabeça magnético para procedimentos' }
    ]
  }
];
