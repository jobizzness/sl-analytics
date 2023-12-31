'use client';

import { PageHeader } from '../../src/components/page-header';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';

import styled from 'styled-components';
import { creativesData } from './creatives';


const StyledPage = styled.div`
  .page {
  }
`;

const statuses = { Completed: 'text-green-400 bg-green-400/10', Error: 'text-rose-400 bg-rose-400/10' }
const activityItems = [
    {
        user: {
            name: 'Michael Foster',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        commit: '2d89f0c8',
        branch: 'main',
        status: 'Completed',
        duration: '25s',
        date: '45 minutes ago',
        dateTime: '2023-01-23T11:00',
    },
    {
        user: {
            name: 'Lindsay Walton',
            imageUrl:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        commit: '249df660',
        branch: 'main',
        status: 'Completed',
        duration: '1m 32s',
        date: '3 hours ago',
        dateTime: '2023-01-23T09:00',
    },
    {
        user: {
            name: 'Courtney Henry',
            imageUrl:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        commit: '11464223',
        branch: 'main',
        status: 'Error',
        duration: '1m 4s',
        date: '12 hours ago',
        dateTime: '2023-01-23T00:00',
    },
    {
        user: {
            name: 'Courtney Henry',
            imageUrl:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        commit: 'dad28e95',
        branch: 'main',
        status: 'Completed',
        duration: '2m 15s',
        date: '2 days ago',
        dateTime: '2023-01-21T13:00',
    },
    {
        user: {
            name: 'Michael Foster',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        commit: '624bc94c',
        branch: 'main',
        status: 'Completed',
        duration: '1m 12s',
        date: '5 days ago',
        dateTime: '2023-01-18T12:34',
    },
    {
        user: {
            name: 'Courtney Henry',
            imageUrl:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        commit: 'e111f80e',
        branch: 'main',
        status: 'Completed',
        duration: '1m 56s',
        date: '1 week ago',
        dateTime: '2023-01-16T15:54',
    },
    {
        user: {
            name: 'Michael Foster',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        commit: '5e136005',
        branch: 'main',
        status: 'Completed',
        duration: '3m 45s',
        date: '1 week ago',
        dateTime: '2023-01-16T11:31',
    },
    {
        user: {
            name: 'Whitney Francis',
            imageUrl:
                'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        commit: '5c1fd07f',
        branch: 'main',
        status: 'Completed',
        duration: '37s',
        date: '2 weeks ago',
        dateTime: '2023-01-09T08:45',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function getData({ limit = 20, timeline = 'LAST_7_DAYS' } = {}) {
    const data = creativesData.data;

    let filteredData = data.filter(item => {
        let itemDate = new Date(item.createdAt);
        let cutoffDate = new Date();

        switch (timeline) {
            case 'LAST_7_DAYS':
                cutoffDate.setDate(cutoffDate.getDate() - 7);
                break;
            case 'LAST_30_DAYS':
                cutoffDate.setDate(cutoffDate.getDate() - 30);
                break;
            default:
                cutoffDate = new Date(0); // The beginning of time
        }

        return itemDate >= cutoffDate;
    });

    // Slice the array to limit the number of results
    // make random: impressions, engagementRate & CTR and revenue
    filteredData = filteredData.slice(0, limit).map(item => ({
        ...item,
        impressions: Math.floor(Math.random() * 10000), // Random impressions between 0 and 10000
        engagementRate: Math.random().toFixed(2), // Random engagement rate between 0 and 1 with 2 decimal places
        CTR: Math.random().toFixed(2), // Random CTR between 0 and 1 with 2 decimal places
        revenue: (Math.random() * 1000).toFixed(2) // Random revenue between 0 and 1000 with 2 decimal places
    }));


    return filteredData;
}

export default async function Index() {
    // Defaults to limit: 20, timeline: 'LAST_7_DAYS'
    // const data = getData();

    const data = []


    const formatTime = (d) => {
        const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

        // @ts-ignore
        const diffInDays = Math.floor((new Date() - new Date(d)) / (1000 * 60 * 60 * 24));

        return rtf.format(-diffInDays, 'day') // Format the time difference;

    }


    return (
        <StyledPage>
            <PageHeader pageTitle="Creatives"></PageHeader>
            {/* <h2 className="px-4 text-base font-semibold leading-7 text-white sm:px-8 lg:px-8">Creatives</h2> */}

            <div className="bg-gray-900 py-10">
                {/* <h2 className="px-4 text-base font-semibold leading-7 text-white sm:px-6 lg:px-8">Latest activity</h2> */}
                <table className="mt-6 w-full whitespace-nowrap text-left">
                    <colgroup>
                        <col className="w-full sm:w-4/12" />
                        <col className="lg:w-4/12" />
                        <col className="lg:w-2/12" />
                        <col className="lg:w-1/12" />
                        <col className="lg:w-1/12" />
                    </colgroup>
                    <thead className="border-b border-white/10 text-sm leading-6 text-white">
                        <tr>
                            <th scope="col" className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8">
                                Post
                            </th>
                            <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">
                                Impressions
                            </th>
                            <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">
                                Engagement Rate
                            </th>
                            <th scope="col" className="py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20">
                                CTR
                            </th>
                            <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20">
                                Revenue
                            </th>
                            <th scope="col" className="hidden py-2 pl-0 pr-4 text-right font-semibold sm:table-cell sm:pr-6 lg:pr-8">
                                Posted
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {data.map((item: any) => (
                            <tr key={item.id}>
                                <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                                    <div className="flex items-center gap-x-4">
                                        {/* <img src={item.user.imageUrl} alt="" className="h-8 w-8 rounded-full bg-gray-800" /> */}
                                        <div className="truncate text-sm font-medium leading-6 text-white">{item.title}</div>
                                    </div>
                                </td>
                                <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                                    <div className="flex gap-x-3">
                                        <div className="font-mono text-sm leading-6 text-gray-400">{item.impressions}</div>
                                        {/* <div className="rounded-md bg-gray-700/40 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-white/10">
                                            {item.branch}
                                        </div> */}
                                    </div>
                                </td>
                                <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                                    <div className="flex gap-x-3">
                                        <div className="font-mono text-sm leading-6 text-gray-400">{item.engagementRate}%</div>
                                        {/* <div className="rounded-md bg-gray-700/40 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-white/10">
                                            {item.branch}
                                        </div> */}
                                    </div>
                                </td>
                                <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                                    <div className="flex gap-x-3">
                                        <div className="font-mono text-sm leading-6 text-gray-400">{item.CTR}%</div>
                                        {/* <div className="rounded-md bg-gray-700/40 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-white/10">
                                            {item.branch}
                                        </div> */}
                                    </div>
                                </td>
                                <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                                    <div className="flex gap-x-3">
                                        <div className="font-mono text-sm leading-6 text-gray-400">${item.revenue}</div>

                                    </div>
                                </td>
                                {/* <td className="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
                                <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                                    <time className="text-gray-400 sm:hidden" dateTime={item.dateTime}>
                                        {item.date}
                                    </time>
                                    <div className={classNames(statuses[item.status], 'flex-none rounded-full p-1')}>
                                        <div className="h-1.5 w-1.5 rounded-full bg-current" />
                                    </div>
                                    <div className="hidden text-white sm:block">{item.status}</div>
                                </div>
                            </td> */}
                                {/* <td className="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-400 md:table-cell lg:pr-20">
                                    {item.duration}
                                </td> */}
                                <td className="hidden py-4 pl-0 pr-4 text-right text-sm leading-6 text-gray-400 sm:table-cell sm:pr-6 lg:pr-8">
                                    <div className="rounded-md bg-gray-700/40 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-white/10">
                                        <time dateTime={item.createdAt}>{formatTime(item.createdAt)}</time>
                                    </div>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </StyledPage>
    )
}
