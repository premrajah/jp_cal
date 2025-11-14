import React, { useState } from 'react';

const AuctionCalculator = () => {
    const [showFormula, setShowFormula] = useState(false);
  const [hammerPrice, setHammerPrice] = useState(100);
  const [deliveryPrice, setDeliveryPrice] = useState(0);

  // Reference-based Auction Calculations
  const vatOnHammer = +(hammerPrice * 0.2).toFixed(2);
  const buyersPremium = +(hammerPrice * 0.25).toFixed(2);
  const vatOnPremium = +(buyersPremium * 0.2).toFixed(2);
  // VAT on delivery rounded up to nearest penny
  const vatOnDelivery = Math.ceil(deliveryPrice * 0.2 * 100) / 100;
  const totalVat = +(vatOnHammer + vatOnPremium + vatOnDelivery).toFixed(2);
  const subtotal = +(hammerPrice + deliveryPrice + buyersPremium + totalVat).toFixed(2);

  return (
    <div style={{
      maxWidth: 480,
      margin: '0 auto',
      padding: '8px 0 24px 0',
      border: 'none',
      borderRadius: 0,
      background: '#fff',
      fontSize: '1.08rem',
      width: '100vw',
      minHeight: '100vh',
      boxSizing: 'border-box',
    }}>
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        background: '#e3f2fd',
        padding: '12px 10px 10px 10px',
        borderBottom: '2px solid #1976d2',
        fontSize: '1.08rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        marginBottom: 0,
        color: '#111',
      }}>
        <button
          onClick={() => setShowFormula(v => !v)}
          style={{
            background: 'none',
            border: 'none',
            color: '#111',
            fontWeight: 600,
            fontSize: '1.15rem',
            cursor: 'pointer',
            padding: 0,
            marginBottom: 6,
            textAlign: 'left',
            width: '100%',
          }}
          aria-expanded={showFormula}
        >
          {showFormula ? '▼ Calculation Formula' : '► Calculation Formula'}
        </button>
        {showFormula && (
          <ul style={{ margin: '10px 0 0 18px', padding: 0, lineHeight: 1.6, color: '#111' }}>
            <li><b>VAT on Hammer</b> = Hammer Price × 0.2</li>
            <li><b>Buyer's Premium</b> = Hammer Price × 0.25</li>
            <li><b>VAT on Premium</b> = Buyer's Premium × 0.2</li>
            <li><b>VAT on Delivery</b> = Delivery Price × 0.2 (rounded up)</li>
            <li><b>Total VAT</b> = VAT on Hammer + VAT on Premium + VAT on Delivery</li>
            <li><b>Subtotal</b> = Hammer Price + Delivery Price + Buyer's Premium + Total VAT</li>
          </ul>
        )}
      </div>
      <div style={{ marginTop: 18 }}>
        <h2 style={{ fontSize: '1.3rem', textAlign: 'center', margin: '18px 0 10px 0', color: '#1976d2' }}>Auction Pricing Calculator</h2>
        <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308" alt="Auction Example" style={{ width: '100%', borderRadius: 10, marginBottom: 12, maxHeight: 120, objectFit: 'cover' }} />
        <form style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '0 12px' }}>
          <label style={{ display: 'flex', flexDirection: 'column', fontWeight: 500 }}>
            Hammer Price (£):
            <input
              type="number"
              value={hammerPrice}
              min={0}
              onChange={e => setHammerPrice(Number(e.target.value))}
              style={{
                padding: 12,
                fontSize: '1.2rem',
                borderRadius: 8,
                border: '1px solid #bbb',
                marginTop: 4,
              }}
              inputMode="decimal"
            />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', fontWeight: 500 }}>
            Delivery Price (£, 0 for pickup):
            <input
              type="number"
              value={deliveryPrice}
              min={0}
              onChange={e => setDeliveryPrice(Number(e.target.value))}
              style={{
                padding: 12,
                fontSize: '1.2rem',
                borderRadius: 8,
                border: '1px solid #bbb',
                marginTop: 4,
              }}
              inputMode="decimal"
            />
          </label>
        </form>
        <hr style={{ margin: '18px 0 10px 0' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '0 12px' }}>
          <div>Hammer Price: <b>£{hammerPrice.toFixed(2)}</b></div>
          <div>VAT on Hammer: <b>£{vatOnHammer.toFixed(2)}</b></div>
          <div>Delivery: <b>£{deliveryPrice.toFixed(2)}</b></div>
          <div>VAT on Delivery: <b>£{vatOnDelivery.toFixed(2)}</b></div>
          <div>Buyer's Premium (25%): <b>£{buyersPremium.toFixed(2)}</b></div>
          <div>VAT on Premium: <b>£{vatOnPremium.toFixed(2)}</b></div>
          <div>Total VAT: <b>£{totalVat.toFixed(2)}</b></div>
          <div style={{ fontWeight: 'bold', marginTop: 12, fontSize: '1.2rem', color: '#1976d2' }}>Subtotal: £{subtotal.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default AuctionCalculator;
