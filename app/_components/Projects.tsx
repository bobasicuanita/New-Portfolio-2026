export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full relative py-24 px-8 lg:py-30 lg:px-30"
    >
      <div>
        <h6 className="text-center md:text-left font-thin w-full text-sm text-(--gray-color) font-[nasalization] mb-16">
          004 | Projects
        </h6>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-xl text-blue-600 dark:text-cyan-500">
            Awesome projects coming soon...
          </h1>
          <p className="text-xs text-(--gray-color) dark:text-(--white-color)">
            You can check some educational and WIP projects on{" "}
            <a
              className="underline"
              href="https://github.com/bobasicuanita"
              target="_blank"
            >
              Github
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
