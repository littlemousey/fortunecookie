import { useState } from "preact/hooks";
import sound from "../../assets/crumple.mp3";
import fortuneCookieClosedImg from "../../assets/fortune-cookie-closed.png";
import fortuneCookieOpenImg from "../../assets/fortune-cookie-open.png";
import fortuneJson from "../../assets/fortunes.json";
import {
  useFortuneActions,
  useCollectedFortunesCount,
} from "../../stores/fortuneStore";
import "./style.css";

let audio = new Audio(sound);

const getFortune = () => {
  return fortuneJson[Math.floor(Math.random() * fortuneJson.length)];
};

export function Home() {
  const [isCookieOpen, setOpenCookie] = useState(false);
  const [fortune, setFortune] = useState("");
  const { addFortune } = useFortuneActions();
  const collectedCount = useCollectedFortunesCount();

  const fortuneCookieImgUrl = isCookieOpen
    ? fortuneCookieOpenImg
    : fortuneCookieClosedImg;

  const playSound = () => {
    audio.play();
  };

  const handleClick = () => {
    if (isCookieOpen) {
      return;
    }

    playSound();
    setOpenCookie(!isCookieOpen);
    const newFortune = getFortune();
    setFortune(newFortune);
    addFortune(newFortune);
  };

  return (
    <div class="home">
      <div class="collected-count">
        Fortunes collected: {collectedCount ?? 0}
      </div>
      {isCookieOpen && (
        <div class="message-border">
          <div class="message">{fortune}</div>
        </div>
      )}
      {!isCookieOpen && (
        <div class="message-border">
          <div class="message">
            What are you waiting for? Open your fortune cookie!
          </div>
        </div>
      )}
      <div class="fortune-cookie" onClick={handleClick}>
        <img src={fortuneCookieImgUrl} alt="Fortune cookie" height="160" />
      </div>
      <div>
        {isCookieOpen && (
          <button
            class="button-56"
            role="button"
            onClick={() => setOpenCookie(false)}
          >
            Get new cookie
          </button>
        )}
      </div>
    </div>
  );
}
