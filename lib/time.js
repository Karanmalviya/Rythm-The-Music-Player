export default function millisToMinutesAndSeconds(millis) {
  //millisToMinutesAndSeconds
  const minutes = Math.floor(millis / 60000)
  const seconds = ((millis % 60000) / 1000).toFixed(0)
  return seconds == 60000
    ? minutes + 1 + ':00'
    : minutes + ':' + (seconds < 10 ? '0' : '') + seconds
}
