import React, { Component } from 'react';
import Navigation from './Navigation/Navigation.jsx';

class AgencyDashboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="dashboard-area">

                <div id="dash-title">
                    <span style={{float: 'left'}}>Agency Compile Demo</span>

                    <div className="btn-preview-holder"><a href="/agencies/agency-compile-demo/" target="_blank">VIEW PROFILE</a></div>
                    <div style={{clear: 'both'}}></div>
                </div>

                <Navigation />


                <section className="cpw-content-middle">
                    <div className="contentRegion">
                        <div className="view-wrap">

                            <div className="side-nav-wrapper">
                                <div className="side-nav">

                                </div>
                            </div>

                            <div className="view-content">
                              {this.props.children}
                            </div>

                        </div>
                    </div>
                </section>


                <div style={{clear: 'both'}}></div>
            </div>
        );
    }
}

export default AgencyDashboard;
