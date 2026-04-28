import { ImageResponse } from "next/og"
import { readFileSync } from "fs"
import { join } from "path"

export const runtime = "nodejs"
export const alt = "DL Performance - Assessoria Esportiva de Corrida"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  const logoData = readFileSync(
    join(process.cwd(), "public/images/Logotipos DLLogo DL.png")
  )
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`

  const bannerData = readFileSync(join(process.cwd(), "public/banner.JPEG"))
  const bannerSrc = `data:image/jpeg;base64,${bannerData.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#0a0a0a",
          position: "relative",
        }}
      >
        {/* Runner photo on the right */}
        <img
          src={bannerSrc}
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            height: "100%",
            width: "52%",
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />

        {/* Gradient overlay blending photo into dark bg */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "60%",
            height: "100%",
            background:
              "linear-gradient(to right, #0a0a0a 0%, #0a0a0a 10%, transparent 60%)",
            display: "flex",
          }}
        />

        {/* Left content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 64px",
            width: "52%",
            zIndex: 1,
            gap: "0px",
          }}
        >
          <img
            src={logoSrc}
            style={{
              width: 120,
              height: 120,
              marginBottom: 28,
              filter: "invert(1)",
            }}
          />
          <div
            style={{
              fontSize: 54,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: 16,
              display: "flex",
            }}
          >
            DL Performance
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#a3a3a3",
              lineHeight: 1.4,
              marginBottom: 32,
              display: "flex",
            }}
          >
            Assessoria Esportiva de Corrida
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#525252",
              display: "flex",
            }}
          >
            dlperformance.net
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
