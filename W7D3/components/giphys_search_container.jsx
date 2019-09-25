import { connect } from 'react-redux';
import GiphysSearch from './giphys_search';
import { fetchSearchGiphys } from '../actions/giphy_actions';

const mapStateToProps = state => ({ // 
    giphys: state.giphys
})

const mapDispatchToProps = dispatch => {
    return { fetchSearchGiphys: (searchTerm) => dispatch(fetchSearchGiphys(searchTerm)) };
    /// note we are setting the key of props to be fetchSearchGiphys.
  };

export default connect(mapStateToProps, mapDispatchToProps)(GiphysSearch);
