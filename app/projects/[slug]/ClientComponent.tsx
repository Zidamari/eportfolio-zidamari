"use client";

import { useEffect } from "react";
import SEP2ModelWrapper from "@/app/projects/SEP2ModelWrapper";
import { ReportView } from "./view";
import { Mdx } from "@/app/components/mdx"; // Import the Mdx component

type Props = {
  slug: string;
  project: any;
  views: number;
};

const ClientComponent = ({ slug, project, views }: Props) => {
  useEffect(() => {
    const handleScroll = () => {
      const model = document.getElementById("model");
      const content = document.getElementById("content");
      const scrollPosition = window.scrollY;

      if (model) {
        model.style.transform = `rotateY(${scrollPosition}deg)`;
      }

      if (content) {
        content.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <SEP2ModelWrapper className="model-background" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
          <ReportView slug={slug} />
          <article className="prose prose-zinc prose-quoteless">
            <Mdx code={project.body.code} />
          </article>
        </div>
      </div>
    </div>
  );
};

export default ClientComponent;