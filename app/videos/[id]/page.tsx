import { notFound } from "next/navigation";

export default async function VideoDetail({
  params,
}: {
  params: { id: string };
}) {
  const video = (await fetch(
    `http://localhost:3001/api/videos/${params.id}`
  ).then(function (res) {
    if (res.status === 404) {
      notFound();
    }

    return res.json();
  })) as {
    id: string;
    title: string;
    views: number;
    url: string;
  };

  return (
    <div>
      <h2 className="text-6xl text-neutral-100 mb-4">
        {video.title}
      </h2>
      <div>{video.views.toLocaleString()} views</div>
      <iframe
        className="mt-8"
        width="640"
        height="360"
        src={video.url}
      ></iframe>
    </div>
  );
}
