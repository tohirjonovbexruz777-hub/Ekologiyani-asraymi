export const videoCategories = ["Barchasi", "Bolalar uchun", "Suv", "Tabiat", "Iqlim", "Chiqindi", "Hayvonlar"] as const;

export type VideoCategory = Exclude<(typeof videoCategories)[number], "Barchasi">;

export type EcologyVideo = {
  id: number;
  title: string;
  description: string;
  category: VideoCategory;
  source: string;
  youtubeId?: string;
  url: string;
};

export const ecologyVideos: EcologyVideo[] = [
  { id: 1, title: "Suvni tejaymiz", description: "Bolalar uchun suvni tejash haqidagi quvnoq ekologik qo‘shiq.", category: "Bolalar uchun", source: "Yashil Makon", youtubeId: "-Huu9yfBlsU", url: "https://www.youtube.com/watch?v=-Huu9yfBlsU" },
  { id: 2, title: "Elektrni asraylik", description: "Elektr energiyasini tejashni o‘rgatuvchi rangli multfilm.", category: "Bolalar uchun", source: "Yashil Makon", youtubeId: "yXDrmT0zGU8", url: "https://www.youtube.com/watch?v=yXDrmT0zGU8" },
  { id: 3, title: "Eko qahramonlar", description: "Tabiatni asraydigan bolalar haqidagi o‘zbek animatsion filmi.", category: "Bolalar uchun", source: "Astir animation studio", youtubeId: "3mVmBuaTME0", url: "https://www.youtube.com/watch?v=3mVmBuaTME0" },
  { id: 4, title: "Tabiat va biz", description: "Inson va tabiat o‘rtasidagi bog‘liqlik haqida sodda videodars.", category: "Bolalar uchun", source: "Edukids", youtubeId: "NRjVF1u_qjk", url: "https://www.youtube.com/watch?v=NRjVF1u_qjk" },
  { id: 5, title: "Suv o‘simliklari", description: "Suvda o‘sadigan o‘simliklar va ularning ekotizimdagi o‘rni.", category: "Tabiat", source: "Ekologiya darslari", youtubeId: "x_D_08Cqbtw", url: "https://www.youtube.com/watch?v=x_D_08Cqbtw" },
  { id: 6, title: "Suvsiz O‘zbekiston", description: "O‘zbekistondagi suv tanqisligi, sabablar va yechimlar tahlili.", category: "Suv", source: "SUBYEKTIV", youtubeId: "rBmJZhbquyA", url: "https://www.youtube.com/watch?v=rBmJZhbquyA" },
  { id: 7, title: "Suv tejovchi texnologiyalar", description: "Qishloq xo‘jaligida suvni tejaydigan zamonaviy usullar.", category: "Suv", source: "Axborot 24", youtubeId: "K8ikLOvdFMw", url: "https://www.youtube.com/watch?v=K8ikLOvdFMw" },
  { id: 8, title: "Suv resurslarini boshqarish", description: "Suvdan mas’uliyatli foydalanish nega muhimligi haqida suhbat.", category: "Suv", source: "KunUZ", youtubeId: "2d1UQA5OpUs", url: "https://www.youtube.com/watch?v=2d1UQA5OpUs" },
  { id: 9, title: "Yer va suv munosabatlari", description: "Yer, dehqonchilik va suv resurslari o‘rtasidagi bog‘liqlik.", category: "Suv", source: "Tarixiy tahlil", youtubeId: "D3iQWTQEOOo", url: "https://www.youtube.com/watch?v=D3iQWTQEOOo" },
  { id: 10, title: "O‘zbekiston ekologiyasi muammolari", description: "Mamlakatimizdagi asosiy ekologik masalalar haqida katta suhbat.", category: "Tabiat", source: "KunUZ", youtubeId: "kzxz_bgyqtE", url: "https://www.youtube.com/watch?v=kzxz_bgyqtE" },
  { id: 11, title: "Ekologik muvozanat", description: "Tabiatdagi muvozanat va uni saqlash zarurati haqida ko‘rsatuv.", category: "Tabiat", source: "Madaniyat va Ma’rifat", youtubeId: "AjdB2OX0yvM", url: "https://www.youtube.com/watch?v=AjdB2OX0yvM" },
  { id: 12, title: "Global ekologik muammolar", description: "Dunyo miqyosidagi ekologik xavflar va ularning oqibatlari.", category: "Iqlim", source: "O‘zbekiston TV", youtubeId: "qX4SLKGEzGM", url: "https://www.youtube.com/watch?v=qX4SLKGEzGM" },
  { id: 13, title: "Global iqlim o‘zgarishi", description: "Iqlim nima uchun o‘zgarayotgani va bu hayotimizga qanday ta’sir qilishi.", category: "Iqlim", source: "Global tashabbus", youtubeId: "Qi8E5Kto_4c", url: "https://www.youtube.com/watch?v=Qi8E5Kto_4c" },
  { id: 14, title: "Ekologik muammolar va COP28", description: "Iqlim anjumani va sayyoramiz kelajagi bo‘yicha tahlil.", category: "Iqlim", source: "KunUZ", youtubeId: "SCpCh6eWEVM", url: "https://www.youtube.com/watch?v=SCpCh6eWEVM" },
  { id: 15, title: "O‘zbekiston iqlimi qanday o‘zgaradi?", description: "20–30 yildan keyingi iqlim sharoiti haqidagi mutaxassis fikri.", category: "Iqlim", source: "O‘zA", url: "https://uza.uz/oz/posts/20-30-yildan-song-ozbekiston-iqlim-sharoiti-qanday-ozgaradi-video2-qism_895314" },
  { id: 16, title: "Chiqindilarni saralash tartibi", description: "Uy chiqindilarini to‘g‘ri ajratish bo‘yicha qisqa qo‘llanma.", category: "Chiqindi", source: "Ekologiya vazirligi", youtubeId: "rboh1r9cU58", url: "https://www.youtube.com/shorts/rboh1r9cU58" },
  { id: 17, title: "Sanoat va atrof-muhit", description: "Sanoat korxonalarining tabiatga ta’siri va himoya choralari.", category: "Chiqindi", source: "Axborot 24", youtubeId: "svnm4W5hIQY", url: "https://www.youtube.com/watch?v=svnm4W5hIQY" },
  { id: 18, title: "Korxonada ekologik islohotlar", description: "Ishlab chiqarishda ekologik muvozanatni saqlash tajribasi.", category: "Chiqindi", source: "OKMK TV", youtubeId: "mVBthS7kTHU", url: "https://www.youtube.com/watch?v=mVBthS7kTHU" },
  { id: 19, title: "Bioxilma-xillikni asrash nega muhim?", description: "O‘simlik va hayvon turlarini himoya qilishning ahamiyati.", category: "Hayvonlar", source: "O‘zA", url: "https://uza.uz/oz/posts/bioxilma-xillikni-asrash-nega-muhim-video_891212" },
  { id: 20, title: "Zomin milliy bog‘i", description: "Noyob tabiat, tog‘ o‘rmonlari va milliy bog‘ hayvonlari.", category: "Tabiat", source: "Zella Bardley", youtubeId: "83lQLFKNYQA", url: "https://www.youtube.com/watch?v=83lQLFKNYQA" },
  { id: 21, title: "Gulli o‘simliklar", description: "O‘simliklarning tuzilishi va tabiatdagi vazifasi haqida 6-sinf darsi.", category: "Tabiat", source: "Biologiya maktab", youtubeId: "16xHqLtOWIc", url: "https://www.youtube.com/watch?v=16xHqLtOWIc" },
  { id: 22, title: "Tabiat va inson", description: "Mahalliy o‘simliklar va insonning tabiat oldidagi mas’uliyati.", category: "Tabiat", source: "102 TV", youtubeId: "itP9rSJdpwM", url: "https://www.youtube.com/watch?v=itP9rSJdpwM" },
  { id: 23, title: "Ekologik huquqlarimiz", description: "Atrof-muhitni asrashga oid huquq va majburiyatlarimiz.", category: "Tabiat", source: "MTRK", youtubeId: "9qkX0wbMTl8", url: "https://www.youtube.com/watch?v=9qkX0wbMTl8" },
  { id: 24, title: "Atrof-muhitni asrash", description: "Ona zaminni himoya qilishga chorlovchi qisqa lavha.", category: "Tabiat", source: "O‘z Murojaat TV", youtubeId: "_V299RNfWnI", url: "https://www.youtube.com/watch?v=_V299RNfWnI" },
  { id: 25, title: "Ekologik hamkorlik", description: "Atrof-muhit bo‘yicha xalqaro hamkorlik va umumiy maqsadlar.", category: "Iqlim", source: "O‘zA rasmiy xabarlar", youtubeId: "imH0svgf9Mc", url: "https://www.youtube.com/watch?v=imH0svgf9Mc" },
];
