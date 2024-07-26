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
    <div className="relative w-screen min-h-screen bg-white overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg mb-8">
        <article className="prose prose-zinc prose-quoteless mx-auto">
          <Mdx code={project.body.code} />
        </article>
      </div>
      <div className="w-full max-w-4xl h-96 bg-white p-8 rounded-lg shadow-lg">
        <SEP2Model className="w-full h-full" />
      </div>
    </div>
  );
};

export default ClientComponent;