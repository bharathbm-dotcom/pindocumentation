fetch("data.yaml")
  .then(response => response.text())
  .then(text => {
    const data = jsyaml.load(text);

    document.getElementById("title").textContent = data.site.title;
    document.getElementById("description").textContent = data.site.description;

    const contentDiv = document.getElementById("content");

    data.sections.forEach(section => {
      const h2 = document.createElement("h2");
      h2.textContent = section.heading;

      const p = document.createElement("p");
      p.textContent = section.content;

      contentDiv.appendChild(h2);
      contentDiv.appendChild(p);
    });
  })
  .catch(err => console.error("Error loading YAML:", err));
