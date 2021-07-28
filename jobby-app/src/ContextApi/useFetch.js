import { useEffect } from "react";

export const useFetch = (setData, titleQuery, setdataReceived) => {
   const host = "data.usajobs.gov";
   const userAgent = "sleektrends7@gmail.com";
   const authKey = "R6Cj72x5jw/Fd0bHAbnzzCrvOg+Czbmk6bdHczUDsWY=";

   const postData = async (url = "", setData, isDataReceived) => {
      const response = await fetch(url, {
         method: "GET",
         headers: {
            Host: host,
            "User-Agent": userAgent,
            "Authorization-Key": authKey,
         },
      });
      const parsedResponse = await response.json();
      setData(parsedResponse.SearchResult.SearchResultItems);
      isDataReceived(true);
   };

   useEffect(() => {
      postData(
         `https://data.usajobs.gov/api/Search?PositionTitle=${titleQuery}`,
         setData,
         setdataReceived
      );
      return () => {
         setData([]);
      };
   }, [titleQuery, setData]);
   return {};
};
