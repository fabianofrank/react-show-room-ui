import React from 'react';
import propTypes from 'prop-types';
import { request } from '../redux/users/api';

const ReservationCard = ({
  id,
  date,
  city,
  user,
  car,
  brand,
}) => {
  async function deleteReservation(user, id) {
    await request.delete(`http://localhost:3000/api/v1/users/${user}/reservations/${id}`).then((res) => {
      console.log(res);
      const card = document.getElementById(id);
      card.remove();
    });
  }
  ReservationCard.propTypes = {
    id: propTypes.number.isRequired,
    date: propTypes.string.isRequired,
    city: propTypes.string.isRequired,
    car: propTypes.string.isRequired,
    brand: propTypes.string.isRequired,
    user: propTypes.string.isRequired,
  };

  return (
    <div id={id} className="flex flex-col md:flex-row items-center p-8 m-4 max-w-xl min-w-max bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <h2 className="font-bold text-l mb-2 text-gray-700">
        {user}
        &apos;s reservantion:
      </h2>
      <div className=" p-4 flex-1 w-64">
        <table className="flex flex-col text-sm text-gray-500 dark:text-gray-400 m-4">
          <thead className=" flex flex-col items-center text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th className="py-4 px-3">Brand</th>
              <th className="py-4 px-3">Model</th>
            </tr>
          </thead>
          <tbody>
            <tr className="flex items-center">
              <td className="py-4 px-3 font-medium min-w-max text-gray-900 dark:text-white">{brand}</td>
              <td className=" py-4 px-3 min-w-max font-medium text-gray-900 dark:text-white">{car}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-center flex-1">
        <div className="flex flex-col items-center justify-center">
          <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-l font-semibold text-gray-500 mr-2 mb-2">
            {city}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-l font-semibold text-gray-500 mr-2 mb-2">
            {date}
          </span>
        </div>
        <button
          onClick={() => deleteReservation(user, id)}
          className="m-4 bg-gradient-to-r from-purple-500 to-purple-800 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full"
          type="submit"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ReservationCard;
