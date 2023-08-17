import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

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
   righttIcon,
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
         {righttIcon && <span className={cx('icon')}>{righttIcon}</span>}
      </Comp>
   );
}

export default Button;
