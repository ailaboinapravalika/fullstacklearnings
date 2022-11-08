const Notification = (props) => {
  //  Write your code here.
  const { message, src, className } = props;
  return (
    <div className={className}>
      <img src={src} className="image" />
      <p>{message}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-notify">
    <h1 className="heading">Notifications</h1>
    <Notification
      message="Information Message"
      src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      className="notify notify-blue"
    />
    <Notification
      message="Success Message"
      src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      className="notify notify-green"
    />
    <Notification
      message="Warning Message"
      src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      className="notify notify-yellow"
    />
    <Notification
      message="Error Message"
      src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      className="notify notify-red"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
