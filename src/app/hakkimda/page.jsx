
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
    <main>
      <section>
        <h1>Hakkımda</h1>

        <p>
          Büyük Veri Analisti öğrencisi olarak karmaşık veri setlerini analiz
          etmek, makine öğrenmesi modelleri geliştirmek ve bu modelleri
          anlamlı sonuçlara dönüştürmekle ilgileniyorum.
        </p>

        <p>
          Sadece veriyi işlemekle kalmayıp, veri odaklı kararların alınmasını
          sağlayacak görselleştirmeler ve analitik çözümler üretmeyi
          hedefliyorum.
        </p>
      </section>

      <section>
        <h2>Teknik Yetenekler</h2>

        <div>
          {skills.map((skill, index) => (
            <div key={index}>
              <span>{skill.category}</span>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
