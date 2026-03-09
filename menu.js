document.addEventListener("DOMContentLoaded", function () {
  if (!document.querySelector('link[data-font="inter"]')) {
    const fontPreconnect1 = document.createElement("link");
    fontPreconnect1.rel = "preconnect";
    fontPreconnect1.href = "https://fonts.googleapis.com";
    document.head.appendChild(fontPreconnect1);

    const fontPreconnect2 = document.createElement("link");
    fontPreconnect2.rel = "preconnect";
    fontPreconnect2.href = "https://fonts.gstatic.com";
    fontPreconnect2.crossOrigin = "true";
    document.head.appendChild(fontPreconnect2);

    const fontStylesheet = document.createElement("link");
    fontStylesheet.rel = "stylesheet";
    fontStylesheet.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";
    fontStylesheet.setAttribute("data-font", "inter");
    document.head.appendChild(fontStylesheet);
  }

  const header = document.querySelector("header");
  if (!header) return;

  header.innerHTML = `
    <div class="navbar">
      <h2 class="logo">
        <a href="index.html">Mehmet Akış</a>
      </h2>

      <nav>
        <a href="Hakkimda.html">Hakkımda</a>
        <a href="Egitim.html">Eğitim</a>
        <a href="Arastirmalar.html">Araştırmalar</a>
        <a href="projeler.html">Projeler</a>
        <a href="iletisim.html">İletişim</a>
      </nav>
    </div>
  `;
});