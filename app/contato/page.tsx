'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Reveal } from '../components/ScrollReveal';

export default function ContatoPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [model, setModel] = useState('Maca Sculpt Wave');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, envio mensagem através do site NUDE REST:
- Nome: ${name}
- Email: ${email}
- Telefone: ${phone}
- Modelo de Interesse: ${model}
- Mensagem: ${message || 'Gostaria de receber uma proposta e prazo de entrega.'}`;

    window.open(`https://wa.me/351910800000?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <main style={{ backgroundColor: '#FAF9F6', minHeight: '100vh', color: '#1C1A18' }}>
      <Navbar />

      {/* 01 — HERO HEADER */}
      <section style={{
        padding: 'clamp(96px, 11vw, 140px) 0 clamp(48px, 6vw, 72px) 0',
        borderBottom: '1px solid #ECE7DE'
      }}>
        <div className="editorial-container">
          <div style={{ maxWidth: '780px' }}>
            <Reveal direction="up" delay={100}>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#8E867C',
                display: 'block',
                marginBottom: '18px'
              }}>
                ATENDIMENTO & CONCIERGE
              </span>
            </Reveal>

            <Reveal direction="up" delay={200}>
              <h1 style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(38px, 4.8vw, 64px)',
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: '#1C1A18',
                marginBottom: '24px'
              }}>
                Fale connosco.
              </h1>
            </Reveal>

            <Reveal direction="up" delay={300}>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(15px, 1.15vw, 17px)',
                lineHeight: 1.75,
                color: '#55514B',
                maxWidth: '640px'
              }}>
                Estamos disponíveis para responder a todas as questões sobre personalização, acabamentos por medida e prazos de confeção para o seu projeto.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 02 — FORM & CONCIERGE SPLIT */}
      <section style={{
        padding: 'clamp(80px, 9vw, 130px) 0',
        borderBottom: '1px solid #ECE7DE'
      }}>
        <div className="editorial-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(300px, 1fr) minmax(320px, 1.15fr)',
            gap: 'clamp(48px, 7vw, 96px)',
            alignItems: 'flex-start'
          }}>
            {/* Left Concierge Column */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Reveal direction="up" delay={150}>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#8E867C',
                  display: 'block',
                  marginBottom: '20px'
                }}>
                  CANAIS DIRETOS
                </span>
              </Reveal>

              <Reveal direction="up" delay={200}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '36px',
                  fontFamily: 'var(--font-sans)'
                }}>
                  <div>
                    <span style={{ fontSize: '11px', color: '#8E867C', textTransform: 'uppercase', letterSpacing: '0.14em', display: 'block', marginBottom: '8px' }}>
                      WHATSAPP CONCIERGE (RESPOSTA IMEDIATA)
                    </span>
                    <a
                      href="https://wa.me/351910800000"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: 'clamp(18px, 1.8vw, 24px)',
                        fontWeight: 400,
                        color: '#1C1A18',
                        textDecoration: 'none',
                        letterSpacing: '-0.01em',
                        borderBottom: '1px solid #1C1A18',
                        paddingBottom: '2px'
                      }}
                    >
                      +351 910 800 000
                    </a>
                  </div>

                  <div>
                    <span style={{ fontSize: '11px', color: '#8E867C', textTransform: 'uppercase', letterSpacing: '0.14em', display: 'block', marginBottom: '8px' }}>
                      E-MAIL INSTITUCIONAL
                    </span>
                    <a
                      href="mailto:contacto@nuderest.com"
                      style={{
                        fontSize: 'clamp(16px, 1.4vw, 18px)',
                        fontWeight: 400,
                        color: '#1C1A18',
                        textDecoration: 'none',
                        borderBottom: '1px solid #1C1A18',
                        paddingBottom: '2px'
                      }}
                    >
                      contacto@nuderest.com
                    </a>
                  </div>

                  <div>
                    <span style={{ fontSize: '11px', color: '#8E867C', textTransform: 'uppercase', letterSpacing: '0.14em', display: 'block', marginBottom: '8px' }}>
                      ATENDIMENTO PRESENCIAL NO ATELIER
                    </span>
                    <p style={{ fontSize: '14.5px', lineHeight: 1.7, color: '#55514B' }}>
                      Visitas e apresentações de amostras têxteis mediante marcação prévia.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal direction="up" delay={300}>
                <div style={{
                  marginTop: '48px',
                  paddingTop: '32px',
                  borderTop: '1px solid #ECE7DE',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#55514B' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#1C1A18' }}></span>
                    Confeção artesanal em 7 a 10 dias úteis
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#55514B' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#1C1A18' }}></span>
                    Envio seguro estruturado com rastreamento total
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#55514B' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#1C1A18' }}></span>
                    Garantia estrutural de 5 anos
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Minimalist Form */}
            <Reveal direction="right" delay={250}>
              <div style={{
                backgroundColor: '#F5F2EC',
                padding: 'clamp(36px, 5vw, 56px)',
                borderRadius: '2px',
                border: '1px solid #ECE7DE'
              }}>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#8E867C',
                  display: 'block',
                  marginBottom: '14px'
                }}>
                  SOLICITAÇÃO DE PROPOSTA
                </span>
                <h2 style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(24px, 2.8vw, 32px)',
                  fontWeight: 400,
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                  color: '#1C1A18',
                  marginBottom: '28px'
                }}>
                  Personalize o seu atendimento.
                </h2>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px', color: '#1C1A18' }}>
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Dra. Mariana Costa"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        fontSize: '14px',
                        fontFamily: 'var(--font-sans)',
                        backgroundColor: '#FAF9F6',
                        border: '1px solid #ECE7DE',
                        borderRadius: '2px',
                        color: '#1C1A18',
                        outline: 'none',
                        transition: 'border-color 0.2s ease'
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = '#1C1A18')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = '#ECE7DE')}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px', color: '#1C1A18' }}>
                        E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="nome@clinica.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          fontSize: '14px',
                          fontFamily: 'var(--font-sans)',
                          backgroundColor: '#FAF9F6',
                          border: '1px solid #ECE7DE',
                          borderRadius: '2px',
                          color: '#1C1A18',
                          outline: 'none'
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = '#1C1A18')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = '#ECE7DE')}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px', color: '#1C1A18' }}>
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+351 910 000 000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          fontSize: '14px',
                          fontFamily: 'var(--font-sans)',
                          backgroundColor: '#FAF9F6',
                          border: '1px solid #ECE7DE',
                          borderRadius: '2px',
                          color: '#1C1A18',
                          outline: 'none'
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = '#1C1A18')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = '#ECE7DE')}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px', color: '#1C1A18' }}>
                      Modelo de Interesse
                    </label>
                    <select
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        fontSize: '14px',
                        fontFamily: 'var(--font-sans)',
                        backgroundColor: '#FAF9F6',
                        border: '1px solid #ECE7DE',
                        borderRadius: '2px',
                        color: '#1C1A18',
                        outline: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      <option value="Maca Sculpt Wave">Maca Sculpt Wave (Arco Escultural)</option>
                      <option value="Maca Royale Anatómica">Maca Royale Anatómica (Capitoné & Canais)</option>
                      <option value="Personalização Sob Medida">Personalização Completa / Projeto de Clínica</option>
                      <option value="Dúvidas Gerais">Outras Informações</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px', color: '#1C1A18' }}>
                      Mensagem ou Detalhes do Projeto
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Indique a cidade de entrega, preferências de cores ou necessidade de bordado com logótipo..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        fontSize: '14px',
                        fontFamily: 'var(--font-sans)',
                        backgroundColor: '#FAF9F6',
                        border: '1px solid #ECE7DE',
                        borderRadius: '2px',
                        color: '#1C1A18',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = '#1C1A18')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = '#ECE7DE')}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      padding: '15px 32px',
                      fontSize: '11px',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: '#EDE8DF',
                      backgroundColor: '#1C1A18',
                      border: 'none',
                      borderRadius: '2px',
                      cursor: 'pointer',
                      transition: 'background-color 0.25s ease',
                      marginTop: '8px'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#38342F')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1C1A18')}
                  >
                    ENVIAR PEDIDO DE PROPOSTA →
                  </button>

                  {submitted && (
                    <div style={{ fontSize: '13px', color: '#2E7D32', textAlign: 'center', marginTop: '6px' }}>
                      ✓ Mensagem encaminhada com sucesso para o WhatsApp Concierge.
                    </div>
                  )}
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Unified Luxury Footer */}
      <Footer />
    </main>
  );
}
