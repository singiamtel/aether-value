import { Formik, Field, Form, FormikHelpers } from 'formik';
import { ImCross, ImPlus } from 'react-icons/im';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

interface Values {
	name: string
	ticker: string
	industry: string
	price: number
	closingPrice: number
	targetPrice: number
	quantity: number
	quant: number
	date:string
	buyingPrice:number
}


type AddStockProps = {
	addRow: (ticker: string, quant: number, date: string) => void,
	popUpState: boolean,
	togglePopUpState: () => void,
}

function AddStock({addRow,popUpState,togglePopUpState}:AddStockProps) {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="flex px-4 py-2 text-sm bg-black rounded-md bg-opacity-0 hover:bg-opacity-30 focus:outline-none"
        >
          <div className="px-3">
            <ImPlus style={{fontSize:20}}/>
          </div>
          Añadir
        </button>
      </div>

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
                  New Transaction
                </Dialog.Title>
                <div className="mt-2">
                  <Formik 
                    initialValues={{
                      name: "",
                      ticker: "",
                      industry: "",
                      price: 0,
                      closingPrice: 0,
                      targetPrice: 0,
                      quantity: 0,
                      quant: 0,
                      date:"",
                      buyingPrice:0,
                    }}

                    onSubmit={(
                      values: Values,
                      { setSubmitting }: FormikHelpers<Values> ) => {
                        setTimeout(() => {

                          addRow(values.ticker, values.quant, values.date)

                          setSubmitting(false)
                        }, 500)
                      }}
                  >	
                    <Form >

                      <p className={"grid grid-cols-2 px-4 py-2 text-black"}>
                        <label htmlFor="ticker">Ticker: </label>
                        <Field id="ticker" name="ticker" placeholder="AAPL" />
                      </p>

                      <p className={"grid grid-cols-2 px-4 py-2 text-black"}>
                        <label htmlFor="quant">Quantity: </label>
                        <Field id="quant" name="quant" placeholder={0}/>
                      </p>

                      <p className={"grid grid-cols-2 px-4 py-2 text-black"}>
                        <label htmlFor="date">Date: </label>
                        <Field id="date" name="date" placeholder="2021-01-01"/>
                      </p>
                    </Form>
                  </Formik>
                </div>

                <div className="mt-4 flex justify-center">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none "
                    onClick={closeModal}
                  >
                    Add Transaction
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default AddStock
