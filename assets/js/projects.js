(function() {
  function renderProjects(projects) {
    const grid = document.getElementById("project-grid");
    if (!grid || !Array.isArray(projects)) return;

    grid.innerHTML = "";

    projects.forEach((project) => {
      const col = document.createElement("div");
      col.className = "col-4 col-12-medium";
      col.innerHTML = `
        <a href="${project.link}" target="_blank">
          <span><img src="${project.image}" alt="${project.title}" /></span>
        </a>
        <h3>${project.title}</h3>
      `;
      grid.appendChild(col);
    });
  }

  window.renderProjects = renderProjects;
})();
