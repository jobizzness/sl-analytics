'use client';

import { LineGrpahCard } from '../../src/components/line-graph-card';
import { DashboardDataDisplay } from '../../src/components/dashboard-data-display';
import { PageHeader } from '../../src/components/page-header';
import styled from 'styled-components';


const StyledPage = styled.div`
  .page {
  }
`;

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

                <section className="grid grid-cols-12 gap-5">
                    <div>
                        <LineGrpahCard></LineGrpahCard>
                    </div>
                </section>
            </div>



        </StyledPage>
    );
}
