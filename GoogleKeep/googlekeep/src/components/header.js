import "./header.css";

function Header() {
    return (
        <header className="App-header">
            <div className="header-container">
                <div className="header-left">
                    <div className="burger-button">
                        <svg focusable="false" viewBox="0 0 24 24">
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                        </svg>
                    </div>

                    <div className="logo-container">
                        <img
                            src="/logo.png"
                            alt="logo"
                            style={{ width: "40px", height: "40px" }}
                        />
                        <span className="title-keep">Keep</span>
                    </div>
                </div>

                <div className="header-center">
                    <form className="search-bar" method="get" role="search">
                        {/* <button
                            className="close-search"
                            aria-label="Close search"
                            type="button"
                        >
                            <svg
                                focusable="false"
                                height="24px"
                                viewBox="0 0 24 24"
                                width="24px"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                            </svg>
                        </button> */}
                        <div className="search-input-wrap">
                            <input
                                className="search-input"
                                aria-label="Search"
                                autocomplete="off"
                                placeholder="Search"
                                role="combobox"
                                type="text"
                            />
                        </div>
                        <button
                            className="clear-search-btn"
                            aria-label="Clear search"
                            type="button"
                        >
                            <svg
                                focusable="false"
                                height="24px"
                                viewBox="0 0 24 24"
                                width="24px"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                                <path d="M0 0h24v24H0z" fill="none"></path>
                            </svg>
                        </button>
                        <button
                            className="start-search-btn"
                            aria-label="Search"
                            role="button"
                        >
                            <svg
                                focusable="false"
                                height="24px"
                                viewBox="0 0 24 24"
                                width="24px"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path>
                                <path d="M0,0h24v24H0V0z" fill="none"></path>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </header>
    );
}

export default Header;
