'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  
  const projects = [
    {
      title: "Öğrenci Performans Analizi ile Makine Öğrenmesi Not Tahmini",
      desc: "Makine öğrenmesi adımları kullanılarak not tahmininde bulunulmuştur.",
      tags: ["Python","Maching Learning","Pandas"],
      
    },
    {
      title: "Oyun Oynamanın Mental Sağlığa Etkisi",
      desc: "Makine öğrenmesi adımları ile oyun oynama süresinin mental sağlığa etkisi tahmin edilmiştir",
      tags:["Python","Pandas","Maching Learning"],
     
    },
    {
      title: "Portföy Web Sitesi",
      desc: "Şu an incelemekte olduğunuz kişisel web sitesi.",
      tags: ["Next.js", "Framer Motion"],
     
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-300 selection:text-teal-900">
      <div className="max-w-4xl mx-auto px-6 py-20">
        
        {}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <h1 className="text-5xl font-bold tracking-tight text-slate-200 sm:text-6xl mb-4">
            Merhaba, Ben <span className="text-teal-400">Seher Özmen</span> 👋
          </h1>
          <h2 className="text-xl font-medium text-slate-400 mb-6">
           Öğrenci / Büyük Veri Analisti Öğrencisi
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed mb-8">
            Modern, hızlı ve kullanıcı dostu web deneyimleri tasarlıyor ve kodluyorum. 
            Yeni teknolojiler öğrenmeyi ve karmaşık problemleri basit arayüzlerle çözmeyi seviyorum.
            Makine öğrenmesi ve web geliştirme alanlarında projeler geliştiriyorum. 
          </p>

          {/* Sosyal Medya Linkleri */}
          <div className="flex gap-5 text-2xl text-slate-400">
            <a href="mailto:seherozmen779@gmail.com" className="flex items-center gap-2 hover:text-teal-400 transition-colors text-base text-slate-300">
              <FaEnvelope />
              <span>seherozmen779@gmail.com</span>
            </a>
          </div>
        </motion.header>

        {/* 2. BÖLÜM: YETENEKLER (SKILLS) */}
        <section className="mb-24">
          <h3 className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-6">
            Kullandığım Teknolojiler
          </h3>
          <div className="flex flex-wrap gap-3">
            {["JavaScript", "React", "Next.js", "Tailwind CSS", "Git", "HTML/CSS", "Figma"].map((skill, index) => (
              <span key={index} className="px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-sm text-slate-300 font-medium">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* 3. BÖLÜM: PROJELER */}
        <section className="mb-24">
          <h3 className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-8">
            Öne Çıkan Projeler
          </h3>
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-all group"
              >
                <h4 className="text-xl font-semibold text-slate-200 group-hover:text-teal-400 transition-colors mb-2">
                  {project.title}
                </h4>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2.5 py-1 rounded bg-teal-400/10 text-teal-300 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. BÖLÜM: İLETİŞİM / FOOTER */}
        <footer className="text-center border-t border-slate-800/60 pt-12 text-slate-500 text-sm">
          <p>© 2026 Seher Özmen. Tüm hakları saklıdır.</p>
        </footer>

      </div>
    </div>
  );
}