import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";
import SEP2ModelWrapper from "@/app/projects/SEP2ModelWrapper"; // Correct import path
import { useEffect } from "react";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

const redis = Redis.fromEnv();

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allProjects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const project = allProjects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  const views =
    (await redis.get<number>(["pageviews", "projects", slug].join(":"))) ?? 0;

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
    <div className="bg-zinc-50 min-h-screen">
      <Header project={project} views={views} />
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div id="model" className="order-2 lg:order-1">
          <SEP2ModelWrapper /> {/* Place the model in the first column */}
        </div>
        <div id="content" className="order-1 lg:order-2">
          <ReportView slug={project.slug} />
          <article className="prose prose-zinc prose-quoteless">
            <Mdx code={project.body.code} />
          </article>
        </div>
      </div>
    </div>
  );
}