import contentful from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import type { ReactNode } from "react";

interface Props {
  params: { slug: string };
}

function getClient() {
  if (!process.env.SPACE || !process.env.ACCESS_TOKEN) return null;
  return contentful.createClient({
    space: process.env.SPACE,
    environment: "master",
    accessToken: process.env.ACCESS_TOKEN,
  });
}

async function getEntry(slug: string) {
  const client = getClient();
  if (!client) return { document: null, imageUrl: "", date: "" };

  const entry = await client.getEntry(slug);
  const document = entry.fields.content as unknown;
  const imageUrl = `https:${(entry.fields.image as { fields: { file: { url: string } } }).fields.file.url}`;
  const date = entry.fields.date as string;
  return { document, imageUrl, date };
}

export default async function NewsDetail({ params }: Props) {
  const { document, imageUrl, date } = await getEntry(params.slug);

  if (!document) {
    return (
      <main className="relative z-[1] mx-10 lg:mx-72 my-10 text-center">
        <p className="text-content-muted">News article not available.</p>
      </main>
    );
  }

  const Heading = ({ children }: { children: ReactNode }) => (
    <h1 className="font-display text-3xl font-bold text-content-primary">
      {children}
    </h1>
  );
  const Paragraph = ({ children }: { children: ReactNode }) => (
    <p className="text-content-secondary leading-loose py-4">{children}</p>
  );

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node: unknown, children: ReactNode) => (
        <Paragraph>{children}</Paragraph>
      ),
      [BLOCKS.HEADING_1]: (_node: unknown, children: ReactNode) => (
        <Heading>{children}</Heading>
      ),
    },
  };

  return (
    <main className="relative z-[1] mx-10 lg:mx-72 my-10 text-justify">
      <div className="text-content-muted text-sm mb-4">{date}</div>
      {documentToReactComponents(
        document as Parameters<typeof documentToReactComponents>[0],
        options
      )}
      {imageUrl && (
        <img
          src={imageUrl}
          className="w-1/2 mx-auto rounded-[14px]"
          alt=""
        />
      )}
    </main>
  );
}
