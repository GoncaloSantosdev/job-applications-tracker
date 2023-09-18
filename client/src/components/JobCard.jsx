import { useState } from "react";
// React Router
import { Form, Link } from "react-router-dom";
// React Icons
import { CiLocationArrow1 } from "react-icons/ci";
import {
  BsCalendarDate,
  BsBriefcase,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

/* eslint-disable react/prop-types */
const JobCard = ({ item }) => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <>
      {/* TOP */}
      <div className="flex items-center justify-between relative">
        <div className="flex items-center">
          <div className="bg-blue-700 px-6 py-4 rounded-md text-white text-2xl">
            {item.company.charAt(0)}
          </div>
          <div className="ml-4">
            <h3 className="">{item.position}</h3>
            <span className="text-sm text-gray-800">{item.company}</span>
          </div>
        </div>
        <div className="cursor-pointer" onClick={handleModal}>
          <BsThreeDotsVertical size={20} />
        </div>
        {modal && (
          <div className="absolute right-0 -bottom-20 bg-[#fefefeff] shadow-lg px-4 py-4 flex flex-col gap-6">
            <Link
              to={`/dashboard/edit-job/${item._id}`}
              className="text-sm flex items-center gap-2"
            >
              <AiOutlineEdit size={18} />
              Edit
            </Link>
            <Form method="post" action={`/dashboard/delete-job/${item._id}`}>
              <button className="text-sm flex items-center gap-1">
                <AiOutlineDelete size={18} />
                Delete
              </button>
            </Form>
          </div>
        )}
      </div>

      <div className="border-[0.5px] my-6" />

      {/* Middle */}
      <div className="grid grid-cols-2 gap-8">
        <div className="flex items-center gap-2 text-sm">
          <CiLocationArrow1 size={20} />
          {item.location}
        </div>
        <div className="flex items-center gap-2 text-sm">
          <BsCalendarDate size={20} />
          {item.createdAt.substring(0, 10)}
        </div>
        <div className="flex items-center gap-2 text-sm capitalize">
          <BsBriefcase size={20} />
          {item.type}
        </div>
        <div
          className={`${
            item.status === "pending"
              ? "bg-yellow-600"
              : item.status === "interview"
              ? "bg-green-600"
              : "bg-red-600"
          } text-sm w-1/2 text-center py-2 rounded text-white capitalize`}
        >
          {item.status}
        </div>
      </div>
    </>
  );
};

export default JobCard;
