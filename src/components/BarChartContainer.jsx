import React from 'react';

import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartLegend,
    ChartValueAxis,
    ChartValueAxisItem
} from '@progress/kendo-react-charts';

const categories = [ 2017, 2018 ];
const series = [ {
    name: 'India',
    data: [ 3.907, 7.943]
}, {
    name: 'Russian Federation',
    data: [ 4.743, 7.295 ]
}, {
    name: 'Bulgaria',
    data: [ 2.743, 5.295 ]
}, {
    name: 'Germany',
    data: [ 1.010, 1.375 ]
}, {
    name: 'China',
    data: [ 4.010, 3.375 ]
}, {
    name: 'World',
    data: [ 1.988, 2.733 ]
} ];

export const BarChartContainer = () => (
    <Chart style={{height:300}}>
        <ChartLegend visible={false} />
        <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={categories} startAngle={45} />
        </ChartCategoryAxis>
        <ChartSeries>
            {series.map((item, idx) => (
                <ChartSeriesItem
                    key={idx}
                    type="column"
                    data={item.data}
                    name={item.name}
                />))}
        </ChartSeries>
        <ChartValueAxis skip={2}>
                <ChartValueAxisItem skip={2}/>
        </ChartValueAxis>
    </Chart>
);