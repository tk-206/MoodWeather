import React from "react"

interface MoodDisplayProps {
  mood: string | null
}

export default function MoodDisplay({ mood }: MoodDisplayProps) {
  return (
    <div className="mt-8 text-center text-4xl">
      {mood ? (
        <p>오늘의 기분은 {mood}</p>
      ) : (
        <p className="text-gray-500">오늘의 기분을 선택해보세요 ☁️</p>
      )}
    </div>
  )
}
