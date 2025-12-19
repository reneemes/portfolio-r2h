import "./typing.css";
import { TypeAnimation } from 'react-type-animation';

function TypingIntro() {
  return (
    <div className="typing-animation">
      <h2 className="intro-main">I'M RENEE AND I'M A</h2>
      <TypeAnimation
        sequence={[
          "software engineer.",
          1000,
          "web developer.",
          1000,
          "creative.",
          1000,
          "problem-solver.",
          1000
        ]}
        wrapper="div"
        speed={50}
        repeat={Infinity}
        className="intro-secondary"
      />
    </div>
  )
}

export default TypingIntro;