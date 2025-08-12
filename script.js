const spinResult = document.getElementById("spin-result");

const items = [
  "🚘 TESLA",
  "💻 MacBook",
  "⚽ Footballer",
  "😂 Torchlight Laptop",
  "🛒 Wheelbarrow",
  "👨‍⚕️ Doctor",
  "📟 iPad",
  "🧱 Bricklayer",
  "🐢 Old Turtle Car",
  "🦅 Bird Wing",
  "🧰 Shit Parker",
];

function spinRandom() {
  let time = 0;
  let speed = 50;

  const spin = setInterval(() => {
    const pick = Math.floor(Math.random() * items.length);
    spinResult.textContent = items[pick];

    time += speed;
    speed *= 1.1;

    if (time > 2000) {
      clearInterval(spin);
    }
  }, speed);
}
