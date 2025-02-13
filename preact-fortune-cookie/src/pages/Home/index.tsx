import { useState } from 'preact/hooks';
import sound from '../../assets/crumple.mp3';
import fortuneCookieClosedImg from '../../assets/fortune-cookie-closed.png';
import fortuneCookieOpenImg from '../../assets/fortune-cookie-open.png';
import fortuneJson from '../../assets/fortunes.json';
import './style.css';

let audio = new Audio(sound)

const getFortune = () => {
	return fortuneJson[Math.floor(Math.random() * fortuneJson.length)];
}

export function Home() {
	const [isCookieOpen, setOpenCookie] = useState(false);
	const [fortune, setFortune] = useState('');

	const fortuneCookieImgUrl = isCookieOpen ? fortuneCookieOpenImg : fortuneCookieClosedImg
	

	const playSound = () => {
	  audio.play()
	}

	const handleClick = () => {
		if (isCookieOpen) { return; }

		playSound()
		setOpenCookie(!isCookieOpen)
		setFortune(getFortune())
	}

	return (
		<div class="home">
			{isCookieOpen && <div class="message">
				{fortune}
			</div>}
			{!isCookieOpen && <div class="message">
				What are you waiting for? Open your fortune cookie!
			</div>}
			<div class="fortune-cookie" onClick={handleClick}>
				<img src={fortuneCookieImgUrl} alt="Fortune cookie" height="160" />
			</div>
			<div>
				{isCookieOpen && <button class="new-cookie" onClick={() => setOpenCookie(false)}>New cookie</button>}
			</div>
		</div>
	);
}
