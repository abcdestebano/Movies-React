import React from 'react'

// COMPONENTS
import Search from '../Search/search'

// STYLES
import './styles.css'

const Header = ({
   collapseHeader,
   value,
   valueRadio,
   handleOnChange,
   handleSearch }) => (
      <div className={`Header ${collapseHeader ? "HeaderContainerCollapse" : "HeaderContainer"}`}>
         <span className="HeaderTitle">Movies & series</span>
         <div className={collapseHeader ? "HeaderSearchCollapse" : "HeaderSearch"}>
            <Search
               collapseHeader={collapseHeader}
               value={value}
               valueRadio={valueRadio}
               handleOnChange={handleOnChange}
               handleSearch={handleSearch} />
         </div>
      </div>
   )

export default Header
