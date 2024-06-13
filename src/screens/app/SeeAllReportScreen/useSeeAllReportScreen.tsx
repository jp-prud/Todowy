import { useGetReportByDate } from '@useCases';

export function useSeeAllReportScreen() {
  const {reportList, isLoading, isError} = useGetReportByDate({
    queryParams: {
      skip: '0',
      take: '10',
    },
  });

  return {
    reportList,
    isLoading,
    isError,
  };
}
