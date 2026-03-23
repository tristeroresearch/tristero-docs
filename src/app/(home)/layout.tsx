import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <HomeLayout 
      {...baseOptions()} 
      className="[&_header]:bg-transparent [&_header]:backdrop-blur-0 [&_header]:border-transparent [&_header]:shadow-none [&_nav]:bg-transparent [&_nav]:backdrop-blur-0 [&_nav]:shadow-none [&_.fd-nav-container]:bg-transparent [&_.fd-nav-container]:backdrop-blur-0 [&_.fd-nav-container]:border-transparent [&_div[class*='bg-']]:bg-transparent"
    >
      {children}
    </HomeLayout>
  );
}
