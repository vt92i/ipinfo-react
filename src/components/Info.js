import React from 'react';

class Info extends React.Component {
    render() {
        const { country, region, city, loc, org } = this.props.data;
        const locSplit = String(loc).split(',');
        if (this.props.data.ip) {
            return (
                <div>
                    <div className="row">
                        <div className="column">
                            <h3>Information</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column column-50" style={{ textAlign: 'right' }}>
                            <div>Country :</div>
                            <div>Region :</div>
                            <div>City :</div>
                            <div>Latitude :</div>
                            <div>Longitude :</div>
                            <div>Organization :</div>
                        </div>
                        <div className="column column-50" style={{ textAlign: 'left' }}>
                            <div>{country}</div>
                            <div>{region}</div>
                            <div>{city}</div>
                            <div>{locSplit[0]}</div>
                            <div>{locSplit[1]}</div>
                            <div>{org}</div>
                        </div>
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

export default Info;