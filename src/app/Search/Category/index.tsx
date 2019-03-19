import React, { Component } from 'react';
import styled from 'styled-components';

import { findAllComands, CommandData, CategoryData } from '~/services/find';

import { CategoryItem } from './Item';

const Holder = styled.div`
  margin-bottom: 3rem;
`;

const NameHolder = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1em;
`;
const ItemsHolder = styled.div``;

interface Props {
  data: CategoryData;
}

export class Category extends Component<Props> {
  render() {
    const { data } = this.props;
    return (
      <Holder>
        <NameHolder>{data.name}</NameHolder>
        <ItemsHolder>
          {data.items.map((item, index) => {
            return <CategoryItem data={item} key={index} />;
          })}
        </ItemsHolder>
      </Holder>
    );
  }
}
