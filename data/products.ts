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
    name: 'Maca Sculpt Wave',
    subtitle: 'Silhueta em arco contínuo escultural com suporte ergonómico para Spas e Estética Avançada',
    category: 'luxo',
    price: 0,
    originalPrice: 0,
    pixDiscountPercent: 0,
    rating: 5.0,
    reviewCount: 88,
    badge: 'Design Assinatura',
    leadTime: 'Confeção em 7 a 10 dias úteis',
    image: '/maca1/maca1_1.webp',
    gallery: [
      '/maca1/maca1_1.webp',
      '/maca1/maca1_2.webp',
      '/maca1/maca1_3.webp',
      '/maca1/maca1_4.webp'
    ],
    description: 'Design curvo fluido contínuo com acabamento arquitetónico em tecido nobre, base estrutural em cilindro e curva anatómica para alívio da coluna lombar.',
    longDescription: 'A Maca Sculpt Wave é a expressão máxima do design contemporâneo para ambientes de estética de luxo. Concebida como uma escultura funcional, a sua curvatura proporciona relaxamento imediato para a cliente e ergonomia impecável para a profissional.',
    dimensions: {
      length: '192 cm',
      width: '76 cm',
      height: '78 cm (padrão ergonómico)',
      weightCapacity: 'Até 260 kg estáticos'
    },
    features: [
      'Design em arco escultural contínuo sem emendas aparentes',
      'Estrutura em multilaminado naval com reforço duplo de sustentação',
      'Revestimento texturado nobre resistente a assepsia hospitalar com álcool a 70%',
      'Espuma D33 Ultra Soft com memória postural ativa',
      'Garantia estrutural de 5 anos'
    ],
    availableColors: SIGNATURE_COLORS,
    baseFinishes: [
      { id: 'base-cilindrica-nude', name: 'Base Cilíndrica Revestida Nude', extraPrice: 0 },
      { id: 'base-madeira-nobre', name: 'Base em Madeira Maciça Nobre', extraPrice: 0 },
      { id: 'base-taupe-mate', name: 'Base em Acabamento Taupe Esculpido', extraPrice: 0 }
    ],
    optionalAddons: [
      { id: 'embroidery-logo', name: 'Bordado Personalizado com a sua Marca/Monograma', price: 0, description: 'Bordado em alta definição com fios acetinados nobres' },
      { id: 'crystal-cover', name: 'Capa Protetora Cristal Náutico Flexível', price: 0, description: 'Proteção sob medida de elevada transparência' },
      { id: 'ergonomic-pillow', name: 'Manta & Almofada Cervical Anatómica Magnética', price: 0, description: 'Suporte cervical anatómico para procedimentos prolongados' }
    ]
  },
  {
    id: 'nr-modelo-2-royale',
    slug: 'maca-modelo-2',
    name: 'Maca Royale Anatómica',
    subtitle: 'Estofo capitonê acolchoado de alto luxo com estrutura metálica dourada Champagne para Lash Designers',
    category: 'anatomica',
    price: 0,
    originalPrice: 0,
    pixDiscountPercent: 0,
    rating: 5.0,
    reviewCount: 112,
    badge: 'Mais Desejada',
    leadTime: 'Confeção em 7 a 10 dias úteis',
    image: '/photos/pecasdeassinatura/_C1M0299.webp',
    gallery: [
      '/photos/pecasdeassinatura/_C1M0299.webp',
      '/maca2/maca2_2.webp',
      '/maca2/maca2_3.webp',
      '/maca2/maca2_4.webp',
      '/maca2/maca2_5.webp'
    ],
    description: 'Estofo acolchoado com gomos anatómicos, curvatura suave e pés em X em aço carbono com banho dourado Champagne fosco de altíssima durabilidade.',
    longDescription: 'A Maca Royale Anatómica une a tradição do estofamento nobre ao suporte ortopédico ativo. Idealizada para procedimentos de longa duração, as suas almofadas anatómicas acolhem a cliente eliminando qualquer ponto de pressão lombar.',
    dimensions: {
      length: '188 cm',
      width: '74 cm',
      height: '76 cm',
      weightCapacity: 'Até 250 kg estáticos'
    },
    features: [
      'Costura capitonê modular com espuma multi-densidade D33 Soft',
      'Estrutura dos pés em X em aço com pintura eletrostática dourada Champagne',
      'Almofada cervical com encaixe anatómico integrada',
      'Revestimento sintético impermeável com proteção contra manchas e pigmentos',
      'Garantia estrutural de 5 anos'
    ],
    availableColors: SIGNATURE_COLORS,
    baseFinishes: [
      { id: 'pes-dourado-champagne', name: 'Pés em X Dourado Champagne Escovado', extraPrice: 0 },
      { id: 'pes-aco-preto-mate', name: 'Pés em X Aço Carbono Negro Fosco', extraPrice: 0 },
      { id: 'pes-madeira-nobre', name: 'Pés em Madeira Maciça Nobre', extraPrice: 0 }
    ],
    optionalAddons: [
      { id: 'embroidery-logo', name: 'Bordado Personalizado com a sua Marca/Monograma', price: 0, description: 'Gravação em alta definição no cabeçote' },
      { id: 'crystal-cover', name: 'Capa Protetora Cristal Náutico Flexível', price: 0, description: 'Proteção invisível sob medida' },
      { id: 'ergonomic-pillow', name: 'Almofada Cervical Anatómica Magnética', price: 0, description: 'Apoio cervical magnético para procedimentos' }
    ]
  }
];
