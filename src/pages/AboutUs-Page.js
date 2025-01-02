import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      {/* Header (Navbar) */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-[#284b63] text-white py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Tentang Kami</h1>
        <p className="text-lg">
          <a href="/" className="hover:underline">
            Home
          </a>{" "}
          → Tentang Kami
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 space-y-12">
        {/* Company History */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-6">Sejarah Perusahaan</h2>
          <p className="text-lg leading-relaxed">
            Nasution Dananto & Partners didirikan oleh Bapak Amir Hood Nasution, S.H., pada tanggal 
            30 Oktober 1970. Hingga kini, firma hukum ini telah mewakili berbagai klien mulai dari 
            individu, nasional, hingga multinasional.
          </p>
        </section>

        {/* Vision and Mission */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-3xl font-semibold mb-4">Visi</h3>
            <p className="text-lg leading-relaxed">
              Diakui sebagai firma hukum bertaraf internasional dengan keunggulan, kompetensi, 
              profesionalisme, inovasi, dan kepercayaan, serta fokus pada potensi manusia.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-4">Misi</h3>
            <p className="text-lg leading-relaxed">
              Memberikan layanan hukum berkualitas tinggi melalui konsultasi dan bantuan hukum untuk 
              bisnis, instansi pemerintah, dan individu, dengan fokus pada peraturan dan kerangka 
              hukum yang berlaku di Republik Indonesia.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-6">Tim Kami</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Team Member */}
            <div className="text-center">
              <img
                src="path/to/team-member.jpg"
                alt="Team Member"
                className="rounded-full mx-auto mb-4 w-32 h-32 shadow-lg"
              />
              <h4 className="text-xl font-bold">John Doe</h4>
              <p className="text-gray-600">Partner</p>
            </div>
            {/* Repeat for other team members */}
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
