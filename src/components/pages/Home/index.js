import React, { useState, useEffect, useRef } from "react";


const Home = () => {
  const [inView, setInView] = useState(false);
  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }

    // Scroll to top visibility
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrollToTopVisible(true);
      } else {
        setScrollToTopVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
    };
  }, []);

  // Handle smooth scroll
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      });
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main>
      <section className="hero-header">
        <div className="hero-content">
          <h1>
            Panduan Lengkap
            <br />
            Manfaat dan Perawatan Tomat
          </h1>
          <p>
            Mulai dari kandungan antioksidan hingga vitamin, tomat memiliki
            segudang manfaat. Ketahui juga cara merawatnya agar tanaman tomat
            Anda tumbuh subur.
          </p>
        </div>
      </section>

      <section className="about py-5" id="about" ref={aboutSectionRef}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-start">
                  <img
                    className={`img-fluid rounded w-100 ${
                      inView ? "slideInLeft" : ""
                    }`}
                    src="img/tomat1.jpg"
                    alt="Tomat 1"
                    loading="lazy"
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className={`img-fluid rounded w-75 ${
                      inView ? "slideInLeft" : ""
                    }`}
                    src="img/tomat2.jpg"
                    alt="Tomat 2"
                    style={{ marginTop: "25%" }}
                    loading="lazy"
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className={`img-fluid rounded w-75 ${
                      inView ? "slideInRight" : ""
                    }`}
                    src="img/tomat3.jpeg"
                    alt="Tomat 3"
                    loading="lazy"
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className={`img-fluid rounded w-100 ${
                      inView ? "slideInRight" : ""
                    }`}
                    src="img/tomat4.jpg"
                    alt="Tomat 4"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="about-section-title ff-secondary text-start text-primary fw-normal">
                Tentang Kami
              </h5>
              <h1 className="mb-4">Welcome to Tomatik</h1>
              <p className="mb-4">
                Tomatik hadir untuk memberikan Anda informasi lengkap tentang
                manfaat kesehatan dari tomat. Dari meningkatkan daya tahan tubuh
                hingga mendukung kesehatan kulit, tomat adalah buah yang kaya
                akan manfaat yang baik untuk kesehatan Anda.
              </p>
              <p className="mb-4">
                Menyediakan panduan perawatan tomat yang praktis dan mudah. Baik
                Anda seorang pemula ataupun penghobi tanaman, panduan kami akan
                membantu Anda menumbuhkan tomat yang sehat dan subur di rumah.
              </p>
              <button
                className="btn-readmore py-3 px-5 mt-2"
                onClick={openModal} // Perbaikan di sini
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery py-5" id="gallery">
        <div className="container">
          <h2 className="text-center mb-4">Gallery Tomat</h2>
          <h3 className="text-center mb-4">
            Tomat yang populer di berbagai negara
          </h3>
          <div className="row g-4">
            <div className="col-md-4">
              <img
                src="img/tomatroma.jpeg"
                alt="Tomat Roma"
                className="img-fluid rounded"
                loading="lazy"
              />
              <h5 className="text-center mt-2">Tomat Roma (Italia)</h5>
              <p className="text-center">
                Tomat Roma, terkenal di Italia, sering digunakan untuk membuat
                saus dan pasta.
              </p>
            </div>
            <div className="col-md-4">
              <img
                src="img/tomatbeefsteak.jpeg"
                alt="BeefSteak tomat"
                className="img-fluid rounded"
                loading="lazy"
              />
              <h5 className="text-center mt-2">
                Tomat Beefsteak (Amerika Serikat)
              </h5>
              <p className="text-center">
                Tomat Beefsteak, asal Amerika Serikat, dikenal dengan ukurannya
                yang besar dan dagingnya yang padat.
              </p>
            </div>
            <div className="col-md-4">
              <img
                src="img/tomatjepang.jpeg"
                alt="Tomat Cerry Jepang"
                className="img-fluid rounded"
                loading="lazy"
              />
              <h5 className="text-center mt-2">Tomat Ceri (Jepang)</h5>
              <p className="text-center">
                Tomat ceri, populer di Jepang, memiliki rasa manis dan sering
                digunakan dalam salad atau sebagai camilan.
              </p>
            </div>
            <div className="col-md-4">
              <img
                src="img/tomatmarzano.jpeg"
                alt="Tomat Marzano"
                className="img-fluid rounded"
                loading="lazy"
              />
              <h5 className="text-center mt-2">Tomat San Marzano (Italia)</h5>
              <p className="text-center">
                Tomat San Marzano, berasal dari Italia, terkenal dengan rasa
                manis dan rendah keasamannya, cocok untuk saus tomat.
              </p>
            </div>
            <div className="col-md-4">
              <img
                src="img/tomatceryprancis.jpeg"
                alt="Tomat Cerry Prancis"
                className="img-fluid rounded"
                loading="lazy"
              />
              <h5 className="text-center mt-2">Tomat Cherry (Prancis)</h5>
              <p className="text-center">
                Tomat cherry, yang banyak ditemukan di Prancis, sangat manis dan
                sering digunakan dalam salad segar.
              </p>
            </div>
            <div className="col-md-4">
              <img
                src="img/tomatkumato.jpeg"
                alt="Tomat Kumato"
                className="img-fluid rounded"
                loading="lazy"
              />
              <h5 className="text-center mt-2">Tomat Kumato (Spanyol)</h5>
              <p className="text-center">
                Tomat Kumato, khas dari Spanyol, memiliki warna coklat gelap
                dengan rasa yang lebih manis dan kaya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>More Info About Tomatoes</h2>
            <p>Here is some detailed information...</p>
          </div>
        </div>
      )}

      {scrollToTopVisible && (
        <button onClick={scrollToTop} className="scroll-to-top">
          ↑
        </button>
      )}

      <style jsx>{`
        .hero-header {
          position: relative;
          height: 100vh;
          background: linear-gradient(
              rgba(0, 0, 0, 0.603),
              rgba(0, 0, 0, 0.616)
            ),
            url(./img/bg1.jpg) no-repeat center center/cover;
          display: flex;
          align-items: center;
          justify-content: left;
          color: #ffffff;
          text-align: left important;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          padding: 20px;
        }
        .hero-header h1 {
          font-size: 3em;
          font-weight: bold;
          margin-bottom: 15px;
          color: #fofofo;
          text-shadow: 2px 2px 4px black;
        }
        .hero-header p {
          font-size: 1.2em;
          margin-bottom: 20px;
          color: #f0f0f0;
          padding: 5px;
        }
        .btn {
          background-color: #ff2222;
          color: #ffffff;
          padding: 12px 30px;
          font-size: 1em;
          text-decoration: none;
          transition: all 0.15s ease;
        }
        .btn:hover {
          background-color: #1a9728;
        }
        .about-section-title {
          font-size: 1.8em;
          font-weight: bold;
          color: #ff0000 !important;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-align: left;
          margin-bottom: 20px;
        }
        .about {
          padding: 50px 0;
          background-color: #f4f4f4;
        }
        .about h1 {
          font-size: 2.5em;
          color: #45a049;
        }
        .about p {
          font-size: 1.1em;
          line-height: 1.6;
          color: #666666;
          margin-top: 20px;
        }
        .btn-readmore {
          background-color: #ff2600;
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 1rem;
          border-radius: 5px;
          text-align: center;
          transition: background-color 0.3s ease;
        }
        .btn-readmore:hover {
          background-color: #45a049;
          color: white;
        }

        .gallery {
          background-color: #f3f4f6;
          padding: 50px 0;
        }

        .gallery h2 {
          font-size: 2.8em;
          color: #b22222;
          text-align: center;
          margin-bottom: 40px;
          font-weight: bold;
          letter-spacing: 2px;
          position: relative;
        }

        .gallery .row {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }

        /* Deskripsi gambar di galeri */
        .gallery p {
          font-size: 1em;
          line-height: 1.6;
          color: #555;
          text-align: center;
          margin-top: 10px;
        }

        .gallery h5 {
          font-size: 1.2em;
          font-weight: bold;
          margin-top: 10px;
          color: #b22222;
        }

        .gallery .col-md-4 {
          position: relative;
          width: 100%;
          max-width: 250px; /* Kurangi ukuran maksimal elemen */
          margin: 10px; /* Sesuaikan jarak antar elemen */
          overflow: hidden;
          border-radius: 10px; /* Buat sudut lebih kecil */
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Lebih halus */
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .gallery h2::before,
        .gallery h2::after {
          content: "";
          position: absolute;
          top: 50%;
          width: 50px;
          height: 3px;
          background-color: #b22222;
          transform: translateY(-50%);
        }

        .gallery h2::before {
          left: 320px;
        }

        .gallery h2::after {
          right: 320px;
        }

        .gallery .img-fluid {
          width: 100%;
          height: auto;
          border-radius: 10px; /* Samakan dengan elemen container */
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .gallery .col-md-4:hover .img-fluid {
          transform: scale(1.05); /* Skala sedikit lebih kecil */
          filter: brightness(1.1) contrast(1.05);
        }

        .gallery .col-md-4:hover {
          transform: translateY(-5px); /* Kurangi efek hover */
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
        }

        .gallery .col-md-4 {
          position: relative;
          max-width: 300px; /* Ukuran optimal */
          margin: 15px;
          border-radius: 15px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .gallery .col-md-4 .text-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.3)
          );
          color: white;
          text-align: center;
          padding: 20px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gallery .col-md-4:hover .text-overlay {
          opacity: 1;
        }

        .gallery .text-overlay h5 {
          font-size: 1.4em;
          margin-bottom: 10px;
          color: #ffdf00;
        }

        .gallery p {
          font-size: 0.9em; /* Kurangi ukuran font */
          line-height: 1.4; /* Jarak antar baris tetap */
          color: #555;
          text-align: center;
        }

        .gallery .text-overlay p {
          font-size: 0.9em;
          line-height: 1.4;
          color: #ffffff;
        }

        .gallery h5 {
          font-size: 1em; /* Kurangi ukuran font */
          margin-top: 10px; /* Sesuaikan jarak atas */
          color: #b22222;
        }

        @media (max-width: 768px) {
          .gallery .col-md-4 {
            max-width: 180px; /* Lebih kecil di layar kecil */
          }
        }

        @media (min-width: 769px) {
          .gallery .col-md-4 {
            width: 25%; /* Kurangi lebar default untuk layar besar */
          }
        }

        .slideInLeft {
          opacity: 0;
          transform: translateX(-100%);
          animation: slideInLeft 2.5s forwards;
        }
        .slideInRight {
          opacity: 0;
          transform: translateX(100%);
          animation: slideInRight 2.5s forwards;
        }
        @keyframes slideInLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .scroll-to-top {
          position: fixed;
          bottom: 50px;
          right: 20px;
          background-color: #45a049;
          color: white;
          border: none;
          border-radius: 50%;
          padding: 15px;
          font-size: 20px;
          cursor: pointer;
          z-index: 1000;
        }
        .scroll-to-top:hover {
          background-color: #ff2600;
        }
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-content {
          background-color: #fff;
          padding: 20px;
          border-radius: 10px;
          width: 60%;
          max-width: 600px;
          text-align: center;
        }
        .close {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 2rem;
          color: #000;
          cursor: pointer;
        }
      `}</style>
    </main>
  );
};

export default Home;
