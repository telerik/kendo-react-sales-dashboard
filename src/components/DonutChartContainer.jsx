import React from 'react';

import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels
} from '@progress/kendo-react-charts';

import { donutChartData } from '../data/appData';

const labelContent = (e) => (e.category);

export const DonutChartContainer = () => (
  <Chart style={{height:300}}>
    <ChartSeries>
      <ChartSeriesItem type="donut" data={donutChartData} categoryField="kind" field="share" padding={0}>
        <ChartSeriesLabels color="#fff" background="none" content={labelContent} />
      </ChartSeriesItem>
    </ChartSeries>
    <ChartLegend visible={false} />
  </Chart>
);
