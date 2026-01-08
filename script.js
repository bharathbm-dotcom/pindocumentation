fetch("data.yaml")
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to load data.yaml");
    }
    return response.text();
  })
  .then(text => {
    const data = jsyaml.load(text);

    // Populate site info
    document.getElementById("site-title").textContent = data.site.title;
    document.getElementById("site-description").textContent = data.site.description;

    // Populate pages
    const pagesDiv = document.getElementById("pages");

    data.pages.forEach(page => {
      const h2 = document.createElement("h2");
      h2.textContent = page.title;

      const p = document.createElement("p");
      p.textContent = page.body;

      pagesDiv.appendChild(h2);
      pagesDiv.appendChild(p);
    });
  })
  .catch(error => {
    document.body.innerHTML = "<h2>Error loading YAML</h2>";
    console.error(error);
  });
