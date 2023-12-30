import { NextSeo } from "next-seo";

export default function PlaneTracker() {
  return (
    <>
      <NextSeo title={"PlaneTracker - Work in Progress"} />
      <div className="flex min-h-screen flex-row  items-center justify-center">
        <h1 className="text-3xl font-bold underline" data-testid="title">
          PlaneTracker
        </h1>
      </div>
    </>
  );
}
