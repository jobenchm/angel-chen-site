const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Scroll progress + sticky nav shadow
const nav = document.querySelector(".nav");
const progressBar = document.getElementById("progressBar");
function onScroll() {
  nav.classList.toggle("scrolled", window.scrollY > 8);
  const h = document.documentElement;
  const scrollable = h.scrollHeight - h.clientHeight;
  const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  if (progressBar) progressBar.style.width = pct + "%";
}
document.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Highlight the nav link for the current page
const currentPage = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a[href]").forEach((a) => {
  const href = a.getAttribute("href").split("/").pop();
  if (href === currentPage) a.classList.add("active");
});

// Reveal-on-scroll: content is visible by default (see CSS); JS only adds
// the entrance animation, so a slow/blocked script never hides anything.
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("pending");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".fade-in").forEach((el) => {
  el.classList.add("pending");
  revealObserver.observe(el);
});

// Split hero/page headlines into words that rise in on load
document.querySelectorAll(".hero h1, .page-hero h1").forEach((heroH1) => {
  if (reduceMotion) return;
  const words = heroH1.textContent.trim().split(/\s+/);
  heroH1.innerHTML = words
    .map(
      (w, i) =>
        `<span class="word"><span class="word-inner" style="--i:${i}">${w}</span></span>`
    )
    .join(" ");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      heroH1.querySelectorAll(".word-inner").forEach((w) => w.classList.add("in"));
    });
  });
});

// Animated count-up stats, from real numbers already in the markup
document.querySelectorAll(".stat-num").forEach((el) => {
  const target = parseInt(el.dataset.target || el.textContent, 10);
  if (Number.isNaN(target)) return;
  if (reduceMotion) {
    el.textContent = target;
    return;
  }
  const statObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        statObserver.unobserve(entry.target);
        const duration = 900;
        const start = performance.now();
        function tick(now) {
          const p = Math.min((now - start) / duration, 1);
          el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(tick);
          else el.textContent = target;
        }
        requestAnimationFrame(tick);
      });
    },
    { threshold: 0.5 }
  );
  statObserver.observe(el);
});

// Magnetic buttons — subtle pull toward the cursor
if (!reduceMotion && !("ontouchstart" in window)) {
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.35}px)`;
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "";
    });
  });

  // Portrait tilt
  const portrait = document.querySelector(".portrait-frame");
  if (portrait) {
    portrait.addEventListener("mousemove", (e) => {
      const r = portrait.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      portrait.style.transform = `perspective(900px) rotateX(${y * -10}deg) rotateY(${x * 10}deg)`;
    });
    portrait.addEventListener("mouseleave", () => {
      portrait.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
    });
  }
}

// ---- Payments ----------------------------------------------------------
// Paste a Stripe Payment Link (or any checkout URL) for each package.
// While a link is empty, the button opens an email enquiry instead so the
// page keeps working before payments are set up.
const PAYMENT_LINKS = {
  circle: "",   // e.g. "https://buy.stripe.com/xxxx"  The Circle, $49/mo
  table: "",    // The Dinner Table, $1,200
  private: "",  // One-on-One, $3,500
};
document.querySelectorAll(".pay-btn").forEach((btn) => {
  const key = btn.dataset.package;
  const link = PAYMENT_LINKS[key];
  if (link) {
    btn.href = link;
    btn.target = "_blank";
    btn.rel = "noopener";
  } else {
    const subject = encodeURIComponent(`Joining ${btn.dataset.name}`);
    const body = encodeURIComponent(
      `Hi Angel,\n\nI'd like to join ${btn.dataset.name}. Please send me the next steps.\n\nName:\nPreferred language (English / 中文):\n`
    );
    btn.href = `mailto:hello@sisterangel.com?subject=${subject}&body=${body}`;
  }
});
