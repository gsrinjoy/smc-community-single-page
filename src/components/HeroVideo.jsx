import './HeroVideo.css'

// muted + playsInline are required for autoplay to be allowed by browsers.
// Controls stay on so viewers can unmute if they want sound.
export default function HeroVideo({ label, src }) {
  return (
    <div className="clip">
      <h2 className="clip__label">{label}</h2>

      <figure className="clip__frame">
        <video
          className="clip__video"
          src={src}
          autoPlay
          muted
          loop
          playsInline
          controls
          preload="metadata"
        />
      </figure>
    </div>
  )
}
