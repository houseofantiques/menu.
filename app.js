"use strict";

/* =========================
   0) Cloudinary helper (SAFE)
========================= */

// ✅ لازم تكتب اسم الكلاود الحقيقي مالتك (مو YOUR_CLOUD_NAME)
const CLOUD_NAME = "dyqdfbaln";

// ✅ Hero Public ID الصحيح حسب كلامك
const HERO_PUBLIC_ID = "hero_mr6uhc";

function cld(publicIdOrUrl, w = 1600) {
  if (!publicIdOrUrl) return "";
  if (/^https?:\/\//i.test(publicIdOrUrl)) return publicIdOrUrl;
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_${w}/${publicIdOrUrl}`;
}

/**
 * setImgSafe:
 * - يحاول يحمل من cloudinary
 * - إذا فشل يرجع fallback
 * - ما يخلي الصورة تختفي
 */
function setImgSafe(imgEl, publicIdOrUrl, w, fallbackSrc = "") {
  if (!imgEl) return;

  const next = cld(publicIdOrUrl, w);
  const fallback = fallbackSrc || imgEl.getAttribute("src") || "";

  // ✅ إذا CLOUD_NAME مو متعيّن صح، لا تحاول cloudinary
  if (!CLOUD_NAME || CLOUD_NAME === "YOUR_CLOUD_NAME") {
    if (fallback) imgEl.src = fallback;
    return;
  }

  // ✅ حمّل الصورة بشكل آمن قبل ما تبدل (حتى ما تختفي)
  const tester = new Image();
  tester.onload = () => { imgEl.src = next; };
  tester.onerror = () => {
    if (fallback) imgEl.src = fallback;
  };
  tester.src = next;
}


/* =========================
   1) Menu (AR/EN)
========================= */
const MENU = {
  soups: {
    title: { ar: "الشوربات", en: "Soups" },
    items: [
      { img:"hoa-soup-2_gut335", name:{ ar:"شوربة دجلة المحروقة", en:"Burnt Tigris Soup" }, desc:{ ar:"مرق لحم غامق، بصل محروق خفيف، حمص مطحون، لمسة ليمون يابس", en:"Dark meat broth, lightly burnt onion, ground chickpeas, a touch of dried lime" } },
      { img:"-soup-1_esvtrq", name:{ ar:"حساء التنور الأبيض", en:"White Tannour Soup" }, desc:{ ar:"لبن مطبوخ، قمح مهروس، زبدة عربية محمّرة", en:"Cooked yogurt, crushed wheat, browned Arabic butter" } },
      { img:"hoa-soup_ykpmsf", name:{ ar:"شوربة الهيل والعدس الأسود", en:"Black Lentil & Cardamom Soup" }, desc:{ ar:"عدس أسود، هيل، بصل مكرمل، زيت سمسم خفيف", en:"Black lentils, cardamom, caramelized onion, a light sesame oil finish" } }
    ]
  },

  appetizers: {
    title: { ar: "المقبلات", en: "Appetizers" },
    items: [
      { img:"hoa/menu/apps_1", name:{ ar:"لقيمات الطين", en:"Clay Bites" }, desc:{ ar:"كرات بطاطا مدخنة، بهارات عراقية، صوص طحينة بالثوم المحروق", en:"Smoked potato bites, Iraqi spices, tahini with charred garlic" } },
      { img:"hoa/menu/apps_2", name:{ ar:"مسكوف بارد على طريقة بغداد", en:"Cold Masgouf — Baghdad Style" }, desc:{ ar:"سمك مدخن، رمان، خبز يابس مطحون", en:"Smoked fish, pomegranate, crushed dry bread" } },
      { img:"hoa/menu/apps_3", name:{ ar:"حمّص بيت التحفيات", en:"House Hummus" }, desc:{ ar:"حمص ناعم، دبس تمر، زيت ليمون أسود", en:"Silky hummus, date molasses, black-lime oil" } },
      { img:"hoa/menu/apps_4", name:{ ar:"كبة الحوش", en:"Courtyard Kubba" }, desc:{ ar:"كبة صغيرة محشوة لحم وجوز، تقديم فاخر", en:"Mini kubba stuffed with meat & walnut, elevated presentation" } },
      { img:"hoa/menu/apps_5", name:{ ar:"سلطة الميدان", en:"Al-Midan Salad" }, desc:{ ar:"طماطة، بصل، سماق، دبس رمان، نعناع", en:"Tomato, onion, sumac, pomegranate molasses, mint" } },
      { img:"hoa/menu/apps_6", name:{ ar:"رغيف الجدّة", en:"Grandma’s Stuffed Flatbread" }, desc:{ ar:"خبز رقيق محشو جبن محلي وأعشاب", en:"Thin bread stuffed with local cheese & herbs" } }
    ]
  },

  mains: {
    title: { ar: "الأطباق الرئيسية", en: "Main Courses" },
    items: [
      { img:"hoa/menu/mains_1", name:{ ar:"مقلوبة السراي", en:"Saray Maqluba" }, desc:{ ar:"رز أحمر، لحم غنم مطهو ببطء، تقديم مقلوب فردي", en:"Red rice, slow-cooked lamb, individual inverted serve" } },
      { img:"hoa/menu/mains_2", name:{ ar:"تشريب الملوك", en:"Kings’ Tashreeb" }, desc:{ ar:"خبز رقاق، لحم، مرق كثيف مع نخاع", en:"Raqaq bread, meat, rich broth with marrow" } },
      { img:"hoa/menu/mains_3", name:{ ar:"دولمة التحفيات السوداء", en:"Black House Dolma" }, desc:{ ar:"محشية بدبس تمر وقليل قرفة", en:"Stuffed with date molasses and a touch of cinnamon" } },
      { img:"hoa/menu/mains_4", name:{ ar:"كباب الچايخانة", en:"Chaykhana Kebab" }, desc:{ ar:"كباب مشوي، صوص طماطة مدخن", en:"Grilled kebab, smoked tomato sauce" } },
      { img:"hoa/menu/mains_5", name:{ ar:"برياني بغداد القديم", en:"Old Baghdad Biryani" }, desc:{ ar:"أرز بهارات عراقية، لحم، مكسرات", en:"Rice with Iraqi spices, meat, nuts" } },
      { img:"hoa/menu/mains_6", name:{ ar:"سمك تنور أبو نؤاس", en:"Abu Nuwas Tannour Fish" }, desc:{ ar:"فيليه سمك مشوي، تمر هندي، أعشاب", en:"Grilled fish fillet, tamarind, herbs" } }
    ]
  },

  hotdrinks: {
    title: { ar: "المشروبات الحارة", en: "Hot Drinks" },
    items: [
      { img:"hoa/menu/hot_1", name:{ ar:"چاي بغداد الثقيل", en:"Baghdad Strong Tea" }, desc:{ ar:"ثقيل، مركز، على طريقة الگهوات القديمة", en:"Bold, concentrated, old-school café style" } },
      { img:"hoa/menu/hot_2", name:{ ar:"قهوة الهيل العراقية", en:"Iraqi Cardamom Coffee" }, desc:{ ar:"قهوة عربية مع هيل، تقديم متحفي", en:"Arabic coffee with cardamom, museum-like serving" } },
      { img:"hoa/menu/hot_3", name:{ ar:"شاي ليمون أسود", en:"Black Lime Tea" }, desc:{ ar:"ليمون يابس، رائحة مدخنة خفيفة", en:"Dried lime, a gentle smoky aroma" } },
      { img:"hoa/menu/hot_4", name:{ ar:"قرفة بالحليب", en:"Cinnamon Milk" }, desc:{ ar:"ناعم ودافئ، قرفة مطحونة", en:"Warm and smooth, ground cinnamon" } }
    ]
  },

  colddrinks: {
    title: { ar: "المشروبات الباردة", en: "Cold Drinks" },
    items: [
      { img:"hoa/menu/cold_1", name:{ ar:"ليمون أبو نؤاس", en:"Abu Nuwas Lemon" }, desc:{ ar:"ليمون فريش، لمسة نعناع", en:"Fresh lemon, hint of mint" } },
      { img:"hoa/menu/cold_2", name:{ ar:"تمر هندي فاخر", en:"Luxury Tamarind" }, desc:{ ar:"تمر هندي مركز، توازن حلو/حامض", en:"Concentrated tamarind, sweet-tart balance" } },
      { img:"hoa/menu/cold_3", name:{ ar:"شراب رمان مدخن", en:"Smoked Pomegranate Drink" }, desc:{ ar:"رمان مع نَفَس مدخن خفيف", en:"Pomegranate with a gentle smoky note" } },
      { img:"hoa/menu/cold_4", name:{ ar:"عرق سوس بارد", en:"Cold Licorice" }, desc:{ ar:"كأس واحد نظيف — بدون إضافات", en:"Single clean glass — no extras" } }
    ]
  },

  desserts: {
    title: { ar: "الحلويات", en: "Desserts" },
    items: [
      { img:"hoa/menu/des_1", name:{ ar:"دهينة النحاس", en:"Copper Dehina" }, desc:{ ar:"دهين عراقي مع تمر وجوز", en:"Iraqi dehina with dates & walnut" } },
      { img:"hoa/menu/des_2", name:{ ar:"كليجة القصر", en:"Palace Kleicha" }, desc:{ ar:"كليجة صغيرة محشوة تمر وقرفة", en:"Mini kleicha stuffed with dates & cinnamon" } },
      { img:"hoa/menu/des_3", name:{ ar:"رز بالحليب والهيل المحروق", en:"Rice Pudding & Burnt Cardamom" }, desc:{ ar:"تقديم عصري، ناعم جداً", en:"Modern plating, ultra smooth" } }
    ]
  },

  shisha: {
    title: { ar: "النراكيل", en: "Shisha" },
    items: [
      { img:"hoa/menu/sh_1", name:{ ar:"تفاحتين التحفيات", en:"Double Apple" }, desc:{ ar:"كلاسيك مضبوط", en:"Perfect classic" } },
      { img:"hoa/menu/sh_2", name:{ ar:"عنبر عراقي", en:"Iraqi Amber" }, desc:{ ar:"نفَس شرقي ناعم", en:"Soft oriental profile" } },
      { img:"hoa/menu/sh_3", name:{ ar:"نعناع دجلة", en:"Tigris Mint" }, desc:{ ar:"نعناع بارد وواضح", en:"Crisp cool mint" } },
      { img:"hoa/menu/sh_4", name:{ ar:"تفاح بالقرفة", en:"Apple & Cinnamon" }, desc:{ ar:"حلو-حار متوازن", en:"Balanced sweet-spice" } },
      { img:"hoa/menu/sh_5", name:{ ar:"مكس بيت التحفيات (سري)", en:"House Mix (Secret)" }, desc:{ ar:"ممنوع السؤال — بس جرّبه", en:"No questions — just try it" } }
    ]
  }
};

/* =========================
   2) Categories order
========================= */
const CATS = [
  { key:"soups", icon:"🍲", tone:"warm" },
  { key:"appetizers", icon:"🥙", tone:"dark" },
  { key:"mains", icon:"🍽️", tone:"warm" },
  { key:"hotdrinks", icon:"☕", tone:"dark" },
  { key:"colddrinks", icon:"🧊", tone:"warm" },
  { key:"desserts", icon:"🍰", tone:"dark" },
  { key:"shisha", icon:"💨", tone:"warm" }
];

/* =========================
   3) Language
========================= */
const LS_LANG = "hoa_menu_lang";
function getLang(){ return localStorage.getItem(LS_LANG) || "ar"; }
function setLang(v){ localStorage.setItem(LS_LANG, v); applyLang(v); }

function applyLang(lang){
  document.documentElement.lang = (lang==="ar") ? "ar" : "en";
  document.body.dir = (lang==="ar") ? "rtl" : "ltr";
  if (window.__render) window.__render();
}

/* =========================
   4) Page fade
========================= */
function fadeTo(url){
  const f = document.querySelector(".pageFade");
  if(!f){ location.href = url; return; }
  f.classList.add("on");
  setTimeout(()=> location.href = url, 420);
}

/* =========================
   5) Index render
========================= */
function renderIndex(){
  const grid = document.querySelector("#cardsGrid");
  if(!grid) return;

  // hero (✅ fixed)
  const heroImg = document.querySelector("#heroImg");
  if (heroImg){
    // fallback: إذا عندك hero.jpg محلي يبقى ظاهر
    setImgSafe(heroImg, HERO_PUBLIC_ID, 2000, heroImg.getAttribute("src") || "");
  }

  // language button
  document.querySelector("#langBtn")?.addEventListener("click", ()=>{
    setLang(getLang()==="ar" ? "en" : "ar");
  });

  // titles
  const i18n = {
    homeTitle:{ ar:"بيت التحفيات", en:"House of Antiques" },
    homeSub:{ ar:"منيو متحفي — تجربة رقمية بطابع مطبوع فاخر", en:"Museum Menu — a luxury print-like digital experience" }
  };

  const t1 = document.querySelector("[data-i18n='homeTitle']");
  const t2 = document.querySelector("[data-i18n='homeSub']");
  if(t1) t1.textContent = i18n.homeTitle[getLang()];
  if(t2) t2.textContent = i18n.homeSub[getLang()];

  // build cards
  grid.innerHTML = "";

  CATS.forEach((c, i)=>{
    const data = MENU[c.key];
    const side = (i % 2 === 0) ? "is-left" : "is-right";
    const count = data.items.length;

    const bulletsAR = [
      `عدد الأصناف: ${count}`,
      `تقديم فاخر بطابع متحفي`,
      `اضغط للدخول`
    ];
    const bulletsEN = [
      `Items: ${count}`,
      `Museum-like luxury feel`,
      `Tap to enter`
    ];

    const card = document.createElement("article");
    card.className = `refCard ${side} tone-${c.tone}`;
    card.style.animationDelay = `${120 + i*70}ms`;

    const catImageId = `hoa/menu/cat_${c.key}`;

    card.innerHTML = `
  <div class="ticket">
    <div class="ticket__stub">
      <div class="ticket__meta font-body">
        <span class="ticket__kicker">${c.icon}</span>
        <span class="ticket__small">${getLang()==="ar" ? "قسم" : "Section"}</span>
      </div>

      <h3 class="ticket__title font-display">${data.title[getLang()]}</h3>

      <ul class="ticket__list font-body">
        ${(getLang()==="ar" ? bulletsAR : bulletsEN).map(x=>`<li>${x}</li>`).join("")}
      </ul>

      <div class="ticket__count font-body">
        ${getLang()==="ar" ? `عدد الأصناف: ${count}` : `Items: ${count}`}
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


    // ✅ إذا صورة القسم cat_* مو موجودة -> استخدم الهيرو بدل الفراغ
    const imgEl = card.querySelector("[data-catimg]");
    setImgSafe(imgEl, catImageId, 1200, cld(HERO_PUBLIC_ID, 1200));

    card.addEventListener("click", ()=> fadeTo(`category.html?cat=${encodeURIComponent(c.key)}`));
    grid.appendChild(card);
    requestAnimationFrame(()=> card.classList.add("reveal"));
  });

  window.__render = ()=>{
    if(t1) t1.textContent = i18n.homeTitle[getLang()];
    if(t2) t2.textContent = i18n.homeSub[getLang()];

    const cards = Array.from(document.querySelectorAll(".refCard"));
    cards.forEach((card, i)=>{
      const c = CATS[i];
      const data = MENU[c.key];
      const count = data.items.length;

      const bulletsAR = [`عدد الأصناف: ${count}`, `تقديم فاخر بطابع متحفي`, `اضغط للدخول`];
      const bulletsEN = [`Items: ${count}`, `Museum-like luxury feel`, `Tap to enter`];

      card.querySelector(".refTitle").textContent = data.title[getLang()];
      const ul = card.querySelector(".refList");
      ul.innerHTML = (getLang()==="ar" ? bulletsAR : bulletsEN).map(x=>`<li>${x}</li>`).join("");
    });
  };

  applyLang(getLang());
}

/* =========================
   6) Category render
========================= */
function renderCategory(){
  const itemsGrid = document.querySelector("#itemsGrid");
  if(!itemsGrid) return;

  const params = new URLSearchParams(location.search);
  const key = params.get("cat") || "soups";
  const cat = MENU[key];

  // hero (✅ fixed)
  const heroImg = document.querySelector("#heroImg");
  if (heroImg){
    setImgSafe(heroImg, HERO_PUBLIC_ID, 2000, heroImg.getAttribute("src") || "");
  }

  // buttons
  document.querySelector("#langBtn")?.addEventListener("click", ()=>{
    setLang(getLang()==="ar" ? "en" : "ar");
  });
  document.querySelector("#homeBtn")?.addEventListener("click", ()=> fadeTo("index.html"));

  const titleEl = document.querySelector("#catTitle");
  const hintEl  = document.querySelector("#catHint");

  itemsGrid.innerHTML = "";

  cat.items.forEach((it, i)=>{
    const card = document.createElement("article");
    card.className = "itemCard";
    card.style.animationDelay = `${120 + i*70}ms`;

    card.innerHTML = `
      <div class="itemMedia">
        <img data-itemimg alt="">
      </div>
      <div class="itemBody">
        <h3 class="itemName font-body"></h3>
        <p class="itemDesc font-body"></p>
      </div>
    `;

    // ✅ صورة العنصر: إذا فشل ID يرجّع الهيرو بدل الفراغ
    const imgEl = card.querySelector("[data-itemimg]");
    setImgSafe(imgEl, it.img, 1400, cld(HERO_PUBLIC_ID, 1400));

    itemsGrid.appendChild(card);
    requestAnimationFrame(()=> card.classList.add("reveal"));
  });

  window.__render = ()=>{
    if(titleEl) titleEl.textContent = cat.title[getLang()];
    if(hintEl) hintEl.textContent = (getLang()==="ar") ? `${cat.items.length} أصناف` : `${cat.items.length} items`;

    const cards = Array.from(document.querySelectorAll(".itemCard"));
    cards.forEach((card, i)=>{
      const it = cat.items[i];
      card.querySelector(".itemName").textContent = it.name[getLang()];
      card.querySelector(".itemDesc").textContent = it.desc[getLang()];
    });
  };

  applyLang(getLang());
}

/* =========================
   7) Boot
========================= */
document.addEventListener("DOMContentLoaded", ()=>{
  const f = document.querySelector(".pageFade");
  if(f) setTimeout(()=> f.classList.remove("on"), 60);

  const page = document.body.getAttribute("data-page");
  if(page === "index") renderIndex();
  if(page === "category") renderCategory();
});
