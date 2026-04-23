const questions = [
  { 
    question: "ভারতের ৯৯তম Ramsar Site কোনটি?", 
    answer: "Shekha Jheel", 
    options: ["Chilika Lake", "Loktak Lake", "Shekha Jheel", "Wular Lake"],
    explanation: " ⏺সাইট (Site) → Shekha Jheel ⏺ রাজ্য (State) → Uttar Pradesh ⏺অবস্থা (Status) → ভারতের ৯৯তম Ramsar Site  ⏺উদ্দেশ্য (Aim) → জলাভূমি সংরক্ষণ ও জীববৈচিত্র্য রক্ষা (wetland conservation & biodiversity protection)"
  },
  { 
    question: "FY 2025-26-এ ভারতের সামুদ্রিক খাদ্য রপ্তানির মূল্য কত?", 
    answer: "₹৭২,৩২৫ কোটি", 
    options: ["₹৫০,০০০ কোটি", "₹৭২,৩২৫ কোট", "₹৬০,০০০ কোটি", "₹৮০,০০০ কোটি"],
    explanation: "⏺ খাত (Sector) → সামুদ্রিক খাদ্য রপ্তানি (Seafood Export) ⏺ মূল্য (Value) → ₹৭২,৩২৫ কোটি (২০২৫-২৬ অর্থবছর) ⏺ তথ্য রদানকারী (Data by) → Marine Products Export Development Authority (MPEDA) ⏺ গুরুত্ব (Significance) → ব্লু ইকোনমি উন্নয়নে বড় ভূমিকা (boost to blue economy)"
  },
   { 
    question: " UN রিপোর্ট অনুযায়ী ২০২৬ সালে ভারতের GDP Growth কত?", 
    answer: "৬.৪%", 
    options: ["৫.৫%", "৬.৪%", "৬.৪%", "৮.০%"],
    explanation: " ⏺ জিডিপি বৃদ্ধি (GDP Growth) → ৬.৪% (২০২৬) ⏺ রিপোর্ট প্রকাশ করেছে (Report by) → United Nations ⏺ চালিকা শক্তি (Drivers) → চাহিদা (Demand), বিনিয়োগ (Investment), পরিষেবা খাত (Services) ⏺গুরুত্ব (Significance) → দ্রুত বর্ধনশীল অর্থনীতি (fast-growing economy)"
  },
 
  { 
    question: "নতুন Sugar Policy-তে কত কিমি দূরত্বের নিয়ম প্রস্তাব করা হয়েছে?", 
    answer: "২৫ কিমি", 
    options: ["২৫ কিমি", "১০ কিমি", "১৫ কিমি", "৫০ কিমি"],
    explanation: " ⏺নীতি (Policy) → চিনি কলের মধ্যে ২৫ কিমি দূরত্বের নিয়ম (25 km distance rule for sugar mills) ⏺উদ্দেশ্য (Aim) → সুষম প্রতিযোগিতা ও সম্পদের সঠিক ব্যবস্থাপনা (balanced competition & resource management) ⏺খাত (Sector) → চিনি শিল্প (Sugar Industry) ⏺প্রভাব (Impact) → সরবরাহের সুষম বণ্টন ও শিল্পের স্থিতিশীলতা (better supply distribution & stability)"
  },
   { 
    question: "Nancy Grace Roman Space Telescope কোন সংস্থা তৈরি করছে?", 
    answer: "NASA", 
    options: ["ISRO", "JAXA", "CNSA", "NASA"],
    explanation: " ⏺টেলিস্কোপ (Telescope) → Nancy Grace Roman Space Telescope ⏺সংস্থা (Agency) → NASA ⏺পর্যায় (Stage) → চূড়ান্ত পরীক্ষার ধাপ (Final testing phase) ⏺উদ্দেশ্য (Aim) → ডার্ক এনার্জি ও এক্সোপ্ল্যানেট নিয়ে গবেষণা (Study Dark Energy & Exoplanets)"
  },
   { 
    question: "Earth Day কবে পালিত হয়?", 
    answer: "২২ এপ্রিল", 
    options: ["২০ এপ্রিল", "২১ এপ্রিল", "২২ এপ্রিল", "২৩ এপ্রিল"],
    explanation: " ⏺তারিখ (Date) → ২২ এপ্রিল ⏺দিবস (Day) → Earth Day ⏺উদ্দেশ্য (Aim) → পরিবেশ সংরক্ষণ ও সচেতনতা বৃদ্ধি (environmental protection & awareness) ⏺ফোকাস (Focus) → জলবায়ু পরিবর্তন ও টেকসই উন্নয়ন (climate change & sustainability)"
  },
    { 
    question: "World Para Athletics Championships 2027 কোথায় অনুষ্ঠিত হবে?", 
    answer: "Tashkent", 
    options: ["Tokyo", "Tashkent", "Paris", "London"],
    explanation: " ⏺ইভেন্ট (Event) → World Para Athletics Championships 2027 ⏺স্থান (Venue) → Tashkent (Uzbekistan) ⏺তারিখ (Date) → জুন ২০২৭ ⏺গুরুত্ব (Significance) → প্যারা স্পোর্টসের প্রসার ও অন্তর্ভুক্তিমূলক ক্রীড়া সংস্কৃতি উন্নয়ন (promotion of para sports & inclusivity)"
  },
];

function loadMCQ() {
    const container = document.getElementById('mcq-container');
    container.innerHTML = ""; // আগের কন্টেন্ট ক্লিয়ার করার জন্য
    
    questions.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'mcq-card';
        card.innerHTML = `
            <span class="q-text">${index + 1}. ${item.question}</span>
            <div class="options-grid">
                ${item.options.map(opt => `<div class="opt">${opt}</div>`).join('')}
            </div>
            <button class="ans-btn" onclick="toggleAns(${index})">
                <i class="fas fa-eye"></i> Answer & Explanation
            </button>
            <div id="ans-${index}" class="ans-content" style="display:none;">
                <div style="color: #2e7d32; margin-bottom: 8px;">
                    <strong>সঠিক উত্তর:</strong> ${item.answer}
                </div>
                <div style="font-size: 14px; color: var(--hk-muted); font-weight: normal; border-top: 1px solid #ddd; pt: 5px;">
                    <strong>ব্যাখ্যা:</strong> ${item.explanation || "এই প্রশ্নের কোনো ব্যাখ্যা নেই।"}
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function toggleAns(id) {
    const ansDiv = document.getElementById(`ans-${id}`);
    const btn = ansDiv.previousElementSibling;
    if (ansDiv.style.display === "none" || ansDiv.style.display === "") {
        ansDiv.style.display = "block";
        btn.innerHTML = '<i class="fas fa-eye-slash"></i> Hide';
    } else {
        ansDiv.style.display = "none";
        btn.innerHTML = '<i class="fas fa-eye"></i> Answer & Explanation';
    }
}

window.onload = loadMCQ;