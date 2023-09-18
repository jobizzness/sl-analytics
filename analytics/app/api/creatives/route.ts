import { creativesData } from "../../creatives/creatives";


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


export async function GET(request: Request) {
    const data = await getData({ limit: 20, timeline: 'LAST_7_DAYS' } );

  return new Response(JSON.stringify(data));
}
