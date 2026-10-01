export default function Projeler() {
  const projects = [
    {
      title: "Hastalık Durumu Tahmini",
      description:
        "Makine öğrenmesi algoritmaları kullanılarak hastalık durumunun tahmin edilmesi üzerine bir veri bilimi projesi.",
      tags: ["Python", "Pandas", "Scikit-Learn", "Machine Learning"],
    },
    {
      title: "Veri Analizi ve Görselleştirme",
      description:
        "Veri setlerinin temizlenmesi, analiz edilmesi ve anlamlı grafiklerle görselleştirilmesi.",
      tags: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
    },
    {
      title: "Kişisel Portfolio",
      description:
        "Projelerimi, teknik yeteneklerimi ve çalışmalarımı sergilemek için geliştirdiğim kişisel web sitesi.",
      tags: ["React", "Next.js", "JavaScript", "CSS"],
    },
  ];

  return (
    <main>
      <section>
        <h1>Projelerim</h1>

        <p>
          Üzerinde çalıştığım ve geliştirdiğim veri analizi, makine öğrenmesi
          ve web geliştirme projeleri.
        </p>

        <div>
          {projects.map((project, idx) => (
            <article key={idx}>
              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <div>
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx}>{tag}</span>
                ))}
              </div>

              <a href="#" target="_blank">
                GitHub'da İncele →
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
