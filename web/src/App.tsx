import { useState, useEffect } from 'react';

import InvoiceTable from './InvoiceTable.tsx';

export default function App() {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState (true);
  const [error, setError] = useState('');

  async function getInvoices() {
    try{
      const response = await fetch('/api/invoices');
      if (!response.ok) throw new Error();

     const datas = await response.json();

      


    setInvoices(datas);
    } catch {
      setError('Não  foi possivel obter relação de faturas.');
    }finally {
      setLoading(false)
    }
  }

    useEffect(() => {getInvoices()} , []);

  return <>
    <h1>Faturas</h1>

    {loading ? <p> Carregando...</p>: (
      error ? <p>{error}</p> : <InvoiceTable datas={invoices}/>)}

  </>;
}
