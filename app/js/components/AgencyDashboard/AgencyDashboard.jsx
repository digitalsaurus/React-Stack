import React, { Component } from 'react';
import Navigation from './Navigation/Navigation.jsx';

class AgencyDashboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this);
        return (
            <div className="dashboard-area">

                <div id="dash-title">
                    <span style={{float: 'left'}}>Agency Compile</span>

                    <div className="btn-preview-holder"><a href="/agencies/agency-compile-demo/" target="_blank">VIEW PROFILE</a></div>
                    <div style={{clear: 'both'}}></div>
                </div>

                <Navigation />


                <section className="cpw-content-middle">
                    <div className="contentRegion">
                      {this.props.children}
                    </div>
                </section>


                <div style={{clear: 'both'}}></div>
            </div>
        );
    }
}

export default AgencyDashboard;
