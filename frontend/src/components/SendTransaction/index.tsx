import { useState } from 'react';
import DEXABI from '../../abi/DEX.json';
import { MiniKit } from '@worldcoin/minikit-js';

export const SendTransaction = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSendTransaction = async () => {
    if (!MiniKit.isInstalled()) {
      alert("MiniKit is not installed!");
      return;
    }

    setLoading(true);
    setError(null);

    const deadline = Math.floor((Date.now() + 30 * 60 * 1000) / 1000).toString();

    // Permit transfer details
    const permitTransfer = {
      permitted: {
        token: '0xF3F92A60e6004f3982F0FdE0d43602fC0a30a0dB', // Replace with your token address
        amount: '10000',
      },
      nonce: Date.now().toString(),
      deadline,
    };

    const permitTransferArgsForm = [
      [permitTransfer.permitted.token, permitTransfer.permitted.amount],
      permitTransfer.nonce,
      permitTransfer.deadline,
    ];

    // Transfer details
    const transferDetails = {
      to: '0x126f7998Eb44Dd2d097A8AB2eBcb28dEA1646AC8', // Replace with recipient address
      requestedAmount: '10000',
    };

    const transferDetailsArgsForm = [transferDetails.to, transferDetails.requestedAmount];

    try {
      const { commandPayload, finalPayload } = await MiniKit.commandsAsync.sendTransaction({
        transaction: [
          {
            address: '0x34afd47fbdcc37344d1eb6a2ed53b253d4392a2f', // Replace with contract address
            abi: DEXABI,
            functionName: 'signatureTransfer',
            args: [permitTransferArgsForm, transferDetailsArgsForm, 'PERMIT2_SIGNATURE_PLACEHOLDER_0'],
          },
        ],
        permit2: [
          {
            ...permitTransfer,
            spender: '0x34afd47fbdcc37344d1eb6a2ed53b253d4392a2f', // Replace with spender address
          },
        ],
      });

      console.log('Transaction sent!', { commandPayload, finalPayload });
      setSuccess(true);
    } catch (err) {
      console.error('Error sending transaction:', err);
      setError('Failed to send transaction.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Send Transaction</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Transaction sent successfully!</p>}
      <button onClick={handleSendTransaction} disabled={loading}>
        {loading ? 'Processing...' : 'Send Transaction'}
      </button>
    </div>
  );
};
