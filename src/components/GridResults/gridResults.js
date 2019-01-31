import React from 'react';

// COMPONENTS
import CardResult from '../CardResult/cardResult'

// STYLES
import './styles.css'

const GridResults = ({
   query,
   handleShowResult,
   totalResults,
   results,
}) => {
   return (
      <div className="GridResults">
         <h2 className="Title">{`${totalResults} results for "${query}"`}</h2>
         <div className="GridResultContainer">
            {results.map((result, index) => (<CardResult
               key={index}
               title={result.Title}
               image={result.Poster}
               year={result.Year}
               id={result.imdbID}
               handleShowResult={handleShowResult} />))}
         </div>
      </div>
   )
}

export default GridResults

