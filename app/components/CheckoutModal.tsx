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
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'credit_card'>('pix');
  const [copiedPix, setCopiedPix] = useState(false);
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
  const pixDiscountAmount = rawSubtotal * 0.05;
  const pixFinalTotal = rawSubtotal - pixDiscountAmount;
  const creditFinalTotal = rawSubtotal;
  const currentTotal = paymentMethod === 'pix' ? pixFinalTotal : creditFinalTotal;
  const installmentValue = creditFinalTotal / formData.installments;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const handleCopyPixKey = () => {
    navigator.clipboard.writeText('00020126580014br.gov.bcb.pix0136nudrest-pagamentos-seguros@loja.com.br5204000053039865802BR5925NUDE REST ATELIE MACAS6009SAO PAULO62070503***6304E8A2');
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 3000);
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
                        placeholder="CPF ou CNPJ (para Nota Fiscal) *"
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
                    2. Endereço de Entrega Segura
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '12px' }}>
                      <input
                        type="text"
                        name="zipCode"
                        placeholder="CEP *"
                        required
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        style={inputStyle}
                      />
                      <input
                        type="text"
                        name="street"
                        placeholder="Rua / Avenida *"
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
                        placeholder="Número *"
                        required
                        value={formData.number}
                        onChange={handleInputChange}
                        style={inputStyle}
                      />
                      <input
                        type="text"
                        name="city"
                        placeholder="Cidade *"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        style={inputStyle}
                      />
                      <input
                        type="text"
                        name="state"
                        placeholder="UF *"
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
                      onClick={() => setPaymentMethod('pix')}
                      style={{
                        padding: '16px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: paymentMethod === 'pix' ? 'rgba(74, 222, 128, 0.08)' : 'var(--bg-card)',
                        border: paymentMethod === 'pix' ? '1px solid #4ADE80' : '1px solid var(--border-subtle)',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4ADE80', fontWeight: 600 }}>
                          <QrCode size={18} />
                          <span>PIX Instantâneo</span>
                        </div>
                        <span className="badge-pill badge-green" style={{ fontSize: '10px' }}>5% OFF</span>
                      </div>
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                        Aprovação imediata e início prioritário da confecção
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
                        Em até 12x sem juros no cartão
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
                          <option value="1">1x de R$ {creditFinalTotal.toFixed(2)}</option>
                          <option value="3">3x de R$ {(creditFinalTotal / 3).toFixed(2)}</option>
                          <option value="6">6x de R$ {(creditFinalTotal / 6).toFixed(2)}</option>
                          <option value="10">10x de R$ {(creditFinalTotal / 10).toFixed(2)}</option>
                          <option value="12">12x de R$ {(creditFinalTotal / 12).toFixed(2)} (sem juros)</option>
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
                    Resumo do Pedido ({cartItems.length} {cartItems.length === 1 ? 'item' : 'itens'})
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
                          R$ {(item.unitPrice * item.quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Subtotal:</span>
                      <span>R$ {rawSubtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                    </div>
                    {paymentMethod === 'pix' && (
                      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#4ADE80' }}>
                        <span>Desconto PIX (5%):</span>
                        <span>- R$ {pixDiscountAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                      </div>
                    )}
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Frete Especial com Seguro:</span>
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
                        R$ {currentTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--nude-linen)' }}>
                        {paymentMethod === 'pix' ? 'Pagamento à vista com 5% de desconto' : `Em até 12x de R$ ${installmentValue.toFixed(2)} sem juros`}
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
                    <span>Concluir Pedido Seguro</span>
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
              width: '64px',
              height: '64px',
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
              Pedido Registrado com Sucesso!
            </h2>

            <p style={{ fontSize: '15px', color: 'var(--text-muted)', maxWidth: '520px' }}>
              Parabéns <strong>{formData.fullName || 'Doutora'}</strong>! O protocolo do seu pedido é <strong>#NR-2026-{(Math.random() * 89999 + 10000).toFixed(0)}</strong>. Enviamos a confirmação detalhada para o e-mail cadastrado.
            </p>

            {paymentMethod === 'pix' && (
              <div style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
                maxWidth: '460px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px'
              }}>
                <div style={{ fontSize: '13px', color: 'var(--nude-linen)', fontWeight: 600 }}>
                  Chave PIX Copia e Cola (Valor: R$ {pixFinalTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })})
                </div>

                <div style={{
                  padding: '12px',
                  backgroundColor: '#1E1713',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  fontFamily: 'monospace',
                  wordBreak: 'break-all',
                  border: '1px solid var(--border-subtle)',
                  width: '100%'
                }}>
                  00020126580014br.gov.bcb.pix0136nudrest-pagamentos-seguros@loja.com.br5204000053039865802BR5925NUDE REST ATELIE MACAS6009SAO PAULO62070503***6304E8A2
                </div>

                <button
                  type="button"
                  onClick={handleCopyPixKey}
                  className="btn btn-outline btn-sm btn-full"
                  style={{ gap: '8px' }}
                >
                  {copiedPix ? <Check size={14} color="#4ADE80" /> : <Copy size={14} />}
                  <span>{copiedPix ? 'Código PIX Copiado!' : 'Copiar Chave PIX'}</span>
                </button>
              </div>
            )}

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '16px' }}>
              <a
                href={`https://wa.me/5511999999999?text=Ol%C3%A1!%20Acabei%20de%20fazer%20o%20pedido%20da%20minha%20Maca%20NUDE%20REST%20(Nome:%20${formData.fullName}).%20Gostaria%20de%20acompanhar%20a%20produ%C3%A7%C3%A3o!`}
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
                Voltar à Loja
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
