'use client';

import dynamic from 'next/dynamic';

import { DashboardDataDisplay } from '../../src/components/dashboard-data-display';
import { PageHeader } from '../../src/components/page-header';
import styled from 'styled-components';


const StyledPage = styled.div`
  .page {
  }
`;

const LineGrpahCard = dynamic(
    () => import("../../src/components/graphs/line-graph-card")
        .then((mod) => mod.LineGrpahCard), {
    ssr: false,
});

const DonutChartCard = dynamic(
    () => import("../../src/components/graphs/donut-chart-card")
        .then((mod) => mod.DonutChartCard), {
    ssr: false,
});

export default async function Index() {
    /*
     * Replace the elements below with your own.
     *
     * Note: The corresponding styles are in the ./index.styled-components file.
     */



    return (
        <StyledPage>
            <PageHeader pageTitle="Dashboard"></PageHeader>

            <div className="wrapper">
                <DashboardDataDisplay></DashboardDataDisplay>
                {/* Different interactie charts and lists */}

                <section className="grid grid-cols-12 gap-5 mt-6">
                    <div className="2xl:col-span-8 lg:col-span-7 col-span-12">
                        <LineGrpahCard></LineGrpahCard>
                    </div>
                    <div className="2xl:col-span-4 lg:col-span-4 col-span-12">
                        <DonutChartCard></DonutChartCard>
                    </div>
                </section>
            </div>



        </StyledPage>
    );
}
