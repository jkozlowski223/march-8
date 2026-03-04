import { useRef, useState } from 'react';
import './App.css';

function App() {
	const [rainPetals, setRainPetals] = useState([]);
	const petalIdRef = useRef(0);

	const handleScreenClick = () => {
		const batchSize = 18;
		const nextPetals = Array.from({ length: batchSize }, () => {
			petalIdRef.current += 1;
			return {
				id: petalIdRef.current,
				left: Math.random() * 100,
				drift: Math.random() * 80 - 40,
				duration: 2.8 + Math.random() * 1.8,
				delay: Math.random() * 0.4,
				size: 0.65 + Math.random() * 0.45,
				rotation: Math.random() * 360
			};
		});

		setRainPetals((current) => [...current, ...nextPetals]);

		window.setTimeout(() => {
			setRainPetals((current) => current.filter((petal) => !nextPetals.some((nextPetal) => nextPetal.id === petal.id)));
		}, 5200);
	};

	return (
		<main className="app-shell" onClick={handleScreenClick}>
			<div className="wishes">
				<h1>Wszystkiego najlepszego z okazji Dnia Kobiet!</h1>
			</div>
			<div className="flower-stage" role="img" aria-label="Playful pink flower">
				<div className="flower-glow" aria-hidden="true" />
				<div className="stem" aria-hidden="true" />
				<div className="leaf leaf-left" aria-hidden="true" />
				<div className="leaf leaf-right" aria-hidden="true" />
				<div className="flower" aria-hidden="true">
					<span className="petal p1" />
					<span className="petal p2" />
					<span className="petal p3" />
					<span className="petal p4" />
					<span className="petal p5" />
					<span className="petal p6" />
					<span className="petal p7" />
					<span className="petal p8" />
					<span className="core" />
				</div>
			</div>
			<p className="click-hint">kliknij!!!!</p>
			<div className="petal-rain" aria-hidden="true">
				{rainPetals.map((petal) => (
					<span
						key={petal.id}
						className="rain-petal"
						style={{
							left: `${petal.left}%`,
							'--drift': `${petal.drift}px`,
							'--duration': `${petal.duration}s`,
							'--delay': `${petal.delay}s`,
							'--size': `${petal.size}rem`,
							'--rotation': `${petal.rotation}deg`
						}}
					/>
				))}
			</div>
		</main>
	);
}

export default App;