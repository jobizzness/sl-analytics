'use client';

import dynamic from 'next/dynamic';

import { DashboardDataDisplay } from '../../src/components/dashboard-data-display';
import { PageHeader } from '../../src/components/page-header';
import styled from 'styled-components';
import { getCreativesData } from '../../src/services/creative.service';

const StyledPage = styled.div`
  .page {
  }
`;

const LineGrpahCard = dynamic(
    () => import("../../src/components/graphs/line-graph-card")
        .then((mod) => mod.LineGrpahCard), {
    ssr: false,
});

const StackedLineGrpahCard = dynamic(
    () => import("../../src/components/graphs/stacked-line-graph-card")
        .then((mod) => mod.StackedLineGrpahCard), {
    ssr: false,
});

const DonutChartCard = dynamic(
    () => import("../../src/components/graphs/donut-chart-card")
        .then((mod) => mod.DonutChartCard), {
    ssr: false,
});

const TopPerformingCreatives = dynamic(
    () => import("../../src/components/data-tables/top-performing-creatives")
        .then((mod) => mod.TopPerformingCreatives), {
    ssr: false,
});

const LatestTransactions = dynamic(
    () => import("../../src/components/data-tables/latest-transactions")
        .then((mod) => mod.LatestTransactions), {
    ssr: false,
});

const FunnelGraphCard = dynamic(
    () => import("../../src/components/graphs/funnel-chart-card")
        .then((mod) => mod.FunnelGraphCard), {
    ssr: false,
});


export default async function Index() {
    /*
     * Replace the elements below with your own.
     *
     * Note: The corresponding styles are in the ./index.styled-components file.
     */


    const creativesData = getCreativesData();

    return (
        <StyledPage>
            <PageHeader pageTitle="Dashboards"></PageHeader>

            <div className="wrapper">
                <DashboardDataDisplay></DashboardDataDisplay>
                  
                {/* Impressions */}
                <section className="grid grid-cols-12 gap-5 mt-6">
                    {/* <div className="2xl:col-span-8 lg:col-span-7 col-span-12">
                        <StackedLineGrpahCard></StackedLineGrpahCard>
                    </div>
                    
                    <div className="2xl:col-span-4 lg:col-span-4 col-span-12">
                        <DonutChartCard></DonutChartCard>
                    </div> */}
                </section>

                {/* Tables */}
                <section className="grid grid-cols-12 gap-5 mt-6">
                    {/* <div className="2xl:col-span-6 lg:col-span-6 col-span-12">
                        <TopPerformingCreatives data={creativesData}></TopPerformingCreatives>
                    </div>
                    <div className="2xl:col-span-6 lg:col-span-6 col-span-12">
                        <LatestTransactions data={creativesData}></LatestTransactions>
                    </div> */}
                </section>

                {/* More Stats */}
                <section className="grid grid-cols-12 gap-5 mt-6">
                    {/* <div className="2xl:col-span-6 lg:col-span-7 col-span-12">
                        <LineGrpahCard></LineGrpahCard>
                    </div>
                    <div className="2xl:col-span-6 lg:col-span-4 col-span-12">
                        <FunnelGraphCard></FunnelGraphCard>
                    </div> */}
                </section>
            </div>



        </StyledPage>
    );
}
