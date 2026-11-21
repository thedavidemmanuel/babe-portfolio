import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// "TM" in cream on --ink.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#15231f",
          color: "#f8f7f1",
          fontSize: 17,
          fontWeight: 700,
          letterSpacing: -1,
        }}
      >
        TM
      </div>
    ),
    size,
  );
}
