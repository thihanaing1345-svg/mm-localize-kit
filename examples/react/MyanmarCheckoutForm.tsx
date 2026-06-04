import { useState } from 'react';
import { formatMMK, validateMyanmarPhone } from 'mm-localize-kit';

export function MyanmarCheckoutForm() {
  const [phone, setPhone] = useState('');
  const validation = validateMyanmarPhone(phone);

  return (
    <form>
      <label htmlFor="phone">Myanmar phone number</label>
      <input id="phone" value={phone} onChange={event => setPhone(event.target.value)} />
      {!validation.valid && <p role="alert">{validation.message}</p>}
      <p>Total: {formatMMK(45000, { symbol: 'ကျပ်', useMyanmarNumerals: true })}</p>
      <button disabled={!validation.valid}>Continue</button>
    </form>
  );
}
