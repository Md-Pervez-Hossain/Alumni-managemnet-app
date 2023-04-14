import React from "react";
import BatchwiseStudent from "../BatchwiseStudent/BatchwiseStudent";
import SingleStudent from "../../sharedComponents/SingleStudent/SingleStudent";
import InnerPageHeader from "../../sharedComponents/InnerPageHeader/InnerPageHeader";

const Rakib = () => {
  return (
    <div className="">
      <InnerPageHeader
        title="Batchwise Student        "
        description="learn more"
        img="https://media.licdn.com/dms/image/sync/C4E27AQFiJt2F_Hc5QA/articleshare-shrink_800/0/1680247637145?e=1681675200&v=beta&t=aomaSjgE9BSyz7kSIMQ_KdnKqySw5aH2EuIYUkY8d2Q"
      />

      <BatchwiseStudent></BatchwiseStudent>
      <SingleStudent></SingleStudent>
    </div>
  );
};

export default Rakib;
