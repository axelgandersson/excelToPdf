import Header from "./components/Header.jsx";
import UploadFile from "./components/UploadFile.jsx";
import EditableTable from "./components/EditableTable.jsx";
import ExportButton from "./components/ExportButton.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-6 grid min-h-screen grid-rows-[auto_1fr_auto] gap-6">
        {/* Header */}
        <header className="rounded-2xl bg-emerald-100 p-4 shadow">
          <Header />
        </header>

        {/* Main */}
        <main className="grid gap-6">
          {/* Upload-sektion */}
          <section className="card">
            <UploadFile />
          </section>

          {/* Tabell-sektion */}
          <section className="card">
            <EditableTable />
            <div className="mt-4">
              <ExportButton />
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="rounded-2xl bg-emerald-100 p-4 text-sm text-center shadow">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
