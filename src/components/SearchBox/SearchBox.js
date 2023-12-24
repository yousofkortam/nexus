import React from 'react';

function SearchBox({handleSearch}) {
    const handleSearchClick = () => {
        handleSearch();
    };
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search for products..."
                            aria-label="Search"
                            aria-describedby="searchButton"
                        />
                        <button className="btn btn-success" type="button" id="searchButton" onClick={handleSearchClick}>
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBox;
