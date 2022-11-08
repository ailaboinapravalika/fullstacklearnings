const Box = (props) => {
  //  Write your code here.
  const { children, className } = props;
  return <div className={className}>{children}</div>;
};

const element = (
  //  Write your code here.
  <div className="bg-boxes">
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box children="Small" className="box box-small" />
      <Box children="Medium" className="box box-medium" />
      <Box children="Large" className="box box-large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
