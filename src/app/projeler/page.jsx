export default function Projeler() {
  const projects = [
    {
      title: "Öğrenci Performans Analizi ile Not Tahmini",
      description: "Makine öğrenmesi regresyon modelleri kullanılarak öğrencilerin akademik performanslarına göre not tahmini yapılmıştır.",
      tags: ["Python", "Machine Learning", "Pandas", "Scikit-Learn"],
      githubLink: "https://github.com/seherozmen",
    },
    {
      title: "Oyun Oynamanın Mental Sağlığa Etkisi",
      description: "Veri analitiği ve sınıflandırma modelleri kullanılarak oyun oynama sürelerinin bireylerin mental sağlığı üzerindeki etkileri incelenmiştir.",
      tags: ["Python", "Data Analysis", "Seaborn"],
      githubLink: "https://github.com/seherozmen",
    },
  ];

  return (
    Projelerim
{projects.map((project, idx) => (

{project.title}
{project.description}

{project.tags.map((tag, tIdx) => (

{tag}
))}


GitHub'da İncele →

))}

);
}