import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '../../shared/store';
import { updateWorkStatus, clearStatusNotification, selectStatusNotification } from '../../shared/store/userSlice';
import { WorkStatus } from '../../shared/types';
import { motion, AnimatePresence } from 'framer-motion';
import { WORK_STATUS_LABELS, WORK_STATUS_ICONS } from '../../consts';

export const WorkStatusCard = ({ className = '' }: { className?: string }) => {
  const profile = useAppSelector(state => state.user!.profile);
  const displayNotification = useAppSelector(selectStatusNotification);
  const dispatch = useDispatch<AppDispatch>();
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    if (displayNotification) {
      setHighlight(true);
      const timer = setTimeout(() => {
        dispatch(clearStatusNotification());
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setHighlight(false);
    }
  }, [displayNotification, dispatch]);

  const handleStatusChange = (status: WorkStatus) => {
    if (status !== profile.workStatus) {
      dispatch(updateWorkStatus(status));
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        key={highlight ? 'highlight' : 'normal'}
        initial={{ boxShadow: '0 0 0px rgba(124, 58, 237, 0)' }}
        animate={{
          boxShadow: highlight
            ? '0 0 0 2px rgb(49 46 129)' // indigo-900 as RGB value
            : '0 0 0 0px rgba(0,0,0,0)',
        }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className={`bg-white rounded-lg shadow border border-rose-100 p-6 space-y-4 ${className}`}
      >
        <div className="flex items-center gap-3 justify-between">
          <h3 className="text-lg font-bold text-indigo-900">Availability</h3>
          {displayNotification && (
            <div className="flex items-center gap-1 text-sm text-green-600">
              ✅ Status updated
            </div>
          )}
        </div>

        <p className="text-sm text-gray-600">
          Let clients know your current status:
        </p>

        <div className="flex flex-wrap gap-2">
          {(Object.keys(WORK_STATUS_LABELS) as WorkStatus[]).map((status) => {
            const isSelected = profile.workStatus === status;
            return (
              <button
                key={status}
                onClick={() => handleStatusChange(status)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition-all hover:scale-[1.02] duration-200
                  ${isSelected 
                     ? 'bg-indigo-900 text-violet-900 border-indigo-800' 
                      : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'}`}
              >
                <span className="text-lg">{WORK_STATUS_ICONS[status]}</span>
                <span>{WORK_STATUS_LABELS[status]}</span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
          <span className="text-blue-500">ℹ️</span>
          <p>Your availability status is visible to potential clients.</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
