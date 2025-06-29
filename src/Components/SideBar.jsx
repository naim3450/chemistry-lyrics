import { Button } from '@mui/material'
import React from 'react'

const SideBar = () => {
    return (
        <div>
            <aside className="w-20 h-full bg-[#232526] border-r border-[#2D2F31] flex flex-col items-center py-8 space-y-8 rounded-r-3xl shadow-lg">
                <div className="text-2xl font-bold mb-8">🧪</div>
                <Button variant="text" className="!min-w-0 !p-0" title="Search">
                    <span role="img" aria-label="search" className="text-2xl">🔍</span>
                </Button>
                <Button variant="text" className="!min-w-0 !p-0" title="Library">
                    <span role="img" aria-label="library" className="text-2xl">🎵</span>
                </Button>
                <Button variant="text" className="!min-w-0 !p-0" title="Playlists">
                    <span role="img" aria-label="playlist" className="text-2xl">📂</span>
                </Button>
                <Button variant="text" className="!min-w-0 !p-0" title="Settings">
                    <span role="img" aria-label="settings" className="text-2xl">⚙️</span>
                </Button>
            </aside>
        </div>
    )
}

export default SideBar