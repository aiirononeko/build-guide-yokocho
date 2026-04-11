export type ShopLink = {
  name: string;
  url: string;
};

export type Guide = {
  id: string;
  name: string;
  designer: string;
  description: string;
  url: string;
  tags: string[];
  shopLinks: ShopLink[];
};

export const guides: Guide[] = [
  {
    id: "corne",
    name: "Corne",
    designer: "foostan",
    description:
      "3x6カラムスタッガード+3キーの分割キーボード。CRKBDの愛称で親しまれ、自作キーボード入門の代表格として国内外に愛用者が多い。",
    url: "https://github.com/foostan/crkbd",
    tags: ["分割", "40%", "カラムスタッガード", "MX互換", "Choc互換"],
    shopLinks: [
      { name: "遊舎工房", url: "https://shop.yushakobo.jp/products/corne-cherry" },
    ],
  },
  {
    id: "lily58",
    name: "Lily58",
    designer: "kata0510",
    description:
      "5x6+4キーの分割キーボード。OLEDディスプレイ対応で、初心者にも組みやすい構成と国内コミュニティの厚いサポートが魅力。",
    url: "https://github.com/kata0510/Lily58",
    tags: ["分割", "60%", "ロウスタッガード", "OLED"],
    shopLinks: [
      { name: "遊舎工房", url: "https://shop.yushakobo.jp/products/lily58-pro" },
    ],
  },
  {
    id: "mint60",
    name: "Mint60",
    designer: "eucalyn",
    description:
      "ミントカラーが印象的な60%分割キーボード。ハードウェアスイッチで分離・結合を切り替えられる構造が特徴的。",
    url: "https://github.com/eucalyn/mint60",
    tags: ["分割", "60%", "ロウスタッガード"],
    shopLinks: [
      { name: "遊舎工房", url: "https://shop.yushakobo.jp/" },
    ],
  },
  {
    id: "helix",
    name: "Helix",
    designer: "MakotoKurauchi",
    description:
      "5x7の分割キーボード。OLEDやUnderglow LEDに対応し、構成の自由度が高い。日本の自作キーボード黎明期を支えた一台。",
    url: "https://github.com/MakotoKurauchi/helix",
    tags: ["分割", "60%", "ロウスタッガード", "OLED", "LED"],
    shopLinks: [
      { name: "遊舎工房", url: "https://shop.yushakobo.jp/" },
    ],
  },
  {
    id: "ergoarrows",
    name: "ErgoArrows",
    designer: "Salicylic_acid3",
    description:
      "分割型ロウスタッガードキーボード。矢印キーや独立した数字行など、フルキーボードからの移行を意識した親切な配列が魅力。",
    url: "https://github.com/Salicylic-acid3/Salicylic_Keyboard",
    tags: ["分割", "ロウスタッガード", "フルサイズ"],
    shopLinks: [
      { name: "遊舎工房", url: "https://shop.yushakobo.jp/" },
    ],
  },
  {
    id: "su120",
    name: "SU120",
    designer: "e3w2q",
    description:
      "切り出し方を変えるだけで様々なレイアウトに対応できるユニバーサル基板。プロトタイピングや一点物の試作に最適。",
    url: "https://github.com/e3w2q/su120-keyboard",
    tags: ["ユニバーサル基板", "プロトタイピング"],
    shopLinks: [
      { name: "遊舎工房", url: "https://shop.yushakobo.jp/" },
    ],
  },
  {
    id: "naked60",
    name: "Naked60",
    designer: "Salicylic_acid3",
    description:
      "ケースレス前提で設計された薄型60%キーボード。シンプルな構造ながら美しい仕上がりで、組みやすさにも定評がある。",
    url: "https://github.com/Salicylic-acid3/Salicylic_Keyboard",
    tags: ["一体型", "60%", "ロウスタッガード", "ケースレス"],
    shopLinks: [
      { name: "遊舎工房", url: "https://shop.yushakobo.jp/" },
    ],
  },
  {
    id: "7spro",
    name: "7sPro",
    designer: "Salicylic_acid3",
    description:
      "テンキーを兼ねた左手側を持つ分割キーボード。プログラマや会計作業者向けにユニークなレイアウトを提案する一台。",
    url: "https://github.com/Salicylic-acid3/Salicylic_Keyboard",
    tags: ["分割", "ロウスタッガード", "テンキー"],
    shopLinks: [
      { name: "遊舎工房", url: "https://shop.yushakobo.jp/" },
    ],
  },
  {
    id: "claw44",
    name: "Claw44",
    designer: "yfuku",
    description:
      "44キーの分割カラムスタッガード。親指3キーと小ぶりなフットプリントで、コンパクトキーボード愛好家に人気。",
    url: "https://github.com/yfuku/claw44",
    tags: ["分割", "40%", "カラムスタッガード", "Choc互換"],
    shopLinks: [
      { name: "BOOTH", url: "https://yfuku.booth.pm/" },
    ],
  },
  {
    id: "meishi2",
    name: "meishi2",
    designer: "Biacco42",
    description:
      "名刺サイズに収まる4キーのマクロパッド。自作キーボード入門の最初の一台として、はんだ付け練習にもよく使われる。",
    url: "https://github.com/Biacco42/meishi2",
    tags: ["マクロパッド", "入門"],
    shopLinks: [
      { name: "遊舎工房", url: "https://shop.yushakobo.jp/" },
    ],
  },
  {
    id: "keyball",
    name: "Keyball",
    designer: "Yowkees",
    description:
      "右手側に大型トラックボールを搭載した分割キーボード。マウスから手を離さずに操作できる革新的なレイアウトが話題に。",
    url: "https://github.com/Yowkees/keyball",
    tags: ["分割", "カラムスタッガード", "トラックボール"],
    shopLinks: [
      { name: "白銀ラボ", url: "https://shirogane-lab.net/" },
      { name: "遊舎工房", url: "https://shop.yushakobo.jp/" },
    ],
  },
  {
    id: "ergodash",
    name: "Ergodash",
    designer: "omkbd",
    description:
      "数字行ありの分割ロウスタッガードキーボード。一般的なJIS配列からの移行がしやすい広めのキー数構成が特徴。",
    url: "https://github.com/omkbd/ErgoDash",
    tags: ["分割", "ロウスタッガード", "フルサイズ"],
    shopLinks: [
      { name: "遊舎工房", url: "https://shop.yushakobo.jp/" },
    ],
  },
];
