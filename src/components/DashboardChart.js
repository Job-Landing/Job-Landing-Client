import React,{useState} from 'react'
import Wrapper from '../asserts/wrappers/DashboardChart'
import { Chart } from "react-google-charts";

const DashboardChart = ({jobStatus, date}) => {
    const StatusData = [
        ["Status", "Current"],
        ["pending", jobStatus['pending']],
        ["interview", jobStatus['interview']],
        ["offer", jobStatus['offer']],
        ["decline", jobStatus['decline']],
    ];


    const StatusOptions = {
        title: "My Current Activities",
        pieHole: 0.9,
        is3D: false,
        legend: { position: "bottom", textStyle: {color: '#ffffff'}},
        backgroundColor: '#272731',
        titleTextStyle: { color: '#FFF' },
        color: '#FFFFFF',
        slices: {
            0: { color: '#bdc0d9' },
            1: { color: '#97a0de' },
            2: { color: '#abb1db' },
            3: { color: '#8489ba' },
        },
    };

    const DailyData = [
        [
            {
                type: "date",
                id: "Date",
            },
            {
                type: "number",
                id: "Won/Loss",
            },
        ],
        ...date
    ];

    const DailyOptions = {
        title: "Daily",
        noDataPattern: {
           backgroundColor: '#3a4454',
           color: '#3a4454'
        },
        calendar: {
            monthLabel: {
                fontName: 'Times-Roman',
                fontSize: 12,
                color: '#ffffff',
                bold: true,
                italic: true
            },
            monthOutlineColor: {
                stroke: '#17171e',
                strokeOpacity: 1,
                strokeWidth: 1
            },
            unusedMonthOutlineColor: {
                stroke: '#17171e',
                strokeOpacity: 1,
                strokeWidth: 1
            },
            focusedCellColor: {
                stroke: '#17171e',
                strokeOpacity: 1,
                strokeWidth: 1,
            },
            cellColor: {
                stroke: '#17171e',
                strokeOpacity: 1,
                strokeWidth: 2.5
            },
            cellSize: 15,
            underMonthSpace: 16,
        }
    };


    return (
        <Wrapper>
            <div className="calendar">
                <Chart
                    chartType="Calendar"
                    width="100%"
                    height="200px"
                    data={DailyData}
                    options={DailyOptions}
                />
            </div>

            <Chart
                chartType="PieChart"
                width="100%"
                height="400px"
                data={StatusData}
                options={StatusOptions}
                className='chart'
            />


        </Wrapper>
    );
}



export default DashboardChart
