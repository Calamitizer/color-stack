import React, { useEffect } from 'react';

interface Props {
  shouldFetch: boolean;
  fetch: () => void;
}

const DataFetcher: React.FC<Props> = ({ shouldFetch, fetch }) => {
  useEffect(() => {
    if (shouldFetch) {
      fetch();
    }
  });

  return null;
};

export default DataFetcher;
