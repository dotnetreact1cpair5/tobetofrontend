import { Accordion } from "flowbite-react";
import { Button, Collapse, Drawer, Progress } from "antd";
import LikeButton from "../helpers/LikeButton";
import FavButton from "../helpers/FavButton";
import type { CollapseProps } from "antd";
import StyledButton from "../helpers/StyledButton";
import { useState } from "react";
import DetailDrawer from "../helpers/DetailDrawer";
import { Course } from "../../slices/coursesSlice";

type CourseDetailProps = {
  course: Course[] | null;
};
const CourseDetailsCard = ({ course }: CourseDetailProps) => {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "This is panel header 1",
      children: <p>{text}</p>,
    },
    {
      key: "2",
      label: "This is panel header 2",
      children: <p>{text}</p>,
    },
    {
      key: "4",
      label: "This is panel header 3",
      children: <p>{text}</p>,
    },
    {
      key: "5",
      label: "This is panel header 3",
      children: <p>{text}</p>,
    },
    {
      key: "6",
      label: "This is panel header 3",
      children: <p>{text}</p>,
    },
    {
      key: "7",
      label: "This is panel header 3",
      children: <p>{text}</p>,
    },
    {
      key: "8",
      label: "This is panel header 3",
      children: <p>{text}</p>,
    },
    {
      key: "9",
      label: "This is panel header 3",
      children: <p>{text}</p>,
    },
    {
      key: "10",
      label: "This is panel header 3",
      children: <p>{text}</p>,
    },
    {
      key: "11",
      label: "This is panel header 3",
      children: <p>{text}</p>,
    },
  ];
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="container mx-auto rounded-2xl p-4 shadow-2xl">
      <div className="flex items-center space-x-4">
        <div className="left">
          <img
            src="/public/assets/programming.jpg"
            className="h-20 w-20 rounded-lg"
          />
        </div>
        <div className="wrapper flex w-full flex-col space-y-8">
          <div className="flex items-center justify-between">
            <div className="center flex space-x-4">
              <h2 className="text-xl font-semibold">
                {/* {course?.map((c) => c.name)} */} hihaho
              </h2>
            </div>
            <div className="right flex items-center justify-between space-x-4">
              <span className="text-large rounded-lg bg-[#549be6] px-2 py-3 font-semibold text-white">
                96 PUAN
              </span>
              <span className="flex items-center space-x-2">
                <LikeButton />
                <span>12</span>
              </span>
              <span>
                <FavButton />
              </span>
            </div>
          </div>
          <div className="progressbar">
            <Progress
              percent={72}
              status="active"
              strokeColor={{
                "0%": "rgb(45, 223, 255)",
                "100%": "#b7df2d",
              }}
            />
          </div>
        </div>
      </div>
      <div className="content-wrapper grid grid-cols-12 p-8">
        <div className="col-span-5">
          <div className="scroll-wrapper max-h-[600px] overflow-y-auto">
            <Collapse
              defaultActiveKey={["1"]}
              ghost
              items={items}
              className="font-body text-lg font-semibold"
            />
          </div>
        </div>
        <div className="col-span-7 space-y-10 place-self-center">
          <div className="video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/cm9hJrYPiUA?si=wfLpsGHYxxJurM4R"
              title="video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="description flex items-center justify-around">
            <div className="left flex flex-col space-y-2">
              <h2 className="text-lg font-semibold">Course Name</h2>
              <div className="flex items-center space-x-4">
                <span>Video - 4 dk</span>
                <span>74.4 Puan</span>
                <span>Devam Ediyor</span>
              </div>
            </div>

            <StyledButton
              onClick={() => {
                setOpen(!isOpen);
              }}
            >
              DETAY
            </StyledButton>
          </div>
        </div>
      </div>
      <DetailDrawer isOpen={isOpen} setOpen={setOpen} c={2} />
    </div>
  );
};
export default CourseDetailsCard;
