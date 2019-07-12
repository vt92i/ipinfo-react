import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios'

import Header from './components/Header';
import Info from './components/Info';
import Footer from './components/Footer';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: {} };
    };

    componentDidMount() {
        axios.get('https://ipinfo.io/json?token=270baf87ba6451')
            .then((res) => {
                this.setState({ data: res.data });
            });
    };

    render() {
        return (
            <div className="container">
                <br /><br /><br />
                <Header ip={this.state.data.ip} />
                <div className="row">
                    <div className="column column" style={{ textAlign: 'center' }}>
                        <Info data={this.state.data} />
                    </div>
                </div>
                <br /><br />
                <Footer ip={this.state.data.ip} />
            </div>
        );
    };
};

ReactDOM.render(<App />, document.querySelector('#root'));