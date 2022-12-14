import Link from "next/link";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const videos = (await fetch(
    "http://localhost:3001/api/videos"
  ).then((res) => res.json())) as {
    id: number;
    title: string;
  }[];

  return (
    <div className="flex">
      <aside className="w-80 mr-16 shrink-0">
        <h1 className="text-6xl text-neutral-100">
          Videos
        </h1>
        <div className="mt-12 flex flex-col gap-6 text-neutral-100">
          {videos.map((video) => (
            <Link
              key={video.id}
              href={`/videos/${video.id}`}
            >
              {video.title}
            </Link>
          ))}
        </div>
      </aside>
      <div>{children}</div>
    </div>
  );
}
