import Head from "next/head";


export default function Blog() {
  return (
    <>
      <Head>
        <title>Can Guden | Likes</title>
        <meta name="description" content="Blog" />
      </Head>
      <div className="max-w mx-auto font-semibold">
        <div>
          <p className="max-w-7xl mx-auto text-4xl lg:text-7xl leading-normal lg:leading-normal font-light text-gray-200">
Stuff I Like
          </p>
        </div>
      </div>
    </>
  );
}
