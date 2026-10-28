document.getElementById("copyBtn").addEventListener("click", async (e) => {
  const btn = e.currentTarget;
  try {
    await navigator.clipboard.writeText("TSKJXH");
    const original = btn.textContent;
    btn.textContent = "Gekopieerd!";
    btn.classList.add("copied");
    setTimeout(() => {
      btn.textContent = original;
      btn.classList.remove("copied");
    }, 1500);
  } catch {
    // clipboard unavailable, ignore
  }
});
