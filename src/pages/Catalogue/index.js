import React, { Component } from 'react';
import CatalogueItem from './CatalogueItem';
import catalogue from '../../archive/catalogue';
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
        {catalogue.map(({ title, name, department, img, rotation }, index) => {
          return (
            <div key={index}>
              <CatalogueItem
                id={index}
                title={title}
                name={name}
                department={department}
                rotation={rotation}
                imgUrl={`/images/catalogue/${img}.png`}
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
