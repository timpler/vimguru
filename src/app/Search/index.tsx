import React, { Component } from 'react';
import styled from 'styled-components';

import { findAllComands, CommandData, CategoryData } from '~/services/find';
import { Category } from './Category';

const Holder = styled.div``;

const Input = styled.input`
  font: inherit;
  background: transparent;
  border: none;
  font-size: 2rem;
  padding: 0.5em 0;
  outline: none;
  color: inherit;
  width: 100%;
`;

const ResultsHolder = styled.div`
  padding: 2rem 0;
`;
const ResultCategoryHolder = styled.div``;

interface State {
  resultsCategories: CategoryData[];
}

export class Search extends Component<{}, State> {
  inputRef: HTMLInputElement;

  state: State = {
    resultsCategories: [],
  };

  componentDidMount() {
    this.inputRef.focus();
  }

  search = (input: string) => {
    const resultsCategories = findAllComands(input);
    this.setState({ resultsCategories });
  };

  render() {
    const { resultsCategories } = this.state;
    return (
      <Holder>
        <Input
          onChange={(event) => this.search(event.target.value)}
          ref={(elem) => (this.inputRef = elem)}
          placeholder=":what are you looking for?"
        />
        <ResultsHolder>
          {resultsCategories
            .filter((resultCategory) => resultCategory.items.length > 0)
            .map((resultCategory, index) => {
              return (
                <ResultCategoryHolder key={index}>
                  <Category data={resultCategory} />
                </ResultCategoryHolder>
              );
            })}
        </ResultsHolder>
      </Holder>
    );
  }
}
