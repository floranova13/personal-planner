/* eslint-disable react/prop-types */
import { useState } from 'react';
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import DesktopSidebar from '../components/DesktopSidebar';
import MobileSidebar from '../components/MobileSidebar';
import Search from '../components/Search';
import ProfileDropdown from '../components/ProfileDropdown';

const navigation = [
  { name: 'Dashboard', href: './dashboard', icon: HomeIcon, current: true },
  { name: 'Calendar', href: '/calendar', icon: CalendarIcon, current: false },
  { name: 'Projects', href: '/projects', icon: FolderIcon, current: false },
  { name: 'Tasks', href: '/projects', icon: DocumentDuplicateIcon, current: false },
  { name: 'Data', href: '/data', icon: ChartPieIcon, current: false },
];
const projects = [
  { id: 1, name: 'Flourish', href: '/projects/flourish', initial: 'F', current: false },
  { id: 2, name: 'Agenda', href: '/projects/agenda', initial: 'A', current: false },
  { id: 3, name: 'Warehouse', href: '/projects/warehouse', initial: 'W', current: false },
];
const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
];

export default function Home({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className='h-full w-full bg-white'>
        <MobileSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          navigation={navigation}
          projects={projects}
        />
        <DesktopSidebar navigation={navigation} projects={projects} />

        <div className='lg:pl-72'>
          <div className='sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8'>
            {/* Sidebar toggle, hidden  */}
            <button
              type='button'
              className='-m-2.5 p-2.5 text-gray-700 lg:hidden'
              onClick={() => setSidebarOpen(true)}
            >
              <span className='sr-only'>Open sidebar</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>

            {/* Separator */}
            <div
              className='h-6 w-px bg-gray-200 lg:hidden'
              aria-hidden='true'
            />

            <div className='flex flex-1 gap-x-4 self-stretch lg:gap-x-6'>
              <Search />
              <div className='flex items-center gap-x-4 lg:gap-x-6'>
                <button
                  type='button'
                  className='-m-2.5 p-2.5 text-gray-400 hover:text-gray-500'
                >
                  <span className='sr-only'>View notifications</span>
                  <BellIcon className='h-6 w-6' aria-hidden='true' />
                </button>

                {/* Separator */}
                <div
                  className='hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200'
                  aria-hidden='true'
                />

                <ProfileDropdown userNavigation={userNavigation} />
              </div>
            </div>
          </div>

          <main className='py-10'>
            <div className='px-4 sm:px-6 lg:px-8'>{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
