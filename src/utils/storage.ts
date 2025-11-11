export const saveMood = (mood: string) => {
  localStorage.setItem("todayMood", mood)
}

export const loadMood = (): string | null => {
  return localStorage.getItem("todayMood")
}
