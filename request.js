

const form = document.getElementById("account-form");
const formSection = document.getElementById("request-form-section");
const terminalSection = document.getElementById("terminal-section");
const terminal = document.getElementById("terminal");
const result = document.getElementById("terminal-result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const uid = document.getElementById("ff-uid").value.trim();
  const region = document.getElementById("region").value;

  if (!/^[0-9]{6,20}$/.test(uid) || !region) {
    alert("Enter a valid UID and select your region.");
    return;
  }

  formSection.hidden = true;
  terminalSection.hidden = false;
  terminal.innerHTML = "";
  result.textContent = "";

  const attempts = 150 + Math.floor(Math.random() * 51);

  const lines = [
    ["[INFO] Initializing local request...", "info"],
    [`[INFO] UID: ${uid}`, "info"],
    [`[INFO] Region: ${region}`, "info"],
    ["[INFO] Preparing request summary...", "info"]
  ];

  for (let i = 1; i <= attempts; i++) {
    const attempt = String(i).padStart(2, "0");

    const messages = [
      `[INFO] Checking request data — attempt ${attempt}`,
      `[ERROR] Remote service unavailable — attempt ${attempt}`,
      `[INFO] Retrying local validation — attempt ${attempt}`,
      `[ERROR] Garena account access unavailable — attempt ${attempt}`,
      `[INFO] Request format check — attempt ${attempt}`
    ];

    const message = messages[Math.floor(Math.random() * messages.length)];
    const kind = message.includes("[ERROR]") ? "failed" : "info";

    lines.push([message, kind]);
  }

  lines.push(
    ["[INFO] Validating UID format...", "info"],
    ["[SUCCESS] UID format check passed", "info"],
    ["[SUCCESS] Local request summary prepared", "info"]
  );

  let index = 0;

  function addLine() {
    if (index >= lines.length) {
      result.textContent =
        "SUCCESS — request summary compeleted.";
      return;
    }

    const [message, kind] = lines[index];
    const line = document.createElement("div");
    line.className = `terminal-line ${kind}`;
    line.textContent = `> ${message}`;

    terminal.appendChild(line);
    terminal.scrollTop = terminal.scrollHeight;
    index++;

    setTimeout(addLine, 150);
  }

  addLine();
});
