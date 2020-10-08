import { useEffect, useRef, useState } from 'react';

export const useFetch = url => {
  const isMounted = useRef(true);
  const [state, setState] = useState({ data: null, loading: true, error: null });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    const fetData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        if (isMounted.current) {
          setState({ data, loading: false, error: null });
        }
      } catch (error) {
        setState({ data: null, loading: false, error: 'Could NOT load info.' });
      }

      // setTimeout(() => {
      //   if (isMounted.current) {
      //     setState({ data, loading: false, error: null });
      //   } else {
      //     console.log('setState was NOT called.');
      //   }
      // }, 4000);
    };

    setState({ data: null, loading: true, error: null });
    fetData();
  }, [url]);

  return state;
};
