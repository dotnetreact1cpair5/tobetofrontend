// import React, { ReactNode } from 'react';
// import { Card } from 'flowbite-react';

// interface ProfileCardProps {
//   title?: string;
//   children?: ReactNode;
//   isShareImgVisible?: boolean;
// }

// const ProfileCard: React.FC<ProfileCardProps> = ({ title, children, isShareImgVisible = true }) => {
//   return (
//     <Card className="row-span-2 col-span-2 p-4 shadow-lg rounded-lg bg-white">
//       <div className="section-title-container flex items-center justify-between">
//         <p className="section-title text-lg font-semibold">{title}</p>
//         {isShareImgVisible && (
//           <img
//             src="/public/eye.svg"
//             alt="share"
//             className="ali w-6 h-6"
//           />
//         )}
//       </div>
//       <hr className="section-divider my-4 border-t border-gray-300" />
//       <div>{children}</div>
//     </Card>
//   );
// };

// export default ProfileCard;
