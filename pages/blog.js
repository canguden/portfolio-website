import Head from "next/head";

const posts = [
  {
    title: "Pyramid of Success",
    href: "./john-wooden-pyramid",
    category: {
      name: "Article",
      href: "./john-wooden-pyramid",
      color: "bg-indigo-300 text-gray-800",
    },
    description:
      "John Wooden is one of the most successful leaders of all time and is seen as one of the best basketball coaches in basketball history. Here is his pyramid of success explained.",
    date: "Dec 10, 2022",
    datetime: "2020-12-10",
    author: {
      name: "Can Guden",
    },
    readingTime: "10 min",
  },
  {
    title: "Mamba Mentality by Kobe Bryant",
    href: "./mamba-mentality",
    category: {
      name: "Basketball",
      href: "./mamba-mentality",
      color: "bg-orange-300 text-gray-800",
    },
    description:
      "          Kobe Bryant was one of the best basketball players of all time and he was known for his unbelievable work ethic. He didnt have any friends, he basically was working out 24/7.",
    date: "Dec 10, 2022",
    datetime: "2020-12-10",
    author: {
      name: "Can Guden",
    },
    readingTime: "5 min",
  },
  {
    title: "The Pareto Principle",
    href: "./pareto-principle",
    category: { name: "Study", href: "#", color: "bg-green-300 text-gray-800" },
    description:
      "          The Pareto Principle, also known as the 80-20 rule, It is the idea that 20% of the effort, or input, leads to 80% of the results or output. The point of this principle is to recognise that most things in life are not distributed evenly.",
    date: "Feb 12, 2022",
    datetime: "2020-10-12",
    author: {
      name: "Can Guden",
    },
    readingTime: "8 min",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Blog() {
  return (
    <>
      <Head>
        <title>Can Guden | Blog</title>
        <meta name="description" content="Blog" />
      </Head>
      <div className="mt-10 max-w-xl mx-auto pb-20">
        <div className="relative mx-auto divide-y-2 divide-gray-200 lg:max-w-2xl">
          <div>
            <h1 className="mr-8 text-2xl font-bold decoration-none text-gray-800 dark:text-gray-300">
              Blog
            </h1>
            <p className="mt-3 text-lg font-semibold sm:mt-4">
              New post every sometimes
            </p>
          </div>
          <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-1 lg:gap-x-5 lg:gap-y-12">
            {posts.map((post) => (
              <div key={post.title}>
                <div>
                  <a href={post.category.href} className="inline-block">
                    <span
                      className={classNames(
                        post.category.color,
                        "inline-flex items-center px-3 py-0.5 rounded-full text-md font-medium"
                      )}
                    >
                      {post.category.name}
                    </span>
                  </a>
                </div>
                <a href={post.href} className="mt-4 block">
                  <p className="font-light text-lg text-gray-800 dark:text-gray-300">
                    {post.title}
                  </p>
                  <p className="mt-3 text-base font-bold text-gray-800 dark:text-gray-300">
                    {post.description}
                  </p>
                </a>
                <div className="mt-6 flex items-center text-gray-800 dark:text-gray-300">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                    </a>
                  </div>
                  <div className="">
                    <p className="text-md font-bold text-gray-800 dark:text-gray-300">
                      <a href={post.author.href}>{post.author.name}</a>
                    </p>
                    <div className="flex space-x-1 text-md font-bold text-black dark:text-gray-300">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
