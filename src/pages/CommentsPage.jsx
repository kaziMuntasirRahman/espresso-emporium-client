import { useLoaderData } from 'react-router-dom';
import BackToHome from '../component/BackToHome';

const CommentsPage = () => {
  const comments = useLoaderData();

  return (
    <div className="flex flex-col items-center px-[300px] mt-[20px] gap-6">
      <BackToHome />
      <h1 className="text-2xl font-bold mb-4">User Comments</h1>

      <div className="w-full">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2 min-w-8">sl</th>
              <th className="border border-gray-300 p-2 min-w-[180px]">Name</th>
              <th className="border border-gray-300 p-2 min-w-[200px]">Email</th>
              <th className="border border-gray-300 p-2">Comment</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comment, index) => (
              <tr key={index} className="bg-white">
                <td className="border border-gray-300 p-2">{index+1}</td>
                <td className="border border-gray-300 p-2">{comment.name}</td>
                <td className="border border-gray-300 p-2">{comment.email}</td>
                <td className="border border-gray-300 p-2">{comment.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommentsPage;
