import React from 'react';
import Link from 'next/link';
import { Navbar } from './components/Navbar';
import { SiteFooter } from './components/SiteFooter';

export default function HomePage() {
  return (
    <main className="page-container">
      
      {/* 01 — HEADER COM LINKS DIRETOS NO DESKTOP */}
      <Navbar />

      {/* 02 — TÍTULO DA PÁGINA / INFINITE MARQUEE */}
      <section className="section-page-title border-b">
        <div className="marquee-track" aria-hidden="true">
          {/* Marquee Group 1 */}
          <div className="marquee-group">
            <span className="marquee-item">
              Atelier de Macas <span className="italic">de Alta Costura</span>
              <span className="marquee-dot">•</span>
            </span>
            <span className="marquee-item">
              Maca Sculpt & <span className="italic">Maca Royale</span>
              <span className="marquee-dot">•</span>
            </span>
            <span className="marquee-item">
              Ergonomia de <span className="italic">Alta Performance</span>
              <span className="marquee-dot">•</span>
            </span>
            <span className="marquee-item">
              Espuma D33 de <span className="italic">Densidade Progressiva</span>
              <span className="marquee-dot">•</span>
            </span>
            <span className="marquee-item">
              Estrutura com <span className="italic">5 Anos de Garantia</span>
              <span className="marquee-dot">•</span>
            </span>
            <span className="marquee-item">
              Bordado de Assinatura com a sua <span className="italic">Marca</span>
              <span className="marquee-dot">•</span>
            </span>
            <span className="marquee-item">
              Confeção Sob Medida para <span className="italic">Clínicas & Spas</span>
              <span className="marquee-dot">•</span>
            </span>
            <span className="marquee-item">
              NUDE REST <span className="italic">Atelier</span>
              <span className="marquee-dot">•</span>
            </span>
          </div>

          {/* Marquee Group 2 (Duplicate for infinite seamless loop) */}
          <div className="marquee-group" aria-hidden="true">
            <span className="marquee-item">
              Atelier de Macas <span className="italic">de Alta Costura</span>
              <span className="marquee-dot">•</span>
            </span>
            <span className="marquee-item">
              Maca Sculpt & <span className="italic">Maca Royale</span>
              <span className="marquee-dot">•</span>
            </span>
            <span className="marquee-item">
              Ergonomia de <span className="italic">Alta Performance</span>
              <span className="marquee-dot">•</span>
            </span>
            <span className="marquee-item">
              Espuma D33 de <span className="italic">Densidade Progressiva</span>
              <span className="marquee-dot">•</span>
            </span>
            <span className="marquee-item">
              Estrutura com <span className="italic">5 Anos de Garantia</span>
              <span className="marquee-dot">•</span>
            </span>
            <span className="marquee-item">
              Bordado de Assinatura com a sua <span className="italic">Marca</span>
              <span className="marquee-dot">•</span>
            </span>
            <span className="marquee-item">
              Confeção Sob Medida para <span className="italic">Clínicas & Spas</span>
              <span className="marquee-dot">•</span>
            </span>
            <span className="marquee-item">
              NUDE REST <span className="italic">Atelier</span>
              <span className="marquee-dot">•</span>
            </span>
          </div>
        </div>
      </section>

      {/* 03 — HERO PRINCIPAL (2/3 VÍDEO + 1/3 TEXTO COM ANIMAÇÃO) */}
      <section className="section-hero section-hero-home border-b">
        <div className="hero-col-left border-r">
          <video
            src="/video_hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
        <div className="hero-col-right">
          <h2 className="hero-quote">
            Atelier de macas,<br />
            ergonomia &<br />
            design por medida<br />
            <span className="line-italic">NUDE REST</span>
          </h2>
        </div>
      </section>

      {/* 04 — TEXTO BIOGRÁFICO COM MONOGRAMAS EM FUNDO BRANCO */}
      <section className="section-bio border-b">
        {/* Logotipo Monograma NR (Bottom-Left) */}
        <div className="decor-slot-bottom-left">
          <img
            src="/logotipo.png"
            alt="NUDE REST Monograma"
          />
        </div>

        {/* Center Bio Paragraphs */}
        <div className="bio-text-center">
          <p>
            Concebidas para transformar a experiência estética num momento de repouso absoluto. A NUDE REST é especializada em dois modelos de assinatura: a <strong>Maca Sculpt (Sculpt Wave)</strong> e a <strong>Maca Royale (Royale Anatómica)</strong>. Ambas são projetadas artesanalmente com curvatura de alívio lombar, espuma multi-densidade D33 Ultra Soft e revestimento nobre de elevada resistência.
          </p>
          <p>
            Com dezenas de combinações na paleta Nude, escolha entre pés em aço com banho dourado Champagne ou bases revestidas por medida, com a opção de gravação em alta definição do logótipo da sua clínica. Uma composição arquitetónica sofisticada com 5 anos de garantia estrutural.
          </p>
        </div>

        {/* Logotipo Monograma NR (Top-Right) */}
        <div className="decor-slot-top-right">
          <img
            src="/logotipo.png"
            alt="NUDE REST Monograma"
          />
        </div>
      </section>

      {/* 05 — GALERIA / OS 2 MODELOS DE MACAS & PERSONALIZAÇÃO */}
      <section className="section-gallery border-b">
        {/* Left Lead Column */}
        <div className="gallery-lead-col border-r">
          <h3 className="gallery-lead-text">
            Os Nossos 2 Modelos<br />
            <span className="italic">& acabamentos</span>
          </h3>
        </div>

        {/* Horizontal Cards */}
        <div className="gallery-scroll-strip">
          {/* Tile 1: Maca Sculpt — Sculpt Wave */}
          <Link href="/maca-modelo-1" style={{ textDecoration: 'none', color: 'inherit' }} className="gallery-tile border-r">
            <div className="gallery-tile-img-box">
              <img
                src="/assets/maca1/maca1_main.png"
                alt="Maca Sculpt — Sculpt Wave"
              />
            </div>
            <h4 className="gallery-tile-heading">Maca Sculpt — Sculpt Wave</h4>
            <p className="gallery-tile-desc">
              Design em arco escultural contínuo com base cilíndrica e estofamento em tecido texturado de luxo.
            </p>
          </Link>

          {/* Tile 2: Maca Royale — Royale Anatómica */}
          <Link href="/maca-modelo-2" style={{ textDecoration: 'none', color: 'inherit' }} className="gallery-tile border-r">
            <div className="gallery-tile-img-box">
              <img
                src="/assets/maca2/maca2_main.png"
                alt="Maca Royale — Royale Anatómica"
              />
            </div>
            <h4 className="gallery-tile-heading">Maca Royale — Royale Anatómica</h4>
            <p className="gallery-tile-desc">
              Estofamento acolchoado capitonê de alto relevo com pés em X em acabamento dourado Champagne.
            </p>
          </Link>

          {/* Tile 3: Detalhes & Textura Modelo 1 */}
          <div className="gallery-tile border-r">
            <div className="gallery-tile-img-box">
              <img
                src="/assets/maca1/maca1_detail.png"
                alt="Pormenor de Costura Modelo 1"
              />
            </div>
            <h4 className="gallery-tile-heading">Acabamento Nobre Modelo 1</h4>
            <p className="gallery-tile-desc">
              Curvatura anatómica com costura artesanal francesa e manta de conforto integrada.
            </p>
          </div>

          {/* Tile 4: Estrutura Dourada Modelo 2 */}
          <div className="gallery-tile border-r">
            <div className="gallery-tile-img-box">
              <img
                src="/assets/maca2/maca2_angle2.png"
                alt="Pés Dourados Modelo 2"
              />
            </div>
            <h4 className="gallery-tile-heading">Estrutura em X Modelo 2</h4>
            <p className="gallery-tile-desc">
              Pés em aço carbono microtexturado em tom ouro nobre com máxima estabilidade estrutural.
            </p>
          </div>

          {/* Tile 5: Almofada & Gravação */}
          <div className="gallery-tile">
            <div className="gallery-tile-img-box">
              <img
                src="/assets/maca2/maca2_gallery1.png"
                alt="Ergonomia Cervical"
              />
            </div>
            <h4 className="gallery-tile-heading">Ergonomia & Almofada</h4>
            <p className="gallery-tile-desc">
              Apoio cervical articulado por medida com possibilidade de gravação da sua marca.
            </p>
          </div>
        </div>
      </section>

      {/* 06 — BLOCO EDITORIAL FINAL (27% / 73%) */}
      <section className="section-final-editorial border-b">
        <div className="final-col-left border-r">
          <img
            src="/assets/maca1/maca1_angle2.png"
            alt="Atelier NUDE REST — Modelo 1"
          />
        </div>
        <div className="final-col-right">
          <h3 className="final-title">Ergonomia com <span className="italic">propósito</span></h3>
          <div className="final-paras">
            <p>
              Acreditamos que o mobiliário clínico deve ser a extensão da excelência profissional. Cada pormenor da NUDE REST foi estudado para eliminar pontos de pressão na coluna vertebral da paciente e assegurar que a profissional trabalhe com acesso desobstruído e conforto postural.
            </p>
            <p>
              Utilizamos espumas de alta resiliência D33 que não deformam com o tempo, aliadas a couros náuticos resistentes à assepsia constante com álcool 70%. Segurança estrutural, transporte dedicado com seguro total e a garantia de um investimento que valoriza o seu atendimento.
            </p>
          </div>
        </div>
      </section>

      {/* 07 — PRINCIPLES & PHILOSOPHY (3-Column Grid) */}
      <section className="section-manifesto border-b">
        <div className="manifesto-col border-r">
          <span className="manifesto-num">01 / ERGONOMIA</span>
          <div>
            <h3 className="manifesto-title">Alívio Postural Ativo</h3>
            <p className="manifesto-desc">
              Desenvolvida com curvatura milimétrica que acomoda o corpo em relaxamento profundo durante longas sessões de atendimento.
            </p>
          </div>
        </div>
        <div className="manifesto-col border-r">
          <span className="manifesto-num">02 / ARTESANATO</span>
          <div>
            <h3 className="manifesto-title">Paleta Nude & Bordado</h3>
            <p className="manifesto-desc">
              Confeção por medida na paleta exclusiva NUDE REST com gravação do logótipo da sua clínica em fios acetinados.
            </p>
          </div>
        </div>
        <div className="manifesto-col">
          <span className="manifesto-num">03 / SEGURANÇA</span>
          <div>
            <h3 className="manifesto-title">5 Anos de Garantia</h3>
            <p className="manifesto-desc">
              Chassi reforçado em aço e madeira tratada com garantia estrutural de 5 anos e envio seguro e assegurado.
            </p>
          </div>
        </div>
      </section>

      {/* 08 — SELECTED ARCHIVE / CURATED WORKS (4-Column Grid) */}
      <section className="section-archive border-b">
        <div className="section-archive-header border-b">
          <h2 className="archive-header-title">Arquivo <span className="italic">de Produção</span></h2>
          <span className="archive-header-index">Vol. 01 — 2026</span>
        </div>
        <div className="section-archive-grid">
          {/* Archive Item 1 */}
          <div className="archive-card border-r">
            <div className="archive-card-image">
              <img
                src="/assets/maca1/maca1_main.png"
                alt="Maca Sculpt — Sculpt Wave"
              />
            </div>
            <span className="archive-card-meta">Maca Sculpt / 01</span>
            <h4 className="archive-card-title">Sculpt Wave Nude</h4>
            <p className="archive-card-desc">
              Maca Sculpt em curva contínua escultural com revestimento texturado e base cilíndrica.
            </p>
          </div>
          {/* Archive Item 2 */}
          <div className="archive-card border-r">
            <div className="archive-card-image">
              <img
                src="/assets/maca2/maca2_main.png"
                alt="Maca Royale — Royale Anatómica"
              />
            </div>
            <span className="archive-card-meta">Maca Royale / 02</span>
            <h4 className="archive-card-title">Royale Gold Champagne</h4>
            <p className="archive-card-desc">
              Maca Royale com acolchoamento capitonê anatómico e pés em X em acabamento dourado fosco.
            </p>
          </div>
          {/* Archive Item 3 */}
          <div className="archive-card border-r">
            <div className="archive-card-image">
              <img
                src="/assets/maca1/maca1_detail.png"
                alt="Pormenor de Costura Maca Sculpt"
              />
            </div>
            <span className="archive-card-meta">Maca Sculpt / 03</span>
            <h4 className="archive-card-title">Curvatura de Precisão</h4>
            <p className="archive-card-desc">
              Espuma D33 Ultra Soft com alívio lombar contínuo e manta aveludada por medida.
            </p>
          </div>
          {/* Archive Item 4 */}
          <div className="archive-card">
            <div className="archive-card-image">
              <img
                src="/assets/maca2/maca2_gallery1.png"
                alt="Pés Dourados Modelo 2"
              />
            </div>
            <span className="archive-card-meta">Maca Modelo 2 / 04</span>
            <h4 className="archive-card-title">Chassi & Conforto</h4>
            <p className="archive-card-desc">
              Estrutura reforçada de elevada sustentação e apoio cervical acolchoado ergonómico.
            </p>
          </div>
        </div>
      </section>

      {/* 09 — BIG PULL QUOTE STATEMENT */}
      <section className="section-quote-statement border-b">
        <blockquote className="statement-quote">
          “O luxo no atendimento começa onde a cliente repousa: na união perfeita entre ergonomia absoluta e design por medida.”
        </blockquote>
        <span className="statement-author">— NUDE REST Manifesto</span>
      </section>

      {/* 10 — CONTACT & INQUIRIES (50% / 50%) */}
      <section className="section-contact border-b">
        <div className="contact-col-left border-r">
          <h2 className="contact-heading">Personalize o seu <br /><span className="italic">espaço</span></h2>
          <p className="contact-note">
            Disponível para encomendas de macas feitas por medida, escolha de paleta exclusiva, bordado de marca e faturação para clínicas e spas.
          </p>
        </div>
        <div className="contact-col-right">
          <div className="contact-item-group">
            <div>
              <div className="contact-item-label">Correspondência Direta</div>
              <a href="mailto:contacto@nuderest.com" className="contact-item-val">contacto@nuderest.com</a>
            </div>
            <div>
              <div className="contact-item-label">Showroom & Atelier</div>
              <p className="contact-item-val" style={{ fontSize: '19px' }}>Atelier NUDE REST — Atendimento Exclusivo</p>
            </div>
            <div>
              <div className="contact-item-label">WhatsApp VIP Concierge</div>
              <a href="https://wa.me/351910000000" target="_blank" rel="noopener noreferrer" className="contact-item-val">
                +351 910 000 000 / WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 11 — EDITORIAL MINIMAL FOOTER */}
      <SiteFooter />

    </main>
  );
}
