// Language switch: full English <-> full Chinese.
// The HTML is written in English. This file maps each English string
// (element innerHTML, whitespace-normalised) to its Chinese version.
// Elements with a data-i18n attribute use the KEYED table instead, so
// strings that contain links can be translated safely.
(function () {
  const ZH = {
    // ---- shared nav / footer ----
    "Home": "首页",
    "About": "关于",
    "Her Story": "她的故事",
    "Learn": "学习",
    "Connect": "联系",
    "Follow on IG": "关注 IG",
    "Get in Touch": "联系我们",
    "Follow along.": "一起走下去。",
    "No pressure, no \"link in bio.\" Just her story, one chapter at a time — in English and 中文.":
      "没有压力，没有“主页链接”式的推销。只有她的故事，一章一章地讲——中英文皆有。",
    "Sharing her personal journey. Not financial advice. Angel does not recommend specific investments or promise returns.":
      "分享个人经历，不构成理财建议。Angel 不推荐具体投资，也不承诺回报。",
    "She proves you can build serious money and a beautiful family without hustle culture, hype, or losing yourself.":
      "她证明了，不靠拼命文化、不靠炒作、不迷失自己，也能建立可观的财富和美满的家庭。",
    "Not an influencer. A mentor.": "不是网红，是导师。",

    // ---- home ----
    "Angel Wen — The Wholesome Wealth Mentor": "Angel Wen — 温暖踏实的财富导师",
    "Investor · Mentor · Mother of Two": "投资人 · 导师 · 两个孩子的妈妈",
    "The wholesome wealth mentor.": "温暖踏实的财富导师。",
    "Proof that you can build serious money and a beautiful family — without hustle culture, without hype, without losing yourself.":
      "她证明了：不靠拼命、不靠炒作、不迷失自己，也能建立可观的财富和美满的家庭。",
    "\"I'm a mom of two attorneys, and an investor. Let me tell you how that happened.\"":
      "“我是两位律师的妈妈，也是一名投资人。让我告诉你这一切是怎么发生的。”",
    "Follow the Journey": "关注她的旅程",
    "Read Her Story": "阅读她的故事",
    "安 Mentor": "安 导师",
    "心 Warmth": "心 温暖",
    "财 Wealth Wisdom": "财 财富智慧",
    "路 Her Story": "路 她的故事",
    "行 Come With Me": "行 跟我来",
    "家 Family &amp; Fun": "家 家庭与欢乐",
    "Videos / Month": "每月视频",
    "Content Pillars": "内容支柱",
    "Languages": "种语言",
    "Day Roadmap": "天路线图",
    "学 Learn with Angel": "学 跟 Angel 学习",
    "Want to learn how she did it?": "想知道她是怎么做到的吗？",
    "Work with Angel one on one: start with a single consultation, continue with life coaching, or bring her into your business. In English and 中文.":
      "与 Angel 一对一合作：从一次咨询开始，继续人生教练课程，或邀请她参与你的事业。中英文皆可。",
    "See the Packages": "查看方案",
    "First Consultation": "首次咨询",
    "Life Coaching": "人生教练",
    "$200 / hr · 5-session min": "$200 / 小时 · 至少 5 次",
    "Business Consulting": "商业咨询",
    "Custom quote": "按案例报价",
    "@angelchenofficial on Instagram": "Instagram @angelchenofficial",

    // ---- about ----
    "About Angel Wen — Lived Credibility, Not Production Polish": "关于 Angel Wen — 真实的经历，而非精致的包装",
    "源 Who She Is": "源 她是谁",
    "Lived credibility, not production polish.": "真实的经历，而非精致的包装。",
    "Not a media professional. Not chasing polish. Just a real story people trust.":
      "不是媒体专业人士，也不追求精致。只有一个让人信任的真实故事。",
    "From local wins to global investing.": "从本地成功到全球投资。",
    "Angel is a successful Asian investor who grew from local wins into global investing. She raised two children who both became attorneys. She speaks Chinese and English fluently, and she isn't a media professional — and that's exactly the point. Her value was never about polish. It's about a real story people trust.":
      "Angel 是一位成功的亚裔投资人，从本地的成功一步步走向全球投资。她抚养的两个孩子都成为了律师。她中英文流利，不是媒体专业人士——而这正是重点。她的价值从来不在于包装，而在于一个让人信任的真实故事。",
    "Most finance content online is loud young men promising fast money. Angel is the opposite: warm, established, and proven — with real results, real family values, and a story that doesn't need to shout.":
      "网上大多数理财内容，都是大声承诺快速致富的年轻人。Angel 恰恰相反：温暖、稳重、有真实成果、有真正的家庭价值观，她的故事不需要大声喊。",
    "Local wins → global investing": "本地成功 → 全球投资",
    "Raised two attorneys": "培养了两位律师",
    "Bilingual — English + 中文": "双语 — 英文 + 中文",
    "Auntie Angel Energy": "Angel 阿姨的能量",
    "The mentor archetype, with warmth.": "带着温度的导师。",
    "She talks the way she would to a young person at a dinner party who just asked her how she did it. Encouraging, a little playful, occasionally blunt in the way only a mom can be. Her accent and her imperfect English aren't flaws — they're what make her real.":
      "她说话的方式，就像在饭桌上回答一位年轻人“你是怎么做到的”。鼓励、带点俏皮，偶尔像妈妈一样直率。她的口音和不完美的英文不是缺点，正是让她真实的原因。",
    "Warm": "温暖",
    "Wise": "睿智",
    "Playful": "俏皮",
    "Grounded": "踏实",
    "Generous": "慷慨",
    "Quietly confident": "内敛自信",
    "See What She Shares →": "看看她分享什么 →",

    // ---- her story ----
    "Her Story — Angel Wen": "她的故事 — Angel Wen",
    "柱 What She Shares": "柱 她分享什么",
    "Four stories, always intentional.": "四个主题，始终有意。",
    "Every piece of content belongs to one of four pillars — so her story always feels like it's going somewhere.":
      "每一条内容都属于四大支柱之一——所以她的故事总有方向。",
    "Money Wisdom": "财富智慧",
    "Simple money mindset and life lessons from her investing journey — motivational, never prescriptive.":
      "来自她投资旅程的简单金钱观和人生课——鼓舞人心，从不说教。",
    "\"Why patient money beats fast money.\"": "“为什么耐心的钱赢过快钱。”",
    "My Story": "我的故事",
    "Her journey in chapters: where she started, the hard seasons, the first wins, going global.":
      "她的旅程分章讲述：起点、艰难的季节、最初的胜利、走向全球。",
    "\"How I made my first investment.\"": "“我的第一笔投资是怎么做的。”",
    "Come With Me": "跟我来",
    "Event recaps and behind-the-scenes moments — art shows, investor dinners, real deal rooms.":
      "活动回顾与幕后时刻——艺术展、投资人晚宴、真实的谈判现场。",
    "\"An art show inside a private cigar club.\"": "“私人雪茄俱乐部里的艺术展。”",
    "Family &amp; Fun": "家庭与欢乐",
    "The wholesome heart of it all: raising two attorneys, Chinese culture, mom humor, family values.":
      "这一切温暖的核心：培养两位律师、中华文化、妈妈式幽默、家庭价值观。",
    "\"How I raised two attorneys.\"": "“我是如何培养出两位律师的。”",
    "A glimpse of the life.": "生活一瞥。",
    "Events, travel, and family moments from Angel's own life.": "活动、旅行与家庭时光——来自 Angel 自己的生活。",
    "An art show inside a cigar club": "雪茄俱乐部里的艺术展",
    "An evening out": "夜晚外出",
    "Coffee &amp; conversation": "咖啡与对话",
    "Follow Along →": "一起走下去 →",

    // ---- learn ----
    "Learn with Angel — Mentorship Packages": "跟 Angel 学习 — 辅导方案",
    "Sit at the table. Learn how she did it.": "坐到桌前，学习她是怎么做到的。",
    "Not a course full of hacks. A mentor who built serious money and a beautiful family, teaching the mindset and habits that got her from local wins to global investing — in English and 中文.":
      "这不是一门充满技巧的课程，而是一位建立了可观财富和美满家庭的导师，教你让她从本地成功走向全球投资的心态与习惯——中英文皆可。",
    "Three ways in": "三种方式",
    "Choose how you want to work with her.": "选择你想要的合作方式。",
    "Every session is with Angel herself, one on one. Start with a single consultation or commit to a coaching package.":
      "每一次课程都由 Angel 亲自一对一进行。可以从一次咨询开始，也可以直接选择教练方案。",
    "one session": "一次",
    "Start here. One private hour with Angel.": "从这里开始。与 Angel 私下相处一小时。",
    "60 minutes, one on one": "60 分钟，一对一",
    "Talk through where you are and where you want to go": "聊聊你现在的位置和想去的方向",
    "Leave with one clear next step": "带着一个明确的下一步离开",
    "English or 中文, your choice": "英文或中文，由你选择",
    "In person in Los Angeles or by video": "洛杉矶面对面或视频进行",
    "Book a Consultation": "预约咨询",
    "Life coaching": "人生教练",
    "Coaching Package": "教练方案",
    "/ hour": "/ 小时",
    "Ongoing life coaching. Minimum of 5 sessions ($1,000).": "持续的人生教练课程。至少 5 次（$1,000）。",
    "Five or more private one-hour sessions": "五次或以上的一小时私人课程",
    "Money mindset, family, and life direction": "金钱观、家庭与人生方向",
    "A plan built around your season of life": "根据你当下人生阶段量身定制的计划",
    "Message access between sessions": "课程之间可随时留言",
    "Bilingual notes after every session": "每次课后提供中英文笔记",
    "Start Coaching": "开始教练课程",
    "Custom": "定制",
    "quoted per case": "按案例报价",
    "International business consulting. Priced to the engagement.": "国际商业咨询，按项目定价。",
    "Cross-border business and investment strategy": "跨境商业与投资策略",
    "US and Chinese market perspective": "美国与中国市场视角",
    "Scope and pricing set after a first conversation": "首次沟通后确定范围与报价",
    "Hourly or project based": "按小时或按项目",
    "Introductions from her network where it fits": "合适时引荐她的人脉",
    "Request a Quote": "获取报价",
    "How it works": "流程",
    "Simple, like everything she teaches.": "简单，就像她教的一切。",
    "Pick your seat": "选择你的方案",
    "Book a first consultation or a coaching package. Angel's team confirms a time within a day.":
      "预约首次咨询或教练方案，Angel 的团队会在一天内确认时间。",
    "Show up as you are": "做你自己来就好",
    "No finance background needed. Bring your questions, your goals, and a cup of tea.":
      "不需要金融背景。带上你的问题、你的目标和一杯茶。",
    "Build patiently": "耐心地建立",
    "Leave each session with one clear, simple thing to do. That's how she built it, too.":
      "每次课后带走一件清楚、简单的事去做。她也是这样一步步建立起来的。",
    "Questions": "常见问题",
    "Before you join.": "加入之前。",
    "Is this financial advice?": "这是理财建议吗？",
    "No. Angel shares her personal journey, mindset, and habits. She never recommends specific investments or promises returns. For decisions about your own money, speak to a licensed professional.":
      "不是。Angel 分享的是她的个人经历、心态和习惯。她从不推荐具体投资，也不承诺回报。关于你自己的资金决定，请咨询持牌专业人士。",
    "Are sessions in English or Chinese?": "课程用英文还是中文？",
    "Both. Angel teaches in English with Mandarin whenever it helps, and all notes come in both languages.":
      "都可以。Angel 用英文授课，需要时用普通话，所有笔记都提供中英文版本。",
    "Do I have to buy five sessions?": "我必须买五次课吗？",
    "Not to start. The first consultation is a single session at $150. Ongoing life coaching is $200 an hour with a five-session minimum, so you have enough time together for real change.":
      "一开始不需要。首次咨询是单次 $150。持续的人生教练课程为每小时 $200，至少 5 次，这样才有足够的时间带来真正的改变。",
    "How is business consulting priced?": "商业咨询如何定价？",
    "It depends on the case. After a first conversation about your business, Angel's team sends a scope and a quote, hourly or by project.":
      "视情况而定。就你的业务进行首次沟通后，Angel 的团队会发送服务范围和报价，按小时或按项目。",
    "What if I need to reschedule?": "如果需要改期怎么办？",
    "Sessions can be moved with 24 hours notice. Just reply to your confirmation email.":
      "提前 24 小时通知即可改期。回复你的确认邮件就好。",
    "Ready when you are.": "随时欢迎你。",
    "Pull up a chair. Angel would love to tell you how it happened, and help you write your own chapter.":
      "拉把椅子坐下。Angel 很乐意告诉你这一切是怎么发生的，并帮你写下属于你的篇章。",
    "Ask a Question": "提个问题",
    "Mentorship and education only. Not financial advice. Angel does not recommend specific investments or promise returns.":
      "仅为辅导与教育，不构成理财建议。Angel 不推荐具体投资，也不承诺回报。",

    // ---- connect ----
    "Connect — Angel Wen": "联系 — Angel Wen",
    "安 Connect": "安 联系",
    "安 Work With Me": "安 与我合作",
    "Private consulting, one on one.": "一对一私人咨询。",
    "Beyond the content, Angel takes on a small number of private clients directly.":
      "除了内容之外，Angel 也直接接受少量私人客户。",
    "1:1 Consulting": "一对一咨询",
    "International Business Consultant": "国际商业顾问",
    "Family Life Coach": "家庭人生教练",
    "First consultation $150 · Life coaching $200/hr, 5-session minimum · Business consulting quoted per case":
      "首次咨询 $150 · 人生教练每小时 $200，至少 5 次 · 商业咨询按案例报价",
    "Sharing her personal journey and expertise. Not financial advice. Angel does not recommend specific investments or promise returns.":
      "分享个人经历与专业经验，不构成理财建议。Angel 不推荐具体投资，也不承诺回报。",
    "The journey is documented on Instagram first — money wisdom, her story, behind the scenes, and family, three times a week.":
      "这段旅程首先记录在 Instagram 上——财富智慧、她的故事、幕后花絮和家庭，每周三次。",
    "Follow on Instagram": "在 Instagram 关注",
    "Share": "分享",
    "Scan to visit.": "扫码访问。",
    "One code, straight to the site — good for a bio link, a story sticker, or a printed card.":
      "一个二维码，直达网站——适合放在主页链接、限时动态贴纸或印刷卡片上。",
  };

  // Strings that contain links: keyed by data-i18n.
  const KEYED = {
    "learn.note":
      "价格以美元计。大多数人从首次咨询开始。不确定？<a href=\"mailto:hello@sisterangel.com?subject=Which%20package%20is%20right%20for%20me%3F\">问问 Angel 的团队</a>。",
    "connect.qr":
      "<a href=\"images/qr-code.png\" download=\"angel-wen-qr.png\" style=\"text-decoration:underline\">下载图片</a>，发布到你的新社交频道。",
  };

  const SELECTOR = [
    "h1", "h2", "h3", "p", "li", "summary", "blockquote", "cite",
    ".eyebrow", ".btn", ".nav-links a", ".chip", ".trait", ".stat-label",
    ".gallery-tile span", ".marquee-track span", ".pillar-card .ex",
    ".price-tag .per", ".price-tag .amount", ".teaser-list strong",
    ".teaser-list li span", ".badge", ".price-sub", ".disclaimer",
    "[data-i18n]",
  ].join(",");

  const norm = (s) => s.replace(/\s+/g, " ").trim();
  const root = document.documentElement;
  const nodes = [];

  document.querySelectorAll(SELECTOR).forEach((el) => {
    if (el.dataset.i18nReady) return;
    let zh = null;
    if (el.dataset.i18n) zh = KEYED[el.dataset.i18n] || null;
    else zh = ZH[norm(el.innerHTML)] || null;
    if (!zh) return;
    el.dataset.i18nReady = "1";
    nodes.push({ el, en: el.innerHTML, zh });
  });
  const titleEn = document.title;
  const titleZh = ZH[norm(titleEn)] || titleEn;

  function positionKnob() {
    const sw = document.getElementById("langSwitch");
    if (!sw) return;
    const active = sw.querySelector(`.opt[data-lang="${root.dataset.lang}"]`);
    const knob = sw.querySelector(".knob");
    if (!active || !knob) return;
    knob.style.width = active.offsetWidth + "px";
    sw.style.setProperty("--knob-x", active.offsetLeft - 3 + "px");
  }

  function apply(lang, persist) {
    const zh = lang === "zh";
    nodes.forEach(({ el, en, zh: z }) => { el.innerHTML = zh ? z : en; });
    document.title = zh ? titleZh : titleEn;
    root.lang = zh ? "zh-Hans" : "en";
    root.dataset.lang = zh ? "zh" : "en";
    if (persist) { try { localStorage.setItem("lang", root.dataset.lang); } catch (e) {} }
    positionKnob();
  }

  let saved = "en";
  try { saved = localStorage.getItem("lang") || "en"; } catch (e) {}
  if (saved === "en" && /^zh/i.test(navigator.language || "") && !localStorage.getItem("lang")) saved = "zh";
  apply(saved, false);

  const sw = document.getElementById("langSwitch");
  if (sw) {
    sw.addEventListener("click", () => apply(root.dataset.lang === "zh" ? "en" : "zh", true));
    window.addEventListener("resize", positionKnob);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(positionKnob);
  }
  window.__i18nMissing = () => {
    const out = [];
    document.querySelectorAll(SELECTOR).forEach((el) => {
      if (el.dataset.i18nReady) return;
      if (el.children.length && !el.dataset.i18n) return;
      const t = norm(el.textContent);
      if (!t || /^[\d$@%\/\.\s,·:+-]+$/.test(t) || /^©/.test(t)) return;
      out.push(t.slice(0, 70));
    });
    return out;
  };
})();
