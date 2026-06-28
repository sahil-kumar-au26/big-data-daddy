export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-4 gap-12">

          <div>
            <h3 className="text-2xl font-black">
              BIGDATADADDY
            </h3>

            <p className="mt-4 text-zinc-400">
              Human Intelligence For Artificial Intelligence.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Solutions
            </h4>

            <ul className="space-y-3 text-zinc-400">
              <li>RLHF</li>
              <li>Translation</li>
              <li>Annotation</li>
              <li>Transcription</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Company
            </h4>

            <ul className="space-y-3 text-zinc-400">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Contact
            </h4>

            <ul className="space-y-3 text-zinc-400">
              <li>info@bigdatadaddy.com</li>
              <li>India</li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-zinc-500">
          © 2026 BigDataDaddy. All rights reserved.
        </div>

      </div>

    </footer>
  );
}