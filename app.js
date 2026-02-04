"use strict";

/* =========================
   0) Cloudinary (SAFE)
========================= */
const CLOUD_NAME = "dyqdfbaln";
const HERO_PUBLIC_ID = "hero_mr6uhc"; // غيّره إذا بدلت الهيرو

function cld(publicIdOrUrl, w = 1600) {
  if (!publicIdOrUrl) return "";
  if (/^https?:\/\//i.test(publicIdOrUrl)) return publicIdOrUrl;
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_${w}/${publicIdOrUrl}`;
}

function setImgSafe(imgEl, publicIdOrUrl, w = 1600, fallbackSrc = "") {
  if (!imgEl) return;
  const next = cld(publicIdOrUrl, w);
  const fallback = fallbackSrc || imgEl.getAttribute("src") || "";

  if (!CLOUD_NAME) {
    if (fallback) imgEl.src = fallback;
    return;
  }

  const tester = new Image();
  tester.onload = () => (imgEl.src = next);
  tester.onerror = () => {
    if (fallback) imgEl.src = fallback;
  };
  tester.src = next;
}

/* =========================
   1) Language
========================= */
const LS_LANG = "hoa_menu_lang";
function getLang() {
  return localStorage.getItem(LS_LANG) || "ar";
}
function applyLang(lang) {
  document.documentElement.lang = lang === "ar" ? "ar" : "en";
  document.body.dir = lang === "ar" ? "rtl" : "ltr";
}
function setLang(lang) {
  localStorage.setItem(LS_LANG, lang);
  applyLang(lang);
  render(); // ✅ فوري بدون ريفرش
}

/* =========================
   2) Menu Data (AR/EN + PRICE)
   ملاحظة: الأسعار placeholders — غيّرها أنت لاحقًا
========================= */
const MENU = {
  soups: {
    title: { ar: "الشوربات", en: "Soups" },
    items: [
      { img:"hoa-soup-2_gut335",
        name:{ ar:"شوربة دجلة المحروقة", en:"Burnt Tigris Soup" },
        desc:{ ar:"مرق لحم غامق، بصل محروق خفيف، حمص مطحون، لمسة ليمون يابس",
              en:"Dark meat broth, lightly burnt onion, ground chickpeas, dried lime" },
        price:{ ar:"— د.ع", en:"— IQD" }
      },
      { img:"-soup-1_esvtrq",
        name:{ ar:"حساء التنور الأبيض", en:"White Tannour Soup" },
        desc:{ ar:"لبن مطبوخ، قمح مهروس، زبدة عربية محمّرة",
              en:"Cooked yogurt, crushed wheat, browned Arabic butter" },
        price:{ ar:"— د.ع", en:"— IQD" }
      },
      { img:"hoa-soup_ykpmsf",
        name:{ ar:"شوربة الهيل والعدس الأسود", en:"Black Lentil & Cardamom Soup" },
        desc:{ ar:"عدس أسود، هيل، بصل مكرمل، زيت سمسم خفيف",
              en:"Black lentils, cardamom, caramelized onion, light sesame oil" },
        price:{ ar:"— د.ع", en:"— IQD" }
      }
    ]
  },

  appetizers: {
    title: { ar: "المقبلات", en: "Appetizers" },
    items: [
      { img:"hoa-appe-2_ddn4fc", name:{ ar:"لقيمات الطين", en:"Clay Bites" },
        desc:{ ar:"كرات بطاطا مدخنة، بهارات عراقية، طحينة بالثوم المحروق",
              en:"Smoked potato bites, Iraqi spices, tahini with charred garlic" },
        price:{ ar:"— د.ع", en:"— IQD" }
      },
      { img:"hoa-appe-1_nngppf", name:{ ar:"مسكوف بارد على طريقة بغداد", en:"Cold Masgouf — Baghdad Style" },
        desc:{ ar:"سمك مدخن، رمان، خبز يابس مطحون",
              en:"Smoked fish, pomegranate, crushed dry bread" },
        price:{ ar:"— د.ع", en:"— IQD" }
      },
      { img:"hoa-appe-6_bvxtze", name:{ ar:"حمّص بيت التحفيات", en:"House Hummus" },
        desc:{ ar:"حمص ناعم، دبس تمر، زيت ليمون أسود",
              en:"Silky hummus, date molasses, black-lime oil" },
        price:{ ar:"— د.ع", en:"— IQD" }
      },
      { img:"hoa-appe-5_ntimqy", name:{ ar:"كبة الحوش", en:"Courtyard Kubba" },
        desc:{ ar:"كبة صغيرة محشوة لحم وجوز، تقديم فاخر",
              en:"Mini kubba stuffed with meat & walnut, elevated plating" },
        price:{ ar:"— د.ع", en:"— IQD" }
      },
      { img:"hoa-appe_af1jfj", name:{ ar:"سلطة الميدان", en:"Al-Midan Salad" },
        desc:{ ar:"طماطة، بصل، سماق، دبس رمان، نعناع",
              en:"Tomato, onion, sumac, pomegranate molasses, mint" },
        price:{ ar:"— د.ع", en:"— IQD" }
      },
      { img:"hoa-appe-4_iuafh4", name:{ ar:"رغيف الجدّة", en:"Grandma’s Stuffed Flatbread" },
        desc:{ ar:"خبز رقيق محشو جبن محلي وأعشاب",
              en:"Thin bread stuffed with local cheese & herbs" },
        price:{ ar:"— د.ع", en:"— IQD" }
      }
    ]
  },

  mains: {
    title: { ar: "الأطباق الرئيسية", en: "Main Courses" },
    items: [
      { img:"hoa-main-6_fri47j", name:{ ar:"مقلوبة السراي", en:"Saray Maqluba" },
        desc:{ ar:"رز أحمر، لحم غنم مطهو ببطء، تقديم مقلوب فردي",
              en:"Red rice, slow-cooked lamb, individual inverted serve" },
        price:{ ar:"— د.ع", en:"— IQD" }
      },
      { img:"hoa-main-7_qpnscw", name:{ ar:"تشريب الملوك", en:"Kings’ Tashreeb" },
        desc:{ ar:"خبز رقاق، لحم، مرق كثيف مع نخاع",
              en:"Raqaq bread, meat, rich broth with marrow" },
        price:{ ar:"— د.ع", en:"— IQD" }
      },
      { img:"hoa-main-3_hyty17", name:{ ar:"دولمة التحفيات السوداء", en:"Black House Dolma" },
        desc:{ ar:"محشية بدبس تمر وقليل قرفة",
              en:"Stuffed with date molasses and a touch of cinnamon" },
        price:{ ar:"— د.ع", en:"— IQD" }
      },
      { img:"hoa-main-5_d3aro1", name:{ ar:"كباب الچايخانة", en:"Chaykhana Kebab" },
        desc:{ ar:"كباب مشوي، صوص طماطة مدخن",
              en:"Grilled kebab, smoked tomato sauce" },
        price:{ ar:"— د.ع", en:"— IQD" }
      },
      { img:"hoa-main2_c5lrbw", name:{ ar:"برياني بغداد القديم", en:"Old Baghdad Biryani" },
        desc:{ ar:"أرز بهارات عراقية، لحم، مكسرات",
              en:"Rice with Iraqi spices, meat, nuts" },
        price:{ ar:"— د.ع", en:"— IQD" }
      },
      { img:"hoa-main-4_wagnoe", name:{ ar:"سمك تنور أبو نؤاس", en:"Abu Nuwas Tannour Fish" },
        desc:{ ar:"فيليه سمك مشوي، تمر هندي، أعشاب",
              en:"Grilled fish fillet, tamarind, herbs" },
        price:{ ar:"— د.ع", en:"— IQD" }
      }
    ]
  },

  hotdrinks: {
    title: { ar: "المشروبات الحارة", en: "Hot Drinks" },
    items: [
      { img:"hoa/menu/hot_1", name:{ ar:"چاي بغداد الثقيل", en:"Baghdad Strong Tea" },
        desc:{ ar:"ثقيل ومركز — على طريقة الگهوات القديمة",
              en:"Bold, concentrated, old-school café style" },
        price:{ ar:"— د.ع", en:"— IQD" }
      },
      { img:"hoa/menu/hot_2", name:{ ar:"قهوة الهيل العراقية", en:"Iraqi Cardamom Coffee" },
        desc:{ ar:"قهوة عربية مع هيل، تقديم متحفي",
              en:"Arabic coffee with cardamom, museum-like serve" },
        price:{ ar:"— د.ع", en:"— IQD" }
      },
      { img:"hoa-drin_sv3iai", name:{ ar:"شاي ليمون أسود", en:"Black Lime Tea" },
        desc:{ ar:"ليمون يابس، رائحة مدخنة خفيفة",
              en:"Dried lime, gentle smoky aroma" },
        price:{ ar:"— د.ع", en:"— IQD" }
      },
      { img:"hoa/menu/hot_4", name:{ ar:"قرفة بالحليب", en:"Cinnamon Milk" },
        desc:{ ar:"ناعم ودافئ، قرفة مطحونة",
              en:"Warm and smooth, ground cinnamon" },
        price:{ ar:"— د.ع", en:"— IQD" }
      }
    ]
  },

  colddrinks: {
    title: { ar: "المشروبات الباردة", en: "Cold Drinks" },
    items: [
      { img:"hoa/menu/cold_1", name:{ ar:"ليمون أبو نؤاس", en:"Abu Nuwas Lemon" },
        desc:{ ar:"ليمون فريش، لمسة نعناع",
              en:"Fresh lemon, hint of mint" },
        price:{ ar:"— د.ع", en:"— IQD" }
      },
      { img:"hoa/menu/cold_2", name:{ ar:"تمر هندي فاخر", en:"Luxury Tamarind" },
        desc:{ ar:"تمر هندي مركز، توازن حلو/حامض",
              en:"Concentrated tamarind, sweet-tart balance" },
        price:{ ar:"— د.ع", en:"— IQD" }
      },
      { img:"hoa/menu/cold_3", name:{ ar:"شراب رمان مدخن", en:"Smoked Pomegranate Drink" },
        desc:{ ar:"رمان مع نفَس مدخن خفيف",
              en:"Pomegranate with a gentle smoky note" },
        price:{ ar:"— د.ع", en:"— IQD" }
      },
      { img:"hoa/menu/cold_4", name:{ ar:"عرق سوس بارد", en:"Cold Licorice" },
        desc:{ ar:"كأس واحد نظيف — بدون إضافات",
              en:"Single clean glass — no extras" },
        price:{ ar:"— د.ع", en:"— IQD" }
      }
    ]
  },

  desserts: {
    title: { ar: "الحلويات", en: "Desserts" },
    items: [
      { img:"hoa-des-3_gsn9xv", name:{ ar:"دهينة النحاس", en:"Copper Dehina" },
        desc:{ ar:"دهين عراقي مع تمر وجوز",
              en:"Iraqi dehina with dates & walnut" },
        price:{ ar:"— د.ع", en:"— IQD" }
      },
      { img:"hoa-des-1_ypqbti", name:{ ar:"كليجة القصر", en:"Palace Kleicha" },
        desc:{ ar:"كليجة صغيرة محشوة تمر وقرفة",
              en:"Mini kleicha stuffed with dates & cinnamon" },
        price:{ ar:"— د.ع", en:"— IQD" }
      },
      { img:"hoa-des-2_dbfvtm", name:{ ar:"رز بالحليب والهيل المحروق", en:"Rice Pudding & Burnt Cardamom" },
        desc:{ ar:"تقديم عصري، ناعم جداً",
              en:"Modern plating, ultra-smooth" },
        price:{ ar:"— د.ع", en:"— IQD" }
      }
    ]
  },

  shisha: {
    title: { ar: "النراكيل", en: "Shisha" },
    items: [
      { img:"hoa-shisha_whgvtt", name:{ ar:"تفاحتين التحفيات", en:"Double Apple" },
        desc:{ ar:"كلاسيك مضبوط",
              en:"Perfect classic" },
        price:{ ar:"— د.ع", en:"— IQD" }
      },
      { img:"hoa-shisha_whgvtt", name:{ ar:"عنبر عراقي", en:"Iraqi Amber" },
        desc:{ ar:"نفَس شرقي ناعم",
              en:"Soft oriental profile" },
        price:{ ar:"— د.ع", en:"— IQD" }
      },
      { img:"hoa-shisha_whgvtt", name:{ ar:"نعناع دجلة", en:"Tigris Mint" },
        desc:{ ar:"نعناع بارد وواضح",
              en:"Crisp cool mint" },
        price:{ ar:"— د.ع", en:"— IQD" }
      },
      { img:"hoa-shisha_whgvtt", name:{ ar:"تفاح بالقرفة", en:"Apple & Cinnamon" },
        desc:{ ar:"حلو-حار متوازن",
              en:"Balanced sweet-spice" },
        price:{ ar:"— د.ع", en:"— IQD" }
      },
      { img:"hoa-shisha_whgvtt", name:{ ar:"مكس بيت التحفيات (سري)", en:"House Mix (Secret)" },
        desc:{ ar:"ممنوع السؤال — بس جرّبه",
              en:"No questions — just try it" },
        price:{ ar:"— د.ع", en:"— IQD" }
      }
    ]
  }
};

/* =========================
   3) Categories + covers
   هنا تغيّر صور كفر الأقسام
========================= */
const CATS = [
  { key: "soups",      icon: "🍲", tone: "warm" },
  { key: "appetizers", icon: "🥙", tone: "dark" },
  { key: "mains",      icon: "🍽️", tone: "warm" },
  { key: "hotdrinks",  icon: "☕", tone: "dark" },
  { key: "colddrinks", icon: "🧊", tone: "warm" },
  { key: "desserts",   icon: "🍰", tone: "dark" },
  { key: "shisha",     icon: "💨", tone: "warm" }
];

// ✅ ضع هنا Public ID لكل كفر قسم (نفس طريقة السوب اللي نجحت عندك)
const CARD_COVERS = {
  soups: "hoa-soup-1_esvtrq",
  appetizers: "hoa-appe-1_nngppf",
  mains: "hoa-main-6_fri47j",
  hotdrinks: "hoa-drin_sv3iai",
  colddrinks: "hoa/menu/cold_1",
  desserts: "hoa-des-1_ypqbti",
  shisha: "hoa-shisha_whgvtt"
};

/* =========================
   4) Navigation + fade
========================= */
function fadeTo(url) {
  const f = document.querySelector(".pageFade");
  if (!f) { location.href = url; return; }
  f.classList.add("on");
  setTimeout(() => (location.href = url), 420);
}

/* =========================
   5) Render Router
========================= */
function render() {
  const page = document.body.getAttribute("data-page");
  if (page === "index") renderIndex();
  if (page === "category") renderCategory();
}

/* =========================
   6) Index
========================= */
function renderIndex() {
  applyLang(getLang());

  const grid = document.querySelector("#cardsGrid");
  if (!grid) return;

  // hero
  const heroImg = document.querySelector("#heroImg");
  if (heroImg) setImgSafe(heroImg, HERO_PUBLIC_ID, 2200, heroImg.getAttribute("src") || "");

  // titles
  const i18n = {
    homeTitle: { ar: "بيت التحفيات", en: "House of Antiques" },
    homeSub:   { ar: "منيو متحفي — تجربة رقمية بطابع مطبوع فاخر", en: "Museum Menu — a luxury print-like digital experience" }
  };
  const t1 = document.querySelector("[data-i18n='homeTitle']");
  const t2 = document.querySelector("[data-i18n='homeSub']");
  if (t1) t1.textContent = i18n.homeTitle[getLang()];
  if (t2) t2.textContent = i18n.homeSub[getLang()];

  // build
  grid.innerHTML = "";

  CATS.forEach((c, i) => {
    const data = MENU[c.key];
    const lang = getLang();
    const count = data.items.length;

    // ✅ داخل كارد القسم نعرض 3 عناصر (اسم + سعر) — مثل ما طلبت
    const featured = data.items.slice(0, 3).map(it => {
      const n = it.name[lang];
      const p = (it.price && it.price[lang]) ? it.price[lang] : (lang === "ar" ? "— د.ع" : "— IQD");
      return `<li><span class="tItemName">${n}</span> <span class="tItemPrice">${p}</span></li>`;
    }).join("");

    const side = (i % 2 === 0) ? "is-left" : "is-right";
    const coverId = CARD_COVERS[c.key] || `hoa/menu/cat_${c.key}`; // fallback

    const card = document.createElement("article");
    card.className = `refCard ${side} tone-${c.tone}`;
    card.style.animationDelay = `${120 + i * 70}ms`;
card.innerHTML = `
  <div class="ticket">
    <div class="ticket__stub">
      <div class="ticket__meta font-body">
        <span class="ticket__kicker">${c.icon}</span>
        <span class="ticket__small">${getLang()==="ar" ? "قسم" : "Section"}</span>
      </div>

      <h3 class="ticket__title font-display">${data.title[getLang()]}</h3>

      <div class="ticket__hint font-body">
        ${getLang()==="ar" ? "اضغط للدخول" : "Tap to enter"}
      </div>
    </div>

    <div class="ticket__window" aria-hidden="true">
      <img data-catimg alt="">
    </div>

    <div class="ticket__bar">
      <div class="barcode" aria-hidden="true"></div>
      <div class="ticket__tap font-body">${getLang()==="ar" ? "اضغط" : "Tap"}</div>
    </div>
  </div>
`;


    const imgEl = card.querySelector("[data-catimg]");
    setImgSafe(imgEl, coverId, 1400, cld(HERO_PUBLIC_ID, 1400));

    card.addEventListener("click", () => fadeTo(`category.html?cat=${encodeURIComponent(c.key)}`));
    grid.appendChild(card);
    requestAnimationFrame(() => card.classList.add("reveal"));
  });
}

/* =========================
   7) Category Page
========================= */
function renderCategory() {
  applyLang(getLang());

  const itemsGrid = document.querySelector("#itemsGrid");
  if (!itemsGrid) return;

  const params = new URLSearchParams(location.search);
  const key = params.get("cat") || "soups";
  const cat = MENU[key];
  const lang = getLang();

  // hero
  const heroImg = document.querySelector("#heroImg");
  if (heroImg) setImgSafe(heroImg, HERO_PUBLIC_ID, 2200, heroImg.getAttribute("src") || "");

  // header
  const titleEl = document.querySelector("#catTitle");
  const hintEl = document.querySelector("#catHint");
  if (titleEl) titleEl.textContent = cat.title[lang];
  if (hintEl) hintEl.textContent = (lang === "ar") ? `${cat.items.length} أصناف` : `${cat.items.length} items`;

  // items
  itemsGrid.innerHTML = "";

  cat.items.forEach((it, i) => {
    const price = (it.price && it.price[lang]) ? it.price[lang] : (lang === "ar" ? "— د.ع" : "— IQD");

    const card = document.createElement("article");
    card.className = "itemCard";
    card.style.animationDelay = `${120 + i * 70}ms`;

    card.innerHTML = `
      <div class="itemMedia">
        <img data-itemimg alt="">
      </div>
      <div class="itemBody">
        <div class="itemTop">
          <h3 class="itemName font-body">${it.name[lang]}</h3>
          <div class="itemPrice font-body">${price}</div>
        </div>
        <p class="itemDesc font-body">${it.desc[lang]}</p>
      </div>
    `;

    const imgEl = card.querySelector("[data-itemimg]");
    setImgSafe(imgEl, it.img, 1400, cld(HERO_PUBLIC_ID, 1400));

    itemsGrid.appendChild(card);
    requestAnimationFrame(() => card.classList.add("reveal"));
  });
}

/* =========================
   8) Boot (bind buttons once)
========================= */
document.addEventListener("DOMContentLoaded", () => {
  // fade in
  const f = document.querySelector(".pageFade");
  if (f) setTimeout(() => f.classList.remove("on"), 60);

  // bind language once
  const langBtn = document.querySelector("#langBtn");
  if (langBtn && !langBtn.dataset.bound) {
    langBtn.dataset.bound = "1";
    langBtn.addEventListener("click", () => {
      setLang(getLang() === "ar" ? "en" : "ar");
    });
  }

  // home btn (category page)
  const homeBtn = document.querySelector("#homeBtn");
  if (homeBtn && !homeBtn.dataset.bound) {
    homeBtn.dataset.bound = "1";
    homeBtn.addEventListener("click", () => fadeTo("index.html"));
  }

  render();
});
