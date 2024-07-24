"use client";

import { useEffect, useState } from "react";
import SEP2Model from "@/app/projects/SEP2Model";
import { Mdx } from "@/app/components/mdx"; // Import the Mdx component

// Define the Props type
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
      <div className="flex flex-row items-start justify-between p-8">
        <div className="w-1/3 h-96 sticky top-8 bg-white p-8 rounded-lg shadow-lg">
          <SEP2Model className="w-full h-full" />
        </div>
        <div className="w-2/3 bg-white p-8 rounded-lg shadow-lg ml-8">
          <article className="prose prose-zinc prose-quoteless">
            <Mdx code={project.body.code} />
          </article>
        </div>
      </div>
    </div>
  );
};

export default ClientComponent;