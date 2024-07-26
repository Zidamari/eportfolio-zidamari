"use client";

import { useEffect, useState } from "react";
import SEP2Model from "@/app/projects/SEP2Model";
import { Mdx } from "@/app/components/mdx"; // Import the Mdx component
import Slider from "react-slick"; // Import the Slider component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { Download } from "lucide-react";

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

  const downloads = [
    { label: "File 1 (PDF)", href: "/downloads/file1.pdf" },
    { label: "File 2 (DOCX)", href: "/downloads/file2.docx" },
    { label: "File 3 (JPG)", href: "/downloads/file3.jpg" },
    { label: "File 4 (MP4)", href: "/downloads/file4.mp4" },
    { label: "File 5 (ZIP)", href: "/downloads/file5.zip" },
  ];

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
        <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Downloadable Files</h2>
          <div className="flex flex-col space-y-4">
            {downloads.map((file) => (
              <Link key={file.label} href={file.href} className="flex items-center space-x-2 text-blue-600 hover:underline">
                <Download size={20} />
                <span>{file.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientComponent;