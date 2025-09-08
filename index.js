function drawViz() {
  const container = document.getElementById("container");
  container.innerHTML = `
    <div style="
      font-size: 48px; 
      font-family: Arial, sans-serif; 
      text-align: center; 
      color: #333;
    " id="clock"></div>
  `;

  function updateClock() {
    const now = new Date();
    const dateString = now.toLocaleDateString("sv-SE");
    const timeString = now.toLocaleTimeString("sv-SE", { hour12: false });
    document.getElementById("clock").textContent = dateString + " " + timeString;
  }

  updateClock();
  setInterval(updateClock, 1000);
}

drawViz();
