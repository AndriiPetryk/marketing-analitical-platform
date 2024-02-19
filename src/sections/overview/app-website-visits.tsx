import {FC} from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import Chart, {useChart} from '../../components/chart';

// ----------------------------------------------------------------------
interface AppWebsiteVisits {
    chart: {
        labels: Array<any>,
        colors: Array<any>,
        series: Array<any>,
        options: Array<any>,
    },
    subheader: string,
    title: string,
}

const AppWebsiteVisits: FC<AppWebsiteVisits>
    = ({title, subheader, chart, ...other}) => {
    const {labels, colors, series, options} = chart;

    const chartOptions = useChart({
        colors,
        plotOptions: {
            bar: {
                columnWidth: '16%',
            },
        },
        fill: {
            type: series.map((i) => i.fill),
        },
        labels,
        xaxis: {
            type: 'datetime',
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: (value) => {
                    if (typeof value !== 'undefined') {
                        return `${value.toFixed(0)} visits`;
                    }
                    return value;
                },
            },
        },
        ...options,
    });

    return (
        <Card {...other}>
            <CardHeader title={title} subheader={subheader}/>

            <Box sx={{p: 3, pb: 1}}>
                <Chart
                    dir="ltr"
                    type="line"
                    series={series}
                    options={chartOptions}
                    width="100%"
                    height={364}
                />
            </Box>
        </Card>
    );
}

export default AppWebsiteVisits;

