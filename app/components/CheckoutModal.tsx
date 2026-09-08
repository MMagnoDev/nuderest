'use client';

import React, { useState } from 'react';
import { CartItem } from '@/types/ecommerce';
import { X, ShieldCheck, Lock, CheckCircle2, Copy, Check, QrCode, CreditCard, ArrowRight, Building, Truck } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onClearCart: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onClearCart
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [paymentMethod, setPaymentMethod] = useState<'multibanco' | 'credit_card'>('multibanco');
  const [copiedData, setCopiedData] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cpfCnpj: '',
    clinicName: '',
    zipCode: '',
    street: '',
    number: '',
    city: '',
    state: '',
    cardNumber: '',
    cardHolder: '',
    cardExpiry: '',
    cardCvv: '',
    installments: 12
  });

  if (!isOpen) return null;

  const rawSubtotal = cartItems.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  const discountAmount = rawSubtotal * 0.05;
  const cashFinalTotal = rawSubtotal - discountAmount;
  const creditFinalTotal = rawSubtotal;
  const currentTotal = paymentMethod === 'multibanco' ? cashFinalTotal : creditFinalTotal;
  const installmentValue = creditFinalTotal / formData.installments;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const handleCopyPaymentData = () => {
    const data = `NUDE REST Atelier\nEntidade: 21245\nReferência: 482 109 394\nMontante: ${cashFinalTotal.toFixed(2)} €\nMB WAY: +351 910 000 000\nIBAN: PT50 0033 0000 4528 9201 1023 4`;
    navigator.clipboard.writeText(data);
    setCopiedData(true);
    setTimeout(() => setCopiedData(false), 3000);
  };

  const handleFinishAndClose = () => {
    onClearCart();
    setStep('form');
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 80,
      backgroundColor: 'rgba(22, 16, 12, 0.88)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      overflowY: 'auto'
    }}>
      <div style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-medium)',
        borderRadius: 'var(--radius-lg)',
        width: '100%',
        maxWidth: '860px',
        maxHeight: '92vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.85)'
      }} className="animate-fade-in">

        {/* Modal Top Bar */}
        <div style={{
          padding: '20px 28px',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#1E1713'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Lock size={16} color="#4ADE80" />
            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--nude-alabaster)', letterSpacing: '0.04em' }}>
              CHECKOUT SEGURO & CRIPTOGRAFADO SSL 256-BIT
            </span>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer'
            }}
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmitOrder} style={{ padding: '32px' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.9fr)',
              gap: '32px'
            }} className="checkout-grid">

              {/* Left Column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <h3 style={{ fontSize: '20px', color: 'var(--nude-alabaster)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Building size={18} color="var(--nude-linen)" />
                    1. Dados da Profissional / Clínica
                  </h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Nome Completo ou Razão Social *"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      style={inputStyle}
                    />
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                      <input
                        type="email"
                        name="email"
                        placeholder="E-mail de confirmação *"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        style={inputStyle}
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="WhatsApp / Telefone *"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        style={inputStyle}
                      />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                      <input
                        type="text"
                        name="cpfCnpj"
                        placeholder="NIF / NIPC (para Faturação) *"
                        required
                        value={formData.cpfCnpj}
                        onChange={handleInputChange}
                        style={inputStyle}
                      />
                      <input
                        type="text"
                        name="clinicName"
                        placeholder="Nome do Espaço / Clínica"
                        value={formData.clinicName}
                        onChange={handleInputChange}
                        style={inputStyle}
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div>
                  <h3 style={{ fontSize: '20px', color: 'var(--nude-alabaster)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Truck size={18} color="var(--nude-linen)" />
                    2. Morada de Entrega Assegurada
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '12px' }}>
                      <input
                        type="text"
                        name="zipCode"
                        placeholder="Código Postal *"
                        required
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        style={inputStyle}
                      />
                      <input
                        type="text"
                        name="street"
                        placeholder="Morada / Rua *"
                        required
                        value={formData.street}
                        onChange={handleInputChange}
                        style={inputStyle}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                      <input
                        type="text"
                        name="number"
                        placeholder="N.º / Porta *"
                        required
                        value={formData.number}
                        onChange={handleInputChange}
                        style={inputStyle}
                      />
                      <input
                        type="text"
                        name="city"
                        placeholder="Localidade / Cidade *"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        style={inputStyle}
                      />
                      <input
                        type="text"
                        name="state"
                        placeholder="Distrito / Região *"
                        required
                        value={formData.state}
                        onChange={handleInputChange}
                        style={inputStyle}
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Selector */}
                <div>
                  <h3 style={{ fontSize: '20px', color: 'var(--nude-alabaster)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ShieldCheck size={18} color="var(--nude-linen)" />
                    3. Forma de Pagamento Protegido
                  </h3>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                    <div
                      onClick={() => setPaymentMethod('multibanco')}
                      style={{
                        padding: '16px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: paymentMethod === 'multibanco' ? 'rgba(74, 222, 128, 0.08)' : 'var(--bg-card)',
                        border: paymentMethod === 'multibanco' ? '1px solid #4ADE80' : '1px solid var(--border-subtle)',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4ADE80', fontWeight: 600 }}>
                          <Building size={18} />
                          <span>Multibanco / MB WAY</span>
                        </div>
                        <span className="badge-pill badge-green" style={{ fontSize: '10px' }}>5% OFF</span>
                      </div>
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                        Pronto pagamento e início prioritário da confeção
                      </span>
                    </div>

                    <div
                      onClick={() => setPaymentMethod('credit_card')}
                      style={{
                        padding: '16px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: paymentMethod === 'credit_card' ? 'rgba(236, 226, 216, 0.08)' : 'var(--bg-card)',
                        border: paymentMethod === 'credit_card' ? '1px solid var(--nude-linen)' : '1px solid var(--border-subtle)',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--nude-linen)', fontWeight: 600 }}>
                        <CreditCard size={18} />
                        <span>Cartão de Crédito</span>
                      </div>
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                        Visa, Mastercard ou em até 12 prestações
                      </span>
                    </div>
                  </div>

                  {paymentMethod === 'credit_card' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '16px', backgroundColor: 'var(--bg-card)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                      <input
                        type="text"
                        name="cardNumber"
                        placeholder="Número do Cartão de Crédito"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        style={inputStyle}
                      />
                      <input
                        type="text"
                        name="cardHolder"
                        placeholder="Nome impresso no Cartão"
                        value={formData.cardHolder}
                        onChange={handleInputChange}
                        style={inputStyle}
                      />
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.5fr', gap: '12px' }}>
                        <input
                          type="text"
                          name="cardExpiry"
                          placeholder="Validade (MM/AA)"
                          value={formData.cardExpiry}
                          onChange={handleInputChange}
                          style={inputStyle}
                        />
                        <input
                          type="text"
                          name="cardCvv"
                          placeholder="CVV"
                          value={formData.cardCvv}
                          onChange={handleInputChange}
                          style={inputStyle}
                        />
                        <select
                          name="installments"
                          value={formData.installments}
                          onChange={handleInputChange}
                          style={inputStyle}
                        >
                          <option value="1">1 prestação de {creditFinalTotal.toFixed(2)} €</option>
                          <option value="3">3 prestações de {(creditFinalTotal / 3).toFixed(2)} €</option>
                          <option value="6">6 prestações de {(creditFinalTotal / 6).toFixed(2)} €</option>
                          <option value="10">10 prestações de {(creditFinalTotal / 10).toFixed(2)} €</option>
                          <option value="12">12 prestações de {(creditFinalTotal / 12).toFixed(2)} € (sem juros)</option>
                        </select>
                      </div>
                    </div>
                  )}
                </div>

              </div>

              {/* Right Column: Order Summary */}
              <div style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <h4 style={{ fontSize: '18px', color: 'var(--nude-alabaster)', marginBottom: '16px' }}>
                    Resumo da Encomenda ({cartItems.length} {cartItems.length === 1 ? 'artigo' : 'artigos'})
                  </h4>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                    {cartItems.map(item => (
                      <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '10px' }}>
                        <div>
                          <strong style={{ color: 'var(--nude-alabaster)' }}>{item.product.name}</strong>
                          <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                            Cor: {item.customization.color.name} • {item.customization.baseFinish.name.split('(')[0]}
                          </div>
                          {item.customization.embroideryText && (
                            <div style={{ fontSize: '11px', color: 'var(--nude-linen)' }}>
                              Bordado: {item.customization.embroideryText}
                            </div>
                          )}
                        </div>
                        <span style={{ color: 'var(--nude-alabaster)', fontWeight: 600 }}>
                          {(item.unitPrice * item.quantity).toLocaleString('pt-PT', { minimumFractionDigits: 2 })} €
                        </span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Subtotal:</span>
                      <span>{rawSubtotal.toLocaleString('pt-PT', { minimumFractionDigits: 2 })} €</span>
                    </div>
                    {paymentMethod === 'multibanco' && (
                      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#4ADE80' }}>
                        <span>Desconto Pronto Pagamento (5%):</span>
                        <span>- {discountAmount.toLocaleString('pt-PT', { minimumFractionDigits: 2 })} €</span>
                      </div>
                    )}
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Envio Assegurado com Seguro Total:</span>
                      <span style={{ color: '#4ADE80', fontWeight: 600 }}>GRÁTIS</span>
                    </div>
                  </div>

                  <div style={{
                    marginTop: '20px',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--border-medium)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline'
                  }}>
                    <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--nude-alabaster)' }}>Total Final:</span>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 600, color: 'var(--nude-alabaster)' }}>
                        {currentTotal.toLocaleString('pt-PT', { minimumFractionDigits: 2 })} €
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--nude-linen)' }}>
                        {paymentMethod === 'multibanco' ? 'Pronto pagamento com 5% de desconto' : `Em até 12 prestações de ${installmentValue.toFixed(2)} € sem juros`}
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '28px' }}>
                  <button
                    type="submit"
                    className="btn btn-nude btn-full"
                    style={{ height: '54px', fontSize: '14px' }}
                  >
                    <span>Concluir Encomenda Segura</span>
                    <ArrowRight size={17} />
                  </button>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    marginTop: '14px',
                    fontSize: '11px',
                    color: 'var(--text-dim)'
                  }}>
                    <ShieldCheck size={14} color="#4ADE80" />
                    <span>Garantia de Satisfação e Proteção ao Consumidor</span>
                  </div>
                </div>

              </div>

            </div>
          </form>
        ) : (
          /* Success Screen */
          <div style={{
            padding: '48px 32px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px'
          }}>
            <div style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              backgroundColor: 'rgba(74, 222, 128, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#4ADE80'
            }}>
              <CheckCircle2 size={36} />
            </div>

            <h2 style={{ fontSize: '32px', color: 'var(--nude-alabaster)' }}>
              Encomenda Registada com Sucesso!
            </h2>

            <p style={{ fontSize: '15px', color: 'var(--text-muted)', maxWidth: '520px' }}>
              Parabéns <strong>{formData.fullName || 'Estimada Cliente'}</strong>! O protocolo da sua encomenda é <strong>#NR-2026-{(Math.random() * 89999 + 10000).toFixed(0)}</strong>. Enviámos a confirmação detalhada para o e-mail registado.
            </p>

            {paymentMethod === 'multibanco' && (
              <div style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
                maxWidth: '460px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                gap: '14px'
              }}>
                <div style={{ fontSize: '14px', color: 'var(--nude-linen)', fontWeight: 600, textAlign: 'center' }}>
                  Dados de Pagamento Multibanco / MB WAY
                </div>

                <div style={{
                  padding: '16px',
                  backgroundColor: '#1E1713',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '13px',
                  color: 'var(--text-main)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Entidade:</span>
                    <strong style={{ letterSpacing: '0.08em' }}>21245</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Referência:</span>
                    <strong style={{ letterSpacing: '0.08em' }}>482 109 394</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Montante:</span>
                    <strong style={{ color: '#4ADE80' }}>{cashFinalTotal.toLocaleString('pt-PT', { minimumFractionDigits: 2 })} €</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '6px' }}>
                    <span style={{ color: 'var(--text-muted)' }}>MB WAY:</span>
                    <strong>+351 910 000 000</strong>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyPaymentData}
                  className="btn btn-outline btn-sm btn-full"
                  style={{ gap: '8px' }}
                >
                  {copiedData ? <Check size={14} color="#4ADE80" /> : <Copy size={14} />}
                  <span>{copiedData ? 'Dados Copiados!' : 'Copiar Dados de Pagamento'}</span>
                </button>
              </div>
            )}

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '16px' }}>
              <a
                href={`https://wa.me/5511999999999?text=Ol%C3%A1!%20Acabei%20de%20realizar%20a%20encomenda%20da%20minha%20Maca%20NUDE%20REST%20(Nome:%20${formData.fullName}).%20Gostaria%20de%20acompanhar%20a%20produ%C3%A7%C3%A3o!`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                Acompanhar no WhatsApp Concierge
              </a>

              <button
                type="button"
                onClick={handleFinishAndClose}
                className="btn btn-primary"
              >
                Voltar ao Atelier
              </button>
            </div>
          </div>
        )}

      </div>

      <style jsx>{`
        @media (max-width: 800px) {
          .checkout-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  height: '46px',
  backgroundColor: 'var(--bg-page)',
  border: '1px solid var(--border-medium)',
  borderRadius: 'var(--radius-sm)',
  padding: '0 14px',
  color: 'var(--nude-alabaster)',
  fontSize: '13px',
  outline: 'none'
};
