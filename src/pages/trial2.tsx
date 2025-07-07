export default function Trial2() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing dis placerat vestibulum lectus mauris.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:gap-x-16">
            <a
              href="#"
              className="flex gap-x-4 rounded-xl bg-indigo-600 px-4 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-indigo-700"
            >
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5 flex-none"
              >
                <path d="M8 1a.5.5 0 0 1 .5.5v11.634l3.03-3.03a.5.5 0 0 1 .707.708l-4.5 4.5a.5.5 0 0 1-.708 0l-4.5-4.5a.5.5 0 1 1 .708-.708L7.5 13.366V1.5A.5.5 0 0 1 8 1z" />
              </svg>
              <span>Watch demo</span>
            </a>
            <a
              href="#"
              className="flex gap-x-4 rounded-xl bg-white px-4 py-3.5 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5 flex-none"
              >
                <path d="M8 1a.5.5 0 0 1 .5.5v11.634l3.03-3.03a.5.5 0 0 1 .707.708l-4.5 4.5a.5.5 0 0 1-.708 0l-4.5-4.5a.5.5 0 1 1 .708-.708L7.5 13.366V1.5A.5.5 0 0 1 8 1z" />
              </svg>
              <span>Learn more</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
