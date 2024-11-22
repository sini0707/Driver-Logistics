import React from 'react'


const pagination = ({orders}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 2; // Number of rows to display per page

    // Calculate total pages
  const totalPages = Math.ceil(orders.length / rowsPerPage);

  // Slice orders for the current page
  const currentOrders = orders.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Handle page navigation
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">No</th>
            <th scope="col" className="px-6 py-3">Invoice No</th>
            <th scope="col" className="px-6 py-3">Load Type</th>
            <th scope="col" className="px-6 py-3">Actual Weight</th>
            <th scope="col" className="px-6 py-3">Volumetric (cm)</th>
            <th scope="col" className="px-6 py-3">Product Category</th>
            <th scope="col" className="px-6 py-3">HAZMAT Class</th>
            <th scope="col" className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map((order, index) => (
            <tr
              key={index}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <td className="px-6 py-4">{index + 1 + (currentPage - 1) * rowsPerPage}</td>
              <td className="px-6 py-4">{order.invoiceNumber}</td>
              <td className="px-6 py-4">{order.loadType}</td>
              <td className="px-6 py-4">{order.actualWeight}</td>
              <td className="px-6 py-4">
                {`${order.volumetric.length} x ${order.volumetric.width} x ${order.volumetric.height}`}
              </td>
              <td className="px-6 py-4">{order.productCategory}</td>
              <td className="px-6 py-4">{order.HAZMATclass}</td>
              <td className="px-6 py-4">
                <button className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="bg-gray-300 text-gray-700 px-3 py-1 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="bg-gray-300 text-gray-700 px-3 py-1 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
    </div>
  )
}

export default pagination
