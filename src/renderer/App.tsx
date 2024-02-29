import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import { RegisterPage } from './resources/pages/registerPage';
import 'uikit/dist/css/uikit.min.css';
import UIkit from 'uikit';
import logo from '../../assets/logo.png';
import { LoginPage } from './resources/pages/LoginPage';
import { DashBase } from './resources/dashboard/DashBase';
import { SettingsBase } from './resources/dashboard/settings/SettingsBase';

// Import Google icons

export default function App() {

  const handleClose = () => {
    window.electron.ipcRenderer.sendMessage('ipc-example', ['close-window']);
  };

  const handleMinimize = () => {
    window.electron.ipcRenderer.sendMessage('ipc-example', ['minimize-window']);
  };

  const handleMax = () => {
    window.electron.ipcRenderer.sendMessage('ipc-example', ['max-window']);
  };
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

          </div>
        </div>

      </div>
    </div>
  </nav>
  <Router>
    <Routes>
      <Route path="/" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/settings/*" element={<SettingsBase />} />
      <Route path="/dashboard/*" element={<DashBase />} />
    </Routes>
  </Router>
</>
);
}
