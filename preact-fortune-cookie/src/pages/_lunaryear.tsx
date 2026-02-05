import "../style.css";

export function LunarYear() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const chineseNewYears = [
    new Date(2025, 0, 29), // January 29, 2025 - Year of the Snake
    new Date(2026, 1, 17), // February 17, 2026 - Year of the Horse
    new Date(2027, 1, 6), // February 6, 2027 - Year of the Goat
    new Date(2028, 0, 26), // January 26, 2028 - Year of the Monkey
    new Date(2029, 1, 13), // February 13, 2029 - Year of the Rooster
    new Date(2030, 1, 3), // February 3, 2030 - Year of the Dog
    new Date(2031, 0, 23), // January 23, 2031 - Year of the Pig
  ];

  const getChineseZodiacYear = (date: Date) => {
    // Find which lunar year we're in
    let lunarYear = date.getFullYear();

    // Check if we're before Chinese New Year of current Gregorian year
    const currentYearCNY = chineseNewYears.find(
      (cny) => cny.getFullYear() === lunarYear,
    );
    if (currentYearCNY && date < currentYearCNY) {
      lunarYear -= 1; // Still in previous lunar year
    }

    return lunarYear;
  };

  const calculateCurrentZodiac = (date: Date) => {
    const lunarYear = getChineseZodiacYear(date);

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
      "Pig 🐖",
    ];

    const elements = [
      "Wood",
      "Wood",
      "Fire",
      "Fire",
      "Earth",
      "Earth",
      "Metal",
      "Metal",
      "Water",
      "Water",
    ];

    const animalIndex = (lunarYear - 4) % 12;
    const elementIndex = (lunarYear - 4) % 10;

    return `${elements[elementIndex]} ${animals[animalIndex]}`;
  };

  function daysUntilChineseNewYear() {
    const today = new Date();

    // If CNY has already passed this year, calculate for next year
    let count = 0;
    while (today > chineseNewYears[count]) {
      count++;
    }

    // Fallback if no future date is found
    if (count >= chineseNewYears.length) {
      return "Date not available";
    }

    const nextCNY = chineseNewYears[count];
    // Calculate the difference in days
    const diffTime = nextCNY.getTime() - today.getTime();

    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  return (
    <section>
      <h1>What is New Lunar Year about?</h1>
      <p>
        Lunar New Year is also known as Chinese New Year or Spring Festival
        (春节). It is the most important festival in China and other Asian
        countries. As the name suggests, it marks the beginning of the lunar
        calendar and is celebrated with family gatherings.
      </p>
      <h2>What is the current year?</h2>
      <div>{calculateCurrentZodiac(currentDate)}</div>
      <h2>When is the next Lunar New Year?</h2>
      <p>{daysUntilChineseNewYear()} days until the new lunar year</p>
    </section>
  );
}
