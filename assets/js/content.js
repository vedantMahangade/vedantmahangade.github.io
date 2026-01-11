async function loadSiteContent() {
  const response = await fetch("assets/data/siteContent.json");
  if (!response.ok) {
    throw new Error(`Unable to load content: ${response.status}`);
  }
  return response.json();
}

function renderSocialIcons(socials, containerId) {
  const container = document.getElementById(containerId);
  if (!container || !Array.isArray(socials)) return;

  container.innerHTML = "";

  socials.forEach((social) => {
    const li = document.createElement("li");
    const anchor = document.createElement("a");

    anchor.href = social.url;
    anchor.className = social.iconClass;
    anchor.target = "_blank";
    if (!social.url.startsWith("mailto:")) {
      anchor.rel = "noopener noreferrer";
    }

    const label = document.createElement("span");
    label.className = "label";
    label.textContent = social.label;

    anchor.appendChild(label);
    li.appendChild(anchor);
    container.appendChild(li);
  });
}

function renderHero(hero, socials) {
  if (!hero) return;

  const icon = document.getElementById("hero-icon");
  if (icon && hero.iconClass) {
    icon.className = hero.iconClass;
  }

  const headline = document.getElementById("hero-headline");
  if (headline && hero.headline) {
    headline.innerHTML = hero.headline;
  }

  const tagline = document.getElementById("hero-tagline");
  if (tagline && hero.tagline) {
    tagline.textContent = hero.tagline;
  }

  const cta = document.getElementById("hero-cta");
  if (cta && hero.cta) {
    cta.textContent = hero.cta.text;
    cta.href = hero.cta.href;
  }

  renderSocialIcons(socials, "hero-icons");
}

function renderAbout(about) {
  if (!about) return;

  const heading = document.getElementById("about-heading");
  if (heading && about.heading) {
    heading.textContent = about.heading;
  }

  const container = document.getElementById("about-paragraphs");
  if (container && Array.isArray(about.paragraphs)) {
    container.innerHTML = "";
    about.paragraphs.forEach((paragraph) => {
      const p = document.createElement("p");
      p.textContent = paragraph;
      container.appendChild(p);
    });
  }

  const resumeActions = document.getElementById("resume-actions");
  if (resumeActions && about.resume) {
    resumeActions.innerHTML = "";
    const li = document.createElement("li");
    const button = document.createElement("a");
    button.href = about.resume.href;
    button.className = "button";
    button.target = "_blank";
    button.textContent = about.resume.text;
    li.appendChild(button);
    resumeActions.appendChild(li);
  }
}

function renderProjectsSection(projects) {
  if (typeof window.renderProjects === "function") {
    window.renderProjects(projects);
  }
}

function renderExperience(experiences) {
  const list = document.getElementById("experience-list");
  if (!list || !Array.isArray(experiences)) return;

  list.innerHTML = "";

  experiences.forEach((experience) => {
    const item = document.createElement("li");

    const role = document.createElement("b");
    role.textContent = experience.role;
    item.appendChild(role);

    item.appendChild(document.createTextNode(" @ "));

    const org = document.createElement("a");
    org.href = experience.organizationUrl;
    org.target = "_blank";
    org.textContent = experience.organization;
    item.appendChild(org);

    item.appendChild(document.createElement("br"));

    const date = document.createElement("date");
    date.textContent = experience.dates;
    item.appendChild(date);

    if (Array.isArray(experience.highlights) && experience.highlights.length) {
      const highlights = document.createElement("ul");
      highlights.className = "mediumtext";
      highlights.style.listStyleType = "circle";

      experience.highlights.forEach((highlight) => {
        const highlightItem = document.createElement("li");
        const label = document.createElement("b");
        label.textContent = `${highlight.label}:`;
        highlightItem.appendChild(label);
        highlightItem.appendChild(
          document.createTextNode(` ${highlight.description}`)
        );
        highlights.appendChild(highlightItem);
      });

      item.appendChild(highlights);
    }

    list.appendChild(item);
  });
}

function renderPubCert(publications, certifications) {
  const list = document.getElementById("pub-cert-list");
  if (!list) return;

  list.innerHTML = "";

  (publications || []).forEach((publication) => {
    const item = document.createElement("li");

    const link = document.createElement("a");
    link.href = publication.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = publication.title;
    item.appendChild(link);

    const metaParts = [];
    if (publication.venue) metaParts.push(publication.venue);
    if (publication.dateText) metaParts.push(publication.dateText);

    if (Array.isArray(publication.tags) && publication.tags.length) {
      metaParts.push(publication.tags.join(", "));
    }

    if (metaParts.length) {
      item.appendChild(document.createTextNode(`: ${metaParts.join(" – ")}`));
    }

    list.appendChild(item);
  });

  (certifications || []).forEach((certification) => {
    const item = document.createElement("li");
    const label = document.createElement("strong");
    label.textContent = certification.title;
    item.appendChild(label);

    if (certification.dateText) {
      const time = document.createElement("span");
      time.textContent = ` (${certification.dateText})`;
      item.appendChild(time);
    }

    list.appendChild(item);
  });
}

function renderSkills(skills) {
  const container = document.getElementById("skills-grid");
  if (!container || !Array.isArray(skills)) return;

  container.innerHTML = "";

  skills.forEach((skillGroup) => {
    const column = document.createElement("div");
    column.className = "col-4 col-12-medium";

    const heading = document.createElement("h3");
    heading.textContent = skillGroup.heading;
    column.appendChild(heading);

    if (Array.isArray(skillGroup.items)) {
      skillGroup.items.forEach((skill) => {
        const tag = document.createElement("span");
        tag.className = "tech-tags__tag";
        tag.textContent = skill;
        column.appendChild(tag);
      });
    }

    container.appendChild(column);
  });
}

function renderContact(contact) {
  if (!contact) return;

  const heading = document.getElementById("contact-heading");
  if (heading && contact.heading) {
    heading.textContent = contact.heading;
  }

  const body = document.getElementById("contact-body");
  if (body && contact.body) {
    body.textContent = contact.body;
  }

  const emailButton = document.getElementById("contact-email");
  if (emailButton && contact.email) {
    emailButton.href = `mailto:${contact.email}`;
    emailButton.textContent = contact.button || emailButton.textContent;
  }
}

function renderFooter(socials) {
  renderSocialIcons(socials, "footer-icons");
}

document.addEventListener("DOMContentLoaded", () => {
  loadSiteContent()
    .then((content) => {
      renderHero(content.hero, content.socials);
      renderAbout(content.about);
      renderProjectsSection(content.projects);
      renderExperience(content.experience);
      renderPubCert(content.publications, content.certifications);
      renderSkills(content.skills);
      renderContact(content.contact);
      renderFooter(content.socials);
    })
    .catch((error) => {
      console.error("Failed to load site content", error);
    });
});
