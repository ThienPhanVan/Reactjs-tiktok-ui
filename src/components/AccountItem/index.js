import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem() {
   return (
      <div className={cx('wrapper')}>
         <Image
            className={cx('avatar')}
            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/bd9974192e90590fbf9eb29c658cc7ed.jpeg?x-expires=1692414000&x-signature=qNiMYeC%2BcocF%2B1LDyzmkP2nKcTM%3D"
            alt="Hoaa"
         />
         <div className={cx('info')}>
            <p className={cx('name')}>
               <span>Phan Van Thien</span>
               <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <span className={cx('username')}>phanvanthien</span>
         </div>
      </div>
   );
}

export default AccountItem;
