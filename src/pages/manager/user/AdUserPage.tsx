import React from "react";
import { useQuery } from "react-query";
import { Outlet } from "react-router-dom";
import { getUsers } from "../../../services/auth";
import { IUser } from "../../../common/types";
import Button from "../../../components/ui/Button";

const AdUserPage = () => {
  const { data: users } = useQuery({
    queryKey: ["USER_KEY"],
    queryFn: () => getUsers("/users"),
  });
  return (
    <div className="bg-white">
      <h1 className="text-center text-5xl font-bold text-blue-700 mb-4 shadow-sm">
        Users Management
      </h1>
      <div className="">
        <Outlet />
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                #
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users?.map((user: IUser, index: string) => (
              <tr key={user.id} className="odd:bg-white even:bg-slate-100">
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user?.username}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user?.status}</td>
                <td>
                  <Button name="See" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdUserPage;
