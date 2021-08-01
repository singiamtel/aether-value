import { Dialog, Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { VscDebugBreakpointDataUnverified, VscDebugBreakpointData } from "react-icons/vsc";
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/reducers';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../store/store';
import { ImPlus } from 'react-icons/im';
import { CreateWallet } from '../../api/getEndpoints';
import { Formik, FormikHelpers, Form, Field } from 'formik';

interface Values {
	name: string
}

export default function DropdownPortfolio() {
  const token = sessionStorage.getItem("token")!
  const handleSubmit = async ( walletName:string) => {
      console.log("empieza")
    if(await CreateWallet(token, walletName)){
      console.log("created portfolio successfully");
    }
    else{
      console.log("create portfolio failed");
    }
  }

  /* Acceso a la tienda */
  let activePortfolio = useSelector((state:State) => state.activePortfolio[0])
  let portfolioName = JSON.parse(sessionStorage.getItem('wallets')!)[activePortfolio].name

  /* Redux */
	const dispatch = useDispatch()
	const { updateActivePortfolio } = bindActionCreators(actionCreators, dispatch)



  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  
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
                        updateActivePortfolio(key,0)
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
            <div className="px-1 py-1 ">
            <Menu.Item>
            {({ active }) => (
                  
                  <button
                    type="button"
                    onClick={openModal}
                    className={`${active ? 'text-black' : 'text-gray-600'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                 
                      <ImPlus className="w-3 h-3 ml-3 mr-3"/>
                    
                    Create New Portfolio
                  </button>

                
              )}

                  
            </Menu.Item>

            </div>
          </Menu.Items>
        </Transition>
      </Menu>
                    <div>
                    <Transition appear show={isOpen} as={Fragment}>
                      <Dialog
                        as="div"
                        className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-50"
                        onClose={closeModal}
                      >
                        <div className="min-h-screen px-4 text-center">
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Dialog.Overlay className="fixed inset-0" />
                          </Transition.Child>


                          <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                          >
                            &#8203;
                          </span>
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                          >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                              <Dialog.Title
                                as="h3"
                                className="text-lg font-medium leading-6 text-gray-900"
                              >
                                Create New Portfolio
                              </Dialog.Title>
                              <div className="mt-2">
                                <Formik 
                                  initialValues={{
                                    name: "",                 
                                  }}

                                  onSubmit={(
                                    values: Values,
                                    { setSubmitting }: FormikHelpers<Values> ) => {
                                      setTimeout(() => {
                                        handleSubmit(values.name)
                                        setSubmitting(false)
                                        
                                      }, 500)
                                    }}
                                >	
                                  <Form >

                                    <p className={"grid grid-cols-2 px-4 py-2 text-black"}>
                                      <label htmlFor="name">Portfolio Name: </label>
                                      <Field id="name" name="name" placeholder="My Portfolio" />
                                    </p>
                                    <div className="mt-4 flex justify-center">
                                    <button
                                      type="submit"
                                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none "
                                      onClick={closeModal}
                                    >
                                      Add Portfolio
                                    </button>
                                  </div>
                                  </Form>
                                </Formik>
                              </div>

                              
                            </div>
                          </Transition.Child>
                        </div>
                      </Dialog>
                    </Transition>
                  </div>
    </div>
  )
}