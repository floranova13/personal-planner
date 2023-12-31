/* eslint-disable react/prop-types */
import { classNames } from '../utils/index.js';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import poise from '../assets/poise.png';

export default function DesktopSidebar({ navigation, projects }) {
  return (
    <>
      {/* Static sidebar for desktop */}
      <div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col'>
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className='flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4'>
          <div className='flex h-16 shrink-0 items-center'>
            <img
              className='h-8 w-auto'
              src={poise}
              alt='poise logo'
            />
            <h2 className='m-2 font-extrabold italic'>Poise</h2>
          </div>
          <nav className='flex flex-1 flex-col'>
            <ul role='list' className='flex flex-1 flex-col gap-y-7'>
              <li>
                <ul role='list' className='-mx-2 space-y-1'>
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-50 text-indigo-600'
                            : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? 'text-indigo-600'
                              : 'text-gray-400 group-hover:text-indigo-600',
                            'h-6 w-6 shrink-0'
                          )}
                          aria-hidden='true'
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <div className='text-xs font-semibold leading-6 text-gray-400'>
                  Projects
                </div>
                <ul role='list' className='-mx-2 mt-2 space-y-1'>
                  {projects.map((project) => (
                    <li key={project.name}>
                      <a
                        href={project.href}
                        className={classNames(
                          project.current
                            ? 'bg-gray-50 text-indigo-600'
                            : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                        )}
                      >
                        <span
                          className={classNames(
                            project.current
                              ? 'text-indigo-600 border-indigo-600'
                              : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600',
                            'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
                          )}
                        >
                          {project.initial}
                        </span>
                        <span className='truncate'>{project.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className='mt-auto'>
                <a
                  href='#'
                  className='group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600'
                >
                  <Cog6ToothIcon
                    className='h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600'
                    aria-hidden='true'
                  />
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
