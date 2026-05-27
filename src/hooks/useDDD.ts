import { useCallback, useEffect, useState } from 'react';
import { fetchDDD } from '../services/dddServices';
import type { DDDResponse } from '../types/ddd';

interface UseDDDResult {
  data: DDDResponse | null;
  loading: boolean;
  error: string | null;
  search: (ddd: string) => void;
  reset: () => void;
}

export function useDDD(): UseDDDResult {
  const [pendingDDD, setPendingDDD] = useState<string | null>(null);
  const [data, setData] = useState<DDDResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // useEffect dispara a chamada assíncrona sempre que um novo DDD é solicitado
  useEffect(() => {
    if (pendingDDD === null) return;

    let cancelled = false;

    setLoading(true);
    setError(null);
    setData(null);

    fetchDDD(pendingDDD)
      .then((result) => {
        if (!cancelled) setData(result);
      })
      .catch((err: Error) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [pendingDDD]);

  const search = useCallback((ddd: string): void => {
    setPendingDDD(ddd);
  }, []);

  const reset = useCallback((): void => {
    setPendingDDD(null);
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  return { data, loading, error, search, reset };
}
