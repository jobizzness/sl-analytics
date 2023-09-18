"use client";

import { useChartConfig } from '../../../app/useDemoConfig';
import { useState, useMemo } from 'react';
import { AxisOptions, Chart } from "react-charts";


export function StackedLineGrpahCard() {

    const { data, randomizeData } = useChartConfig({
        series: 10,
        dataType: "time",
    })

    const primaryAxis = useMemo<
        AxisOptions<typeof data[number]["data"][number]>
    >(
        () => ({
            getValue: (datum) => datum.primary as Date,
        }),
        []
    );

    const secondaryAxes = useMemo<
        AxisOptions<typeof data[number]["data"][number]>[]
    >(
        () => [
            {
                getValue: (datum) => datum.secondary,
                stacked: true,
                // OR
                // elementType: "area",
            },
        ],
        []
    );

    console.log(data);

    return (
        <div className="bg-gray-900 px-4 py-5 sm:px-6">
            <h3 className="text-base font-semibold leading-6 text-white">Impressions</h3>
            <p className="mt-1 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit quam corrupti consectetur.
            </p>

            <div className="h-[22.5em]">
                <Chart
                    options={{
                        data,
                        primaryAxis,
                        secondaryAxes,
                    }}
                />
            </div>
        </div>
    )
}
