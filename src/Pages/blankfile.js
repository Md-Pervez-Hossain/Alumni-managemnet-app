// let content;

// if (isLoading && !isError) {
//   content = <Loading />;
// }
// if (!isLoading && isError) {
//   content = <ErrorAlert text={error} />;
// }
// if (!isLoading && !isError && data?.length === 0) {
//   content = <ErrorAlert text="No Category Find" />;
// }
// if (!isLoading && !isError && data?.length > 0) {
// }

// const {
//   data: eventsContentData,
//   isLoading: isEventsLoading,
//   isError: isEventsError,
//   error: eventsError,
// } = useGetEventsCategoriesQuery();

// let eventsContent;

// if (isEventsLoading && !isEventsError) {
//   eventsContent = <Loading />;
// }
// if (!isEventsLoading && isEventsError) {
//   eventsContent = <ErrorAlert text={eventsError} />;
// }
// if (!isEventsLoading && !isEventsError && eventsContentData?.length === 0) {
//   eventsContent = <ErrorAlert text="No Category Find" />;
// }
// if (!isEventsLoading && !isEventsError && eventsContentData?.length > 0) {
//   eventsContent = <></>;
// }
