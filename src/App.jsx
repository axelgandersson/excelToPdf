function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-6 grid min-h-screen grid-rows-[auto_1fr_auto] gap-6">
        {/* Header */}
        <header className="rounded-2xl bg-emerald-100 p-4 shadow">
          <h1>header</h1>
          <Header />
        </header>
      </div>
    </div>
  );
}

export default App;
