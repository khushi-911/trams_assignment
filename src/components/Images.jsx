import tram1 from "../assets/tram1.png";
import tram2 from "../assets/tram2.png";
import tram3 from "../assets/tram3.png";
import tram4 from "../assets/tram4.png";

export function Images() {
  const images = [
    { id: 1, src: tram1, alt: "image1" },
    { id: 2, src: tram2, alt: "image2" },
    { id: 3, src: tram3, alt: "image3" },
    { id: 4, src: tram4, alt: "image4" },
    { id: 5, src: tram2, alt: "image2" },
    { id: 6, src: tram2, alt: "image2" },
    { id: 7, src: tram2, alt: "image2" },
    { id: 8, src: tram2, alt: "image2" }
  ];

  return (
    <div className="img-section">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt={image.alt}
          className="header-images"
        />
      ))}
    </div>
  );
}