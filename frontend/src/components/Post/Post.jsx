import "./style.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummydata";
import { useState } from "react";

const Post = ({Post}) => {
  const [like,setLike] = useState(Post.like)
  const [isLiked,setIsLiked] = useState(false)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  const likeHandler = ()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={PF+Users.filter(u=> u.id === Post.userId)[0].profilePicture}
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">{Users.filter(u=> u.id === Post.userId)[0].username}</span>
            <span className="postDate">{Post.data}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
            <span className="postText">{Post?.desc}</span>
            <img src={PF+Post.photo} alt="" className="postImg"/>
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img src={`${PF}heart.png`} alt="" className="likeIcon" onClick={likeHandler}/>
                <img src={`${PF}like.png`} alt="" className="likeIcon" onClick={likeHandler}/>
                <span className="postLikeCounter">{like} people like it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{Post.comment} comments</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
