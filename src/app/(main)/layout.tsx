import Footer from './_components/footer';
import Navbar from './_components/navbar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <div className="aurora-px-24 aurora-py-4 aurora-max-w-[1500px] aurora-mx-auto">
        {children}
      </div>
      <Footer />
    </div>
  );
}
