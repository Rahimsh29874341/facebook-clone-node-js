import "./style.css";
import { PermMedia , Label , Room , EmojiEmotions} from "@material-ui/icons";

const Shared = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/person/1.jpeg" alt="" className="shareProfieImg" />
          <input
            type="text"
            className="shareInput"
            placeholder="what's in you mind Safak?"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia className="shareIcon" style={{color:'tomato'}} />
              <span className="shareOptionText">Photo or video</span>
            </div>
            <div className="shareOption">
              <Label className="shareIcon" style={{color:'blue'}}/>
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room className="shareIcon" style={{color:'green'}}/>
              <span className="shareOptionText">Locations</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions className="shareIcon" style={{color:'goldenrod'}}/>
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Shared;
