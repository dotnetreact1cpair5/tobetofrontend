import GenericButton from "./GenericButton";
import SlimCard from "./SlimCard";

// type ListProps = {
//   assessments: [];
// };

const AssessmentList = ({ assessments, toggleModal }: any) => {
  console.log(assessments);
  return (
    <div className="flex flex-col items-center justify-center space-y-5 p-4 text-white">
      {assessments.map((assessment: any) => {
        return (
          <SlimCard toggleModal={toggleModal}>{assessment.username}</SlimCard>
        );
      })}
    </div>
  );
};
export default AssessmentList;
