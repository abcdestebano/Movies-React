import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import './App.css';

// COMPONENTS
import Header from './components/Header/header';
import GridResults from './components/GridResults/gridResults';

// API
import { getMoviesBySearch, getMovieById } from './api/movies';
import Loader from './components/Loader/loader';
import ModalResult from './components/ModalResult/modalResult';

class App extends Component {

  state = {
    page: 1,
    query: '',
    type: 'movie',
    results: [],
    totalResults: '0',
    collapseHeader: false,
    showLoader: false,
    resultSelected: {},
    showModal: false
  }

  /**
   *
   *
   * @param {*} name
   * @param {*} event
   */
  handleOnChange = (name, event) => {
    const { type, query } = this.state
    this.setState({ [name]: event.target.value })
    if (name === 'type') {
      if (type !== event.target.value && query) this.handleSearch(event.target.value)
    }
  }


  /**
   *
   *
   * @memberof App
   */
  handleSearch = async (typeResult, newPage) => {
    const { query, page } = this.state
    if (query) {
      if (query.length >= 3) {
        this.setState({ showLoader: true })
        getMoviesBySearch(typeResult, query, newPage || page)
          .then((data) => {
            const { Search: results = [], totalResults = '0' } = data
            this.setState({ results, totalResults, collapseHeader: true, showLoader: false })
          })
          .catch((error) => console.log('Ocurrio un error', error))
      }
    } else this.setState({ collapseHeader: false, results: [], })
  }

  /**
   *
   *
   * @param {*} data
   */
  handlePageClick = data => {
    const { page, type } = this.state
    const pageSelected = data.selected;
    const newPage = pageSelected + 1;
    window.scrollTo(0, 0);
    if (newPage !== page) {
      this.setState({ page: newPage })
      this.handleSearch(type, newPage)
    }
  }

  /**
   *
   *
   * @param {*} id
   */
  handleShowResult = async (id) => {
    const resultSelected = await getMovieById(id)
    this.setState({ resultSelected, showModal: true })
  }

  /**
   *
   *
   * @memberof App
   */
  handleCloseModal = () => this.setState({ showModal: false, resultSelected: {} })

  /**
   *
   *
   * @returns
   * @memberof App
   */
  render() {
    const { query, type, collapseHeader, results, totalResults, showLoader, resultSelected, showModal } = this.state

    return (
      <div className="App">

        <Header
          collapseHeader={collapseHeader}
          value={query}
          valueRadio={type}
          handleOnChange={this.handleOnChange}
          handleSearch={this.handleSearch} />

        {showLoader && <Loader />}

        {collapseHeader && !showLoader && <GridResults query={query}
          handleShowResult={this.handleShowResult}
          totalResults={totalResults}
          results={results}
          handlePageClick={this.handlePageClick} />}

        {collapseHeader && <div className="ContainerPagination">
          <ReactPaginate
            pageCount={Math.abs(Number(totalResults) / 10)}
            pageRangeDisplayed={Math.abs(Number(totalResults) / 10) > 10 ? 10 : Math.abs(Number(totalResults) / 10)}
            marginPagesDisplayed={2}
            previousLabel={'Previous'}
            nextLabel={'Next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            onPageChange={this.handlePageClick}
            containerClassName={'PaginationResults'}
            subContainerClassName={'pages PaginationResults'}
            activeClassName={'active'}
          />
        </div>}

        {Object.keys(resultSelected).length > 0 && <ModalResult open={showModal} handleClose={this.handleCloseModal} {...resultSelected} />}

      </div>
    );
  }
}

export default App;
