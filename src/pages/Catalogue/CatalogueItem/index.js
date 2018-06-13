import React, { Component } from "react";
import PropTypes from "prop-types";
import "../index.scss";

class CatalogueItem extends Component {
  render() {
    const { title, name, department, imgUrl, rotation } = this.props;

    return (
      <div className={`Catagloue-item rotate-${rotation}`}>
        <img src={imgUrl} alt={title} />
        <span className="name-description">
          {`${name} `}
          <span className="description">{department}</span>
        </span>
        <span className="title">{title}</span>
      </div>
    );
  }
}

CatalogueItem.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  rotation: PropTypes.number
};
export default CatalogueItem;
