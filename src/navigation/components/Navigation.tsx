import { Link, useLocation } from 'react-router-dom';
import { UserAvatar } from './UserAvatar';
import {
  HomeIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  ClockIcon,
  ReceiptPercentIcon,
  BanknotesIcon
} from '@heroicons/react/24/outline';

const dispatchNavEvent = (path: string) => {
  const event = new CustomEvent('navigation-change', { detail: { path } });
  window.dispatchEvent(event);
};

// Allows for mapping over the nav items, for added readability
const navItems = [
  { name: 'Dashboard', path: '/', icon: HomeIcon },
  { name: 'Find Jobs', path: '/jobs', icon: BriefcaseIcon },
  { name: 'Contracts', path: '/contracts', icon: DocumentTextIcon },
  { name: 'Timesheets', path: '/timesheets', icon: ClockIcon },
  { name: 'Invoices', path: '/invoices', icon: ReceiptPercentIcon },
  { name: 'Payments', path: '/payments', icon: BanknotesIcon },
];

export const Navigation = () => {
  const location = useLocation();
  const handleLinkClick = (path: string) => () => dispatchNavEvent(path);

  return (
    <div className="flex flex-col h-full bg-indigo-50 border-r border-gray-200 shadow-sm min-w-[220px]">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <img src="/src/assets/freelancer-hub-logo.svg" alt="FreelancerHub Logo" className="w-8 h-8" />
          <h2 className="text-2xl font-bold text-red-600 tracking-tight">
            FreelancerHub
          </h2>
        </div>
      </div>

      <nav className="flex-1 py-4">
        <ul className="flex flex-col gap-1">
          {navItems.map(({ name, path, icon: Icon }) => {
            const isActive = location.pathname === path;
            return (
              <li key={path}>
                <Link
                  to={path}
                  onClick={handleLinkClick(path)}
                  className={`flex items-center px-6 py-2 rounded-r-full transition-all 
                    ${
                      isActive
                        ? 'bg-indigo-50 text-indigo-900 font-semibold'
                        : 'text-gray-800 hover:bg-gray-50'
                    }`}
                >
                  <Icon className={`w-5 h-5 mr-3 text-indigo-600}`} />
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-100 flex justify-center items-center">
        <UserAvatar isNavbar={true} />
      </div>
    </div>
  );
};
