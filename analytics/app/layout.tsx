import './global.css';
import '../assets/app.scss';
import { StyledComponentsRegistry } from './registry';

import Footer from '../src/components/footer';
import Header from '../src/components/header';
import DashboardLayout from '../src/components/dashboard-layout';

export const metadata = {
  title: 'Welcome to demo2',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-black">
      <body className="h-full">
        {/* <Header></Header> */}
        <DashboardLayout>

          <div>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </div>

        </DashboardLayout>

        {/* <Footer></Footer> */}
      </body>
    </html>
  );
}
