import cx from "classnames";
import PropTypes from "prop-types";
import React, { useState } from 'react';
import styles from "./styles/Button.module.css";

function Card(props) {
    const [isDisabled, setIsDisabled] = useState(props.disabled);
  
    const handleCardClick = (event) => {
      if (isDisabled) return;
      props.onClick && props.onClick({ event });
    };
  
    const renderChildren = () => {
      const { label, children } = props;
  
      if (label) {
        return label;
      }
      if (children) {
        return children;
      }
      return "Button";
    };
  
    const className = cx(
      props.className,
      styles[props.size],
      styles.button,
      styles[props.variant],
      {
        [styles.disabled]: isDisabled,
        [props.disabledClassName]: isDisabled
      }
    );
  
    return (
      <div onClick={handleButtonClick} className={className}>
        {renderChildren()}
      </div>
    );
  }
  
  Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    variant: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
    size: PropTypes.string,
    disabledClassName: PropTypes.string,
    disabled: PropTypes.bool
  };
  
  Button.defaultProps = {
    className: "",
    label: "",
    size: "",
    variant: "basic",
    disabled: false,
    disabledClassName: ""
  };

export default Button
