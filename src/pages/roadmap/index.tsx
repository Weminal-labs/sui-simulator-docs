export const Roadmap = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 md:py-16 lg:py-20">
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">In Progress</h2>
          <div className="mt-4 grid gap-4">
            <div className="flex items-start gap-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
                <LoaderPinwheelIcon className="h-5 w-5 animate-spin" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium">
                  Implement new settings UI
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Redesign the settings page to be more user-friendly and
                  intuitive.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
                <LoaderPinwheelIcon className="h-5 w-5 animate-spin" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium">
                  Add support for custom keybindings
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Allow users to customize the keybindings for the extension's
                  commands.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Next Planned</h2>
          <div className="mt-4 grid gap-4">
            <div className="flex items-start gap-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-white">
                <CalendarIcon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium">
                  Improve performance for large projects
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Optimize the extension's performance to handle larger
                  codebases more efficiently.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-white">
                <CalendarIcon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium">
                  Add support for remote development
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Allow users to use the extension in a remote development
                  environment.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Completed</h2>
          <div className="mt-4 grid gap-4">
            <div className="flex items-start gap-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
                <CheckIcon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium">
                  Implement code formatting support
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Add the ability to automatically format code within the
                  editor.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
                <CheckIcon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium">
                  Improve the extension's error handling
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Enhance the extension's ability to gracefully handle errors
                  and provide better feedback to users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function LoaderPinwheelIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12c0-2.8 2.2-5 5-5s5 2.2 5 5 2.2 5 5 5 5-2.2 5-5" />
      <path d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" />
      <path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}
