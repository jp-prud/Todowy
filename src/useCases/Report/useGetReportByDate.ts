import { ReportService, useGetCustomersProps } from '@services';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@types';

export function useGetReportByDate({queryParams = {}}: useGetCustomersProps) {
  const {getReportListByDate} = ReportService();

  const currentDate = new Date().toISOString().split('T')[0];

  const {data, isLoading, isError, error, refetch} = useQuery({
    queryKey: [QueryKeys.ListReports, {date: currentDate}],
    queryFn: () =>
      getReportListByDate({
        date: currentDate,
        queryParams,
      }),
  });

  return {
    reportList: data,
    isLoading: isLoading,
    isError,
    error,
    getReportListByDate: refetch,
  };
}
