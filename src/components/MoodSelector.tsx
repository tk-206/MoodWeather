import React from "react"

interface MoodSelectorProps {
  onSelect: (mood: string) => void
}

const moods = ["😄", "🙂", "😐", "😔", "😭"]

export default function MoodSelector({ onSelect }: MoodSelectorProps) {
  return (
    <div className="flex gap-3 justify-center mt-4">
      {moods.map((mood) => (
        <button
          key={mood}
          onClick={() => onSelect(mood)}
          className="text-3xl hover:scale-125 transition-transform"
        >
          {mood}
        </button>
      ))}
    </div>
  )
}
