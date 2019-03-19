import React, { Component } from 'react';
import styled from 'styled-components';

import { findAllComands, CommandData, CategoryData } from '~/services/find';

const Holder = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
`;

const NameHolder = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.5);
  padding: 3px 6px;
  border-radius: 8px;
  margin-right: 0.5rem;
  font-weight: bold;
`;
const DescriptionHolder = styled.div``;

interface Props {
  data: CommandData;
}

export class CategoryItem extends Component<Props> {
  render() {
    const { data } = this.props;
    return (
      <Holder>
        <NameHolder>{data.command}</NameHolder>
        <DescriptionHolder>{data.description}</DescriptionHolder>
      </Holder>
    );
  }
}
