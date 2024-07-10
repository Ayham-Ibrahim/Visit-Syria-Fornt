// import React from "react";
import "./test.css";

const Test = () => {
  const comments = [
    { title: "i", text: "kkkkkkkkkkkkk" },
    { title: "is", text: "kkkkkkkakkkkkk" },
    { title: "ia", text: "kkkxkkkkkkkkkk" },
  ];
  return (
    <div className="container mt-5">
      <div className="d-flex flex-row flex-nowrap overflow-auto">
        {comments.map((comment, index) => (
          <div key={index} className="card card-block mx-2 card-custom">
            <div className="card-body">
              <h5 className="card-title">{comment.title}</h5>
              <p className="card-text">{comment.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
