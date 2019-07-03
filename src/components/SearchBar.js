import React from 'react';

class SearchBar extends React.Component{
  state = { term: '' };

  onFormSubmit = (e) => {
    e.preventDefault();

    // this.props.onSubmit(this.state.term);
  };

  render(){
    return (
      <div className="search-bar ui segment">
        <div onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
