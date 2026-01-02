"use client"

import { useState } from "react"
import { Share2, Play, Pause, SkipBack, SkipForward, Volume2, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BeatsMarketplace() {
  const [playing, setPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)

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
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=60&h=60&fit=crop",
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
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=60&h=60&fit=crop",
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
  ]

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <div className="bg-black border-b border-gray-800 sticky top-0 z-10">
        <div className="max-w-full px-6 py-4">
          <div className="grid grid-cols-12 gap-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            <div className="col-span-5">Title</div>
            <div className="col-span-1">Time</div>
            <div className="col-span-1">BPM</div>
            <div className="col-span-3">Tags</div>
            <div className="col-span-2 text-right">Price</div>
          </div>
        </div>
      </div>

      {/* Beats List */}
      <div className="flex-1 overflow-y-auto">
        {beats.map((beat, index) => (
          <div
            key={beat.id}
            onClick={() => setCurrentTrack(index)}
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

      {/* Licensing Info Section */}
      <div className="bg-black border-t border-gray-800 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Licensing Info</h2>

          {/* License Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-12">
            {[
              {
                name: "MP3 License",
                price: "$34.99",
                popular: false,
                features: [
                  "Untagged High Quality MP3",
                  "100,000 Monetized",
                  "Audio/Video Streams",
                  "1000 Distribution Copies",
                  "Spotify, Apple, iTunes, etc",
                  "Must Credit 'Prod by ianoBeatz'",
                ],
              },
              {
                name: "Premium WAV",
                price: "$59.99",
                popular: true,
                features: [
                  "Untagged MP3 + WAV",
                  "250,000 Monetized",
                  "Audio/Video Streams",
                  "5,000 Distribution Copies",
                  "Spotify, Apple, iTunes, etc",
                  "Must Credit 'Prod by ianoBeatz'",
                ],
              },
              {
                name: "Unlimited WAV",
                price: "$99.99",
                popular: false,
                features: [
                  "Untagged MP3 + WAV",
                  "Unlimited Monetized",
                  "Audio/Video Streams",
                  "5,000 Distribution Copies",
                  "Spotify, Apple, iTunes, etc",
                  "Must Credit 'Prod by ianoBeatz'",
                ],
              },
              {
                name: "Premium Trackouts",
                price: "$119.99",
                popular: false,
                features: [
                  "Untagged MP3 + WAV + STEMS",
                  "500,000 Monetized",
                  "Audio/Video Streams",
                  "5,000 Distribution Copies",
                  "Spotify, Apple, iTunes, etc",
                  "Must Credit 'Prod by ianoBeatz'",
                ],
              },
              {
                name: "Unlimited + Trackouts",
                price: "$249.99",
                popular: false,
                features: [
                  "Untagged MP3 + WAV + STEMS",
                  "Good for mixing and mastering",
                  "1 Million adding sounds to the track",
                  "Unlimited Monetized",
                  "Audio/Video Streams",
                  "Unlimited Distribution Copies",
                  "Spotify, Apple, iTunes, etc",
                  "Must Credit 'Prod by ianoBeatz'",
                ],
              },
              {
                name: "Exclusive Rights",
                price: "MAKE AN OFFER",
                popular: false,
                features: ["No other artists can buy the beat", "You own the beat"],
                contact: "info@ianobeatz.com",
              },
            ].map((license, i) => (
              <div
                key={i}
                className={`rounded p-6 flex flex-col justify-between ${
                  license.popular
                    ? "bg-white text-black ring-2 ring-white"
                    : "bg-gray-900 text-white border border-gray-800"
                }`}
              >
                {license.popular && <div className="text-center mb-4 font-bold text-sm">⭐ POPULAR</div>}

                <div>
                  <h3 className="font-bold text-center mb-3">{license.name}</h3>
                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold">{license.price}</div>
                  </div>

                  {license.contact && <p className="text-xs text-center mb-4">{license.contact}</p>}

                  {license.features && (
                    <ul className="text-xs space-y-2 mb-6">
                      {license.features.map((feature, j) => (
                        <li key={j} className="text-center">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div>
                  <button
                    className={`w-full font-bold py-2 rounded text-sm transition-colors ${
                      license.popular
                        ? "bg-black text-white hover:bg-gray-800"
                        : "bg-white text-black hover:bg-gray-100"
                    }`}
                  >
                    {license.price === "MAKE AN OFFER" ? license.price : "READ LICENSE"}
                  </button>

                  {!license.contact && (
                    <div className="text-xs text-center mt-3 text-gray-400 font-semibold">Bulk deals:</div>
                  )}
                  {!license.contact && (
                    <div className="text-xs text-center text-gray-400 mt-2 space-y-1">
                      <p>BUY 1 TRACK, GET 1 FREE!</p>
                      <p>BUY 2 TRACKS, GET 3 FREE!</p>
                      <p>BUY 3 TRACKS, GET 3 FREE!</p>
                    </div>
                  )}
                  {license.contact && (
                    <div className="text-xs text-center mt-3">
                      No other artists can buy the beat.
                      <p className="mt-1">You own the beat.</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Browse All Tracks button section */}
      <div className="border-t border-gray-800 py-8 text-center">
        <Link href="/beats">
          <Button className="bg-white text-black hover:bg-gray-100 font-bold px-6 py-3 rounded text-base">
            BROWSE ALL TRACKS
          </Button>
        </Link>
      </div>

      {/* Player */}
      <div className="bg-gray-900 border-t border-gray-800 px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Track Info */}
          <div className="flex items-center gap-3 min-w-0 w-64">
            <img
              src={beats[currentTrack].image || "/placeholder.svg"}
              alt="Now playing"
              className="w-14 h-14 rounded object-cover flex-shrink-0"
            />
            <div className="min-w-0">
              <p className="font-bold text-sm truncate">{beats[currentTrack].title}</p>
              <p className="text-xs text-gray-500">{beats[currentTrack].artist}</p>
            </div>
          </div>

          {/* Player Controls */}
          <div className="flex items-center justify-center gap-4">
            <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
              <Share2 size={18} className="text-gray-400" />
            </button>
            <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
              <SkipBack size={18} className="text-white" />
            </button>
            <button
              onClick={() => setPlaying(!playing)}
              className="p-3 bg-white hover:bg-gray-100 rounded-full transition-colors"
            >
              {playing ? <Pause size={20} className="text-black" /> : <Play size={20} className="text-black" />}
            </button>
            <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
              <SkipForward size={18} className="text-white" />
            </button>
            <button className="p-2 hover:bg-gray-700 rounded transition-colors">
              <div className="text-gray-400 text-xs">🔀</div>
            </button>
          </div>

          {/* Volume */}
          <div className="flex items-center gap-3 ml-auto">
            <Volume2 size={18} className="text-gray-400" />
            <div className="w-32 h-1 bg-gray-700 rounded-full">
              <div className="w-1/2 h-full bg-white rounded-full" />
            </div>
            <button className="p-2 hover:bg-gray-700 rounded transition-colors">
              <List size={18} className="text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
