import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect} from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineSetting, AiTwotoneSetting } from "react-icons/ai";
import { VscDebugBreakpointDataUnverified, VscDebugBreakpointData } from "react-icons/vsc";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPortfolio, fetchTransactions, updateActivePortfolio } from '../store/action-creators';
import { State } from '../store/reducers';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store/store';



export default function DropdownPortfolio() {
  /* Acceso a la tienda */
  let activePortfolio = useSelector((state:State) => state.activePortfolio)
  console.log(activePortfolio)
  let portfolioName = JSON.parse(sessionStorage.getItem('wallets')!)[activePortfolio].name

  /* Redux */
	const dispatch = useDispatch()
	const { updateActivePortfolio } = bindActionCreators(actionCreators, dispatch)





  
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          
          <Menu.Button className="inline-flex justify-center w-full px-10 py-2 text-xl font-medium text-white bg-black rounded-md bg-opacity-0 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {portfolioName}
            <RiArrowDropDownLine className="w-8 h-8 ml-1 -mr-1"/>
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
          <Menu.Items className="absolute left-0 w-48 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {JSON.parse(sessionStorage.getItem('wallets')!).map((wallet:any,key:number) => (
                ((wallet.name != portfolioName) ? 
                <Menu.Item>
                {({ active }) => (
                  
                    <button
                      onClick= {() => (
                        updateActivePortfolio(key)
                      )}
                      className={`${active ? 'text-black' : 'text-gray-600'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <VscDebugBreakpointData className="w-5 h-5 ml-2 mr-2"/>
                      ) : (
                        <VscDebugBreakpointDataUnverified className="w-5 h-5 ml-2 mr-2"/>
                      )}
                      {wallet.name}
                    </button>

                  
                )}
                </Menu.Item>
                : "")
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}