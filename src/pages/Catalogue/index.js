import React, { Component } from 'react';
import CatalogueItem from './CatalogueItem';
import catalogue from '../../archive/catalogue/index';
import './index.scss';

class Catalogue extends Component {
  constructor() {
    super();
    this.state = {
      hoveringItem: undefined
    };
  }

  updateHoveringItem = (hoveringItem) => {
    this.setState({ hoveringItem });
  }

  render() {
    return (
      <div className="Catagloue">
        {catalogue.map(({ title, name, department, id, rotation }, index) => {
          return (
            <div key={index}>
              <CatalogueItem
                id={id}
                title={title}
                name={name}
                department={department}
                rotation={rotation}
                isHoveringItem={this.state.hoveringItem}
                updateHoveringItem={this.updateHoveringItem}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
export default Catalogue;
