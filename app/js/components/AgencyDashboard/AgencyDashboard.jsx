import React, { Component } from 'react';
import Navigation from './Navigation/Navigation.jsx';

class AgencyDashboard extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
      // $.get('http://localhost:39836/umbraco/Api/ProfileRetrievalApi/FetchApiWrapper', { "id": 2986, "memberId": 4716 } function(response) {
      //   console.log(response)
      // }).error(function(error) {
      //   console.log(error)
      // })
    }
    render() {
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
