import GenericButton from "../helpers/GenericButton";
import SlimCard from "../AssessmentCard";
import AssessmentCard from "../AssessmentCard";

// type ListProps = {
//   assessments: [];
// };

const AssessmentList = ({ assessments, toggleModal }: any) => {
  console.log(assessments);
  return (
    <div className="flex flex-col items-center justify-center space-y-5 p-4 text-white">
      {assessments.map((assessment: any) => {
        return (
          <AssessmentCard toggleModal={toggleModal} assessment={assessment}>
            {assessment.username}
          </AssessmentCard>
        );
      })}
    </div>
  );
};
export default AssessmentList;
