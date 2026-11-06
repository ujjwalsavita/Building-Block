import { useEffect, useMemo, useRef, useState } from "react"

const SCRIPT_STROKE = 34
const SCRIPT_TOP = -230
const SCRIPT_BOTTOM = 125

const IN = "M0,-14C6,-20 "
const out = (w) => " " + (w - 7) + ",-7 " + w + ",-14"
const outFlat = (w) => " " + (w - 6) + ",-12 " + w + ",-14"
const bowl = (l, r) => {
  const m = (l + r) / 2
  return "C" + (m + 6) + ",-104 " + (l + 2) + ",-92 " + l + ",-52C" + (l - 1) + ",-18 " + (l + 12) + ",-3 " + (m - 2) + ",-3C" + (r - 8) + ",-3 " + (r + 2) + ",-30 " + (r + 2) + ",-62"
}
const over = (l, r) => IN + (l - 2) + ",-50 " + (l + 14) + ",-88C" + (l + 26) + ",-104 " + (r - 10) + ",-104 " + r + ",-94"
const down = (x, w) => "C" + (x - 1) + ",-60 " + (x - 4) + ",-24 " + (x - 2) + ",-12C" + x + ",-2 " + (x + 8) + ",-1 " + (x + 14) + ",-4C" + (w - 12) + ",-6" + out(w)
const stem = (x, top, w) => "M" + x + "," + top + down(x, w)
const arch = (x0, x1) => "C" + (x0 + 4) + ",-60 " + (x0 + 14) + ",-98 " + ((x0 + x1) / 2 + 2) + ",-98C" + (x1 + 6) + ",-98 " + (x1 + 4) + ",-70 " + (x1 + 1) + ",-44"
const loopUp = (x) => IN + (x + 18) + ",-40 " + (x + 38) + ",-108C" + (x + 52) + ",-152 " + (x + 48) + ",-200 " + (x + 26) + ",-198C" + (x + 4) + ",-196 " + (x - 2) + ",-150 " + x + ",-110"
const loopDown = (x, w) => "C" + x + ",-30 " + (x - 1) + ",30 " + (x - 6) + ",62C" + (x - 12) + ",94 " + (x - 42) + ",104 " + (x - 48) + ",82C" + (x - 54) + ",58 " + (x - 14) + ",8 " + (x + 12) + ",-6C" + (w - 12) + ",-12" + outFlat(w)
const entry = (x) => IN + (x - 4) + ",-50 " + x + ",-96"

const GLYPHS = {
  a: [100, over(18, 70) + bowl(16, 70) + stem(74, -98, 100)],
  b: [92, loopUp(16) + "C16,-60 15,-30 14,-8C24,-60 40,-98 58,-96C76,-94 76,-60 66,-30C58,-6 38,0 30,-12C40,-14 60,-14 74,-12C80,-12 86,-13 92,-14"],
  c: [80, IN + "16,-50 30,-82C42,-104 70,-104 66,-84C64,-76 58,-80 56,-84C50,-98 22,-96 16,-56C12,-24 26,-3 42,-3C58,-3" + out(80)],
  d: [100, over(18, 70) + bowl(16, 70) + stem(78, -192, 100)],
  e: [80, IN + "36,-40 52,-56C66,-72 66,-100 46,-100C24,-100 14,-74 14,-50C14,-20 28,-3 44,-3C58,-3" + out(80)],
  f: [74, loopUp(16) + "C16,-40 18,30 14,70C12,94 -6,96 -4,74C-2,50 30,-2 46,-8C62,-12" + outFlat(74)],
  g: [96, over(18, 70) + bowl(16, 70) + "M72,-98" + loopDown(72, 96)],
  h: [100, loopUp(16) + "C16,-60 15,-30 14,-2" + arch(14, 70) + down(71, 100)],
  i: [52, entry(26) + down(26, 52) + "M30,-146L30,-146"],
  j: [62, entry(26) + loopDown(26, 62) + "M32,-146L32,-146"],
  k: [96, loopUp(16) + "C16,-60 15,-30 14,-2C22,-56 40,-100 60,-98C80,-96 72,-56 30,-50C48,-44 56,-12 66,-6C72,-2 78,-3 84,-6C88,-8" + out(96)],
  l: [60, loopUp(16) + "C16,-60 14,-30 16,-14C18,-2 26,-1 32,-3C48,-6" + out(60)],
  m: [138, entry(18) + "C18,-60 16,-30 14,-2" + arch(14, 56) + "C56,-30 56,-14 56,-2" + arch(56, 108) + down(109, 138)],
  n: [102, entry(18) + "C18,-60 16,-30 14,-2" + arch(14, 72) + down(73, 102)],
  o: [92, IN + "16,-50 32,-88C30,-104 14,-84 14,-54C14,-22 28,-3 44,-3C62,-3 72,-30 70,-60C68,-90 52,-104 44,-94C38,-86 54,-74 66,-60C72,-52 80,-30 92,-14"],
  p: [96, entry(20) + "L14,92M14,-36C18,-60 28,-98 44,-98C76,-98 78,-60 68,-30C60,-6 40,0 30,-12C42,-14 62,-14 76,-13C82,-13 88,-13 96,-14"],
  q: [100, over(18, 70) + bowl(16, 70) + "M74,-98C73,-40 72,40 70,80C69,96 58,92 62,74C68,40 80,-6 100,-14"],
  r: [80, entry(18) + "C18,-60 16,-30 14,-2C20,-50 34,-90 50,-96C60,-100 64,-90 58,-82C54,-78 50,-82 52,-76C56,-50 56,-16 62,-8C66,-3" + out(80)],
  s: [76, IN + "20,-60 34,-100C40,-76 66,-54 58,-26C52,-2 22,0 10,-18C24,-6 50,-6 62,-10C66,-11" + out(76)],
  t: [72, IN + "20,-80 30,-170" + down(30, 72) + "M8,-104C24,-106 44,-108 62,-110"],
  u: [100, entry(18) + "C16,-60 12,-30 14,-16C16,-2 30,-2 42,-6C56,-12 66,-50 70,-96" + down(70, 100)],
  v: [84, entry(18) + "C18,-60 22,-10 38,-4C56,2 66,-40 64,-96C66,-60 70,-24 78,-18C80,-16 82,-15 84,-14"],
  w: [124, entry(18) + "C16,-60 14,-4 34,-4C50,-4 56,-50 58,-80C58,-50 62,-4 82,-4C98,-4 106,-50 104,-96C106,-60 110,-24 118,-18C120,-16 122,-15 124,-14"],
  x: [92, IN + "18,-60 28,-80C38,-100 54,-100 54,-80C54,-50 50,-20 60,-8C66,-2 72,-4 80,-8C84,-10" + out(92) + "M20,-10C38,-40 58,-74 78,-98"],
  y: [96, entry(18) + "C16,-60 12,-30 14,-16C16,-2 30,-2 42,-6C56,-12 66,-50 70,-96" + loopDown(70, 96)],
  z: [88, IN + "20,-60 36,-90C46,-104 70,-104 64,-80C58,-60 34,-34 18,-10C34,-30 64,-24 60,10C56,60 20,96 12,72C6,52 40,-6 70,-12C76,-13 82,-13 88,-14"],
  "!": [56, "M42,-194C38,-150 32,-96 28,-52M22,-8L22,-8"],
  "?": [72, "M10,-160C14,-196 66,-200 62,-160C60,-128 30,-112 30,-60M26,-8L26,-8"],
  ".": [36, "M16,-8L16,-8"],
  ",": [36, "M20,-8C18,10 12,22 4,30"],
  "'": [30, "M22,-192L16,-140"],
  " ": [44, ""],
}

const normalise = (word) =>
  word.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[\u2018\u2019]/g, "'").toLowerCase()

const pathLength = (d) => {
  const nums = (d.match(/-?\d*\.?\d+/g) || []).map(Number)
  const cmds = d.match(/[MLC]/g) || []
  let i = 0
  let x = 0
  let y = 0
  let len = 0
  for (const c of cmds) {
    if (c === "M") {
      x = nums[i++]
      y = nums[i++]
    } else if (c === "L") {
      const nx = nums[i++]
      const ny = nums[i++]
      len += Math.hypot(nx - x, ny - y)
      x = nx
      y = ny
    } else {
      const p = nums.slice(i, i + 6)
      i += 6
      let px = x
      let py = y
      for (let k = 1; k <= 16; k++) {
        const t = k / 16
        const u = 1 - t
        const qx = u * u * u * x + 3 * u * u * t * p[0] + 3 * u * t * t * p[2] + t * t * t * p[4]
        const qy = u * u * u * y + 3 * u * u * t * p[1] + 3 * u * t * t * p[3] + t * t * t * p[5]
        len += Math.hypot(qx - px, qy - py)
        px = qx
        py = qy
      }
      x = p[4]
      y = p[5]
    }
  }
  return len
}

const layoutWord = (word) => {
  const glyphs = []
  let x = 0
  for (const ch of normalise(word)) {
    const g = GLYPHS[ch] ?? GLYPHS[" "]
    const strokes = []
    const dots = []
    for (const sub of g[1].split(/(?=M)/)) {
      if (!sub) continue
      const dot = sub.match(/^M(-?[\d.]+),(-?[\d.]+)L\1,\2$/)
      if (dot) dots.push([+dot[1], +dot[2]])
      else strokes.push({ d: sub, len: pathLength(sub) })
    }
    glyphs.push({ ch, x, strokes, dots })
    x += g[0]
  }
  return { glyphs, width: x }
}

const PEN_SPEED = 1700
const PEN_LIFT = 0.05
const timeWord = (glyphs) => {
  let t = 0
  return {
    glyphs: glyphs.map((g) => {
      const strokes = g.strokes.map((s) => {
        const at = { ...s, delay: t, dur: Math.max(0.08, s.len / PEN_SPEED) }
        t += at.dur + PEN_LIFT
        return at
      })
      const dots = g.dots.map((p) => {
        const at = { x: p[0], y: p[1], delay: t }
        t += 0.08
        return at
      })
      return { ...g, strokes, dots }
    }),
    total: t,
  }
}

const EASE_OUT = "cubic-bezier(.2,.9,.3,1)"
const EASE_BOUNCE = "cubic-bezier(.3,1.6,.5,1)"

const CSS =
  ".fsf{position:relative;isolation:isolate;container-type:inline-size;display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;overflow:clip;color:var(--fsf-ink);background:var(--fsf-bg);font-family:var(--fsf-font);-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:transparent}" +
  ":where(.fsf) *{box-sizing:border-box}" +
  ":where(.fsf) button{font:inherit;color:inherit;background:none;border:0;padding:0;margin:0;cursor:pointer;text-align:inherit}" +
  ".fsf-sr{position:absolute;width:1px;height:1px;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}" +
  ".fsf-stage{flex:1 1 auto;display:flex;align-items:center;justify-content:center;padding:clamp(5rem,13cqw,11rem) 4cqw clamp(4rem,9cqw,8rem)}" +
  ".fsf-cluster{position:relative;display:flex;flex-direction:column;align-items:center;font-size:min(8.2cqw,8.75rem);line-height:1}" +
  ".fsf-head{position:relative;z-index:2;display:flex;align-items:baseline;margin:0;white-space:nowrap;font-size:1em;font-weight:700;letter-spacing:-.045em;line-height:1}" +
  ".fsf-line{display:inline-block}" +
  ".fsf-ch{display:inline-block;transition:translate .45s " + EASE_BOUNCE + ",rotate .45s " + EASE_BOUNCE + "}" +
  ".fsf-ch:hover{translate:0 -.07em;rotate:-4deg}" +
  ".fsf-script{position:relative;display:inline-block;height:1em;margin-left:.05em;transition:width .7s " + EASE_OUT + ";cursor:pointer;letter-spacing:0;border-radius:.12em;-webkit-user-select:none;user-select:none}" +
  ".fsf-script:focus-visible{outline:.025em solid var(--fsf-accent);outline-offset:.06em}" +
  ".fsf-script svg{position:absolute;overflow:visible;max-width:none;pointer-events:none;transform-origin:20% 70%}" +
  ".fsf-g{transform-box:fill-box;transform-origin:50% 100%}" +
  ".fsf-script:hover .fsf-g{animation:fsf-wig .7s ease both;animation-delay:calc(var(--gi) * 55ms)}" +
  ".fsf-p{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1 2;stroke-dashoffset:0}" +
  ".fsf-m .fsf-p{stroke:var(--fsf-accent)}" +
  ".fsf-s .fsf-p{stroke:var(--fsf-shade)}" +
  ".fsf-h .fsf-p{stroke:#fff;stroke-opacity:.18}" +
  ".fsf-m .fsf-dot{fill:var(--fsf-accent)}" +
  ".fsf-s .fsf-dot{fill:var(--fsf-shade)}" +
  ".fsf-h .fsf-dot{fill:#fff;fill-opacity:.18}" +
  ".fsf-dot{transform-box:fill-box;transform-origin:center}" +
  ".fsf-sub{position:relative;z-index:2;margin:.32em 0 0;font-size:max(.165em,.8125rem);font-weight:500;line-height:1.4;letter-spacing:-.01em;text-align:center}" +
  ".fsf-sub span{display:block}" +
  ".fsf:not([data-in]) .fsf-ch,.fsf:not([data-in]) .fsf-p,.fsf:not([data-in]) .fsf-dot,.fsf:not([data-in]) .fsf-sub span{opacity:0}" +
  ".fsf[data-in] .fsf-ch{animation:fsf-rise .9s " + EASE_OUT + " both;animation-delay:calc(var(--i) * 38ms)}" +
  ".fsf[data-in] .fsf-p{animation:fsf-draw var(--dur) cubic-bezier(.45,.05,.4,1) both;animation-delay:calc(var(--base) + var(--d))}" +
  ".fsf[data-in] .fsf-dot{animation:fsf-dot .45s " + EASE_BOUNCE + " both;animation-delay:calc(var(--base) + var(--d))}" +
  ".fsf[data-in] .fsf-script svg{animation:fsf-pop .6s " + EASE_BOUNCE + " both;animation-delay:calc(var(--base) + var(--total))}" +
  ".fsf-script[data-out] .fsf-p{animation:fsf-erase .34s cubic-bezier(.55,0,.8,.2) both;animation-delay:calc(var(--d) * .18)}" +
  ".fsf-script[data-out] .fsf-dot{animation:fsf-undot .25s ease-in both}" +
  ".fsf[data-in] .fsf-sub span{animation:fsf-up .8s " + EASE_OUT + " both;animation-delay:calc(1.05s + var(--i) * 110ms)}" +
  "@keyframes fsf-rise{from{opacity:0;transform:translateY(.55em) rotate(9deg);filter:blur(.04em)}55%{opacity:1}to{opacity:1;transform:none;filter:none}}" +
  "@keyframes fsf-draw{from{stroke-dashoffset:1;opacity:0}1%{opacity:1}to{stroke-dashoffset:0;opacity:1}}" +
  "@keyframes fsf-erase{from{stroke-dashoffset:0}to{stroke-dashoffset:-1}}" +
  "@keyframes fsf-dot{from{transform:scale(0)}to{transform:none}}" +
  "@keyframes fsf-undot{to{transform:scale(0)}}" +
  "@keyframes fsf-pop{0%,100%{transform:none}35%{transform:scale(1.05,.93)}65%{transform:scale(.98,1.03)}}" +
  "@keyframes fsf-wig{0%,100%{transform:none}30%{transform:translateY(-14px) rotate(-5deg)}60%{transform:translateY(3px) rotate(2deg)}}" +
  "@keyframes fsf-up{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}" +
  "@container (max-width: 640px){" +
  ".fsf-cluster{font-size:10.4cqw}" +
  ".fsf-stage{padding:26cqw 4cqw 20cqw}" +
  "}" +
  "@media (prefers-reduced-motion: reduce){" +
  ".fsf *,.fsf *::after{animation:none !important;transition:none !important}" +
  "}"

const SCRIPT_UNIT = 0.0052
const SCRIPT_PAD_L = 70
const SCRIPT_PAD_R = 90

const fmt = (n) => +n.toFixed(4) + "em"

export default function FruitStickerFooter({
  headline = "Thank You,",
  farewells = ["bye!", "ciao!", "later!", "adios!", "cheers!"],
  lines = [],
  accent = "#ff5a3c",
  ink = "#141210",
  background = "transparent",
  fontSans = "ui-sans-serif,system-ui,sans-serif",
  height = "100svh",
  onFarewell,
  className = "",
}) {
  const rootRef = useRef(null)
  const reduced = useRef(false)
  const eraseTimer = useRef(0)

  const words = farewells.length ? farewells : ["bye!"]
  const [inView, setInView] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const [erasing, setErasing] = useState(false)
  const [redraw, setRedraw] = useState(false)

  const word = words[wordIndex % words.length]

  const script = useMemo(() => {
    const laid = layoutWord(word)
    return { ...timeWord(laid.glyphs), width: laid.width }
  }, [word])

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    reduced.current = mq.matches
    const onMq = () => {
      reduced.current = mq.matches
    }
    mq.addEventListener("change", onMq)

    let io
    if (reduced.current || typeof IntersectionObserver === "undefined") setInView(true)
    else {
      io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            setInView(true)
            io?.disconnect()
          }
        },
        { threshold: 0.25 },
      )
      io.observe(root)
    }
    return () => {
      mq.removeEventListener("change", onMq)
      io?.disconnect()
    }
  }, [])

  useEffect(() => () => clearTimeout(eraseTimer.current), [])

  const nextFarewell = () => {
    if (erasing) return
    const n = (wordIndex + 1) % words.length
    const go = () => {
      setWordIndex(n)
      setErasing(false)
      setRedraw(true)
      onFarewell?.(n, words[n])
    }
    if (reduced.current || !inView) go()
    else {
      setErasing(true)
      eraseTimer.current = window.setTimeout(go, 420)
    }
  }

  const noSelect = (e) => {
    if (e.detail > 1 && !e.target.closest("button")) e.preventDefault()
  }

  const rootStyle = {
    "--fsf-accent": accent,
    "--fsf-shade": "color-mix(in oklab, " + accent + " 66%, #3b0b02)",
    "--fsf-ink": ink,
    "--fsf-bg": background,
    "--fsf-font": fontSans,
    minHeight: height,
  }

  const slotW = script.width * SCRIPT_UNIT
  const vbW = script.width + SCRIPT_PAD_L + SCRIPT_PAD_R
  const vbH = SCRIPT_BOTTOM - SCRIPT_TOP
  const svgStyle = {
    left: fmt(-SCRIPT_PAD_L * SCRIPT_UNIT),
    top: fmt(0.8 + SCRIPT_TOP * SCRIPT_UNIT),
    width: fmt(vbW * SCRIPT_UNIT),
    height: fmt(vbH * SCRIPT_UNIT),
  }

  const layer = (kind) => {
    const off = kind === "s" ? "translate(6,8)" : kind === "h" ? "translate(-5,-6)" : ""
    const w = kind === "h" ? 7 : SCRIPT_STROKE
    return (
      <g className={"fsf-" + kind} transform={off}>
        {script.glyphs.map((g, gi) => (
          <g key={gi} transform={"translate(" + g.x + ",0)"}>
            <g className="fsf-g" style={{ "--gi": gi }}>
              {g.strokes.map((s, si) => (
                <path
                  key={si}
                  className="fsf-p"
                  d={s.d}
                  pathLength={1}
                  strokeWidth={w}
                  style={{ "--d": (s.delay + (kind === "s" ? 0.06 : kind === "h" ? 0.1 : 0)).toFixed(3) + "s", "--dur": s.dur.toFixed(3) + "s" }}
                />
              ))}
              {g.dots.map((p, di) => (
                <circle key={"d" + di} className="fsf-dot" cx={p.x} cy={p.y} r={kind === "h" ? 4 : SCRIPT_STROKE / 2} style={{ "--d": p.delay.toFixed(3) + "s" }} />
              ))}
            </g>
          </g>
        ))}
      </g>
    )
  }

  let ci = 0
  const chars = [...headline].map((ch, i) => (
    <span key={i} className="fsf-ch" style={{ "--i": ch === " " ? ci : ci++ }}>
      {ch === " " ? "\u00A0" : ch}
    </span>
  ))

  return (
    <section ref={rootRef} className={("fsf " + className).trim()} style={rootStyle} data-in={inView ? "" : undefined}>
      <style>{CSS}</style>
      <div className="fsf-stage" onMouseDown={noSelect}>
        <div className="fsf-cluster">
          <h2 className="fsf-head">
            <span className="fsf-sr">{headline + " " + word}</span>
            <span className="fsf-line" aria-hidden="true">
              {chars}
            </span>
            <button
              type="button"
              className="fsf-script"
              style={{ width: fmt(slotW) }}
              data-out={erasing ? "" : undefined}
              onClick={nextFarewell}
              aria-label={"Show another word (now: " + word + ")"}
            >
              <svg
                key={wordIndex}
                viewBox={-SCRIPT_PAD_L + " " + SCRIPT_TOP + " " + vbW + " " + vbH}
                style={{ ...svgStyle, "--base": redraw ? "0s" : "0.45s", "--total": script.total.toFixed(3) + "s" }}
                aria-hidden="true"
              >
                <g transform="rotate(-6 0 0) skewX(-10)">
                  {layer("s")}
                  {layer("m")}
                  {layer("h")}
                </g>
              </svg>
            </button>
          </h2>
          <p className="fsf-sub">
            {lines.map((l, i) => (
              <span key={i} style={{ "--i": i }}>
                {l}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}