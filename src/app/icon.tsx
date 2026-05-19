import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

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
          background: "#0A0A0B",
          color: "#C9A961",
          fontSize: 22,
          fontFamily: "Georgia, serif",
          fontStyle: "italic",
          fontWeight: 400,
          borderRadius: "50%",
          border: "2px solid #C9A961",
        }}
      >
        π
      </div>
    ),
    { ...size },
  );
}
