import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "../../shared/store";
import { updateWorkStatus } from "../../shared/store/userSlice";
import { WorkStatus } from "../../shared/types";
import { useState, useRef, useEffect } from "react";
import { WORK_STATUS_LABELS, WORK_STATUS_ICONS } from "../../consts";

interface UserAvatarProps {
  isNavbar?: boolean | undefined;
}

export const UserAvatar = ({ isNavbar = false }: UserAvatarProps) => {
  const profile = useAppSelector(state => state.user!.profile);
  const dispatch = useDispatch<AppDispatch>();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleStatusChange = (status: WorkStatus) => {
    dispatch(updateWorkStatus(status));
    setDropdownOpen(false);
  };

  return (
    <div className="relative w-[240px]" ref={dropdownRef}>
      <div
        className="flex items-center gap-3 p-2 cursor-pointer rounded-lg hover:bg-blue-100 transition-colors"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-8 h-8 rounded-full flex-shrink-0"
        />
        <div className="flex flex-col gap-0.5 min-w-0">
          <span className="font-semibold text-md leading-none truncate">
            {profile.name}
          </span>
          <span className="text-sm text-gray-600 leading-none flex items-center gap-1 truncate">
            <span className="flex-shrink-0">{WORK_STATUS_ICONS[profile.workStatus]}</span>
            <span className="truncate">{WORK_STATUS_LABELS[profile.workStatus]}</span>
          </span>
        </div>
      </div>

      {dropdownOpen && (
        <div 
          className={`absolute ${
            isNavbar ? 'bottom-full mb-1' : 'top-full mt-1'
          } left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-md p-3 w-[240px] z-10 border border-gray-200`}
        >
          <h4 className="text-sm font-medium text-gray-700 mb-3">
            Update your status:
          </h4>
          <ul className="space-y-1">
            {(Object.keys(WORK_STATUS_LABELS) as WorkStatus[]).map((status) => (
              <li
                key={status}
                onClick={() => handleStatusChange(status)}
                className="text-sm py-1.5 px-2 hover:bg-gray-50 rounded cursor-pointer flex items-center gap-2"
              >
                <span className="flex-shrink-0">{WORK_STATUS_ICONS[status]}</span>
                <span className="truncate">{WORK_STATUS_LABELS[status]}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
