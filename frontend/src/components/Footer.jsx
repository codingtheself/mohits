export default function Footer({ className = "" }) {
  return (
    <footer
      className={`w-full border-t border-slate-900 bg-slate-950 py-6 text-center text-sm text-slate-500 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-bold text-slate-400">mohits</span>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
