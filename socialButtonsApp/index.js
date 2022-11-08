const Button = (props) => {
  //  Write your code here.
  const { children, className } = props;
  return <button className={className}>{children}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-social-buttons">
    <h1 className="heading">Social Buttons</h1>
    <div className="buttons-container">
      <Button children="Like" className="like-style" />
      <Button children="Comment" className="comment-style" />
      <Button children="Share" className="share-style" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
