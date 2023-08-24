import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
function Button({
   to,
   href,
   primary,
   outline = false,
   text = false,
   disabled = false,
   rounded = false,
   small = false,
   large = false,
   onClick,
   className,
   leftIcon,
   rightIcon,
   children,
   ...passProps
}) {
   let Comp = 'button';
   const props = {
      onClick,
      ...passProps,
   };

   //remove even listener when btn is disabled
   if (disabled) {
      Object.keys(props).forEach((key) => {
         if (key.startsWith('on') && typeof props[key] === 'function') {
            delete props.onClick;
         }
      });
   }

   if (to) {
      props.to = to;
      Comp = Link;
   } else if (href) {
      props.href = href;
      Comp = 'a';
   }

   const classes = cx('wrapper', {
      [className]: className,
      primary,
      outline,
      text,
      disabled,
      rounded,
      small,
      large,
   });
   return (
      <Comp className={classes} {...props}>
         {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
         <span className={cx('title')}>{children}</span>
         {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
      </Comp>
   );
}

Button.propTypes = {
   to: PropTypes.string,
   href: PropTypes.string,
   primary: PropTypes.bool,
   outline: PropTypes.bool,
   text: PropTypes.bool,
   rounded: PropTypes.bool,
   disabled: PropTypes.bool,
   small: PropTypes.bool,
   large: PropTypes.bool,
   children: PropTypes.node.isRequired,
   className: PropTypes.string,
   leftIcon: PropTypes.node,
   rightIcon: PropTypes.node,
   onClick: PropTypes.func,
};

export default Button;
