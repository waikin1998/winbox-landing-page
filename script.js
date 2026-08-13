document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const META_EVENT_DELAY_MS = 2000;

document.querySelectorAll('a[href*="tinyurl.com/warb01"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    if (link.dataset.metaEventPending === "true") return;
    link.dataset.metaEventPending = "true";

    if (typeof window.fbq === "function") {
      window.fbq("track", "CompleteRegistration", {
        content_name: "CTA Button",
        destination_url: link.href
      });
    }

    window.setTimeout(() => {
      window.location.href = link.href;
    }, META_EVENT_DELAY_MS);
  });
});
