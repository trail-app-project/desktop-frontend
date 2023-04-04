import cx from "classnames";
import PropTypes from "prop-types";
import React from "react";
import styles from "./styles/Card.module.css";

function Card(props) {
  const { title, children, footer, className } = props;

  const cardClassName = cx(styles.card, className);

  return (
    <div className={cardClassName}>
      {title && <div className={styles.cardHeader}>{title}</div>}
      <div className={styles.cardContent}>{children}</div>
      {footer && <div className={styles.cardFooter}>{footer}</div>}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  footer: PropTypes.node,
  className: PropTypes.string,
};

Card.defaultProps = {
  className: "",
};

export default Card;
