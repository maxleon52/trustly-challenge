import React from 'react';
import { FiChevronRight, FiSearch } from 'react-icons/fi';

import { listBanks } from './constants';

import { Container, Input } from './styles';

interface Props {
  nameComponent: (nextPage: string) => void;
}
const SelectBank: React.FC<Props> = ({ nameComponent }) => {
  return (
    <Container>
      <Input>
        <FiSearch size={15} color="#626262" />
        <input type="text" placeholder="Search for your bank" />
        <span>+1,000 available</span>
      </Input>

      <ul>
        <p>MOST POPULAR</p>
        {listBanks.map(item => (
          <li key={item.bank}>
            <div onClick={() => nameComponent('message')} role="button">
              <img src={item.icon} alt={item.bank} />

              <div>
                <span>{item.bank}</span>
                <p>{item.site}</p>
              </div>

              <FiChevronRight size={20} />
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default SelectBank;
