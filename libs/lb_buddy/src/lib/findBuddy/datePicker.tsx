import React, { useState, useRef } from 'react';

const DatePicker = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  const handleInputClick = () => {
    setIsOpen(true);
    inputRef.current?.showPicker();
  };

  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    setIsOpen(false);
    if (onDateChange) {
      onDateChange(new Date(date));
    }
  };

  return (
    <div className="w-full max-w-sm">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Select Date
      </label>
      <div className="relative">
        <input
          ref={inputRef}
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          onClick={handleInputClick}
          onFocus={() => setIsOpen(true)}
          className="w-full px-4 py-2 text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
        />
      </div>
    </div>
  );
};

export default DatePicker;