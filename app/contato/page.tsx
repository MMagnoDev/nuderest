import React from 'react';
import { Navbar } from '../components/Navbar';
import { SiteFooter } from '../components/SiteFooter';

export default function ContatoPage() {
  return (
    <main className="page-container">
      <Navbar />

      {/* Page Title */}
      <section className="section-page-title border-b fade-on-scroll">
        <h1 className="page-title">
          <span className="quote-mark">‘</span>Atendimento & <span className="italic">Concierge VIP</span><span className="quote-mark">’</span>
        </h1>
      </section>

      {/* Contact 50% / 50% */}
      <section className="section-contact border-b fade-on-scroll" style={{ minHeight: '520px' }}>
        <div className="contact-col-left border-r" style={{ padding: '80px 48px' }}>
          <div>
            <h2 className="contact-heading" style={{ marginBottom: '24px' }}>
              Inicie o seu projeto <br />
              <span className="italic">por medida</span>
            </h2>
            <p className="contact-note" style={{ maxWidth: '440px', lineHeight: 1.75 }}>
              Os nossos consultores especialistas estão ao seu dispor para auxiliar na escolha da paleta ideal para o seu espaço, aprovação do bordado com o seu logótipo e cálculo de prazos de entrega com envio assegurado.
            </p>
          </div>

          <div style={{ marginTop: '36px' }}>
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20um%20atendimento%20VIP%20para%20personalizar%20uma%20Maca%20NUDE%20REST."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-nude"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 32px',
                textDecoration: 'none',
                fontFamily: 'var(--font-title)',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase'
              }}
            >
              Falar no WhatsApp Concierge →
            </a>
          </div>
        </div>

        <div className="contact-col-right" style={{ padding: '80px 48px' }}>
          <div className="contact-item-group" style={{ gap: '36px' }}>
            <div>
              <div className="contact-item-label">Correspondência Direta</div>
              <a href="mailto:contato@nuderest.com.br" className="contact-item-val">contacto@nuderest.com</a>
            </div>
            <div>
              <div className="contact-item-label">Showroom & Atelier</div>
              <p className="contact-item-val" style={{ fontSize: '20px' }}>Atendimento e Envio para Portugal & Internacional</p>
            </div>
            <div>
              <div className="contact-item-label">WhatsApp VIP Concierge</div>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="contact-item-val">
                +351 910 000 000 / +55 (11) 99999-9999
              </a>
            </div>
            <div>
              <div className="contact-item-label">Horário de Atendimento</div>
              <p className="contact-item-val" style={{ fontSize: '16px', color: 'var(--text-muted)' }}>
                Segunda a Sexta — 09:00 às 19:00 (Lisboa / WET)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section-quote-statement border-b fade-on-scroll">
        <blockquote className="statement-quote">
          “Transformando cabines de estética e clínicas em espaços de pura excelência e repouso.”
        </blockquote>
        <span className="statement-author">— NUDE REST Atelier</span>
      </section>

      <SiteFooter />
    </main>
  );
}
