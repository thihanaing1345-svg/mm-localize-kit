import { formatMMK, normalizeMyanmarSearchText } from 'mm-localize-kit';

const products = [
  { name: 'မြန်မာစာအုပ်', price: 12000 },
  { name: 'Notebook', price: 3500 }
];

export default function ProductsPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = normalizeMyanmarSearchText(searchParams.q ?? '');
  const visible = products.filter(product => normalizeMyanmarSearchText(product.name).includes(query));

  return (
    <main>
      <h1>Products</h1>
      {visible.map(product => (
        <article key={product.name}>
          <h2>{product.name}</h2>
          <p>{formatMMK(product.price, { symbol: 'MMK' })}</p>
        </article>
      ))}
    </main>
  );
}
