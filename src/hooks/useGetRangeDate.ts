import { useMemo } from 'react';

export function useGetRangeDate() {
  return useMemo(() => {
    const today = new Date();
    const nextDay = new Date();
    nextDay.setDate(today.getDate() + 1);
    const pastDay = new Date();
    pastDay.setDate(today.getDate() - 1);

    return {
      today: today.toISOString(),
      nextDay: nextDay.toISOString(),
      pastDay: pastDay.toISOString(),
    };
  }, []);
}
