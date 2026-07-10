document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll('a[href*="tinyurl.com/warb01"]').forEach((link) => {
  link.addEventListener("click", () => {
    if (typeof window.fbq !== "function") return;

    window.fbq("track", "CompleteRegistration", {
      content_name: "CTA Button",
      destination_url: link.href
    });
  });
});
