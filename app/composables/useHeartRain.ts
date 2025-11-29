export const useHeartRain = () => {
  const trigger = useState('heartRainTrigger', () => 0)

  function rainHearts() {
    trigger.value = trigger.value + 1
  }

  return { trigger, rainHearts }
}
