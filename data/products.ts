import { Product, FAQItem, ReviewItem, RecentSaleItem } from '@/types/ecommerce';

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
    price: 1290.00,
    originalPrice: 1490.00,
    pixDiscountPercent: 5,
    rating: 5.0,
    reviewCount: 88,
    badge: 'Design Assinatura',
    leadTime: 'Confeção em 7 a 10 dias úteis',
    image: '/assets/maca1/maca1_main.png',
    gallery: [
      '/assets/maca1/maca1_main.png',
      '/assets/maca1/maca1_angle2.png',
      '/assets/maca1/maca1_detail.png',
      '/assets/maca1/maca1_close.png'
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
      { id: 'base-madeira-nobre', name: 'Base em Madeira Maciça Nobre', extraPrice: 85 },
      { id: 'base-taupe-mate', name: 'Base em Acabamento Taupe Esculpido', extraPrice: 60 }
    ],
    optionalAddons: [
      { id: 'embroidery-logo', name: 'Bordado Personalizado com a sua Marca/Monograma', price: 45, description: 'Bordado em alta definição com fios acetinados nobres' },
      { id: 'crystal-cover', name: 'Capa Protetora Cristal Náutico Flexível', price: 35, description: 'Proteção sob medida de elevada transparência' },
      { id: 'ergonomic-pillow', name: 'Manta & Almofada Cervical Anatómica Magnética', price: 40, description: 'Suporte cervical anatómico para procedimentos prolongados' }
    ]
  },
  {
    id: 'nr-modelo-2-royale',
    slug: 'maca-modelo-2',
    name: 'Maca Royale Anatómica',
    subtitle: 'Estofo capitonê acolchoado de alto luxo com estrutura metálica dourada Champagne para Lash Designers',
    category: 'anatomica',
    price: 1090.00,
    originalPrice: 1290.00,
    pixDiscountPercent: 5,
    rating: 5.0,
    reviewCount: 112,
    badge: 'Mais Desejada',
    leadTime: 'Confeção em 7 a 10 dias úteis',
    image: '/assets/maca2/maca2_main.png',
    gallery: [
      '/assets/maca2/maca2_main.png',
      '/assets/maca2/maca2_angle2.png',
      '/assets/maca2/maca2_detail.png',
      '/assets/maca2/maca2_gallery1.png',
      '/assets/maca2/maca2_gallery2.png',
      '/assets/maca2/maca2_close.png'
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
      { id: 'pes-madeira-nobre', name: 'Pés em Madeira Maciça Nobre', extraPrice: 80 }
    ],
    optionalAddons: [
      { id: 'embroidery-logo', name: 'Bordado Personalizado com a sua Marca/Monograma', price: 45, description: 'Gravação em alta definição no cabeçote' },
      { id: 'crystal-cover', name: 'Capa Protetora Cristal Náutico Flexível', price: 35, description: 'Proteção invisível sob medida' },
      { id: 'ergonomic-pillow', name: 'Almofada Cervical Anatómica Magnética', price: 40, description: 'Apoio cervical magnético para procedimentos' }
    ]
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Como funciona a personalização do bordado com o logótipo da minha clínica?',
    answer: 'Após a confirmação da sua encomenda, a nossa equipa de designers do Atelier NUDE REST entrará em contacto via WhatsApp para receber o seu vetor ou ficheiro em alta resolução. Produzimos uma maquete digital para sua aprovação antes da confeção definitiva com fios acetinados de alta resistência.'
  },
  {
    question: 'Qual é o prazo de confeção e envio para a minha região?',
    answer: 'Por se tratar de um processo artesanal por medida de rigorosa precisão, o prazo de confeção situa-se entre 7 a 10 dias úteis. O envio é realizado por transportadoras especializadas em mobiliário de luxo com seguro total de carga.'
  },
  {
    question: 'Qual é o peso suportado pelas macas NUDE REST?',
    answer: 'A Maca Sculpt Wave suporta até 260 kg estáticos, com estrutura em multilaminado naval e reforço duplo de sustentação. A Maca Royale Anatómica suporta até 250 kg estáticos, com estrutura em aço carbono industrial e soldadura TIG de alta precisão.'
  },
  {
    question: 'Como funciona a garantia estrutural de 5 anos?',
    answer: 'Todas as macas NUDE REST beneficiam de garantia estrutural de 5 anos cobrindo chassi, soldaduras, multilaminado e bases metálicas. Os revestimentos e espumas possuem garantia de 1 ano contra defeitos de fabrico ou deformações anormais.'
  },
  {
    question: 'Como deve ser feita a limpeza e assepsia do revestimento?',
    answer: 'Os nossos revestimentos texturados nobres foram especificamente formulados para resistir à assepsia constante com álcool a 70% ou clorexidina, preservando o toque suave e a tonalidade inalterada ao longo dos anos.'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    name: 'Dra. Camila Mendonça',
    role: 'Dermatologista & Medicina Estética',
    city: 'Lisboa',
    maca: 'Maca Modelo 1 (Sculpt Wave)',
    rating: 5,
    comment: 'A NUDE REST elevou substancialmente o padrão da minha clínica. As minhas pacientes elogiam frequentemente o conforto lombar absoluto durante procedimentos de duas horas. Design impecável e acabamento irrepreensível.',
    date: 'Há 2 semanas'
  },
  {
    name: 'Larissa Siqueira',
    role: 'Lash Designer Master & Formadora',
    city: 'Porto',
    maca: 'Maca Modelo 2 (Royale Anatómica)',
    rating: 5,
    comment: 'Trabalho com extensões de pestanas o dia inteiro e a ergonomia da Royale transformou o meu quotidiano. As clientes adormecem durante a aplicação e despertam revigoradas sem dores nas costas. O banho dourado Champagne é sublime.',
    date: 'Há 3 semanas'
  },
  {
    name: 'Dr. Rodrigo Alencar',
    role: 'Diretor Clínico & Cirurgião Plástico',
    city: 'Cascais',
    maca: 'Maca Modelo 1 (Sculpt Wave)',
    rating: 5,
    comment: 'Excelente investimento para a nossa clínica boutique. O acompanhamento do atelier foi exemplar e a gravação bordada com a nossa identidade visual ficou perfeita.',
    date: 'Há 1 mês'
  }
];

export const RECENT_SALES: RecentSaleItem[] = [
  {
    name: 'Dra. Juliana V.',
    city: 'Lisboa',
    model: 'Maca Modelo 1 — Sculpt Wave',
    time: 'Há 12 minutos'
  },
  {
    name: 'Studio Glow Aesthetics',
    city: 'Porto',
    model: 'Maca Modelo 2 — Royale Anatómica',
    time: 'Há 28 minutos'
  },
  {
    name: 'Dra. Beatriz M.',
    city: 'Cascais',
    model: 'Maca Modelo 1 — Sculpt Wave',
    time: 'Há 45 minutos'
  },
  {
    name: 'Clínica Sublime',
    city: 'Braga',
    model: 'Maca Modelo 2 — Royale Anatómica',
    time: 'Há 1 hora'
  }
];
