import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
   const renderPreview = (props) => {
      return (
         <div className={cx('preview')} tabIndex="-1" {...props}>
            <PopperWrapper>
               <AccountPreview />
            </PopperWrapper>
         </div>
      );
   };
   return (
      <div>
         <Tippy
            interactive
            delay={(800, 0)}
            offset={[-20, 0]}
            placement="bottom"
            render={renderPreview}
         >
            <div className={cx('account-item')}>
               <img
                  className={cx('avatar')}
                  src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/c603ee74e6b89e7da77a1ae8f5f9ae4d~c5_100x100.jpeg?x-expires=1693098000&x-signature=5uDoCJLdP3y%2Ff8X31zbNMeCeHD8%3D"
                  alt="Tarot"
               />
               <div className={cx('item-info')}>
                  <p className={cx('nickname')}>
                     <strong>Tarot Sunny</strong>
                     <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                     />
                  </p>

                  <p className={cx('name')}>Sunny Tarot & Healer</p>
               </div>
            </div>
         </Tippy>
      </div>
   );
}

AccountItem.propTypes = {};

export default AccountItem;
