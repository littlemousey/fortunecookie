import { useLocation } from 'preact-iso';
import { useReducer } from 'preact/hooks';
import sound from '../assets/background-lunar-new-year.mp3';

const backgroundMusic = new Audio(sound);

export function Header() {
	const { url } = useLocation();
	const [toggle, setToggle] = useReducer(() => !toggle, false);

	const handleMusicToggle = () => {
		if (!toggle) {
			setToggle(!toggle);
			return;
		}

		setToggle(!toggle);
	}

	const musicOff = () => {
		backgroundMusic.pause();
		backgroundMusic.currentTime = 0;
	}

	const musicOn = () => {
		backgroundMusic.play();
	}

	return (
		<header>
			<nav>
				<span class="icon" onClick={handleMusicToggle}>
					{!toggle && <span onClick={musicOn}>🔊</span>}
					{toggle && <span onClick={musicOff}>🔇</span>}
				</span>
				<a href="/" class={url == '/' && 'active'}>
					Get cookie
				</a>
				<a href="/lunaryear" class={url == '/lunaryear' && 'active'}>
					What's New Lunar Year?
				</a>
				<a href="/hongbao" class={url == '/hongbao' && 'active'}>
					Hongbao
				</a>
				<a href="/overview" class={url == '/overview' && 'active'}>
					Overview
				</a>
			</nav>
		</header>
	);
}
