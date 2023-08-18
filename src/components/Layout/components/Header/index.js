import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCircleXmark,
   faSpinner,
   faMagnifyingGlass,
   faSignIn,
   faEllipsisVertical,
   faEarthAsia,
   faCircleQuestion,
   faKeyboard,
   faCloudUpload,
   faMessage,
   faUser,
   faCoins,
   faGear,
   faSignOut,
} from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react/';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import 'tippy.js/dist/tippy.css';
import MenuItems from '~/components/Popper/Menu/MenuItems';

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
   const [searchResult, setSearchResult] = useState([]);

   const currentUser = true;

   useEffect(() => {
      setTimeout(() => {
         setSearchResult([]);
      }, 0);
   }, []);

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
               <img src={images.logo} alt="Tiktok" />
            </div>
            <HeadlessTippy
               interactive
               visible={searchResult.length > 0}
               render={(attrs) => (
                  <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                     <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                     </PopperWrapper>
                  </div>
               )}
            >
               <div className={cx('search')}>
                  <input
                     type="text"
                     placeholder="Search accounts and videos"
                     spellCheck={false}
                  />
                  <button className={cx('clear')}>
                     <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                  </button>

                  <FontAwesomeIcon
                     className={cx('loading')}
                     icon={faSpinner}
                  ></FontAwesomeIcon>

                  {/* loading */}

                  <button className={cx('search-btn')}>
                     <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                     ></FontAwesomeIcon>
                  </button>
               </div>
            </HeadlessTippy>

            <div className={cx('actions')}>
               {currentUser ? (
                  <>
                     <Tippy
                        delay={[0, 200]}
                        content="upload video"
                        placement="bottom"
                     >
                        <button className={cx('action-btn')}>
                           <FontAwesomeIcon icon={faCloudUpload} />
                        </button>
                     </Tippy>

                     <button className={cx('action-btn')}>
                        <FontAwesomeIcon icon={faMessage} />
                     </button>
                  </>
               ) : (
                  <>
                     <Button text>Upload</Button>
                     <Button
                        primary
                        righttIcon={<FontAwesomeIcon icon={faSignIn} />}
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
                     <img
                        className={cx('user-avatar')}
                        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/c585761f76789f32cb7b357830e8b94c~c5_100x100.jpeg?x-expires=1692532800&x-signature=nrzk3QXwhMjNMNStmYtIUPYfYPE%3D"
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
