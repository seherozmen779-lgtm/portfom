export default function Hakkimda() {
  const skills = [
    { name: "Python / Pandas / NumPy", category: "Veri Analizi" },
    { name: "Machine Learning (Scikit-Learn)", category: "Yapay Zeka" },
    { name: "SQL & Veritabanları", category: "Veri Yönetimi" },
    { name: "JavaScript / React / Next.js", category: "Web Geliştirme" },
    { name: "Tailwind CSS", category: "UI/UX" },
    { name: "Git / GitHub", category: "Versiyon Kontrol" },
  ];

  return (
Hakkımda
Büyük Veri Analisti öğrencisi olarak karmaşık veri setlerini analiz etmek, makine öğrenmesi modelleri geliştirmek ve bu süreçleri web tabanlı arayüzlerle sunmak konusunda tutkuluyum.

Sadece veriyi işlemekle kalmayıp, veri odaklı kararların alınmasını sağlayacak görselleştirmeler ve analitik çözümler üzerinde çalışıyorum.

Teknik Yetenekler
{skills.map((skill, index) => (

{skill.category}

{skill.name}
))}

);
}