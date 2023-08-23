import classNames from 'classnames/bind';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import 'tippy.js/dist/tippy.css';
import { SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks';
import styles from './Search.module.scss';
import * as searchServices from '~/services/searchService';

const cx = classNames.bind(styles);
function Search() {
   const [searchValue, setSearchValue] = useState('');
   const [searchResult, setSearchResult] = useState([]);
   const [showResult, setShowResult] = useState(true);
   const [loading, setLoading] = useState(false);

   // 1. ''
   const debouncedValue = useDebounce(searchValue, 500);

   const inputRef = useRef();

   useEffect(() => {
      if (!searchValue.trim()) {
         setSearchResult([]);
         return;
      }

      const fetchApi = async () => {
         setLoading(true);

         const result = await searchServices.search(debouncedValue);
         setSearchResult(result);

         setLoading(false);
      };
      fetchApi();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [debouncedValue]);

   const handleClear = () => {
      setSearchValue('');
      setSearchResult([]);
      inputRef.current.focus();
   };

   const handleHideResult = () => {
      setShowResult(false);
   };

   const handleChange = (e) => {
      const searchValue = e.target.value;
      if (!searchValue.startsWith(' ')) {
         setSearchValue(searchValue);
      }
   };

   return (
      //Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
      <div>
         <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
               <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                  <PopperWrapper>
                     <h4 className={cx('search-title')}>Accounts</h4>
                     {searchResult.map((result) => (
                        <AccountItem key={result.id} data={result} />
                     ))}
                  </PopperWrapper>
               </div>
            )}
            onClickOutside={handleHideResult}
         >
            <div className={cx('search')}>
               <input
                  ref={inputRef}
                  value={searchValue}
                  type="text"
                  placeholder="Search accounts and videos"
                  spellCheck={false}
                  onChange={handleChange}
                  onFocus={() => setShowResult(true)}
               />
               {!!searchValue && !loading && (
                  <button className={cx('clear')} onClick={handleClear}>
                     <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                  </button>
               )}

               {loading && (
                  <FontAwesomeIcon
                     className={cx('loading')}
                     icon={faSpinner}
                  ></FontAwesomeIcon>
               )}

               {/* loading */}

               <button
                  className={cx('search-btn')}
                  onMouseDown={(e) => e.preventDefault()}
               >
                  <SearchIcon />
               </button>
            </div>
         </HeadlessTippy>
      </div>
   );
}

export default Search;