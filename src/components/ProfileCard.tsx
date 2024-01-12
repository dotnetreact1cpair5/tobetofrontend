// ProfileCard.tsx

import React, { ReactNode } from 'react';
import { Card } from 'flowbite-react';

interface ProfileCardProps {
  title?: string;
  children?: ReactNode;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ title, children }) => {
  return (
    <Card className="max-w-sm my-4">
      <div>
        <p className="section-title">{title}</p>
        <hr className="section-divider" />
      </div>
      <div>{children}</div>
    </Card>
  );
};

export default ProfileCard;
