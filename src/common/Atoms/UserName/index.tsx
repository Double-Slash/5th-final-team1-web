import React, { useMemo } from "react";
import sliceUserName from "@utils/modules/sliceUserName";

export interface UsernameProps {
  className?: string;
  username: string;
}

const Username = ({ className, username }: UsernameProps) => {
  const sliced = useMemo(() => sliceUserName(username), [username]);

  return (
    <>
      <span className={className}>{sliced}님</span>
    </>
  );
};

export default Username;
