import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";
import SEP2Model from "@/app/projects/SEP2Model"; // Import the SEP2Model component

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

  return (
    <div className="min-h-screen">
      <Header project={project} views={views} />
      <ReportView slug={project.slug} />

      <div className="flex flex-col items-center justify-center mx-auto space-y-4 max-w-7xl">
        <div className="flex flex-row w-full space-x-4">
          <div className="w-1/3 p-4">
            <SEP2Model className="w-full h-auto" />
          </div>
          <div className="w-2/3 p-4">
            <article className="prose prose-zinc prose-quoteless">
              <Mdx code={project.body.code} />
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}