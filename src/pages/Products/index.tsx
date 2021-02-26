import React, { useEffect, useMemo, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import Card from '../../components/Card';
import api from '../../services/api';
import { Colors } from '../../styles/Colors';

import { Container, Content, Header, ListProducts } from './styles';

interface ResultsProps {
  id: string;
  description: string;
  color: string;
  price: string;
  currency: string;
  thumbnailURL: string;
  maxresURL: string;
}
interface ProductsProps {
  results: ResultsProps[];
}
const Products: React.FC = () => {
  const [products, setProducts] = useState<ProductsProps>({ results: [] });
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('sneakers/index.json');
      setProducts(response.data);
    }
    loadProducts();
  }, []);

  // Filter Search
  const searchMemo = useMemo(() => {
    if (search !== '') {
      const searchlowerCase = search.toLowerCase();
      return products?.results.filter(item =>
        item.description.toLocaleLowerCase().includes(searchlowerCase),
      );
    }
    return null;
  }, [products?.results, search]);

  return (
    <Container>
      <Content>
        <Header>
          <FiSearch size={35} color={Colors.textLight} />
          <input
            type="text"
            placeholder="Search for your sneaker"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </Header>
        <ListProducts>
          {searchMemo && (
            <>
              {searchMemo.map(hasSearch => (
                <div key={hasSearch.id}>
                  <Card
                    description={hasSearch.description}
                    price={hasSearch.price}
                    thumbnailURL={hasSearch.thumbnailURL}
                  />
                </div>
              ))}
            </>
          )}

          {search === '' && (
            <>
              {products.results.map(product => (
                <div key={product.id}>
                  <Card
                    description={product.description}
                    price={product.price}
                    thumbnailURL={product.thumbnailURL}
                  />
                </div>
              ))}
            </>
          )}
        </ListProducts>
      </Content>
    </Container>
  );
};

export default Products;
