import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faSignIn,
   faEllipsisVertical,
   faEarthAsia,
   faCircleQuestion,
   faKeyboard,
   faUser,
   faCoins,
   faGear,
   faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import config from '~/config';

import Button from '~/components/Button/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons/Icons';
import Image from '~/components/Image/Image';
import Search from '../Search/Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
   {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: 'English',
      children: {
         title: 'Languages',
         data: [
            {
               type: 'language',
               code: 'en',
               title: 'English',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'Tiếng Việt',
            },
         ],
      },
   },
   {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: 'Feedback and Help',
      to: '/feedback',
   },
   {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: 'Keyboard shortcuts',
   },
];

function Header() {
   const currentUser = true;

   //handle logic
   const handleMenuChange = (menuItems) => {
      switch (menuItems.type) {
         case 'laguage':
            //handle change to laguage
            break;

         default:
            break;
      }
   };

   const userMenu = [
      {
         icon: <FontAwesomeIcon icon={faUser} />,
         title: 'View profile',
         to: '/@hoaa',
      },
      {
         icon: <FontAwesomeIcon icon={faCoins} />,
         title: 'Get coins',
         to: '/coin',
      },

      {
         icon: <FontAwesomeIcon icon={faGear} />,
         title: 'Settings',
         to: '/settings',
      },

      ...MENU_ITEMS,
      {
         icon: <FontAwesomeIcon icon={faSignOut} />,
         title: 'Log out',
         to: '/logout',
         separate: true,
      },
   ];

   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <div className={cx('logo')}>
               <Link to={config.home} className={cx('logo-link')}>
                  <img src={images.logo} alt="Tiktok" />
               </Link>
            </div>

            {/* Search */}
            <Search />

            <div className={cx('actions')}>
               {currentUser ? (
                  <>
                     <Tippy
                        delay={[0, 50]}
                        content="Upload video"
                        placement="bottom"
                     >
                        <button className={cx('action-btn')}>
                           <UploadIcon />
                        </button>
                     </Tippy>
                     <Tippy
                        delay={[0, 50]}
                        content="Message"
                        placement="bottom"
                     >
                        <button className={cx('action-btn')}>
                           <MessageIcon />
                        </button>
                     </Tippy>
                     <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                        <button className={cx('action-btn')}>
                           <InboxIcon />
                           <span className={cx('badge')}>12</span>
                        </button>
                     </Tippy>
                  </>
               ) : (
                  <>
                     <Button text>Upload</Button>
                     <Button
                        primary
                        rightIcon={<FontAwesomeIcon icon={faSignIn} />}
                     >
                        Log in
                     </Button>
                  </>
               )}

               <Menu
                  items={currentUser ? userMenu : MENU_ITEMS}
                  onChange={handleMenuChange}
               >
                  {currentUser ? (
                     <Image
                        className={cx('user-avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/feea8baa034148dca6584cf41f4d5212~c5_100x100.jpeg?x-expires=1692795600&x-signature=K0sff%2FicZQr%2BXkH9BadH2NtLW1A%3D"
                        alt="Phan Van Thien"
                     />
                  ) : (
                     <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                     </button>
                  )}
               </Menu>
            </div>
         </div>
      </header>
   );
}

export default Header;
