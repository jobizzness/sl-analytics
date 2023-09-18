"use client";

import { useChartConfig } from '../../../app/useDemoConfig';
import { useState, useMemo } from 'react';
import Chart from "react-apexcharts";


export function FunnelGraphCard() {

    const series = [
        {
            name: "",
            data: [200, 330, 548, 740, 880, 990, 1100, 1380],
        },
    ];

    const options = {
        chart: {
            type: 'bar',
            height: 350,
        },
        plotOptions: {
            bar: {
                borderRadius: 0,
                horizontal: true,
                distributed: true,
                barHeight: '80%',
                isFunnel: true,
            },
        },
        colors: [
            '#F44F5E',
            '#E55A89',
            '#D863B1',
            '#CA6CD8',
            '#B57BED',
            '#8D95EB',
            '#62ACEA',
            '#4BC3E6',
        ],
        dataLabels: {
            enabled: true,
            formatter: function (val, opt) {
                return opt.w.globals.labels[opt.dataPointIndex]
            },
            dropShadow: {
                enabled: true,
            },
        },
        title: {
            text: 'Pyramid Chart',
            align: 'middle',
        },
        xaxis: {
            categories: ['Sweets', 'Processed Foods', 'Healthy Fats', 'Meat', 'Beans & Legumes', 'Dairy', 'Fruits & Vegetables', 'Grains'],
        },
        legend: {
            show: false,
        },
    }



    return (
        <div className="bg-gray-900 px-4 py-5 sm:px-6">
            <h3 className="text-base font-semibold leading-6 text-white">Purchase Funnel</h3>
            <p className="mt-1 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit quam corrupti consectetur.
            </p>

            <div className="h-[26em] mt-8">
                <Chart
                    // @ts-ignore
                    options={options}
                    series={series}
                    type="bar"
                    height={350}
                />
            </div>
        </div>
    )
}
