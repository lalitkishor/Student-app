import React, { PureComponent } from 'react';

class Search extends PureComponent {
    setSearchvalue = (e) => {
        this.props.setSearchText(e.target.value.toLowerCase())
    }
    render() {
        return (
            <div>
                <input type='text' placeholder="search student..." onChange={this.setSearchvalue} />
            </div>
        )
    }
}

export default Search;