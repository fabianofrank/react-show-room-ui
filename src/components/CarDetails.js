import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TbSteeringWheel } from 'react-icons/tb';

const CarDetails = () => {
  const carDetails = useSelector((state) => state.car_details);
  const carDetailsLocal = localStorage.getItem('carDetails');
  const carDetailsParsed = JSON.parse(carDetailsLocal);

  if (carDetails.length > 0) {
    return (
      <div className="reservation-list text-gray-700">
        <div className="flex flex-col items-center p-8 m-4 max-w-3xl min-w-max bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center md:flex md:flex-row md:items-start">
            <div className="">
              <h1 className="text-3xl font-bold">
                {carDetailsParsed.brand}
                {' '}
                {carDetailsParsed.model}
              </h1>
              <img className="max-w-md" src={carDetailsParsed.image} alt={carDetailsParsed.model} />
              <Link className="link-to-cars py-3" to="/cars">
                DISCOVER MORE MODELS
              </Link>
            </div>
            <div>
              <table className="flex flex-col pt-2 border-none items-center table-auto text-xl m-2 pl-4">
                <tbody className="border-none text-right">
                  <tr>
                    <th className="p-2">Finance fee</th>
                    <td>
                      $
                      {carDetailsParsed.finance_fee}
                    </td>
                  </tr>
                  <tr>
                    <th className="p-2">Option to purchase fee</th>
                    <td>
                      $
                      {carDetailsParsed.purchase_fee}
                    </td>
                  </tr>
                  <tr>
                    <th className="p-2">Total ammount payable</th>
                    <td>
                      $
                      {carDetailsParsed.tap}
                    </td>
                  </tr>
                  <tr>
                    <th className="p-2">Duration</th>
                    <td className="text-left">
                      {carDetailsParsed.duration}
                      h
                    </td>
                  </tr>
                </tbody>
                <div className="flex flex-col items-center">
                  <th className="p-2">5.9% APR Representative</th>

                  <Link className="flex items-center link-to-reserve" to="/testdrive">
                    <button
                      type="submit"
                      className="flex items-center config-button text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 font-bold p-4 m-3 rounded-full"
                    >
                      BOOK A TEST-DRIVE
                      <TbSteeringWheel size={35} />
                    </button>
                  </Link>
                </div>
              </table>
            </div>
          </div>
        </div>
      </div>

    );
  }
  return (
    <div className="reservation-list text-gray-700">
      <div className="flex flex-col items-center p-8 m-4 max-w-3xl min-w-max bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center md:flex md:flex-row md:items-start">
          <div className="">
            <h1 className="text-3xl font-bold">
              {carDetailsParsed.brand}
              {' '}
              {carDetailsParsed.model}
            </h1>
            <img className="max-w-md" src={carDetailsParsed.image} alt={carDetailsParsed.model} />
            <Link className="link-to-cars py-3" to="/cars">
              DISCOVER MORE MODELS
            </Link>
          </div>
          <div>
            <table className="flex flex-col pt-2 border-none items-center table-auto text-xl m-2 pl-4">
              <tbody className="border-none text-right">
                <tr>
                  <th className="p-2">Finance fee</th>
                  <td>
                    $
                    {carDetailsParsed.finance_fee}
                  </td>
                </tr>
                <tr>
                  <th className="p-2">Option to purchase fee</th>
                  <td>
                    $
                    {carDetailsParsed.purchase_fee}
                  </td>
                </tr>
                <tr>
                  <th className="p-2">Total ammount payable</th>
                  <td>
                    $
                    {carDetailsParsed.tap}
                  </td>
                </tr>
                <tr>
                  <th className="p-2">Duration</th>
                  <td className="text-left">
                    {carDetailsParsed.duration}
                    h
                  </td>
                </tr>
              </tbody>
              <div className="flex flex-col items-center">
                <th className="p-2">5.9% APR Representative</th>

                <Link className="flex items-center link-to-reserve" to="/testdrive">
                  <button
                    type="submit"
                    className="flex items-center config-button text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 font-bold p-4 m-3 rounded-full"
                  >
                    BOOK A TEST-DRIVE
                    <TbSteeringWheel size={35} />
                  </button>
                </Link>
              </div>
            </table>
          </div>
        </div>
      </div>
    </div>

  );
};

export default CarDetails;
