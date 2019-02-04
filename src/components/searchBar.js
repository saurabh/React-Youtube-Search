import React, {Component} from 'react';

export default class SearchBar extends Component {
    state = { term: '' };

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.term);
    }   

    onInputChange = term => {
        this.setState({ term });
        // this.props.onSearchSubmit(this.state.term);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <input 
                            type="text" 
                            placeholder="Search..."
                            value={this.state.term}
                            onChange={e => this.onInputChange(e.target.value)} />
                    </div>
                </form>
            </div>
        )
    }
}