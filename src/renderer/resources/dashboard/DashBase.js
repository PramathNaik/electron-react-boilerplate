import React from 'react'
import { LoginPage } from '../pages/LoginPage'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import { StudentsPage } from './StudentsPage';

export const DashBase = () => {
  const location = useLocation();

  return (
    <div className="uk-card uk-card-default uk-card-body container marginZero">
      <div data-uk-grid>
        <div className="uk-width-1-4@m sidemenu">
          <ul className="uk-list sideMenuBar">
            <li className={location.pathname === '/dashboard/' ? 'uk-active' : ''}>
              <Link to={"/dashboard/"} className='black'><span className="material-symbols-outlined">
                monitor_heart
              </span>  Summary</Link>
            </li>
            <li className={location.pathname === '/dashboard/students' ? 'uk-active' : ''}>
              <Link to={"/dashboard/students"} className='black'><span className="material-symbols-outlined">
                wc
              </span>  Students</Link>
            </li>
            <li className={location.pathname === '/dashboard/employees' ? 'uk-active' : ''}>
              <Link to={"/dashboard/employees"} className='black'>
                <span className="material-symbols-outlined">
                  hail
                </span>  Employees
              </Link>
            </li>
            <li className={location.pathname === '/dashboard/examFees' ? 'uk-active' : ''}>
              <Link to={"/dashboard/examFees"} className='black'><span className="material-symbols-outlined">
                sell
              </span>  Exam Fees</Link>
            </li>
          </ul>
          <ul className="uk-list sideMenuBar secondMenu">
            <li className={location.pathname === '/dashboard/reciept' ? 'uk-active' : ''}>
              <Link to={"/dashboard/reciept"} className='black'><span className="material-symbols-outlined">
                payments
              </span>  Receipt</Link>
            </li>
            <li><Link className='black'><span className="material-symbols-outlined">
                lab_profile
              </span>  Payment</Link></li>
            <li className={location.pathname === '/dashboard/journal' ? 'uk-active' : ''}>
              <Link to={"/dashboard/journal"} className='black'>
                <span className="material-symbols-outlined">
                  calculate
                </span>  Journal Entries
              </Link>
            </li>
            <li className={location.pathname === '/dashboard/reports' ? 'uk-active' : ''}>
              <Link to={"/dashboard/reports"} className='black'><span className="material-symbols-outlined">
                show_chart
              </span>  Reports</Link>
            </li>
            <li className={location.pathname === '/dashboard/settings' ? 'uk-active' : ''}>
              <Link to={"/dashboard/settings"} className='black'><span className="material-symbols-outlined">
                settings
              </span>  Settings</Link>
            </li>
          </ul>
        </div>
        <div className="uk-width-expand@m uk-margin">
        <p>Database Synced few second ago</p>
        <hr class="uk-divider-icon"></hr>

          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/students" element={<StudentsPage />} />

          </Routes>
        </div>
      </div>
    </div>
  );
}
