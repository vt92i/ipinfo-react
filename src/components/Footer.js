import React from 'react';

class Footer extends React.Component {
    render() {
        if (this.props.ip) {
            return (
                <div className="row">
                    <div className="column">
                        <h4 style={{ textAlign: 'center' }}>Made with Milligram <br />
                            <a href="https://instagr.am/iov92i" target="_blank" rel="noopener noreferrer" class="fab fa-instagram" style={{ fontSize: '2em', marginTop: '0.1em' }}> </a>
                        </h4>
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

export default Footer;