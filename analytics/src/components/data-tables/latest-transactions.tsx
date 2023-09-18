"use client"

export function LatestTransactions(props) {
    // Defaults to limit: 20, timeline: 'LAST_7_DAYS'
    // const data = getData();
    const data = props.data;

    const formatTime = (d) => {
        const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

        // @ts-ignore
        const diffInDays = Math.floor((new Date() - new Date(d)) / (1000 * 60 * 60 * 24));

        return rtf.format(-diffInDays, 'day') // Format the time difference;
    }


    return (


        <div className="bg-gray-900 py-10" >
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-base font-semibold leading-6 text-white">Latest Transactions</h3>
            </div>
            {/* <h2 className="px-4 text-base font-semibold leading-7 text-white sm:px-6 lg:px-8">Latest activity</h2> */}
            <div className="overscroll-auto overflow-y-auto h-[28em]">
                < table className="mt-6 w-full whitespace-nowrap text-left">
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
                            <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20">
                                Revenue
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                                    <div className="flex items-center gap-x-4 max-w-xs">
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
                                        <div className="font-mono text-sm leading-6 text-gray-400">${item.revenue}</div>

                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}