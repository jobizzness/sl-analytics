"use client";

import { useChartConfig } from '../../../app/useDemoConfig';
import { useState, useMemo } from 'react';
import Chart from "react-apexcharts";


export function DonutChartCard() {

    const options = {
        labels: ['New', 'Returning']
    }

    const series = [83, 17]


    return (
        <div className="bg-gray-900 px-4 py-5 sm:px-6">
            <h3 className="text-base font-semibold leading-6 text-white">Users</h3>
            <p className="mt-1 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit quam corrupti consectetur.
            </p>

            <div className="h-[20em] mt-4">
                <Chart
                    options={options}
                    series={series}
                    type="donut"
                    width="450"
                />
            </div>
        </div>
    )
}
