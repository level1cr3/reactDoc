const OutSideErrorBoundry = () => {
  throw Error("outside Error Boundry threw error");
  return <div>Out Side Error Boundry</div>;
};

export default OutSideErrorBoundry;
