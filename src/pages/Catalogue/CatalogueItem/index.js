import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import "../index.scss";

class CatalogueItem extends Component {
  navigateToContent = () => {
    const { history, id } = this.props;
    history.push(`${history.location.pathname}/${id}`);
  };

  render() {
    const {
      id,
      title,
      name,
      department,
      rotation,
      isHoveringItem,
      updateHoveringItem
    } = this.props;

    return (
      <div
        className={`Catagloue-item rotate-${rotation} ${isHoveringItem &&
          (isHoveringItem === id ? "hovering-item" : "non-hovering-item")}`}
        onMouseEnter={() => updateHoveringItem(id)}
        onMouseLeave={() => updateHoveringItem()}
        onClick={this.navigateToContent}
      >
        <img src={`/images/catalogue/${id}.png`} alt={title} />
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
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  rotation: PropTypes.number,
  isHoveringItem: PropTypes.string,
  updateHoveringItem: PropTypes.func.isRequired
};
export default withRouter(CatalogueItem);
