import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './styles.css'

const Search = ({
   value,
   valueRadio,
   handleOnChange,
   handleSearch,
   collapseHeader,
   classes
}) => (
      <div className="SearchContainer">
         <input
            id="search"
            name="seatch"
            onChange={e => handleOnChange('query', e)}
            className={collapseHeader ? "SearchInputCollapse" : "SearchInput"}
            placeholder="Search"
            value={value}
            type="text"
            onKeyUp={() => handleSearch(valueRadio)} />
         <RadioGroup
            aria-label="Type"
            name="type"
            className={classes.group}
            value={valueRadio}
            onChange={e => handleOnChange('type', e)}>
            <FormControlLabel className={classes.radio} value="movie" control={<Radio color="primary" />} label="Movie" />
            <FormControlLabel className={classes.radio} value="series" control={<Radio color="primary" />} label="Serie" />
         </RadioGroup>
      </div>
   )

const styles = theme => ({
   root: {
      display: 'flex',
   },
   formControl: {
      margin: theme.spacing.unit * 3,
   },
   group: {
      flexDirection: 'row',
      justifyContent: 'center',
   },
   radio: {
      fontSize: '.6em',
      alignSelf: 'start',
      margin: 0,
   },
});

export default withStyles(styles)(Search);