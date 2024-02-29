import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import { LOA } from './LOA';
import { Stakeholders } from './Stakeholders';
import { RABC } from './RABC';
import { Academic } from './Academic';
import { Forms } from './Forms';
import { Templates } from './Templates';
import { Reports } from './Reports';
import { Notification } from './Notification';
import { IE } from './IE';
import { Others } from './Others';
import { Organization } from './Organization';

export const SettingsBase = () => {
  const location = useLocation();

  return (
    <div className="uk-card uk-card-default uk-card-body container marginZero">
      <div data-uk-grid>
        <div className="uk-width-1-4@m sidemenu">
          <ul className="uk-list sideMenuBar">
            <li className={location.pathname === '/settings/' ? 'uk-active' : ''}>
              <Link to={"/dashboard/"} className='black'><span className="material-symbols-outlined">
                home
              </span> </Link>
            </li>
            <li className={location.pathname === '/settings/organization' ? 'uk-active' : ''}>
              <Link to={"/settings/organization"} className='black'>Organization</Link>
            </li>
            <li className={location.pathname === '/settings/loa' ? 'uk-active' : ''}>
              <Link to={"/settings/loa"} className='black'>List of Account</Link>
            </li>
            <li className={location.pathname === '/settings/stakeholders' ? 'uk-active' : ''}>
              <Link to={"/settings/stakeholders"} className='black'>Stakeholders</Link>
            </li>
            <li className={location.pathname === '/settings/rbac' ? 'uk-active' : ''}>
              <Link to={"/settings/rbac"} className='black'>Users & Roles</Link>
            </li>
            <li className={location.pathname === '/settings/academic' ? 'uk-active' : ''}>
              <Link to={"/settings/academic"} className='black'>Academic</Link>
            </li>
            <li className={location.pathname === '/settings/forms' ? 'uk-active' : ''}>
              <Link to={"/settings/forms"} className='black'>Forms</Link>
            </li>
            <li className={location.pathname === '/settings/templates' ? 'uk-active' : ''}>
              <Link to={"/settings/templates"} className='black'>Templates</Link>
            </li>
            <li className={location.pathname === '/settings/reports' ? 'uk-active' : ''}>
              <Link to={"/settings/reports"} className='black'>Reports settings</Link>
            </li>
            <li className={location.pathname === '/settings/notification' ? 'uk-active' : ''}>
              <Link to={"/settings/notification"} className='black'>Notification</Link>
            </li>
            <li className={location.pathname === '/settings/ie' ? 'uk-active' : ''}>
              <Link to={"/settings/ie"} className='black'>Import / Export</Link>
            </li>
            <li className={location.pathname === '/settings/others' ? 'uk-active' : ''}>
              <Link to={"/settings/others"} className='black'>Other Settings</Link>
            </li>

            </ul>
        </div>
        <div className="uk-width-expand@m uk-margin">
          <div className=''> <span className='statusMsg'>Database Synced few second ago</span>
            <div className='uk-position-right statusBarPadding'> <span className=''>Hello, User</span><span
                className="material-symbols-outlined">
                account_circle
              </span><span className="material-symbols-outlined">
                notifications
              </span><span className="material-symbols-outlined">
                help
              </span></div>
          </div>

          <Routes>
            <Route path="/organization" element={<Organization />} />
            <Route path="/loa" element={<LOA />} />
            <Route path="/stakeholders" element={<Stakeholders />} />
            <Route path="/rbac" element={<RABC />} />
            <Route path="/academic" element={<Academic />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/ie" element={<IE />} />
            <Route path="/others" element={<Others />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
