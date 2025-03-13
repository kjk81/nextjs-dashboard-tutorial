import SideNav from '@/app/ui/dashboard/sidenav';
 
/* Layout sets the layout for all children, including child pages. 
Nav bar is on the dashboard and all resulting routes! 
Additionally only the page will re-render when navigating pages*/
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}