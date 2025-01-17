import React from "react";

function Card(props) {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-auto px-1 py-2">
      <div className="card" {...props} tabIndex="0">
        <a href={props.link}>
          <div className="card-header">
            <div className="row">
              <div className="card-title h5">{props.title}</div>
            </div>
            <div className="row">
              <div className="card-subtitle text-gray">{props.genre}</div>
            </div>
          </div>
          <div className="card-body">
            {props.body}
          </div>
        </a>
        <div className="card-footer">
          <img className="profile-pic" src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/pencil-512.png" alt="User profile pic" />
          <p className="username">Username goes here</p>
        </div>
      </div>
      <div className="progress" style={{ marginTop: "15px" }}>
        <div className="progress-bar" role="progressbar" style={{ width: "20%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">20%</div>
      </div>
    </div>
  );
}

export default Card;
