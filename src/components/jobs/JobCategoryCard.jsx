import React from "react";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import { Link } from "react-router-dom";

const JobCategoryCard = ({ category, icon, name, jobs }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

 
  return (
    <>
      <div
        onClick={open}
        className="h-72 bg-primary-web rounded-2xl shadow border-4  border-primary-web/40 text-white flex-col justify-center items-center gap-10 inline-flex cursor-pointer hover:scale-110 hover:bg-primary-web hover:text-primary-yellow transition-all ease-in-out duration-1000 group"
      >
        <div className="w-10 h-10 justify-center items-center inline-flex text-2xl">
          {icon}
        </div>
        <div className="text-2xl font-bold">{name}</div>
        <div className="px-3 py-2 bg-white group-hover:bg-white rounded-lg flex-col justify-start items-start gap-2.5 flex transition-all duration-300 ease-in-out">
          <div className="text-primary-purple text-base font-normal">
            {jobs} jobs
          </div>
        </div>
      </div>

      <Modal
  opened={opened}
  onClose={close}
  title={`${category.name} Opportunities`}
  styles={{
    modal: {
      border: "4px solid #00A859", // Apply the border directly to the modal box
      borderRadius: "16px", // Optional: You can also add rounded corners
    },
    title: {
      fontSize: "2rem",
      color: "#6B3E9C", // Custom title color
      fontWeight: "bold",
    },
  }}
  size={isMobile ? "100%" : "70%"}
  centered
>
  <div className="p-10  rounded-xl">
    <ul className="space-y-4">
      {category.list?.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-3 border-b pb-3 last:border-b-0 font-semibold text-lg"
        >
          <span className="text-primary-purple text-lg">•</span>
          <span className="text-lg text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  </div>
</Modal>

    </>
  );
};

export default JobCategoryCard;
