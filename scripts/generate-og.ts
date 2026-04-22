import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { writeFileSync, readFileSync, mkdirSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

type Guide = {
  id: string;
  name: string;
  designer: string;
  description: string;
  tags: string[];
};

const hasJapanese = (s: string) =>
  /[぀-ヿ㐀-䶿一-鿿＀-￯]/.test(s);

const truncate = (s: string, n: number) =>
  s.length <= n ? s : s.slice(0, n - 1).trimEnd() + "…";

const BG = "#F4F1EA";
const BORDER = "#D8D2C2";
const TEXT = "#1A1A1A";
const TEXT_SOFT = "#5C564A";
const TEXT_MUTE = "#8B8473";
const ACCENT = "#E85D04";

type Fonts = {
  pixelify: Uint8Array;
  dotgothic: Uint8Array;
};

const SATORI_FONTS = (fonts: Fonts) => [
  {
    name: "Pixelify Sans",
    data: fonts.pixelify,
    weight: 600 as const,
    style: "normal" as const,
  },
  {
    name: "DotGothic16",
    data: fonts.dotgothic,
    weight: 400 as const,
    style: "normal" as const,
  },
];

async function renderPng(element: Parameters<typeof satori>[0], fonts: Fonts) {
  const svg = await satori(element, {
    width: 1200,
    height: 630,
    fonts: SATORI_FONTS(fonts),
  });
  const resvg = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } });
  return resvg.render().asPng();
}

function defaultOgElement() {
  return {
    type: "div",
    props: {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        backgroundColor: BG,
        fontFamily: "Pixelify Sans",
      },
      children: [
        {
          type: "div",
          props: {
            style: { display: "flex", flexDirection: "column", gap: "20px" },
            children: [
              {
                type: "div",
                props: {
                  style: { display: "flex", alignItems: "center", gap: "14px" },
                  children: [
                    {
                      type: "span",
                      props: {
                        style: {
                          backgroundColor: ACCENT,
                          color: BG,
                          padding: "5px 12px 4px",
                          fontSize: "14px",
                          fontWeight: 600,
                          letterSpacing: "0.08em",
                        },
                        children: "EST. 2026",
                      },
                    },
                    {
                      type: "span",
                      props: {
                        style: {
                          color: TEXT_SOFT,
                          fontSize: "14px",
                          letterSpacing: "0.08em",
                        },
                        children:
                          "— A FIELD GUIDE TO JAPANESE SELF-MADE KEYBOARDS",
                      },
                    },
                  ],
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    fontSize: "128px",
                    fontWeight: 600,
                    color: TEXT,
                    lineHeight: 0.9,
                    letterSpacing: "-0.02em",
                  },
                  children: "Build Guide",
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    fontSize: "56px",
                    color: ACCENT,
                    fontFamily: "DotGothic16",
                    lineHeight: 1,
                  },
                  children: "ビルドガイド横丁",
                },
              },
            ],
          },
        },
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              borderTop: `2px solid ${BORDER}`,
              paddingTop: "24px",
            },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    fontSize: "20px",
                    color: TEXT_SOFT,
                    fontFamily: "DotGothic16",
                  },
                  children:
                    "秋葉原の路地裏を歩くように、ビルドガイドをあれこれ眺める場所。",
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    fontSize: "22px",
                    color: TEXT_MUTE,
                    fontWeight: 600,
                  },
                  children: "yokocho.build",
                },
              },
            ],
          },
        },
      ],
    },
  };
}

function guideOgElement(guide: Guide) {
  const nameIsJP = hasJapanese(guide.name);
  const nameFontFamily = nameIsJP ? "DotGothic16" : "Pixelify Sans";
  const nameSize = guide.name.length > 18 ? 88 : guide.name.length > 12 ? 110 : 128;
  const tagText = guide.tags.slice(0, 5).map((t) => `#${t}`).join("   ");

  return {
    type: "div",
    props: {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        backgroundColor: BG,
        fontFamily: "Pixelify Sans",
      },
      children: [
        {
          type: "div",
          props: {
            style: { display: "flex", flexDirection: "column", gap: "20px" },
            children: [
              {
                type: "div",
                props: {
                  style: { display: "flex", alignItems: "center", gap: "14px" },
                  children: [
                    {
                      type: "span",
                      props: {
                        style: {
                          backgroundColor: ACCENT,
                          color: BG,
                          padding: "5px 12px 4px",
                          fontSize: "14px",
                          fontWeight: 600,
                          letterSpacing: "0.08em",
                        },
                        children: "BUILD GUIDE",
                      },
                    },
                    {
                      type: "span",
                      props: {
                        style: {
                          color: TEXT_SOFT,
                          fontSize: "14px",
                          letterSpacing: "0.08em",
                        },
                        children: `— BY ${guide.designer.toUpperCase()}`,
                      },
                    },
                  ],
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    fontSize: `${nameSize}px`,
                    fontWeight: 600,
                    color: TEXT,
                    lineHeight: 0.95,
                    letterSpacing: nameIsJP ? "0.01em" : "-0.02em",
                    fontFamily: nameFontFamily,
                    maxWidth: "1040px",
                  },
                  children: guide.name,
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    fontSize: "22px",
                    color: TEXT_SOFT,
                    fontFamily: "DotGothic16",
                    lineHeight: 1.5,
                    maxWidth: "1040px",
                    marginTop: "8px",
                  },
                  children: truncate(guide.description, 110),
                },
              },
            ],
          },
        },
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              borderTop: `2px solid ${BORDER}`,
              paddingTop: "22px",
            },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    fontSize: "20px",
                    color: ACCENT,
                    fontFamily: "DotGothic16",
                    letterSpacing: "0.02em",
                  },
                  children: tagText,
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                  },
                  children: [
                    {
                      type: "div",
                      props: {
                        style: {
                          fontSize: "18px",
                          color: TEXT_SOFT,
                          fontFamily: "DotGothic16",
                        },
                        children:
                          "ビルドガイド横丁 — build guide yokocho",
                      },
                    },
                    {
                      type: "div",
                      props: {
                        style: {
                          fontSize: "22px",
                          color: TEXT_MUTE,
                          fontWeight: 600,
                        },
                        children: "yokocho.build",
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  };
}

async function main() {
  console.log("Loading fonts...");
  const fonts: Fonts = {
    pixelify: readFileSync(
      join(__dirname, "fonts", "PixelifySans-SemiBold.ttf")
    ),
    dotgothic: readFileSync(
      join(__dirname, "fonts", "DotGothic16-Regular.ttf")
    ),
  };

  const publicDir = join(__dirname, "..", "public");
  mkdirSync(publicDir, { recursive: true });

  console.log("Generating default OG image...");
  const defaultPng = await renderPng(defaultOgElement(), fonts);
  writeFileSync(join(publicDir, "og.png"), defaultPng);
  console.log("  → public/og.png");

  console.log("Loading guides...");
  const guidesDir = join(__dirname, "..", "src", "content", "guides");
  const files = readdirSync(guidesDir).filter((f: string) => f.endsWith(".json"));

  const perGuideDir = join(publicDir, "og");
  mkdirSync(perGuideDir, { recursive: true });

  for (const file of files) {
    const id = file.replace(/\.json$/, "");
    const raw = JSON.parse(readFileSync(join(guidesDir, file), "utf-8"));
    const guide: Guide = {
      id,
      name: raw.name,
      designer: raw.designer,
      description: raw.description,
      tags: Array.isArray(raw.tags) ? raw.tags : [],
    };
    const png = await renderPng(guideOgElement(guide), fonts);
    writeFileSync(join(perGuideDir, `${id}.png`), png);
    console.log(`  → public/og/${id}.png`);
  }

  console.log(`Done. Generated ${files.length + 1} image(s).`);
}

main().catch((err) => {
  console.error(err);
  throw err;
});
