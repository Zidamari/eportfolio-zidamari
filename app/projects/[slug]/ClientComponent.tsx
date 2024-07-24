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
    <div className="relative">
      <SEP2ModelWrapper className="model-background" />
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div id="content" className="order-1 lg:order-2">
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