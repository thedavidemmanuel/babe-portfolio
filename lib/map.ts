// Path data for the Nigeria map in the profile section. viewBox: 0 0 300 248.
// Outline simplified from Natural Earth 1:50m (public domain); cities placed by latitude and longitude.
// See ../ANIMATIONS.md, section 3.

export const MAP_VIEWBOX = "0 0 300 248";

export const NIGERIA_OUTLINE =
  "M266 14L277 29L280 45L287 47L290 51L289 66L280 72L275 73L268 81L264 88L262 98L258 101L256 112L250 116L246 132L242 135L238 135L229 159L223 167L225 170L219 176L216 183L209 187L205 179L196 172L191 176L186 176L185 173L176 179L174 184L159 197L156 202L153 216L148 226L145 227L140 223L142 229L141 231L126 232L124 229L122 231L118 231L113 227L115 230L115 232L109 235L106 227L108 236L103 236L101 233L101 236L94 237L94 234L92 237L89 237L78 229L73 218L75 217L73 217L73 213L76 212L77 209L73 211L69 208L75 206L72 206L72 204L68 206L67 205L66 202L61 196L51 189L29 187L34 183L27 184L25 188L10 188L12 180L11 174L12 162L10 152L12 125L18 124L21 115L25 110L25 107L30 104L31 102L32 94L36 92L37 88L34 76L29 69L29 66L33 60L32 57L32 42L42 32L44 20L54 14L70 13L76 10L95 15L110 31L119 28L131 23L137 24L152 33L172 35L183 26L193 23L215 22L228 26L231 29L239 29L244 23L249 20L259 15Z";

/** Dashed route in the order she worked: Maiduguri -> Billiri -> Abuja. */
export const ROUTE =
  "M255 59Q240 93 210 105Q160 104 123 124";

/** dotRadius / pingRadius in viewBox units; pingDelay in seconds; label anchor is the SVG text-anchor. */
export const CITIES = [
  { name: "Maiduguri", x: 255, y: 59, dotRadius: 4, pingRadius: 5, pingDelay: 0, label: { x: 245, y: 49, anchor: "end" } },
  { name: "Billiri", x: 210, y: 105, dotRadius: 4, pingRadius: 5, pingDelay: 0.8, label: { x: 212, y: 129, anchor: "middle" } },
  { name: "Abuja", x: 123, y: 124, dotRadius: 5.5, pingRadius: 6, pingDelay: 1.6, label: { x: 123, y: 147, anchor: "middle" }, current: true },
] as const;
