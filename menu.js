"use strict";

/* =========================
   1) TEXT DICTIONARY
========================= */
const I18N = {
  ar: {
   
    brand_ar: "بيت التحفيات",
    brand_en: "House of Antiques",
    menu_title_ar: "قائمة طعام بيت التحفيات",
    menu_sub_ar: "تجربة عراقية بلمسة متحفية —",
    chip_all: "الكل",
    chip_soups: "الشوربات",
    chip_starters: "المقبلات",
    chip_mains: "الأطباق الرئيسية",
    chip_desserts: "الحلويات",
    chip_hot: "مشاريب ساخنة",
    chip_cold: "مشاريب باردة",
    chip_shisha: "نراكيل",
    footer_note_ar: "هذا المنيو رقمي لعرضه عبر QR داخل المطعم. الصور قابلة للاستبدال.",
    section_soups: "🍲 الشوربات",
    section_starters: "🥙 المقبلات",
    section_mains: "🍽️ الأطباق الرئيسية",
    section_desserts: "🍰 الحلويات",
    section_hot: "☕ المشاريب الساخنة",
    section_cold: "🧊 المشاريب الباردة",
    section_shisha: "💨 النراكيل",
    count_suffix: "صنف",
  },
  en: {
   
    brand_ar: "بيت التحفيات",
    brand_en: "House of Antiques",
    menu_title_ar: "House of Antiques Menu",
    menu_sub_ar: "Iraqi flavors with a museum-like calm ",
    chip_all: "All",
    chip_soups: "Soups",
    chip_starters: "Starters",
    chip_mains: "Main Dishes",
    chip_desserts: "Desserts",
    chip_hot: "Hot Drinks",
    chip_cold: "Cold Drinks",
    chip_shisha: "Shisha",
    footer_note_ar: " digital menu for in-restaurant use. ",
    section_soups: "🍲 Soups",
    section_starters: "🥙 Starters",
    section_mains: "🍽️ Main Dishes",
    section_desserts: "🍰 Desserts",
    section_hot: "☕ Hot Drinks",
    section_cold: "🧊 Cold Drinks",
    section_shisha: "💨 Shisha",
    count_suffix: "items",
  }
};



/* =========================
   2) MENU DATA (AR/EN)
   - put images in assets/menu/
========================= */
const MENU = [
  {
    key: "soups",
    items: [
      {
        img: "soup 1.jpg",
        name: { ar: "شوربة دجلة المحروقة", en: "Burnt Tigris Soup" },
        desc: {
          ar: "مرق لحم غامق، بصل محروق خفيف، حمص مطحون، لمسة ليمون يابس",
          en: "Dark meat broth, lightly burnt onion, ground chickpeas, a touch of dried lime"
        }
      },
      {
        img: "soup2.jpg",
        name: { ar: "حساء التنور الأبيض", en: "White Tannour Soup" },
        desc: {
          ar: "لبن مطبوخ، قمح مهروس، زبدة عربية محمّرة",
          en: "Cooked yogurt, crushed wheat, browned Arabic butter"
        }
      },
      {
        img: "soup3.jpg",
        name: { ar: "شوربة الهيل والعدس الأسود", en: "Black Lentil & Cardamom Soup" },
        desc: {
          ar: "عدس أسود، هيل، بصل مكرمل، زيت سمسم خفيف",
          en: "Black lentils, cardamom, caramelized onion, light sesame oil"
        }
      }
    ]
  },

  {
    key: "starters",
    items: [
      {
        img: "hot ap 1.jpg",
        name: { ar: "لقيمات الطين", en: "Clay Bites" },
        desc: {
          ar: "كرات بطاطا مدخنة، بهارات عراقية، صوص طحينة بالثوم المحروق",
          en: "Smoked potato bites, Iraqi spices, tahini with charred garlic"
        }
      },
      {
        img: "ap1.jpg",
        name: { ar: "مسكوف بارد على طريقة بغداد", en: "Baghdad-Style Cold Masgouf" },
        desc: {
          ar: "سمك مدخن، رمان، خبز يابس مطحون",
          en: "Smoked fish, pomegranate, crushed dried bread"
        }
      },
      {
        img: "ap1.jpg",
        name: { ar: "حمّص بيت التحفيات", en: "House of Antiques Hummus" },
        desc: {
          ar: "حمص ناعم، دبس تمر، زيت ليمون أسود",
          en: "Smooth hummus, date molasses, black-lime oil"
        }
      },
      {
        img: "ap2.jpg",
        name: { ar: "كبة الحوش", en: "Courtyard Kibbeh" },
        desc: {
          ar: "كبة صغيرة محشوة لحم وجوز، تقديم فاخر",
          en: "Mini kibbeh stuffed with meat & walnut, fine-dining plating"
        }
      },
      {
        img: "ap1.jpg",
        name: { ar: "سلطة الميدان", en: "Al-Midan Salad" },
        desc: {
          ar: "طماطة، بصل، سماق، دبس رمان، نعناع",
          en: "Tomato, onion, sumac, pomegranate molasses, mint"
        }
      },
      {
        img: "grand.jpg",
        name: { ar: "رغيف الجدّة", en: "Grandma’s Flatbread" },
        desc: {
          ar: "خبز رقيق محشو جبن محلي وأعشاب",
          en: "Thin bread stuffed with local cheese & herbs"
        }
      }
    ]
  },

  {
    key: "mains",
    items: [
      {
        img: "main1.jpg",
        name: { ar: "مقلوبة السراي", en: "Al-Saray Maqluba" },
        desc: {
          ar: "رز أحمر، لحم غنم مطهو ببطء، تقديم مقلوب فردي",
          en: "Red rice, slow-cooked lamb, individual flipped presentation"
        }
      },
      {
        img: "main2.jpg",
        name: { ar: "تشريب الملوك", en: "Kings’ Tashreeb" },
        desc: {
          ar: "خبز رقاق، لحم، مرق كثيف مع نخاع",
          en: "Ruqaq bread, meat, rich broth with marrow"
        }
      },
      {
        img: "main1.jpg",
        name: { ar: "دولمة التحفيات السوداء", en: "Black House Dolma" },
        desc: {
          ar: "محشية بدبس تمر وقليل قرفة",
          en: "Stuffed with date molasses and a hint of cinnamon"
        }
      },
      {
        img: "main1.jpg",
        name: { ar: "كباب الچايخانة", en: "Chaikhana Kebab" },
        desc: {
          ar: "كباب مشوي، صوص طماطة مدخن",
          en: "Grilled kebab, smoked tomato sauce"
        }
      },
      {
        img: "main1.jpg",
        name: { ar: "برياني بغداد القديم", en: "Old Baghdad Biryani" },
        desc: {
          ar: "أرز بهارات عراقية، لحم، مكسرات",
          en: "Rice with Iraqi spices, meat, nuts"
        }
      },
      {
        img: "main1.jpg",
        name: { ar: "سمك تنور أبو نؤاس", en: "Abu Nuwas Tannour Fish" },
        desc: {
          ar: "فيليه سمك مشوي، تمر هندي، أعشاب",
          en: "Grilled fish fillet, tamarind, herbs"
        }
      }
    ]
  },

  {
    key: "desserts",
    items: [
      {
        img: "desert1.jpg",
        name: { ar: "دهينة النحاس", en: "Copper Dehina" },
        desc: { ar: "دهين عراقي مع تمر وجوز", en: "Iraqi dehina with dates and walnuts" }
      },
      {
        img: "desert2.jpg",
        name: { ar: "كليجة القصر", en: "Palace Kleicha" },
        desc: { ar: "كليجة صغيرة محشوة تمر وقرفة", en: "Mini kleicha stuffed with dates and cinnamon" }
      },
      {
        img: "desert1.jpg",
        name: { ar: "رز بالحليب والهيل المحروق", en: "Rice Pudding & Burnt Cardamom" },
        desc: { ar: "تقديم عصري، ناعم جداً", en: "Modern plating, ultra-smooth texture" }
      }
    ]
  },

  {
    key: "hot",
    items: [
      { img: "shai.jpg", name: { ar: "چاي بغداد الثقيل", en: "Heavy Baghdad Tea" }, desc: { ar: "", en: "" } },
      { img: "shai.jpg", name: { ar: "قهوة الهيل العراقية", en: "Iraqi Cardamom Coffee" }, desc: { ar: "", en: "" } },
      { img: "shai.jpg", name: { ar: "شاي ليمون أسود", en: "Black Lime Tea" }, desc: { ar: "", en: "" } },
      { img: "shai.jpg", name: { ar: "قرفة بالحليب", en: "Cinnamon Milk" }, desc: { ar: "", en: "" } },
    ]
  },

  {
    key: "cold",
    items: [
      { img: "cold6.jpg", name: { ar: "ليمون أبو نؤاس", en: "Abu Nuwas Lemon" }, desc: { ar: "", en: "" } },
      { img: "cold6.jpg", name: { ar: "تمر هندي فاخر", en: "Premium Tamarind" }, desc: { ar: "", en: "" } },
      { img: "cold6.jpg", name: { ar: "شراب رمان مدخن", en: "Smoked Pomegranate Drink" }, desc: { ar: "", en: "" } },
      { img: "cold6.jpg", name: { ar: "عرق سوس بارد", en: "Cold Licorice" }, desc: { ar: "", en: "" } },
    ]
  },

  {
    key: "shisha",
    items: [
      { img: "shisha.jpg", name: { ar: "تفاحتين التحفيات", en: "Two Apples (House Blend)" }, desc: { ar: "", en: "" } },
      { img: "shisha.jpg", name: { ar: "عنبر عراقي", en: "Iraqi Amber" }, desc: { ar: "", en: "" } },
      { img: "shisha.jpg", name: { ar: "نعناع دجلة", en: "Tigris Mint" }, desc: { ar: "", en: "" } },
      { img: "shisha.jpg", name: { ar: "تفاح بالقرفة", en: "Apple Cinnamon" }, desc: { ar: "", en: "" } },
      { img: "shisha.jpg", name: { ar: "مكس بيت التحفيات (سري)", en: "House Mix (Secret)" }, desc: { ar: "", en: "" } },
    ]
  }
];

/* =========================
   3) STATE + HELPERS
========================= */
const root = document.getElementById("menuRoot");
let currentLang = localStorage.getItem("hoa_menu_lang") || "ar";
let currentFilter = "all";

function setDocLang(lang){
  currentLang = lang;
  localStorage.setItem("hoa_menu_lang", lang);

  document.documentElement.lang = (lang === "ar") ? "ar" : "en";
  document.documentElement.dir  = (lang === "ar") ? "rtl" : "ltr";

  // update pills
  document.querySelectorAll(".pill").forEach(b=>{
    b.classList.toggle("is-active", b.dataset.lang === lang);
  });

  // update static i18n nodes
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    const val = I18N[lang][key];
    if (typeof val === "string") el.textContent = val;
  });

  render();
}

function setFilter(filter){
  currentFilter = filter;
  document.querySelectorAll(".chip").forEach(c=>{
    c.classList.toggle("is-active", c.dataset.filter === filter);
  });
  render();
}

function sectionLabel(key){
  const dict = I18N[currentLang];
  const map = {
    soups: dict.section_soups,
    starters: dict.section_starters,
    mains: dict.section_mains,
    desserts: dict.section_desserts,
    hot: dict.section_hot,
    cold: dict.section_cold,
    shisha: dict.section_shisha
  };
  return map[key] || key;
}

/* =========================
   4) RENDER
========================= */
function render(){
  const dict = I18N[currentLang];

  const sections = (currentFilter === "all")
    ? MENU
    : MENU.filter(s => s.key === currentFilter);

  root.innerHTML = sections.map(section=>{
    const itemsHTML = section.items.map(it=>{
      const name = (it.name && it.name[currentLang]) ? it.name[currentLang] : (it.name?.ar || "");
      const desc = (it.desc && it.desc[currentLang]) ? it.desc[currentLang] : (it.desc?.ar || "");
      const safeDesc = (desc && desc.trim().length) ? desc : "&nbsp;";

      return `
        <article class="item">
          <div class="itemMedia">
            <img src="${it.img}" alt="${name.replace(/"/g,'&quot;')}" loading="lazy">
          </div>
          <div class="itemBody">
            <h3 class="itemName">${name}</h3>
            <p class="itemDesc">${safeDesc}</p>
          </div>
        </article>
      `;
    }).join("");

    return `
      <section class="section" data-section="${section.key}">
        <div class="sectionHead">
          <h2 class="sectionTitle">${sectionLabel(section.key)}</h2>
          <div class="sectionCount">${section.items.length} ${dict.count_suffix}</div>
        </div>
        <div class="grid">${itemsHTML}</div>
      </section>
    `;
  }).join("");
}

/* =========================
   5) EVENTS
========================= */
document.querySelectorAll(".pill").forEach(btn=>{
  btn.addEventListener("click", ()=> setDocLang(btn.dataset.lang));
});

document.querySelectorAll(".chip").forEach(ch=>{
  ch.addEventListener("click", ()=> setFilter(ch.dataset.filter));
});

/* =========================
   6) INIT
========================= */
setDocLang(currentLang);
setFilter("all");
