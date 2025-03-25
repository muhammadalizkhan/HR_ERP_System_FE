import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { Briefcase, FileText, List, Calendar, FileCheck, Plus, Search, Users, Clock, ChevronDown } from "lucide-react"

export default function Recruitment() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Recruitment</h1>
          <p className="text-gray-500">Manage your hiring pipeline and candidates</p>
        </div>
        <button className="bg-black text-white hover:bg-gray-800 px-4 py-2 rounded-md flex items-center">
          <Plus className="mr-2 h-4 w-4" /> Create Job Posting
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="border rounded-lg p-6">
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-50 p-2 rounded-md">
                <Briefcase className="h-5 w-5 text-blue-500" />
              </div>
              <span className="text-green-500 font-medium">+12%</span>
            </div>
            <span className="text-gray-500 text-sm">Open Positions</span>
            <span className="text-3xl font-semibold mt-1">24</span>
          </div>
        </div>

        <div className="border rounded-lg p-6">
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-50 p-2 rounded-md">
                <Users className="h-5 w-5 text-green-500" />
              </div>
              <span className="text-green-500 font-medium">+8%</span>
            </div>
            <span className="text-gray-500 text-sm">Active Candidates</span>
            <span className="text-3xl font-semibold mt-1">156</span>
          </div>
        </div>

        <div className="border rounded-lg p-6">
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-50 p-2 rounded-md">
                <Calendar className="h-5 w-5 text-purple-500" />
              </div>
              <span className="text-green-500 font-medium">+5%</span>
            </div>
            <span className="text-gray-500 text-sm">Interviews Scheduled</span>
            <span className="text-3xl font-semibold mt-1">18</span>
          </div>
        </div>

        <div className="border rounded-lg p-6">
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-amber-50 p-2 rounded-md">
                <FileCheck className="h-5 w-5 text-amber-500" />
              </div>
              <span className="text-red-500 font-medium">-2%</span>
            </div>
            <span className="text-gray-500 text-sm">Offers Pending</span>
            <span className="text-3xl font-semibold mt-1">7</span>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4">Recruitment Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="bg-blue-50 p-3 rounded-md">
              <FileText className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <h3 className="font-medium text-lg">ATS Section</h3>
              <p className="text-gray-500 text-sm mt-1">
                Track and manage candidate applications through your pipeline
              </p>
              <div className="mt-4 flex items-center text-sm text-blue-600">
                <span>156 active candidates</span>
                <Clock className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="bg-green-50 p-3 rounded-md">
              <Briefcase className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <h3 className="font-medium text-lg">Job Posting Portal</h3>
              <p className="text-gray-500 text-sm mt-1">Create and publish job listings to multiple platforms</p>
              <div className="mt-4 flex items-center text-sm text-green-600">
                <span>24 active postings</span>
                <Plus className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="bg-purple-50 p-3 rounded-md">
              <List className="h-6 w-6 text-purple-500" />
            </div>
            <div>
              <h3 className="font-medium text-lg">Job Listing View</h3>
              <p className="text-gray-500 text-sm mt-1">Browse and manage all your current job listings</p>
              <div className="mt-4 flex items-center text-sm text-purple-600">
                <span>View all listings</span>
                <Search className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="bg-amber-50 p-3 rounded-md">
              <Calendar className="h-6 w-6 text-amber-500" />
            </div>
            <div>
              <h3 className="font-medium text-lg">Interview Scheduling</h3>
              <p className="text-gray-500 text-sm mt-1">Schedule and manage candidate interviews</p>
              <div className="mt-4 flex items-center text-sm text-amber-600">
                <span>18 upcoming interviews</span>
                <Clock className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="bg-red-50 p-3 rounded-md">
              <FileCheck className="h-6 w-6 text-red-500" />
            </div>
            <div>
              <h3 className="font-medium text-lg">Offer Management</h3>
              <p className="text-gray-500 text-sm mt-1">Create, send and track candidate offers</p>
              <div className="mt-4 flex items-center text-sm text-red-600">
                <span>7 pending offers</span>
                <Clock className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Recent Applications</h2>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-black">
              Filter by
              <ChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      All Applications
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      New
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      Interview
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      Offer
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>

      <div className="border rounded-lg">
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-4 border-b">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="font-medium text-gray-700">JD</span>
                </div>
                <div>
                  <p className="font-medium">Jessica Davis</p>
                  <p className="text-sm text-gray-500">Senior UX Designer</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">New</span>
                <span className="text-xs text-gray-500">2h ago</span>
              </div>
            </div>

            <div className="flex items-center justify-between pb-4 border-b">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="font-medium text-gray-700">RM</span>
                </div>
                <div>
                  <p className="font-medium">Robert Miller</p>
                  <p className="text-sm text-gray-500">Frontend Developer</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">Interview</span>
                <span className="text-xs text-gray-500">1d ago</span>
              </div>
            </div>

            <div className="flex items-center justify-between pb-4 border-b">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="font-medium text-gray-700">AT</span>
                </div>
                <div>
                  <p className="font-medium">Alice Thompson</p>
                  <p className="text-sm text-gray-500">Product Manager</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Offer</span>
                <span className="text-xs text-gray-500">2d ago</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="font-medium text-gray-700">MJ</span>
                </div>
                <div>
                  <p className="font-medium">Michael Johnson</p>
                  <p className="text-sm text-gray-500">Backend Engineer</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Assessment</span>
                <span className="text-xs text-gray-500">3d ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

