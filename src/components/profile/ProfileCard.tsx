import React, { ReactNode } from "react";
import { Card } from "flowbite-react";

interface ProfileCardProps {
  title?: string;
  children?: ReactNode;
  isShareImgVisible?: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  title,
  children,
  isShareImgVisible = true,
}) => {
  return (
    <Card className="col-span-2 row-span-2">
      <div className="section-title-container">
        <p className="section-title">
          {title}
          {isShareImgVisible && (
            <img src="/assets/eye.svg" alt="share" className="ali" />
          )}
        </p>
        <hr className="section-divider" />
      </div>
      <div>{children}</div>
    </Card>
  );
};

export default ProfileCard;
