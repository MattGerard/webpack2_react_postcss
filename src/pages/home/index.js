import React from 'react';
import About from '../../components/About';
import logo from '../../img/logo.png';
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div id="header">

          <div className="top-border" />

          <div className="header-content">

            <div className="Details">
              <ul className="ContactDetail">
                <li>
                  <a href="mailto:MATT@MATTHEWGERARD.COM" target="_blank">
                    MATT@MATTHEWGERARD.COM <i className="detail-icon email" />
                  </a>
                </li>
                <li>
                  <a href="http://www.linkedin.com/in/mattgerard/" target="_blank">
                    LINKEDIN.COM/IN/MATTGERARD <i className="detail-icon linkedin" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/MattGerard/" target="_blank">
                    GITHUB.COM/MATTGERARD <i className="detail-icon github" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="logo">
              <img src={logo} />
            </div>

          </div>

          <div className="bottom-border" />

        </div>

        <div className="container">
          <About />
        </div>

      </div>
    );
  }
}
