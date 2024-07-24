"use client";

import { useEffect, useState } from "react";
import SEP2Model from "@/app/projects/SEP2Model";
import { Mdx } from "@/app/components/mdx"; // Import the Mdx component

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

  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden">
      <div className="flex flex-row items-start justify-between p-8 h-full">
        <div className="w-1/3 h-full sticky top-8 bg-white p-8 rounded-lg shadow-lg">
          <SEP2Model className="w-full h-full" />
          <div className="text-center mt-2">
            <p className="text-lg font-semibold">EVEBOT PrintPen Model</p>
          </div>
        </div>
        <div className="w-2/3 h-full bg-white p-8 rounded-lg shadow-lg ml-8 overflow-auto">
          <article className="prose prose-zinc prose-quoteless">
            <Mdx code={project.body.code} />
          </article>
        </div>
      </div>
    </div>
  );
};

export default ClientComponent;