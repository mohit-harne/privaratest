import Slideshow from "../../Components/Slideshow";
import p1 from "../../../public/img/carousel-7.jpg"

export default function Home() {
  const slides = [
    {
      image: p1,
      caption: "Caption Text"
    },

  ];

  return (
    <div>
      <Slideshow slides={slides} />
    </div>
  );
}