import React from 'react';
import './FilterTabs.css';

const FilterTabs = ({ activeTab, onTabChange }) => {
  return (
    <nav className="tabs-nav">
      <button
        className={`tab-button ${activeTab === 'upcoming' ? 'active' : ''}`}
        onClick={() => onTabChange('upcoming')}
      >
        Upcoming Campaigns
      </button>
      <button
        className={`tab-button ${activeTab === 'live' ? 'active' : ''}`}
        onClick={() => onTabChange('live')}
      >
        Live Campaigns
      </button>
      <button
        className={`tab-button ${activeTab === 'past' ? 'active' : ''}`}
        onClick={() => onTabChange('past')}
      >
        Past Campaigns
      </button>
    </nav>
  );
};

export default FilterTabs;