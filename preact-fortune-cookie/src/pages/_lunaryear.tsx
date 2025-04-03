import '../style.css';

export function LunarYear() {
	const currentDate = new Date;
	const currentYear = currentDate.getFullYear();

	const calculateCurrentZodiac = (year: number) => {
		const animals = [
			"Rat 🐀",
			"Ox 🐂",
			"Tiger 🐅",
			"Rabbit 🐇",
			"Dragon 🐉",
			"Snake 🐍",
			"Horse 🐎",
			"Goat 🐐",
			"Monkey 🐒",
			"Rooster 🐓",
			"Dog 🐕",
			"Pig 🐖"
		];
		const index = (year - 4) % 12;

		return animals[index];
	}

	function daysUntilChineseNewYear() {
		const chineseNewYears = [
			new Date(2025, 2, 29),
			new Date(2026, 2, 17),
			new Date(2027, 2, 6),
			new Date(2028, 1, 26),
		];
		const today = new Date();
	
		// If CNY has already passed this year, calculate for next year
		let count = 0;
		while (today > chineseNewYears[count]) {
			count++;
		}

		const nextCNY = chineseNewYears[count];
		// Calculate the difference in days
		const diffTime = nextCNY.getTime() - today.getTime();

		return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	}

	return (
		<section>
			<h1>What is New Lunar Year about?</h1>
			<p>Lunar New Year is also known as Chinese New Year or Spring Festival (春节).
				It is the most important festival in China and other Asian countries.
				As the name suggests, it marks the beginning of the lunar calendar and is celebrated with family gatherings.
			</p>
			<h2>What is the current year?</h2>
			<div>{calculateCurrentZodiac(currentYear)}</div>
			<h2>When is the next Lunar New Year?</h2>
			<p>{daysUntilChineseNewYear()} days until the new lunar year</p>
		</section>
	)
}