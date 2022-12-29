import React from "react";
import { AiFillDelete,AiOutlinePlus } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import EnterUser from "../EnterUser/EnterUser";

const users = [
  { id: 1, name: "md mishrat", email: "mdmishrat13@gmail.com" },
  { id: 2, name: "md roky", email: "roky13@gmail.com" },
  { id: 3, name: "md shakil", email: "shakil13@gmail.com" },
  { id: 4, name: "md monir", email: "monir13@gmail.com" },
];

const Home = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <h1 className="text-center text-2xl p-4 font-semibold">
              Here is all employees details
            </h1>
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                      Edit
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {user.id}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {user.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <Link
                          to="/"
                          className="text-green-500 inline-block hover:text-green-700"
                          href="#"
                        >
                          <FaEdit className="text-2xl" />
                        </Link>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <button
                          className="text-red-500 p-0 m-0 hover:text-red-700"
                        >
                          <AiFillDelete className="text-2xl" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="text-right">
      <Link to='enter-user' className="inline-block m-4 border bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-bold text-right py-2 px-4 rounded">
       <AiOutlinePlus className="text-lg inline-block"/> Add
      </Link>
      </div>
    </>
  );
};

export default Home;
