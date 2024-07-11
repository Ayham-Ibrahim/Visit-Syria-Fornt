import "./CommentCard.css";
// import { motion } from "framer-motion";
const CommentCard = (Props) => {

  return (
    <div className="comment-card">
      <div className="align-items-center user-comment">
        <div className="comment-image ">
          <img src={Props.img_path} alt="..." />
        </div>
        <div className="user-name">
          <div className="comment-writer-name">{Props.name}</div>
          <div className="date-of-comment">{Props.date}</div>
        </div>
      </div>
      <div className="content-comment-card align-items-center">
        {Props.content}
      </div>
    </div>

  );
};

export default CommentCard;
