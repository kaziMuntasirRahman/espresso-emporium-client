import { useContext, useState } from 'react';
import { MdDelete, MdUpdate } from 'react-icons/md';
import { useLoaderData } from 'react-router-dom';
import BackToHome from '../component/BackToHome';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';

const UserList = () => {
  const loadedData = useLoaderData();
  const [users, setUsers] = useState(loadedData);
  const { serverURL } = useContext(AuthContext);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        //password confirmation
        const { value: password } = await Swal.fire({
          title: "Enter your password to confirm delete",
          input: "password",
          inputLabel: "Password",
          inputPlaceholder: "password",
          inputAttributes: {
            maxlength: "10",
            autocapitalize: "off",
            autocorrect: "off"
          }
        });
        if (password !== "espresso #") {
          Swal.fire("Wrong Password.");
          return;
        }

        fetch(`${serverURL}/${id}`, { method: 'delete' })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "User has been deleted!",
                showConfirmButton: false,
                timer: 1500
              });
              const remaining = users.filter(user => user._id !== id)
              setUsers(remaining);
            }
          })
      }
    });
  }

  return (
    <div className="flex flex-col items-center px-[300px] mt-[20px] gap-6">
      <BackToHome />
      <h1 className="text-2xl font-bold mb-4">User List</h1>

      <div className="w-full">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-900 text-white">
              <th className="border border-gray-300 p-2 min-w-8">sl</th>
              <th className="border border-gray-300 p-2 min-w-[180px]">Name</th>
              <th className="border border-gray-300 p-2 min-w-[200px]">Email</th>
              <th className="border border-gray-300 p-2">Email Verified</th>
              <th className="border border-gray-300 p-2" colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className={`${index % 2 == 0 ? "bg-white" : "bg-slate-200"}`} >
                <td className="border border-gray-300 p-2">{index + 1}</td>
                <td className="border border-gray-300 p-2">{user.displayName}</td>
                <td className="border border-gray-300 p-2">{user.email}</td>
                <td className="border border-gray-300 p-2">{user.emailVerified ? "Yes" : "No"}</td>
                <td className="border border-gray-300">
                  <MdUpdate
                    className='text-green-600 text-2xl cursor-pointer mx-auto' />
                </td>
                <td className="border border-gray-300">
                  <MdDelete
                    onClick={() => handleDelete(user._id)}
                    className='text-red-500 text-2xl cursor-pointer mx-auto' />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div >
  );
};

export default UserList;
