'use client';
import { Home } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import fullLogo from '@/assets/full-logo.png';
import './index.scss';

const items = [
  {
    title: 'Games',
    url: '/games',
    icon: Home,
  },
];

const AppSidebar = () => {
  return (
    <Sidebar className="dark">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="sidebar-label shadow-xs mb-2">
            <img className="max-w-full p-2" src={fullLogo.src} alt="icon-logo" />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
