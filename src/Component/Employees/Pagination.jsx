const Pagination = () => {
  return (
    <div>
      <div className="flex  space-x-1  my-4 sm:ml-5 mx-1">
        <button
          title="previous"
          type="button"
          className="inline-flex items-center justify-center  w-6 h-6 sm:w-8 px-1 sm:h-8 py-0 border rounded-md shadow-md border-primary text-primary bg-white"
        >
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button className="inline-flex items-center justify-center w-6 h-6 sm:w-8 px-2 sm:h-8 py-0 border rounded-md shadow-md btn-primary">
          2
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center w-6 h-6 sm:w-8 px-1 sm:h-8 py-0 border rounded-md shadow-md border-primary text-primary bg-white"
        >
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
        <select className="inline-flex items-center justify-center  w-14 h-6 sm:w-20 sm:h-8 py-0 px-2 border rounded-md shadow-md border-primary text-primary bg-white">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option selected value="50">
            50
          </option>
        </select>
      </div>
    </div>
  );
};
export default Pagination;
