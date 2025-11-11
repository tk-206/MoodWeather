import { useState, useEffect } from "react"
import MoodSelector from "./components/MoodSelector"
import MoodDisplay from "./components/MoodDisplay"
import { saveMood, loadMood } from "./utils/storage"

function App() {
  const [mood, setMood] = useState<string | null>(null)

  useEffect(() => {
    const saved = loadMood()
    if (saved) setMood(saved)
  }, [])

  const handleSelectMood = (selected: string) => {
    setMood(selected)
    saveMood(selected)
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-sky-100 to-blue-200">
      <h1 className="text-5xl font-bold mb-6 text-blue-700">MoodWeather</h1>
      <MoodDisplay mood={mood} />
      <MoodSelector onSelect={handleSelectMood} />
    </div>
  )
}

export default App
