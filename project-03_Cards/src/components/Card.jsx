const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <div className="logo"></div>
        <button className="save-btn">Save</button>
      </div>

      <div className="center">
        <h3>{props.name} <span>{props.datePosted}</span>
        </h3>
        <h2>{props.post}</h2>
        <div className="h4s">
          <h4>{props.tag1}</h4>
          <h4>{props.tag2}</h4>
        </div>
      </div>

      <div className="border"></div>
      <div className="bottom">
        <div>
          <h3>{props.pay}</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
