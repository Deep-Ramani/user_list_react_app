import React from "react";
import { useSelector } from "react-redux";
import { User } from "../User/User";
import './UserTable.css'

const UserTable = () => {
  const users = useSelector((state) => state);
  return (
    <>
    <div className="col-12">  
      <div className="col-8">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Status</th>
              <th scope="col">Access</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User user={user} />
            ))}
          </tbody>
        </table>
      </div>

    <div className="col-4">
              {/* 546465 */}
    </div>
      </div>
    </>
  );
};

export default UserTable;
