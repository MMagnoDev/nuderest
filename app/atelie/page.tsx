'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '../components/Navbar';
import { SiteFooter } from '../components/SiteFooter';

export default function AteliePage() {
  return (
    <main className="page-container">
      <Navbar />

      {/* Page Title */}
      <section className="section-page-title border-b">
        <h1 className="page-title">
          <span className="quote-mark">‘</span>Sobre a <span className="italic">NUDE REST</span><span className="quote-mark">’</span>
        </h1>
      </section>

      {/* Hero 50% / 50% with the brand wall logo */}
      <section className="section-hero border-b">
        <div className="hero-col-left border-r">
          <img
            src="/assets/maca1/maca1_main.png"
            alt="Ateliê NUDE REST — Identidade e Mobiliário de Alto Padrão"
          />
        </div>
        <div className="hero-col-right">
          <h2 className="hero-quote">
            O ponto de encontro entre<br />
            arquitetura, repouso &<br />
            alta autoridade clínica<br />
            <span className="line-italic">NUDE REST</span>
          </h2>
        </div>
      </section>

      {/* Bio / Brand Manifesto (Bege Quase Preta) */}
      <section className="section-bio section-bio-dark border-b">
        <div className="decor-slot-bottom-left">
          <img
            src="/logotipo.png"
            alt="NUDE REST Monograma"
          />
        </div>

        <div className="bio-text-center">
          <p>
            A <strong>NUDE REST</strong> nasceu com um propósito claro: redefinir a experiência de repouso no universo da estética de luxo, lash design, dermatologia e spas. Entendemos que a maca é a peça central do seu espaço — onde a paciente passa horas e onde a autoridade do seu atendimento é percebida no primeiro toque.
          </p>
          <p>
            Cada modelo que sai do nosso ateliê é confeccionado sob encomenda, unindo curvatura anatômica testada para alívio lombar absoluto, espumas certificadas D33 multi-densidade, revestimentos nobres resistentes à assepsia hospitalar com álcool 70% e personalização exclusiva com a marca da sua clínica.
          </p>
        </div>

        <div className="decor-slot-top-right">
          <img
            src="/logotipo.png"
            alt="NUDE REST Monograma"
          />
        </div>
      </section>

      {/* 3 Pillars of NUDE REST */}
      <section className="section-manifesto border-b">
        <div className="manifesto-col border-r">
          <span className="manifesto-num">01 / NOSSA ORIGEM</span>
          <div>
            <h3 className="manifesto-title">Ateliê Sob Medida</h3>
            <p className="manifesto-desc">
              Não produzimos em massa. Cada peça é fabricada individualmente respeitando a paleta e a assinatura visual de cada profissional.
            </p>
          </div>
        </div>
        <div className="manifesto-col border-r">
          <span className="manifesto-num">02 / FISIOLOGIA & SAÚDE</span>
          <div>
            <h3 className="manifesto-title">Ergonomia Ativa</h3>
            <p className="manifesto-desc">
              Alívio imediato da coluna lombar da cliente e ângulo postural desobstruído para a profissional trabalhar com precisão.
            </p>
          </div>
        </div>
        <div className="manifesto-col">
          <span className="manifesto-num">03 / CONFIANÇA TOTAL</span>
          <div>
            <h3 className="manifesto-title">5 Anos de Garantia</h3>
            <p className="manifesto-desc">
              Estruturas robustas em aço carbono e multilaminado naval com transporte blindado assegurado para todo o Brasil.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Quote Statement */}
      <section className="section-quote-statement border-b">
        <blockquote className="statement-quote">
          “Mobiliário que não apenas decora, mas eleva o posicionamento, o conforto da cliente e a autoridade da sua marca.”
        </blockquote>
        <span className="statement-author">— NUDE REST Manifesto</span>
      </section>

      {/* CTA section */}
      <section className="section-archive-header border-b">
        <h2 className="archive-header-title">Conheça nossos 2 Modelos Exclusivos</h2>
        <Link href="/colecoes" className="archive-header-index" style={{ textDecoration: 'none' }}>
          Explorar Coleções →
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
