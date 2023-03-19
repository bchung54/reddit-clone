import React, { useContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const OverlayContext = React.createContext();

export function useOverlay() {
  return useContext(OverlayContext);
}

export function OverlayProvider({ children }) {
  const [overlay, setOverlay] = useState(null);
  const overlayProviderValue = useMemo(
    () => ({ overlay, setOverlay }),
    [overlay]
  );
  return (
    <OverlayContext.Provider value={overlayProviderValue}>
      {children}
    </OverlayContext.Provider>
  );
}

OverlayProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
