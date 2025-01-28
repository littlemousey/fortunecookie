import { useState } from 'preact/hooks';
import sound from '../../assets/crumple.mp3';
import fortuneCookieClosedImg from '../../assets/fortune-cookie-closed.png';
import fortuneCookieOpenImg from '../../assets/fortune-cookie-open.png';
import './style.css';

export function Home() {
	const [isCookieOpen, setOpenCookie] = useState(false);

	const fortuneCookieImgUrl = isCookieOpen ? fortuneCookieOpenImg : fortuneCookieClosedImg

	let audio = new Audio(sound)

	const playSound = () => {
	  audio.play()
	}

	const handleClick = () => {
		playSound()
		setOpenCookie(!isCookieOpen)
	}

	return (
		<div class="home">
			{isCookieOpen && <div class="message">
				A friend to everybody is a friend to nobody
			</div>}
			<div class="fortune-cookie" onClick={handleClick}>
				<img src={fortuneCookieImgUrl} alt="Fortune cookie" height="160" />
			</div>
			<h1>What are you waiting for? Open your fortune cookie!</h1>
			{/* <section>
				<Resource
					title="Learn Preact"
					description="If you're new to Preact, try the interactive tutorial to learn important concepts"
					href="https://preactjs.com/tutorial"
				/>
				<Resource
					title="Differences to React"
					description="If you're coming from React, you may want to check out our docs to see where Preact differs"
					href="https://preactjs.com/guide/v10/differences-to-react"
				/>
				<Resource
					title="Learn Vite"
					description="To learn more about Vite and how you can customize it to fit your needs, take a look at their excellent documentation"
					href="https://vitejs.dev"
				/>
			</section> */}
		</div>
	);
}

function Resource(props) {
	return (
		<a href={props.href} target="_blank" class="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}
