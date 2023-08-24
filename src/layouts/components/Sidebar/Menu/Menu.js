import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

function Menu({ children }) {
   return <nav>{children}</nav>;
}

Menu.propTypes = {
   children: PropTypes.node.isRequired,
};

export default Menu;
