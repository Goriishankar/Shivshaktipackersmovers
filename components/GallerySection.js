export default function GallerySection() {
  const images = [
    "assets/img/gallery/g1.webp",
    "assets/img/gallery/g2.webp",
    "assets/img/gallery/g3.webp",
    "assets/img/gallery/g4.webp",
    "assets/img/gallery/g5.webp",
    "assets/img/gallery/g6.webp",
    "assets/img/gallery/g7.webp",
    "assets/img/gallery/g8.webp",
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            Our Work
          </span>

          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Recent Moving Gallery
          </h2>
        </div>

        <div className="gallery-grid">
          {images.map((src, index) => (
            <div className="gallery-item" key={index}>
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="gallery-img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
