import React from 'react';

import GiphysIndex from './giphys_index';

class GiphySearch {
    constructor() {
        super();
        this.state = { searchTerm: 'golden retriever' };
    }

    handleSubmit(e) {
        e.preventDefault()
        let searchTerm = this.state.searchTerm.split(' ').join('+'); //for search terms in API spaced words read as CUTE+DOGS+SMILING
        this.props.fetchSearchGiphys(searchTerm); // will invoke the function to dispatch which will send an ajax request.
    }

    handleChange(e) {
        this.setState({ searchTerm: e.currentTarget.value });
      }
    
    render () {
        return (
            <form>
                Search Here 
                <input type="text" onChange={this.handleChange()} value={this.state.searchTerm}/>
                <input type="submit" onclick={this.handleSubmit()} Search/>
            </form>
    )
}

    