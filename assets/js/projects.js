const projects = [
    {
        title: "Efficient Domain Adaptation for LLMs",
        image: "images/domain_adaptation.png",
        link: "https://github.com/vedantMahangade/domain_adaptive_llm"
    },
    {
      title: "DeepLearning Based Covid Metabolomics",
      image: "images/covid.png",
      link: "https://github.com/vedantMahangade/DeepLearning-Based-Covid-Metabolomics"
    },
    {
      title: "E. coli Drug Resistance: Gene Expression Analysis",
      image: "images/ecoli.png",
      link: "https://github.com/vedantMahangade/DrugResistant-Vs-Susceptible-Ecoli-Transcriptomics"
    },
    {
      title: "NucArg: Antibiotic Resistance Gene Detection",
      image: "images/nucarg.png",
      link: "https://github.com/vedantMahangade/"
    },
    {
      title: "PII Data Detection",
      image: "images/pii.png",
      link: "https://github.com/vedantMahangade/PII-Data-Detection"
    },
    {
      title: "A 2 Stage Traffic Sign Classifier",
      image: "images/classifier.png",
      link: "https://github.com/vedantMahangade/2Stage-Traffic-Sign-Classifier"
    },
    {
      title: "Myocardial Infraction Complication Prediction",
      image: "images/myochardial.png",
      link: "https://github.com/vedantMahangade/Myocardial-Infarction-Prediction"
    },
    {
      title: "Malignant Cancer Tissue Detection",
      image: "images/tumor.png",
      link: "https://github.com/vedantMahangade/Malignant-Cancer-Detection"
    },
    {
      title: "Emotion Analysis",
      image: "images/emotion.png",
      link: "https://github.com/vedantMahangade/Emotion-Analysis"
    },
    {
      title: "Spotify Song Stream Prediction",
      image: "images/spotify.png",
      link: "https://github.com/vedantMahangade/Spotify-Most-Streamed-2023"
    },
    {
      title: "The Movie App",
      image: "images/movie.png",
      link: "https://github.com/CSCI-6221-Kotlin/Movie-App"
    },
    {
      title: "A Payroll Management System",
      image: "images/payroll.png",
      link: "https://github.com/vedantMahangade/Payroll-Management-System"
    },
    {
      title: "Power BI reports",
      image: "images/powerbi.png",
      link: "https://github.com/vedantMahangade/PowerBI-Reports"
    }
  ];
  
  function renderProjects() {
    const grid = document.getElementById("project-grid");
    if (!grid) return;
  
    projects.forEach((project, index) => {
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
  
  document.addEventListener("DOMContentLoaded", renderProjects);
  

  