import React from 'react'
import { useSnapshot } from 'valtio'
import { getContrastingColor } from '../config/helpers'
import state from '../store';

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state);

  const activeStyles = isFilterTab && isActiveTab 
    ? { backgroundColor: snap.color, opacity: 0.5 }
    : { backgroundColor: "transparent", opacity: 1 }

  return (
    <div
      key={tab.name}
      className={`tab-btn ${isFilterTab ? 'rounded-full glassmorphism' : 'rounded-4'}`}
      onClick={handleClick}
      style={activeStyles}
    >
      {isFilterTab ? (
        <span 
          className="font-medium px-1 text-center uppercase"
          style={{ 
            color: isActiveTab ? getContrastingColor(snap.color) : 'white',
            maxWidth: '100%',
            fontSize: tab.label === 'Textura' ? '0.65rem' : '0.8rem',
            letterSpacing: tab.label === 'Textura' ? '-0.5px' : '0px'
          }}
        >
          {tab.label}
        </span>
      ) : (
      <img 
        src={tab.icon}
        alt={tab.name}
          className="w-11/12 h-11/12 object-contain"
      />
      )}
    </div>
  )
}

export default Tab