import React, { Component } from 'react';
import CatalogueItem from './CatalogueItem';
import catalogue from '../../archive/catalogue';
import './index.scss';

class Catalogue extends Component {
  render() {
    return (
      <div className="Catagloue">
        {catalogue.map(({ title, name, department, img, rotation }, index) => {
          return (
            <div key={index}>
              <CatalogueItem
                title={title}
                name={name}
                department={department}
                rotation={rotation}
                imgUrl={`/images/catalogue/${img}.png`}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
export default Catalogue;
