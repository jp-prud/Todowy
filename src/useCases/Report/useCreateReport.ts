import { ReportService } from '@services';
import { useMutation } from '@tanstack/react-query';
import {
  CreateReportData,
  MutationKeys,
  MutationOptions,
  ReportProps,
} from '@types';

export function useCreateReport(options?: MutationOptions<ReportProps>) {
  const {createReport} = ReportService();

  const {mutate, isPending, isSuccess, isError} = useMutation<
    ReportProps,
    unknown,
    CreateReportData
  >({
    mutationKey: [MutationKeys.CreateReport],
    mutationFn: async data => createReport(data),
    onSuccess(data) {
      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },
    onError() {
      if (options?.onError) {
        options.onError(options.errorMessage!);
      }
    },
  });

  return {
    createReport: (data: CreateReportData) => mutate(data),
    isPending,
    isSuccess,
    isError,
  };
}
