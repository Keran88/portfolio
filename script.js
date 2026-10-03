const reveal = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      reveal.unobserve(entry.target);
    }
  });
}, {threshold: .12});
document.querySelectorAll(".reveal").forEach(el => reveal.observe(el));

const menu = document.getElementById("menu");
const navlinks = document.getElementById("navlinks");
menu.addEventListener("click", () => navlinks.classList.toggle("open"));
document.querySelectorAll(".navlinks a").forEach(a => a.addEventListener("click", () => navlinks.classList.remove("open")));

document.getElementById("year").textContent = new Date().getFullYear();

const progress = document.getElementById("progress");
const sections = [...document.querySelectorAll("main section[id]")];
const links = [...document.querySelectorAll(".navlinks a")];

window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = (max > 0 ? scrollY / max * 100 : 0) + "%";

  let current = "";
  sections.forEach(section => {
    if (scrollY >= section.offsetTop - 150) current = section.id;
  });
  links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === "#" + current));
});
