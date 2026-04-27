export const languages = {
  ja: "日本語",
  en: "English",
} as const;

export type Locale = keyof typeof languages;

export const defaultLocale: Locale = "ja";

export const ui = {
  ja: {
    // Meta
    "meta.title": "自作キーボード ビルドガイド横丁 / build guide yokocho",
    "meta.description":
      "秋葉原の路地裏を歩くように、キーボードのビルドガイドをあれこれ眺める場所。国内外の自作キーボードのビルドガイドを横断的に集めたストック型ポータル。",
    "meta.siteName": "ビルドガイド横丁",

    // Hero
    "hero.badge": "EST. 2026",
    "hero.badgeLine": "— A FIELD GUIDE TO JAPANESE SELF-MADE KEYBOARDS",
    "hero.tagline":
      "秋葉原の路地裏を歩くように、キーボードのビルドガイドをあれこれ眺める場所。\n国内外の自作キーボードのビルドガイドを横断的に集めた、ストック型ポータル。",
    "hero.statGuides": "guides curated",
    "hero.statTags": "tags indexed",
    "hero.statGrowing": "growing",

    // Nav
    "nav.guides": "Guides",
    "nav.about": "About",
    "nav.toggleTheme": "テーマを切り替え",
    "nav.toDark": "ダークモードに切り替え",
    "nav.toLight": "ライトモードに切り替え",

    // Today's Pick
    "todaysPick.count": "3 軒",

    // Filters
    "filter.sectionTitle": "/ Guides",
    "filter.entries": "entries",
    "filter.searchPlaceholder": "search keyboard or designer...",
    "filter.tagLabel": "タグ絞り込み",
    "filter.all": "all",

    // Grid
    "grid.empty": "─ no guides match your filter ─",

    // Card
    "card.by": "by",
    "card.buildGuide": "Build Guide",
    "card.share": "リンクをシェア",
    "card.copied": "リンクをコピーしました",
    "card.copyFailed": "リンクのコピーに失敗しました",

    // About
    "about.sectionTitle": "/ About",
    "about.title": "A field guide,\nnot a forge.",
    "about.body1":
      "ビルドガイド横丁は、自作キーボードのビルドガイドを横断的に「眺められる」場所です。各ガイドの本体は作者のサイトに委ねつつ、ここではメタデータの集約と検索性に専念しています。",
    "about.body2":
      "設計者が他の人のガイドから学び、ビルダーが自分のキットの組み立て手順にすぐ辿り着き、愛好家が新しい一台を発見する。そんな、国内の自作キーボード文化の可視化を目指しています。",
    "about.body3prefix":
      "掲載内容に誤りや変更がある場合は、いつでもお気軽にご連絡ください。自分のキーボードを載せたい方は、",
    "about.body3link": "GitHub",
    "about.body3suffix":
      "にPRを送るだけで誰でも掲載できます。",

    // Footer
    "footer.copy": "© 2026 — curated with care",
    "footer.tagline": "made for the joy of self-made keyboards",
  },
  en: {
    // Meta
    "meta.title": "Build Guide Yokocho — Self-Made Keyboard Build Guides",
    "meta.description":
      "A curated portal for self-made keyboard build guides. Browse, search, and discover guides from the Japanese keyboard community and beyond.",
    "meta.siteName": "Build Guide Yokocho",

    // Hero
    "hero.badge": "EST. 2026",
    "hero.badgeLine": "— A FIELD GUIDE TO JAPANESE SELF-MADE KEYBOARDS",
    "hero.tagline":
      "Wander through keyboard build guides like strolling down the back alleys of Akihabara.\nA curated stock-type portal collecting self-made keyboard build guides.",
    "hero.statGuides": "guides curated",
    "hero.statTags": "tags indexed",
    "hero.statGrowing": "growing",

    // Nav
    "nav.guides": "Guides",
    "nav.about": "About",
    "nav.toggleTheme": "Toggle theme",
    "nav.toDark": "Switch to dark mode",
    "nav.toLight": "Switch to light mode",

    // Today's Pick
    "todaysPick.count": "3 picks",

    // Filters
    "filter.sectionTitle": "/ Guides",
    "filter.entries": "entries",
    "filter.searchPlaceholder": "search keyboard or designer...",
    "filter.tagLabel": "Filter by tag",
    "filter.all": "all",

    // Grid
    "grid.empty": "─ no guides match your filter ─",

    // Card
    "card.by": "by",
    "card.buildGuide": "Build Guide",
    "card.share": "Share link",
    "card.copied": "Link copied",
    "card.copyFailed": "Failed to copy link",

    // About
    "about.sectionTitle": "/ About",
    "about.title": "A field guide,\nnot a forge.",
    "about.body1":
      "Build Guide Yokocho is a place to browse self-made keyboard build guides at a glance. The actual guides live on each creator's site — here we focus on aggregating metadata and making them searchable.",
    "about.body2":
      "Designers learn from each other's guides, builders quickly find assembly instructions for their kits, and enthusiasts discover their next board. Our goal is to make Japan's self-made keyboard culture visible to the world.",
    "about.body3prefix":
      "If you spot any errors or outdated info, feel free to reach out. Want to list your keyboard? Just send a PR on ",
    "about.body3link": "GitHub",
    "about.body3suffix": ".",

    // Footer
    "footer.copy": "© 2026 — curated with care",
    "footer.tagline": "made for the joy of self-made keyboards",
  },
} as const;
