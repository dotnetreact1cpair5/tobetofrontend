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
  course: Course | null;
};
const CourseDetailsCard = ({ course }: CourseDetailProps) => {
  const text = `${course?.contentName}`;
  const items: CollapseProps["items"] = [
    {
      key: 1,
      label: course?.contentName,
      children: <p>{course?.lessonName}</p>,
    },
    {
      key: 2,
      label: course?.contentName,
      children: <p>{course?.lessonName}</p>,
    },
    {
      key: 3,
      label: course?.contentName,
      children: <p>{course?.lessonName}</p>,
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
              <h2 className="text-xl font-semibold">{course?.courseName}</h2>
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
              accordion
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
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="description flex items-center justify-around">
            <div className="left flex flex-col space-y-2">
              <h2 className="text-lg font-semibold">{course?.contentName}</h2>
              <div className="flex items-center space-x-4">
                <span>{course?.contentTypeLesson}</span>
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
      <DetailDrawer isOpen={isOpen} setOpen={setOpen} course={course} />
    </div>
  );
};
export default CourseDetailsCard;
