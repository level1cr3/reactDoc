const InsideErrorBoundry = () => {
  throw Error("Inside Error Boundry threw error");
  return <div>Inside Error Boundry</div>;
};

export default InsideErrorBoundry;
