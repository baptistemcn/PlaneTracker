import { NextSeo } from "next-seo";

export default function PlaneTracker() {
  return (
    <>
      <NextSeo title={"PlaneTracker - Work in Progress"} />

      <div className="min-h-screen">
        <div className="mx-auto flex min-h-screen w-full max-w-[1120px]  flex-col items-center justify-center px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <div className="lg:max-w-[80%]">
            <h1
              className="mb-5 text-4xl font-semibold md:text-8xl lg:mb-8"
              data-testid="title"
            >
              PlaneTracker
            </h1>
            <p className="mb-5 max-w-[528px] text-center text-xl text-[#636262] lg:mb-8">
              Coming soon...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
