import { Footer } from './_components/footer';
import { Navbar } from './_components/navbar';

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-[100vh] flex flex-col">
      <Navbar />
      <main className="h-full pt-40 flex-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
