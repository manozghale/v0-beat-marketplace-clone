"use client"

import { useState } from "react"
import { Share2, Play, Pause, SkipBack, SkipForward, Volume2, List, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

// Sample beat data
const beatsData = [
  {
    id: 1,
    title: "EARTHSTAR | Chris Brown Type Beat",
    artist: "ianoBeatz",
    time: "02:51",
    bpm: 136,
    date: "December 30, 2025",
    tags: ["sexy drill type b...", "tory lanez type ...", "drake type beat"],
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop",
    description:
      "BUY 1, GET 1 FREE. Add 2 beats in cart to apply 1+1 discount. For any Profit Use (Spotify, etc.) you need a license.",
  },
  {
    id: 2,
    title: "WHERE U COME FROM | Drake Type Beat",
    artist: "DrakeBeatz",
    time: "03:17",
    bpm: 136,
    date: "December 29, 2025",
    tags: ["tory lanez ...", "21 savage ..."],
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
    description:
      "BUY 1, GET 1 FREE. Add 2 beats in cart to apply 1+1 discount. For any Profit Use (Spotify, etc.) you need a license.",
  },
  {
    id: 3,
    title: "STARCHAIN | EsDeekid Type Beat",
    artist: "EsDeekid",
    time: "02:36",
    bpm: 190,
    date: "December 28, 2025",
    tags: ["esdeekid", "jerk type beat"],
    image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=400&fit=crop",
    description:
      "BUY 1, GET 1 FREE. Add 2 beats in cart to apply 1+1 discount. For any Profit Use (Spotify, etc.) you need a license.",
  },
]

const relatedBeats = [
  {
    id: 10,
    title: "8PM IN AMSTERDAM | Drake Type Beat",
    artist: "DrakeBeatz",
    time: "02:38",
    bpm: 164,
    tags: ["drake", "drake type beat"],
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=60&h=60&fit=crop",
  },
  {
    id: 11,
    title: "AMG | Drake Type Beat",
    artist: "DrakeBeatz",
    time: "02:47",
    bpm: 138,
    tags: ["drake", "drake type beat"],
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=60&h=60&fit=crop",
  },
  {
    id: 12,
    title: "PASSION | Drake Type Beat",
    artist: "DrakeBeatz",
    time: "03:23",
    bpm: 132,
    tags: ["drake", "drake type beat"],
    image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=60&h=60&fit=crop",
  },
  {
    id: 13,
    title: "CALM DAY | Drake Type Beat",
    artist: "DrakeBeatz",
    time: "03:22",
    bpm: 133,
    tags: ["drake", "drake type beat"],
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=60&h=60&fit=crop",
  },
  {
    id: 14,
    title: "KING ICEMAN | Drake Type Beat",
    artist: "DrakeBeatz",
    time: "03:09",
    bpm: 142,
    tags: ["drake", "drake type beat"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=60&h=60&fit=crop",
  },
]

export default function BeatDetailPage({ params }: { params: { id: string } }) {
  const [playing, setPlaying] = useState(false)
  const [activeTab, setActiveTab] = useState("related")
  const [comment, setComment] = useState("")
  const router = useRouter()

  const beat = beatsData.find((b) => b.id === Number.parseInt(params.id)) || beatsData[0]

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Back Button */}
          <button onClick={() => router.back()} className="text-gray-400 hover:text-white mb-6 text-sm font-semibold">
            ← Back
          </button>

          {/* Beat Header */}
          <div className="flex gap-8 mb-12">
            {/* Image */}
            <div className="flex-shrink-0">
              <img src={beat.image || "/placeholder.svg"} alt={beat.title} className="w-48 h-48 rounded object-cover" />
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-start gap-4 mb-4">
                <button className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors flex-shrink-0">
                  <Play size={24} className="text-black" fill="black" />
                </button>
                <div>
                  <h1 className="text-3xl font-bold mb-2 text-balance">{beat.title}</h1>
                  <p className="text-gray-400 text-sm mb-3">{beat.artist}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="bg-white text-black px-2 py-1 rounded font-semibold">BPM {beat.bpm}</span>
                    <span className="flex items-center gap-1">⏰ {beat.date}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-300 mb-6">{beat.description}</p>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 mb-6">
                <Button className="bg-white text-black hover:bg-gray-100 font-bold px-6 py-2 h-auto rounded">
                  🛒 $34.99
                </Button>
                <button className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded transition-colors flex items-center gap-2">
                  <Share2 size={16} />
                  SHARE
                </button>
              </div>

              {/* Tags */}
              <div className="flex gap-2 flex-wrap">
                {beat.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-gray-800/60 text-xs text-gray-300 hover:bg-gray-700 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Comment Section */}
          <div className="border-t border-gray-800 py-8 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex-shrink-0" />
              <div className="flex-1 flex items-center gap-4">
                <input
                  type="text"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Write a comment..."
                  className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm"
                />
                <div className="text-gray-400 text-xs">{comment.length}/240</div>
                <button className="px-4 py-2 bg-white text-black hover:bg-gray-100 font-semibold rounded transition-colors">
                  SEND
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-800 mb-8">
            <div className="flex gap-8">
              <button
                onClick={() => setActiveTab("related")}
                className={`pb-4 font-semibold text-sm uppercase ${
                  activeTab === "related" ? "text-white border-b-2 border-white" : "text-gray-500 hover:text-gray-300"
                }`}
              >
                Related Tracks
              </button>
              <button
                onClick={() => setActiveTab("comments")}
                className={`pb-4 font-semibold text-sm uppercase ${
                  activeTab === "comments" ? "text-white border-b-2 border-white" : "text-gray-500 hover:text-gray-300"
                }`}
              >
                Comments
              </button>
            </div>
          </div>

          {/* Related Tracks */}
          {activeTab === "related" && (
            <div>
              <div className="mb-4">
                <div className="grid grid-cols-12 gap-4 text-xs font-semibold text-gray-400 uppercase tracking-wider px-4">
                  <div className="col-span-5">Title</div>
                  <div className="col-span-1">Time</div>
                  <div className="col-span-1">BPM</div>
                  <div className="col-span-3">Tags</div>
                  <div className="col-span-2 text-right">Price</div>
                </div>
              </div>

              {relatedBeats.map((relatedBeat) => (
                <div
                  key={relatedBeat.id}
                  onClick={() => router.push(`/beats/${relatedBeat.id}`)}
                  className="border-b border-gray-900 hover:bg-gray-900/50 transition-colors cursor-pointer"
                >
                  <div className="px-4 py-4 grid grid-cols-12 gap-4 items-center">
                    {/* Title */}
                    <div className="col-span-5 flex items-center gap-3">
                      <img
                        src={relatedBeat.image || "/placeholder.svg"}
                        alt={relatedBeat.title}
                        className="w-12 h-12 rounded object-cover"
                      />
                      <div className="min-w-0">
                        <p className="font-bold text-sm truncate">{relatedBeat.title}</p>
                        <p className="text-xs text-gray-500">{relatedBeat.artist}</p>
                      </div>
                    </div>

                    {/* Time */}
                    <div className="col-span-1 text-sm text-gray-400">{relatedBeat.time}</div>

                    {/* BPM */}
                    <div className="col-span-1 text-sm text-gray-400">{relatedBeat.bpm}</div>

                    {/* Tags */}
                    <div className="col-span-3 flex gap-2">
                      {relatedBeat.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-gray-800/60 text-xs text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="col-span-2 flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-gray-800 rounded transition-colors">
                        <Download size={16} className="text-gray-400" />
                      </button>
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
          )}

          {/* Comments Tab */}
          {activeTab === "comments" && (
            <div className="text-center py-12">
              <p className="text-gray-400">No comments yet. Be the first to comment!</p>
            </div>
          )}
        </div>
      </div>

      {/* Player */}
      <div className="bg-gray-900 border-t border-gray-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          {/* Track Info */}
          <div className="flex items-center gap-3 min-w-0 w-64">
            <img
              src={beat.image || "/placeholder.svg"}
              alt="Now playing"
              className="w-14 h-14 rounded object-cover flex-shrink-0"
            />
            <div className="min-w-0">
              <p className="font-bold text-sm truncate">{beat.title}</p>
              <p className="text-xs text-gray-500">{beat.artist}</p>
            </div>
          </div>

          {/* Player Controls */}
          <div className="flex items-center justify-center gap-4">
            <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
              <Share2 size={18} className="text-gray-400" />
            </button>
            <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
              <SkipBack size={18} className="text-white" fill="white" />
            </button>
            <button
              onClick={() => setPlaying(!playing)}
              className="p-3 bg-white hover:bg-gray-100 rounded-full transition-colors"
            >
              {playing ? (
                <Pause size={20} className="text-black" fill="black" />
              ) : (
                <Play size={20} className="text-black" fill="black" />
              )}
            </button>
            <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
              <SkipForward size={18} className="text-white" fill="white" />
            </button>
            <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
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
