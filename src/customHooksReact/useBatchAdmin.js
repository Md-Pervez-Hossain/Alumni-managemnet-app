import { useEffect, useState } from "react";
import { useGetIsBatchAdminQuery } from "../features/Api/apiSlice";

const useBatchAdmin = (email) => {
  const { data, isLoading, isError } = useGetIsBatchAdminQuery();
  const [isBatchAdmin, setBatchAdmin] = useState(false);
  const [isBatchAdminLoading, setBatchAdminLoading] = useState(true);

  useEffect(() => {
    if (email) {
      console.log(data);

      if (!isLoading && !isError) {
        setBatchAdmin(data.isAdmin);
        setBatchAdminLoading(false);
      }
    }
  }, [data, email, isError, isLoading]);

  return [isBatchAdmin, isBatchAdminLoading];
};

export default useBatchAdmin;
