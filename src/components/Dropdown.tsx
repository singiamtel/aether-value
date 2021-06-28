import { Menu, Transition } from '@headlessui/react'
import { Fragment} from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineSetting, AiTwotoneSetting } from "react-icons/ai";
import { IoLogOutOutline, IoLogOut } from "react-icons/io5";
import { Link } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'


function signOut() {
  sessionStorage.removeItem("token");
  const history = createHistory();
  history.push("/login");
  history.go(0)
}

export default function Drowpdown() {
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-3 text-sm font-medium text-white bg-black rounded-md bg-opacity-0 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Account
            <RiArrowDropDownLine className="w-5 h-5 ml-2 -mr-1"/>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-75"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  
                    <button
                      className={`${active ? 'text-black' : 'text-gray-600'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <AiTwotoneSetting className="w-5 h-5 ml-2 mr-2"/>
                      ) : (
                        <AiOutlineSetting className="w-5 h-5 ml-2 mr-2"/>
                      )}
                      Settings
                    </button>
                  
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  
                  <button
                    onClick= {signOut}
                    className={`${active ? 'text-black' : 'text-gray-600'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <IoLogOut className="w-5 h-5 ml-2 mr-2"/>
                    ) : (
                      <IoLogOutOutline className="w-5 h-5 ml-2 mr-2"/>
                    )}
                    Log Out
                  </button>
                  
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}