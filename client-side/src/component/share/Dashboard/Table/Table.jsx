import React from 'react';

const MyTable = () => {
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">Invoices</h2>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 ">
          <div
            className="inline-block min-w-full shadow-md rounded-lg "
          >
            <table className="min-w-full leading-normal overflow-x-auto">
              <thead>
                <tr>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Client / Invoice
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Amount
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Issued / Due
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"
                  ></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img
                          className="w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Molly Sanders
                        </p>
                        <p className="text-gray-600 whitespace-no-wrap">000004</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">$20,000</p>
                    <p className="text-gray-600 whitespace-no-wrap">USD</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">Sept 28, 2019</p>
                    <p className="text-gray-600 whitespace-no-wrap">Due in 3 days</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span
                      className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                    >
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Paid</span>
                    </span>
                  </td>
                  <td
                    className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
                  >
                    <button
                      type="button"
                      className="inline-block text-gray-500 hover:text-gray-700"
                    >
                      <svg
                        className="inline-block h-6 w-6 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img
                          className="w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Michael Roberts
                        </p>
                        <p className="text-gray-600 whitespace-no-wrap">000003</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">$214,000</p>
                    <p className="text-gray-600 whitespace-no-wrap">USD</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">Sept 25, 2019</p>
                    <p className="text-gray-600 whitespace-no-wrap">Due in 6 days</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span
                      className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                    >
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Paid</span>
                    </span>
                  </td>
                  <td
                    className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
                  >
                    <button
                      type="button"
                      className="inline-block text-gray-500 hover:text-gray-700"
                    >
                      <svg
                        className="inline-block h-6 w-6 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img
                          className="w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Devin Childs
                        </p>
                        <p className="text-gray-600 whitespace-no-wrap">000002</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">$20,000</p>
                    <p className="text-gray-600 whitespace-no-wrap">USD</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">Sept 14, 2019</p>
                    <p className="text-gray-600 whitespace-no-wrap">Due in 2 weeks</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span
                      className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight"
                    >
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Pending</span>
                    </span>
                  </td>
                  <td
                    className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
                  >
                    <button
                      type="button"
                      className="inline-block text-gray-500 hover:text-gray-700"
                    >
                      <svg
                        className="inline-block h-6 w-6 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-5 bg-white text-sm">
                    <div className="flex">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img
                          className="w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Frederick Nicholas
                        </p>
                        <p className="text-gray-600 whitespace-no-wrap">000001</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">$12,000</p>
                    <p className="text-gray-600 whitespace-no-wrap">USD</p>
                  </td>
                  <td className="px-5 py-5 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">Sept 6, 2019</p>
                    <p className="text-gray-600 whitespace-no-wrap">
                      Due 3 weeks ago
                    </p>
                  </td>
                  <td className="px-5 py-5 bg-white text-sm">
                    <span
                      className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight"
                    >
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Overdue</span>
                    </span>
                  </td>
                  <td className="px-5 py-5 bg-white text-sm text-right">
                    <button
                      type="button"
                      className="inline-block text-gray-500 hover:text-gray-700"
                    >
                      <svg
                        className="inline-block h-6 w-6 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    // <>
    //   <div className="w-full shadow bg-white rounded">
    //   <h1> hello</h1>
    //   <div className="border-gray-200 w-[400px] mx-auto md:w-full rounded bg-white overflow-x-auto">
    //     <table className="w-full leading-normal ">
    //       <thead
    //         className="text-gray-600 text-xs font-semibold border-gray tracking-wider text-left px-5 py-3 bg-gray-100 hover:cursor-pointer uppercase border-b-2 border-gray-200">
    //         <tr className="border-b border-gray">
    //           <th scope="col"
    //             className="text-gray-dark border-gray border-b-2 border-t-2 border-gray-200 py-3 px-3 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                
    //             Usuario
    //           </th>
    //           <th scope="col"
    //             className="text-gray-dark border-gray border-b-2 border-t-2 border-gray-200 py-3 px-3 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
    //             <div className="inline-block">
                 
                 
    //             </div>
    //             Email
    //           </th>
    //           <th scope="col"
    //             className="text-gray-dark border-gray border-b-2 border-t-2 border-gray-200 py-3 px-3 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                
    //             Rol
    //           </th>
    //           <th scope="col"
    //             className="text-gray-dark border-gray border-b-2 border-t-2 border-gray-200 py-3 px-3 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
    //             <div className="inline-block">
    //               {/* <div className="filter-asc"
    //                 style="width: 0px; height: 0px; border-left: 5px solid transparent; border-right: 5px solid transparent; margin-bottom: 1px; border-bottom: 5px solid rgb(204, 204, 204);">
    //               </div>
    //               <div className="filter-desc"
    //                 style="width: 0px; height: 0px; border-left: 5px solid transparent; border-right: 5px solid transparent; border-top: 5px solid rgb(204, 204, 204); margin-top: 1px;">
    //               </div> */}
    //             </div>
    //             Status
    //           </th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         <tr className="hover:bg-gray-100 hover:cursor-pointer">
    //           <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
    //             <div className="flex items-center" classes="[object Object]">
    //               <div className="flex-shrink-0 h-10 w-10">
    //                 <img src="https://faces.design/faces/m/m11.png" alt="" className="w-full h-full rounded-full" />
    //               </div>
    //               <div className="ml-3">
    //                 <p className="text-gray-900 whitespace-no-wrap">Héctor Avila</p>
    //               </div>
    //             </div>
    //           </td>
    //           <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
    //             <span>hector@kbis.com.mx</span>
    //           </td>
    //           <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
    //             <ul classes="[object Object]">
    //               <li><a href="#">Administrador</a></li>
    //             </ul>
    //           </td>
    //           <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
    //             <span
    //               className="relative inline-block px-3 py-1 font-semibold leading-tight rounded-full bg-red-200 text-red-900"
    //               classes="[object Object]">
    //               Inactivo
    //             </span>
    //           </td>
    //         </tr>
    //         <tr className="hover:bg-gray-100 hover:cursor-pointer">
    //           <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
    //             <div className="flex items-center" classes="[object Object]">
    //               <div className="flex-shrink-0 h-10 w-10">
    //                 <img src="https://faces.design/faces/m/m1.png" alt="" className="w-full h-full rounded-full" />
    //               </div>
    //               <div className="ml-3">
    //                 <p className="text-gray-900 whitespace-no-wrap">
    //                   Isidro Martínez
    //                 </p>
    //               </div>
    //             </div>
    //           </td>
    //           <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
    //             <span>isidro.ram.mar@gmail.com</span>
    //           </td>
    //           <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
    //             <ul classes="[object Object]">
    //               <li><a href="#">Administrador</a></li>
    //             </ul>
    //           </td>
    //           <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
    //             <span
    //               className="relative inline-block px-3 py-1 font-semibold leading-tight rounded-full bg-green-200 text-green-900"
    //               classes="[object Object]">
    //               Activo
    //             </span>
    //           </td>
    //         </tr>
    //         <tr className="hover:bg-gray-100 hover:cursor-pointer">
    //           <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
    //             <div className="flex items-center" classes="[object Object]">
    //               <div className="flex-shrink-0 h-10 w-10">
    //                 <img src="https://faces.design/faces/m/m22.png" alt="" className="w-full h-full rounded-full" />
    //               </div>
    //               <div className="ml-3">
    //                 <p className="text-gray-900 whitespace-no-wrap">Esteban</p>
    //               </div>
    //             </div>
    //           </td>
    //           <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
    //             <span>esteban@kbis.com.mx</span>
    //           </td>
    //           <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
    //             <ul classes="[object Object]">
    //               <li><a href="#">Auxiliar</a></li>
    //             </ul>
    //           </td>
    //           <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
    //             <span
    //               className="relative inline-block px-3 py-1 font-semibold leading-tight rounded-full bg-green-200 text-green-900"
    //               classes="[object Object]">
    //               Activo
    //             </span>
    //           </td>
    //         </tr>
    //         <tr className="hover:bg-gray-100 hover:cursor-pointer">
    //           <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
    //             <div className="flex items-center" classes="[object Object]">
    //               <div className="flex-shrink-0 h-10 w-10">
    //                 <img src="https://faces.design/faces/w/w12.png" alt="" className="w-full h-full rounded-full" />
    //               </div>
    //               <div className="ml-3">
    //                 <p className="text-gray-900 whitespace-no-wrap">Sara</p>
    //               </div>
    //             </div>
    //           </td>
    //           <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
    //             <span>sara@kbis.com.mx</span>
    //           </td>
    //           <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
    //             <ul classes="[object Object]">
    //               <li><a href="#">Administrador</a></li>
    //             </ul>
    //           </td>
    //           <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
    //             <span
    //               className="relative inline-block px-3 py-1 font-semibold leading-tight rounded-full bg-red-200 text-red-900"
    //               classes="[object Object]">
    //               Inactivo
    //             </span>
    //           </td>
    //         </tr>
    //         <tr className="hover:bg-gray-100 hover:cursor-pointer">
    //           <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
    //             <div className="flex items-center" classes="[object Object]">
    //               <div className="flex-shrink-0 h-10 w-10">
    //                 <img src="https://faces.design/faces/m/m21.png" alt="" className="w-full h-full rounded-full" />
    //               </div>
    //               <div className="ml-3">
    //                 <p className="text-gray-900 whitespace-no-wrap">Juan</p>
    //               </div>
    //             </div>
    //           </td>
    //           <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
    //             <span>juan@kbis.com.mx</span>
    //           </td>
    //           <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
    //             <ul classes="[object Object]">
    //               <li><a href="#">Auxiliar</a></li>
    //             </ul>
    //           </td>
    //           <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
    //             <span
    //               className="relative inline-block px-3 py-1 font-semibold leading-tight rounded-full bg-green-200 text-green-900"
    //               classes="[object Object]">
    //               Activo
    //             </span>
    //           </td>
    //         </tr>
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
    // </>
    
  );
};

export default MyTable;
