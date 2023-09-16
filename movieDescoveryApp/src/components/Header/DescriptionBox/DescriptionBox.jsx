import "./DescriptionBox.css";
import IMBDLogo from "./assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png"
import TomatoLogo from './assets/Rotten Tomatoes.png'
import PlayIcon from './assets/Play.png'

function DescriptionBox() {
  return (
    <div className="DescriptionBox">
      <div className="text_div">
        <p>John Wick 3 : Parabellum</p>
      </div>
      
      <div className="ratingBox">
        <div className="IMBD_div">
                <img src={IMBDLogo} alt="" srcset="" />
         <span className="IMBD_text">86.0 / 100</span>  
        </div>
      

        <div className="rotten_tomatoes_div">
                <img  src={TomatoLogo} alt="" srcset="" />
        </div>
      </div>

      <div className="jhonWickDescription">
        <p>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
      </div>

      <button className=""><img src={PlayIcon} alt=""/><span>Watch Trailer</span></button>
    </div>
  );
}
export default DescriptionBox;
