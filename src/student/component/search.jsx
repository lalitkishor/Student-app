import React, { PureComponent } from 'react';

class Search extends PureComponent {
    setSearchvalue = (e) => {
        this.props.setSearchText(e.target.value.toLowerCase())
    }
    render() {
        return (
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <input style={{ width: '80%', height: '40px' }} type='text' placeholder="search student..." onChange={this.setSearchvalue} />
            </div>
        )
    }
}

export default Search;