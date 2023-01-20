import { useEffect } from 'react';
import { useState } from 'react';
import { getProducts } from '../../services/getProducts';
import Card from '../card/Card';
import './Cards.css';

export default function Cards() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getProducts();
      setProducts(response);
    })();
  }, []);

  return (
    <div className="container">
      {products?.map((el: any) => (
        <Card
          key={el.id}
          id={el.id}
          linea={el.linea}
          categoria={el.categoria}
          descripcion={el.descripcion}
          precio={el.precio}
          referencia={el.referencia}
          cantidad={el.cantidad}
        />
      ))}
    </div>
  );
}
