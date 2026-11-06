// Text whose letters float up and down in a gentle wave
const FloatText = ({ text }) => (
  <span aria-label={text}>
    {[...text].map((ch, i) => (
      <span key={i} className="float-letter" style={{ '--li': i }} aria-hidden="true">
        {ch === ' ' ? '\u00A0' : ch}
      </span>
    ))}
  </span>
)

export default FloatText