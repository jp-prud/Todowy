import { PaginatedListParams } from '@services';
import { CreateReportData, CustomerProps, ReportProps } from '@types';

import { HttpClient } from '../utils/HttpClient';

export interface getReportListByDateProps {
  queryParams?: PaginatedListParams;
  date: string;
}

export function ReportService() {
  async function createReport(input: CreateReportData): Promise<ReportProps> {
    console.log(input);

    const response = await HttpClient.post('/report', input);

    return response.data;
  }

  async function getReportListByDate({
    queryParams,
    date,
  }: getReportListByDateProps): Promise<
    Array<
      Pick<ReportProps, 'id' | 'createdAt'> & {
        Customer: Pick<CustomerProps, 'id' | 'name'>;
      }
    >
  > {
    console.log(queryParams);

    const {skip, take} = queryParams || {};

    const mapQueryParams = [];

    if (skip) {
      mapQueryParams.push(`skip=${skip}`);
    }
    if (take) {
      mapQueryParams.push(`take=${take}`);
    }

    if (date) {
      mapQueryParams.push(`date=${date}`);
    }

    const queryString =
      mapQueryParams.length > 0 ? `?${mapQueryParams.join('&')}` : '';

    const endpoint = `report${queryString}`;

    const response = await HttpClient.get(endpoint);

    return response.data.reports;
  }

  return {
    createReport,
    getReportListByDate,
  };
}
