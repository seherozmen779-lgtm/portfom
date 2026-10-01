import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Seher Özmen | Büyük Veri Analisti & Veri Bilimi",
  description: "Seher Özmen'in kişisel portfolyo web sitesi.",
};

export default function RootLayout({ children }) {
  return (
    
      
        
        
          {children}
        
);
}