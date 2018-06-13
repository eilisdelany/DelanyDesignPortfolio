import React, { Component } from "react";
import PropTypes from "prop-types";
import "../index.scss";

class CatalogueItem extends Component {
  render() {
    const {
      id,
      title,
      name,
      department,
      imgUrl,
      rotation,
      isHoveringItem,
      updateHoveringItem
    } = this.props;

    return (
      <div
        className={`Catagloue-item rotate-${rotation} ${isHoveringItem >= 0 &&
          (isHoveringItem === id ? "hovering-item" : "non-hovering-item")}`}
        onMouseEnter={() => updateHoveringItem(id)}
        onMouseLeave={() => updateHoveringItem()}
      >
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
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  rotation: PropTypes.number,
  isHoveringItem: PropTypes.bool,
  updateHoveringItem: PropTypes.func.isRequired
};
export default CatalogueItem;
