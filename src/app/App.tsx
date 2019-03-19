import React, { Component } from 'react';
import styled from 'styled-components';

import { Search } from './Search';

const Holder = styled.div`
  max-width: 1200px;
  padding: 30px;
  margin: auto;
`;

const Header = styled.div`
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  margin: 0.5em 0;
`;

const SearchHolder = styled.div``;

export class App extends Component {
  render() {
    return (
      <Holder>
        <Header>vim.guru</Header>
        <SearchHolder>
          <Search />
        </SearchHolder>
      </Holder>
    );
  }
}
