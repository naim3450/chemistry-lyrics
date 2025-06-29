const lyricsEl = document.getElementById("lyrics");
const audio = document.getElementById("audio");

const lyrics = `
00:00 Aaj se teri saari galiyan meri ho gayi
00:05 Aaj se mera ghar tera ho gaya
00:10 Aaj se teri saari baatein meri ho gayi
00:15 Aaj se mera dil tera ho gaya
    `;

const parsedLyrics = lyrics.trim().split("\n").map(line => {
  const [time, ...text] = line.split(" ");
  const [min, sec] = time.split(":").map(Number);
  return {
    time: min * 60 + sec,
    text: text.join(" ")
  };
});

let currentLine = 0;

audio.addEventListener("timeupdate", () => {
  const currentTime = audio.currentTime;
  if (currentLine < parsedLyrics.length - 1 && currentTime >= parsedLyrics[currentLine + 1].time) {
    currentLine++;
    updateLyrics();
  }
});

function updateLyrics() {
  lyricsEl.innerHTML = parsedLyrics
    .map((line, i) => {
      return `<span class="${i === currentLine ? "text-green-400" : "text-gray-300"}">${line.text}</span>`;
    })
    .join("\n");
}

updateLyrics();