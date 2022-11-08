const element = (
  // Write your code here.
  <div className="background-style">
    <h1 className="heading">Congratulations!</h1>
    <div className="card-style">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="img1"
      />
      <h1 className="name">Kiran V</h1>
      <p className="institute">
        Vishnu Institute of Computer Education and Technology, Bheemavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="img2"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
