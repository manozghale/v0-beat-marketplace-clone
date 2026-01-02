"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Share2, Play, Pause, SkipBack, SkipForward, Volume2, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BuyBeatsPage() {
  const [playing, setPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const router = useRouter() // add router for navigation

  const beats = [
    {
      id: 1,
      title: "EARTHSTAR | Chris Brown Type Beat",
      artist: "ianoBeatz",
      time: "02:51",
      bpm: 136,
      tags: ["sexy drill t...", "tory lanez ..."],
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=60&h=60&fit=crop",
    },
    {
      id: 2,
      title: "WHERE U COME FROM | Drake Type Beat",
      artist: "DrakeBeatz",
      time: "03:17",
      bpm: 136,
      tags: ["tory lanez ...", "21 savage ..."],
      image: "https://images.unsplash.com/photo-1470225457180-dba8ba36b745?w=60&h=60&fit=crop",
    },
    {
      id: 3,
      title: "STARCHAIN | EsDeekid Type Beat",
      artist: "EsDeekid",
      time: "02:36",
      bpm: 190,
      tags: ["esdeekid", "jerk type beat"],
      image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=60&h=60&fit=crop",
    },
    {
      id: 4,
      title: "BANDS FOR YOU | Drake Type Beat",
      artist: "DrakeBeatz",
      time: "03:38",
      bpm: 124,
      tags: ["tory lanez t...", "drake ty..."],
      image: "https://images.unsplash.com/photo-1493225457124-a3eb5292ceea?w=60&h=60&fit=crop",
    },
    {
      id: 5,
      title: "BLASTOISE | Don Toliver Type Beat",
      artist: "BeatMaker",
      time: "02:59",
      bpm: 134,
      tags: ["don toliver", "tory lanez"],
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=60&h=60&fit=crop",
    },
    {
      id: 6,
      title: "IN LONDON | Tory Lanez Type Beat",
      artist: "ToryProducer",
      time: "02:33",
      bpm: 138,
      tags: ["bryson tiler", "tory lanez"],
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=60&h=60&fit=crop",
    },
    {
      id: 7,
      title: "BRASSA | Central Cee",
      artist: "CentralBeatz",
      time: "02:20",
      bpm: 125,
      tags: ["central cee", "tory lanez"],
      image: "https://images.unsplash.com/photo-1508854879c8-f8c71b4a6f06?w=60&h=60&fit=crop",
    },
    {
      id: 8,
      title: "CITY CRUISIN | Drake Type Beat",
      artist: "DrakeBeatz",
      time: "03:12",
      bpm: 180,
      tags: ["bryson tiler", "tory lanez"],
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=60&h=60&fit=crop",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <div className="border-b border-gray-800 sticky top-0 z-10 bg-black">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-white mb-8 text-balance">Buy Beats</h1>

          {/* Filters */}
          <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
            <select className="px-4 py-2 bg-white text-black rounded font-semibold text-sm whitespace-nowrap cursor-pointer hover:bg-gray-100 transition-colors">
              <option>All Category</option>
            </select>
            <select className="px-4 py-2 bg-white text-black rounded font-semibold text-sm whitespace-nowrap cursor-pointer hover:bg-gray-100 transition-colors">
              <option>All Bpm</option>
            </select>
            <select className="px-4 py-2 bg-white text-black rounded font-semibold text-sm whitespace-nowrap cursor-pointer hover:bg-gray-100 transition-colors">
              <option>All Moods</option>
            </select>
            <select className="px-4 py-2 bg-white text-black rounded font-semibold text-sm whitespace-nowrap cursor-pointer hover:bg-gray-100 transition-colors">
              <option>All Genres</option>
            </select>
            <select className="px-4 py-2 bg-white text-black rounded font-semibold text-sm whitespace-nowrap cursor-pointer hover:bg-gray-100 transition-colors">
              <option>Default</option>
            </select>
            <select className="px-4 py-2 bg-white text-black rounded font-semibold text-sm whitespace-nowrap cursor-pointer hover:bg-gray-100 transition-colors">
              <option>Default List</option>
            </select>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="What type of track are you looking for?"
              className="w-full px-4 py-3 bg-white text-black rounded font-semibold text-sm placeholder-gray-500 focus:outline-none"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</div>
          </div>
        </div>

        {/* Table Header */}
        <div className="bg-black border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="grid grid-cols-12 gap-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              <div className="col-span-5">Title</div>
              <div className="col-span-1">Time</div>
              <div className="col-span-1">BPM</div>
              <div className="col-span-3">Tags</div>
              <div className="col-span-2 text-right">Price</div>
            </div>
          </div>
        </div>
      </div>

      {/* Beats List */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          {beats.map((beat, index) => (
            <div
              key={beat.id}
              onClick={() => {
                setCurrentTrack(index)
                router.push(`/beats/${beat.id}`) // navigate to beat detail page on click
              }}
              className="border-b border-gray-900 hover:bg-gray-900/50 transition-colors cursor-pointer"
            >
              <div className="px-6 py-4 grid grid-cols-12 gap-4 items-center">
                {/* Title */}
                <div className="col-span-5 flex items-center gap-3">
                  <img
                    src={beat.image || "/placeholder.svg"}
                    alt={beat.title}
                    className="w-12 h-12 rounded object-cover"
                  />
                  <div className="min-w-0">
                    <p className="font-bold text-sm truncate">{beat.title}</p>
                    <p className="text-xs text-gray-500">{beat.artist}</p>
                  </div>
                </div>

                {/* Time */}
                <div className="col-span-1 text-sm text-gray-400">{beat.time}</div>

                {/* BPM */}
                <div className="col-span-1 text-sm text-gray-400">{beat.bpm}</div>

                {/* Tags */}
                <div className="col-span-3 flex gap-2">
                  {beat.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-gray-800/60 text-xs text-gray-300 hover:bg-gray-700 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions and Price */}
                <div className="col-span-2 flex items-center justify-end gap-2">
                  <button className="p-2 hover:bg-gray-800 rounded transition-colors">
                    <Share2 size={16} className="text-gray-400" />
                  </button>
                  <Button className="bg-white text-black hover:bg-gray-100 font-bold px-4 py-2 h-auto text-sm rounded">
                    🛒 $34.99
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Browse All Tracks Button */}
      <div className="border-t border-gray-800 py-8 text-center">
        <Link href="/">
          <Button className="bg-white text-black hover:bg-gray-100 font-bold px-6 py-3 rounded text-base">
            BROWSE ALL TRACKS
          </Button>
        </Link>
      </div>

      {/* Player */}
      <div className="bg-black border-t border-gray-800 px-6 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-8">
          {/* Left: Track Info with Price and Share */}
          <div className="flex items-center gap-4 min-w-0 flex-shrink-0">
            {/* Track Thumbnail and Info */}
            <div className="flex items-center gap-3 min-w-0">
              <img
                src={beats[currentTrack].image || "/placeholder.svg"}
                alt="Now playing"
                className="w-12 h-12 rounded object-cover flex-shrink-0"
              />
              <div className="min-w-0">
                <p className="font-bold text-sm truncate">{beats[currentTrack].title}</p>
                <p className="text-xs text-gray-400">{beats[currentTrack].artist}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <button className="p-1.5 hover:bg-gray-800 rounded transition-colors">
                <Share2 size={16} className="text-gray-400" />
              </button>
              <Button className="bg-white text-black hover:bg-gray-100 font-bold px-3 py-1 h-auto text-sm rounded flex items-center gap-1">
                🛒 $34.99
              </Button>
            </div>
          </div>

          {/* Center: Playback Controls */}
          <div className="flex items-center justify-center gap-3 flex-shrink-0">
            <button className="p-1.5 hover:bg-gray-800 rounded transition-colors">
              <SkipBack size={16} className="text-white" fill="white" />
            </button>
            <button
              onClick={() => setPlaying(!playing)}
              className="p-2.5 bg-white hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
            >
              {playing ? (
                <Pause size={18} className="text-black" fill="black" />
              ) : (
                <Play size={18} className="text-black" fill="black" />
              )}
            </button>
            <button className="p-1.5 hover:bg-gray-800 rounded transition-colors">
              <SkipForward size={16} className="text-white" fill="white" />
            </button>
            <button className="p-1.5 hover:bg-gray-800 rounded transition-colors">
              <div className="text-gray-400 text-xs">🔀</div>
            </button>
          </div>

          {/* Right: Volume and Menu */}
          <div className="flex items-center gap-3 ml-auto flex-shrink-0">
            <Volume2 size={16} className="text-gray-400" />
            <div className="w-24 h-1 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-600 transition-colors">
              <div className="w-1/2 h-full bg-white rounded-full" />
            </div>
            <button className="p-1.5 hover:bg-gray-800 rounded transition-colors">
              <List size={16} className="text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
