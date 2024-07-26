"use client";

import { useEffect, useState } from "react";
import SEP2Model from "@/app/projects/SEP2Model";
import { Mdx } from "@/app/components/mdx"; // Import the Mdx component
import Slider from "react-slick"; // Import the Slider component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  slug: string;
  project: any;
  views: number;
};

const ClientComponent = ({ slug, project, views }: Props) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative w-screen min-h-screen bg-white overflow-hidden">
      <div className="flex flex-col items-center justify-start p-8 space-y-8">
        <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
          <article className="prose prose-zinc prose-quoteless mx-auto">
            <Mdx code={project.body.code} />
          </article>
        </div>
        <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
          <SEP2Model className="w-full h-96" />
          <div className="text-center mt-2">
            <p className="text-lg font-semibold">EVEBOT PrintPen Model</p>
          </div>
        </div>
        <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
          <Slider {...sliderSettings}>
            <div>
              <img src="/path/to/image1.jpg" alt="Image 1" />
            </div>
            <div>
              <img src="/path/to/image2.jpg" alt="Image 2" />
            </div>
            <div>
              <img src="/path/to/image3.jpg" alt="Image 3" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ClientComponent;