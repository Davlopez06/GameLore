'use client';
import React, { useContext, useState } from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebar from '@/components/sidebar';
import '@/styles/global.css';
import '@/styles/global.scss';

export default function SidebarRoot({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className='w-full'>
        <SidebarTrigger className='mb-3'/>
        {children}
      </main>
    </SidebarProvider>
  );
}
