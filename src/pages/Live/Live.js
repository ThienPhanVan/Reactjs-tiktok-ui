import styles from './Live.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Live({ children }) {
   return <h1 className={cx('live')}>Live Page</h1>;
}

Live.propTypes = {
   children: PropTypes.string,
};

export default Live;
