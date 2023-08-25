import styles from './AccountPreview.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
   return (
      <div className={cx('wrapper')}>
         <header className={cx('header')}>
            <img
               className={cx('avatar')}
               src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/c603ee74e6b89e7da77a1ae8f5f9ae4d~c5_100x100.jpeg?x-expires=1693098000&x-signature=5uDoCJLdP3y%2Ff8X31zbNMeCeHD8%3D"
               alt="Tarot"
            />
            <Button className={cx('follow-btn')} primary>
               Follow
            </Button>
         </header>
         <div className={cx('body')}>
            <p className={cx('nickname')}>
               <strong>Tarot Sunny</strong>
               <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>

            <p className={cx('name')}>Sunny Tarot & Healer</p>

            <p className={cx('analytics')}>
               <strong className={cx('value')}>8.2M </strong>
               <span className={cx('label')}>Followers</span>

               <strong className={cx('value')}>8.2M </strong>
               <span className={cx('label')}>Likes</span>
            </p>
         </div>
      </div>
   );
}

export default AccountPreview;
