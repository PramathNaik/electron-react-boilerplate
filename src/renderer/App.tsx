import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import { RegisterPage } from './resources/pages/registerPage';
import 'uikit/dist/css/uikit.min.css';
import UIkit from 'uikit';
import logo from '../../assets/logo.png';
import { LoginPage } from './resources/pages/LoginPage';
import { DashBase } from './resources/dashboard/DashBase';

// Import Google icons

export default function App() {

return (
<>
  <nav className="uk-navbar-container">
    <div className="uk-container">
      <div uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <div className="uk-navbar-center-left">…</div>
            <a href="/" className="uk-navbar-item uk-logo">
              <img className='logo' src={logo} alt="Logo"></img>
            </a>
            <div className="uk-navbar-center-right">
              <ul className="uk-navbar-nav">
                <li className="uk-active"><a href=""></a></li>
                <li className="uk-parent"><a href=""></a></li>
                <li><a href=""></a></li>
              </ul>
            </div>

          </ul>
          <div className="uk-navbar-right ctrls">
              {/* Add buttons with Google icons */}
              <button className="ctrlIcon" title="Minimize">
                <span className="material-symbols-outlined">
                  minimize
                </span>
              </button>
              <button className="ctrlIcon" title="Maximize">
                <span className="material-symbols-outlined">
                  north_east
                </span>
              </button>
              <button className="ctrlIcon" title="Close">
                <span className="material-symbols-outlined">
                  close
                </span>
              </button>
            </div>
        </div>

      </div>
    </div>
  </nav>
  <Router>
    <Routes>
      <Route path="/" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard/*" element={<DashBase />} />
    </Routes>
  </Router>
</>
);
}
