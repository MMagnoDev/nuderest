import React from 'react';
import { Navbar } from '../components/Navbar';
import { SiteFooter } from '../components/SiteFooter';
import { Mail, Phone, MapPin, Clock, MessageCircle, ShieldCheck } from 'lucide-react';

export default function ContatoPage() {
  return (
    <main className="page-container">
      <Navbar />

      {/* Page Title */}
      <section className="section-page-title border-b">
        <h1 className="page-title">
          <span className="quote-mark">‘</span>Atendimento & <span className="italic">Concierge VIP</span><span className="quote-mark">’</span>
        </h1>
      </section>

      {/* Contact 50% / 50% */}
      <section className="section-contact border-b" style={{ minHeight: '520px' }}>
        <div className="contact-col-left border-r" style={{ padding: '80px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <span className="badge-pill badge-nude" style={{ marginBottom: '20px', display: 'inline-flex' }}>
              ATELIER SOB MEDIDA
            </span>
            <h2 className="contact-heading" style={{ marginBottom: '24px', fontSize: '36px', lineHeight: 1.15 }}>
              Inicie o seu projeto <br />
              <span className="italic">por medida</span>
            </h2>
            <p className="contact-note" style={{ maxWidth: '440px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-muted)' }}>
              Os nossos consultores especialistas estão ao seu dispor para auxiliar na escolha da paleta ideal para a sua clínica ou spa, aprovação do bordado com o seu logótipo e cálculo de prazos de entrega com envio assegurado para Portugal e toda a Europa.
            </p>
          </div>

          <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'flex-start' }}>
            <a
              href="https://wa.me/351910000000?text=Ol%C3%A1%2C%20gostaria%20de%20um%20atendimento%20VIP%20para%20personalizar%20uma%20Maca%20NUDE%20REST."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-nude"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 36px',
                textDecoration: 'none',
                fontFamily: 'var(--font-title)',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase'
              }}
            >
              <MessageCircle size={16} />
              <span>Contactar Concierge no WhatsApp →</span>
            </a>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--nude-taupe)', fontSize: '12px' }}>
              <ShieldCheck size={15} color="#4ADE80" />
              <span>Resposta média em menos de 15 minutos</span>
            </div>
          </div>
        </div>

        <div className="contact-col-right" style={{ padding: '80px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="contact-item-group" style={{ gap: '36px' }}>
            <div>
              <div className="contact-item-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Mail size={12} color="var(--nude-linen)" />
                <span>Correspondência Direta</span>
              </div>
              <a href="mailto:contacto@nuderest.com" className="contact-item-val" style={{ fontSize: '22px' }}>
                contacto@nuderest.com
              </a>
            </div>

            <div>
              <div className="contact-item-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={12} color="var(--nude-linen)" />
                <span>Showroom & Atelier</span>
              </div>
              <p className="contact-item-val" style={{ fontSize: '20px', color: 'var(--text-main)', margin: 0 }}>
                Lisboa & Porto — Portugal
              </p>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Envio assegurado com seguro total para todo o país e ilhas
              </span>
            </div>

            <div>
              <div className="contact-item-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Phone size={12} color="var(--nude-linen)" />
                <span>Linha Direta VIP WhatsApp</span>
              </div>
              <a href="https://wa.me/351910000000" target="_blank" rel="noopener noreferrer" className="contact-item-val" style={{ fontSize: '22px' }}>
                +351 910 000 000
              </a>
            </div>

            <div>
              <div className="contact-item-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={12} color="var(--nude-linen)" />
                <span>Horário de Atendimento</span>
              </div>
              <p className="contact-item-val" style={{ fontSize: '16px', color: 'var(--text-muted)', margin: 0 }}>
                Segunda a Sexta — 09:00 às 19:00 (Lisboa / WET)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section-quote-statement border-b">
        <blockquote className="statement-quote">
          “Transformando cabines de estética e clínicas em espaços de pura excelência e repouso.”
        </blockquote>
        <span className="statement-author">— NUDE REST Atelier</span>
      </section>

      <SiteFooter />
    </main>
  );
}
