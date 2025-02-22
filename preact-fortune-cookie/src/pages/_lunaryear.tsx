import type { FireworksHandlers } from '@fireworks-js/preact';
import { Fireworks } from '@fireworks-js/preact';
import { useRef } from 'preact/hooks';
import '../style.css';

export function LunarYear() {
	const ref = useRef<FireworksHandlers>(null)

	const toggleFireworks = () => {
		if (!ref.current) return
		if (ref.current.isRunning) {
		  ref.current.stop()
		} else {
		  ref.current.start()
		}
	  }

	return (
		<section>
			<h1>What is New Lunar Year about?</h1>
			<p>Chinese New Year. It is about being with family and friends and having good food together.</p>

			<h2>When is the next Lunar New Year?</h2>
			<p>days until the new lunar year</p>
			<Fireworks
			autostart={false}
			ref={ref}
			options={{ opacity: 0.5 }}
			style={{
				bottom: 40,
				left: 200,
				width: '50%',
				height: '50%',
				position: 'absolute',
				background: '#000'
			}}
			/>
			<div style={{ display: 'flex', gap: '4px', position: 'absolute', zIndex: 1 }} >
				<button onClick={() => toggleFireworks()}>Toggle</button>
				<button onClick={() => ref.current!.clear()}>Clear</button>
			</div>
		</section>
	)
}