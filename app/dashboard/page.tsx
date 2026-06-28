export default function Dashboard() {
  return (
    <div className="min-h-screen px-10 py-20">

      <h1 className="text-5xl font-black">
        Dashboard
      </h1>

      <p className="mt-4 text-zinc-400">
        Welcome to BigDataDaddy
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-12">

        <div className="glass-card p-8 rounded-3xl">
          <h3 className="text-2xl font-bold">
            Active Tasks
          </h3>

          <p className="text-5xl mt-4">
            0
          </p>
        </div>

        <div className="glass-card p-8 rounded-3xl">
          <h3 className="text-2xl font-bold">
            Earnings
          </h3>

          <p className="text-5xl mt-4">
            $0
          </p>
        </div>

        <div className="glass-card p-8 rounded-3xl">
          <h3 className="text-2xl font-bold">
            Completed Tasks
          </h3>

          <p className="text-5xl mt-4">
            0
          </p>
        </div>

      </div>

    </div>
  );
}