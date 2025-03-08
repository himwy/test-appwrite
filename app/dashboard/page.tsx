"use client";
import {
  Palette,
  Users,
  Cloud,
  Zap,
  Plus,
  LogOut,
  Bell,
  Search,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { account } from "../appwrite/config";

export default function DashboardPage() {
  async function handleLogout() {
    try {
      await account.deleteSession("current");
      window.location.href = "/";
    } catch (error) {
      console.error(error);
    }
  }
  const stats = [
    { name: "Total Artworks", value: "248", icon: Palette },
    { name: "Team Members", value: "12", icon: Users },
    { name: "Storage Used", value: "64%", icon: Cloud },
    { name: "Active Projects", value: "7", icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-semibold mb-6 animate-fade-up animate-once animate-duration-[800ms] animate-delay-100 animate-ease-in-out">
          Dashboard
        </h1>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((item, index) => (
            <div
              key={item.name}
              className="bg-white overflow-hidden shadow rounded-lg animate-fade-up animate-once animate-duration-[800ms] animate-ease-in-out"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <item.icon
                      className="h-6 w-6 text-gray-700"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {item.name}
                      </dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">
                          {item.value}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Projects */}
        <div className="animate-fade-up animate-once animate-duration-[800ms] animate-delay-600 animate-ease-in-out">
          <h2 className="text-2xl font-semibold mb-4">Recent Projects</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul role="list" className="divide-y divide-gray-200">
              {[1, 2, 3].map((project, index) => (
                <li
                  key={project}
                  className="animate-fade-up animate-once animate-duration-[800ms] animate-ease-in-out"
                  style={{ animationDelay: `${(index + 7) * 100}ms` }}
                >
                  <a href="#" className="block hover:bg-gray-50">
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          Project {project}
                        </p>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                            Active
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            <Users
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            8 members
                          </p>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <Palette
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <p>36 artworks</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row sm:justify-between gap-4 animate-fade-up animate-once animate-duration-[800ms] animate-delay-1000 animate-ease-in-out">
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 animate-pulse animate-infinite animate-duration-[2000ms]">
            <Plus className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            New Project
          </button>

          <button
            onClick={handleLogout}
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Logout
          </button>
        </div>
      </main>
    </div>
  );
}
