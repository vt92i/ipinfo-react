import React from 'react';

class Header extends React.Component {
    render() {
        if (this.props.ip) {
            return (
                <div className="row" >
                    <div className="column">
                        <h2 style={{ textAlign: 'center' }}>Your IP is {this.props.ip}</h2>
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        };
    };
};

export default Header;