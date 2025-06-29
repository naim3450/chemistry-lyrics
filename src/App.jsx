import SideBar from './Components/SideBar'
import BasePart from './Components/BasePart'
import Footer from './Components/Footer'

const App = () => {

  return (
    <div className="min-h-screen bg-[#181A1B] text-white font-sans flex flex-col">

      <div className="flex flex-1">
        {/* Sidebar */}
        <SideBar />

        {/* Main Content */}
        <main className="flex-1 flex flex-col px-8 py-6 bg-[#181A1B]">
          {/* Top Bar */}
          <header className="flex items-center justify-between mb-6">
            <div className="text-2xl font-bold flex items-center gap-2 text-white">
              Lyrical Elements
            </div>
            <div className="text-sm text-gray-400">Beta Version</div>
          </header>

          <BasePart />
        </main>
      </div>

      {/* Bottom Player Bar */}
      <Footer />
    </div>
  )
}

export default App