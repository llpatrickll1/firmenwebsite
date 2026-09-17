const currentPage = location.pathname.split("/").pop() || "index.html";
const header = `
<header class="site-header" data-header>
  <a class="brand" href="index.html" aria-label="WEP home"><span class="brand-mark">W</span><span>WEP</span></a>
  <nav class="nav" aria-label="Main navigation">
    <a href="solutions.html">Solutions</a>
    <a href="products.html">Products</a>
    <a href="company.html">Company</a>
    <a href="references.html">References</a>
    <a class="nav-cta" href="contact.html">Contact <span>↗</span></a>
  </nav>
  <button class="menu-toggle" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
</header>`;
const footer = `
<footer class="footer"><div class="container footer-main"><a class="brand footer-brand" href="index.html"><span class="brand-mark">W</span><span>WEP</span></a><div><b>Precision engineering for critical processes.</b><p>Furtwangen · Germany</p></div><div class="footer-links"><a href="contact.html">Contact</a><a href="company.html">Company</a><a href="legal.html">Imprint</a></div></div><div class="container footer-bottom"><span>© 2026 WEP</span><span>Industrial engineering · Software · Electronics · Mechanics</span></div></footer>`;
document.querySelector('[data-site-header]')?.insertAdjacentHTML('beforebegin',header);
document.querySelector('[data-site-footer]')?.insertAdjacentHTML('beforebegin',footer);
const siteHeader = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

document.querySelectorAll(".nav a").forEach(link => {
  const href = link.getAttribute("href");
  if (href === currentPage) link.classList.add("active");
});

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
}));

const updateHeader = () => {
  siteHeader?.classList.toggle("scrolled", window.scrollY > 12);
};
updateHeader();
window.addEventListener("scroll", updateHeader, {passive:true});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const el=document.querySelector(a.getAttribute('href'));if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'})}}));


// V3: convert marked image areas into consistent temporary placeholders.
// Replace these elements with approved WEPControl image assets later.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-image-placeholder]").forEach((el) => {
    if (!el.classList.contains("image-placeholder")) {
      el.classList.add("image-placeholder");
    }
    if (!el.textContent.trim()) el.setAttribute("aria-label", "Image placeholder");
  });
});
