export type AnimalGroup =
  | "Sut emizuvchilar"
  | "Qushlar"
  | "Sudralib yuruvchilar"
  | "Suvda va quruqlikda"
  | "Baliqlar"
  | "Umurtqasizlar";

export type Animal = {
  name: string;
  latin: string;
  group: AnimalGroup;
  icon: string;
  habitat: string;
  fact: string;
};

export const animalGroups: AnimalGroup[] = [
  "Sut emizuvchilar",
  "Qushlar",
  "Sudralib yuruvchilar",
  "Suvda va quruqlikda",
  "Baliqlar",
  "Umurtqasizlar",
];

export const groupIcon: Record<AnimalGroup, string> = {
  "Sut emizuvchilar": "🐾",
  Qushlar: "🐦",
  "Sudralib yuruvchilar": "🦎",
  "Suvda va quruqlikda": "🐸",
  Baliqlar: "🐟",
  Umurtqasizlar: "🦋",
};

export const animals: Animal[] = [
  // ——— Sut emizuvchilar ———
  { name: "Qor barsi", latin: "Panthera uncia", group: "Sut emizuvchilar", icon: "🐆", habitat: "G‘arbiy Tyanshan, Pomir-Oloy tog‘lari", fact: "Baland tog‘larning eng yashirin yirtqichi." },
  { name: "Buxoro bug‘usi", latin: "Cervus hanglu bactrianus", group: "Sut emizuvchilar", icon: "🦌", habitat: "Amudaryo bo‘yidagi to‘qaylar", fact: "Yashashi to‘qay o‘rmonlariga bog‘liq." },
  { name: "Jayron", latin: "Gazella subgutturosa", group: "Sut emizuvchilar", icon: "🦌", habitat: "Qizilqum, Ustyurt", fact: "Cho‘l issig‘iga mukammal moslashgan." },
  { name: "Sayg‘oq", latin: "Saiga tatarica", group: "Sut emizuvchilar", icon: "🐐", habitat: "Ustyurt platosi", fact: "G‘ayrioddiy burni changni filtrlaydi." },
  { name: "Qulon", latin: "Equus hemionus", group: "Sut emizuvchilar", icon: "🐎", habitat: "Cho‘l va yarim cho‘llar", fact: "Juda tez yuguradigan yovvoyi eshak." },
  { name: "Vintli echki (markhur)", latin: "Capra falconeri", group: "Sut emizuvchilar", icon: "🐐", habitat: "Hisor tog‘lari", fact: "Burama shoxlari bilan ajralib turadi." },
  { name: "Turkiston silovsini", latin: "Lynx lynx isabellinus", group: "Sut emizuvchilar", icon: "🐈", habitat: "Tog‘ o‘rmonlari", fact: "Quloq uchidagi qora popuklari bor." },
  { name: "Chipor sirtlon", latin: "Hyaena hyaena", group: "Sut emizuvchilar", icon: "🐕", habitat: "Tog‘ oldi cho‘llari", fact: "Tunda ovlanadigan kamdan-kam tur." },
  { name: "Manul", latin: "Otocolobus manul", group: "Sut emizuvchilar", icon: "🐈", habitat: "Tog‘ dashtlari", fact: "Qalin mo‘ynali kichik yovvoyi mushuk." },
  { name: "Qamish mushugi", latin: "Felis chaus", group: "Sut emizuvchilar", icon: "🐈", habitat: "Daryo qamishzorlari", fact: "Suvga yaqin joylarda ov qiladi." },
  { name: "Cho‘l mushugi", latin: "Felis libyca", group: "Sut emizuvchilar", icon: "🐈", habitat: "Qumli cho‘llar", fact: "Uy mushugining yovvoyi qarindoshi." },
  { name: "Qoraquloq", latin: "Caracal caracal", group: "Sut emizuvchilar", icon: "🐈", habitat: "Ustyurt va Qizilqum", fact: "Uzun qora quloqlari bilan taniladi." },
  { name: "Qunduz", latin: "Castor fiber birulai", group: "Sut emizuvchilar", icon: "🦫", habitat: "Amudaryo to‘qaylari", fact: "Daryolarda to‘g‘on quradi." },
  { name: "Osiyo gepardi", latin: "Acinonyx jubatus venaticus", group: "Sut emizuvchilar", icon: "🐆", habitat: "Ustyurt cho‘llari", fact: "Mintaqada deyarli yo‘qolgan tez yugurar." },
  { name: "Ustyurt qo‘yi (arkal)", latin: "Ovis vignei arkal", group: "Sut emizuvchilar", icon: "🐏", habitat: "Ustyurt qoyalari", fact: "Chinqiroq qoyalarda podalar bo‘lib yuradi." },
  { name: "Severtsov qo‘chqori", latin: "Ovis ammon severtzovi", group: "Sut emizuvchilar", icon: "🐏", habitat: "Nurota tog‘lari", fact: "Faqat Nurota tog‘larida saqlangan." },
  { name: "Siberiya tog‘ echkisi", latin: "Capra sibirica", group: "Sut emizuvchilar", icon: "🐐", habitat: "Baland tog‘lar", fact: "Tik qoyalarda oson harakatlanadi." },
  { name: "Tyanshan qo‘ngir ayig‘i", latin: "Ursus arctos isabellinus", group: "Sut emizuvchilar", icon: "🐻", habitat: "Tyanshan o‘rmonlari", fact: "Yozda mevalar bilan oziqlanadi." },
  { name: "Hind jayrasi", latin: "Hystrix indica", group: "Sut emizuvchilar", icon: "🦔", habitat: "Tog‘ oldi butalari", fact: "Tanasi uzun tikanlar bilan qoplangan." },
  { name: "Uzunquloq tipratikan", latin: "Hemiechinus auritus", group: "Sut emizuvchilar", icon: "🦔", habitat: "Cho‘l va dashtlar", fact: "Katta quloqlari issiqni chiqaradi." },
  { name: "Korsak tulkisi", latin: "Vulpes corsac", group: "Sut emizuvchilar", icon: "🦊", habitat: "Cho‘l va dashtlar", fact: "Kichik va juda ehtiyotkor tulki." },
  { name: "Uzun dumli sug‘ur", latin: "Marmota caudata", group: "Sut emizuvchilar", icon: "🐿️", habitat: "Baland tog‘ o‘tloqlari", fact: "Qishda uzoq uyquga ketadi." },
  { name: "Menzbir sug‘uri", latin: "Marmota menzbieri", group: "Sut emizuvchilar", icon: "🐿️", habitat: "G‘arbiy Tyanshan", fact: "Faqat kichik hududda uchraydi." },
  { name: "Katta nag‘ora ko‘rshapalak", latin: "Rhinolophus ferrumequinum", group: "Sut emizuvchilar", icon: "🦇", habitat: "G‘orlar va yerto‘lalar", fact: "Tovush yordamida yo‘l topadi." },
  { name: "Uzunqanot ko‘rshapalak", latin: "Miniopterus schreibersii", group: "Sut emizuvchilar", icon: "🦇", habitat: "Tog‘ g‘orlari", fact: "Katta to‘dalarda yashaydi." },
  { name: "Uch rangli ko‘rshapalak", latin: "Myotis emarginatus", group: "Sut emizuvchilar", icon: "🦇", habitat: "Tog‘ oldi g‘orlari", fact: "Tunda hasharotlarni tutadi." },
  { name: "Bo‘rsiq", latin: "Meles meles", group: "Sut emizuvchilar", icon: "🦡", habitat: "Tog‘ oldi va to‘qaylar", fact: "Chuqur va tarmoqli inlar quradi." },
  { name: "Zaravshon qo‘y sichqoni", latin: "Ellobius fuscocapillus", group: "Sut emizuvchilar", icon: "🐁", habitat: "Tog‘ oldi tuprog‘i", fact: "Umrini yer ostida o‘tkazadi." },

  // ——— Qushlar ———
  { name: "Yo‘rg‘a tuvaloq", latin: "Chlamydotis macqueenii", group: "Qushlar", icon: "🦤", habitat: "Qizilqum cho‘li", fact: "Uyasini yerga quradi." },
  { name: "Katta tuvaloq", latin: "Otis tarda", group: "Qushlar", icon: "🦃", habitat: "Dasht va ekin dalalari", fact: "Dunyodagi eng vazmin uchuvchi qushlardan." },
  { name: "Qora laylak", latin: "Ciconia nigra", group: "Qushlar", icon: "🦢", habitat: "Tog‘ daryolari", fact: "Odamdan yiroq tinch joyni tanlaydi." },
  { name: "Oq laylak", latin: "Ciconia ciconia", group: "Qushlar", icon: "🦢", habitat: "Farg‘ona vodiysi", fact: "Uyasini yuqori joylarga quradi." },
  { name: "Qizilg‘oz (flamingo)", latin: "Phoenicopterus roseus", group: "Qushlar", icon: "🦩", habitat: "Sho‘r ko‘llar", fact: "Pushti rangi ovqatidan kelib chiqadi." },
  { name: "Kulrang turna", latin: "Grus grus", group: "Qushlar", icon: "🕊️", habitat: "Suv-botqoq hududlar", fact: "Uchishda ponasimon saf tuzadi." },
  { name: "Oq boshli o‘rdak", latin: "Oxyura leucocephala", group: "Qushlar", icon: "🦆", habitat: "Ko‘l va suv omborlari", fact: "Tik ko‘tarilgan dumi bor." },
  { name: "Marmar o‘rdak", latin: "Marmaronetta angustirostris", group: "Qushlar", icon: "🦆", habitat: "Sayoz ko‘llar", fact: "Chipor pati bilan taniladi." },
  { name: "Qichqiruvchi oqqush", latin: "Cygnus cygnus", group: "Qushlar", icon: "🦢", habitat: "Yirik suv havzalari", fact: "Qishda mintaqaga uchib keladi." },
  { name: "Qizil ko‘krakli g‘oz", latin: "Branta ruficollis", group: "Qushlar", icon: "🦆", habitat: "Qishlov ko‘llari", fact: "Yorqin qizil bo‘yni bilan ajralib turadi." },
  { name: "Jingalak saqoqush", latin: "Pelecanus crispus", group: "Qushlar", icon: "🦤", habitat: "Katta ko‘llar", fact: "Katta tomog‘i bilan baliq tutadi." },
  { name: "Pushti saqoqush", latin: "Pelecanus onocrotalus", group: "Qushlar", icon: "🦤", habitat: "Qamishli ko‘llar", fact: "Guruh bo‘lib baliq ovlaydi." },
  { name: "Oq qarqara", latin: "Egretta alba", group: "Qushlar", icon: "🕊️", habitat: "Botqoq va daryolar", fact: "Uzun bo‘yni bilan baliq poylaydi." },
  { name: "Kichik qarqara", latin: "Egretta garzetta", group: "Qushlar", icon: "🕊️", habitat: "Sayoz suvlar", fact: "Boshidagi ingichka patlari chiroyli." },
  { name: "Belqarqara (kolpitsa)", latin: "Platalea leucorodia", group: "Qushlar", icon: "🕊️", habitat: "Suv-botqoq hududlar", fact: "Kurakka o‘xshash tumshug‘i bor." },
  { name: "Qoravoy", latin: "Plegadis falcinellus", group: "Qushlar", icon: "🕊️", habitat: "Qamishzorlar", fact: "Qanotlari quyoshda yashil yaltiraydi." },
  { name: "Burgut", latin: "Aquila chrysaetos", group: "Qushlar", icon: "🦅", habitat: "Tog‘ qoyalari", fact: "Juda o‘tkir ko‘rish qobiliyatiga ega." },
  { name: "Cho‘l burguti", latin: "Aquila nipalensis", group: "Qushlar", icon: "🦅", habitat: "Cho‘l va dasht", fact: "Ko‘pincha yerdagi in oldida ov poylaydi." },
  { name: "Ilonburgut", latin: "Circaetus gallicus", group: "Qushlar", icon: "🦅", habitat: "Tog‘ oldi", fact: "Asosan ilon bilan oziqlanadi." },
  { name: "Baliqchi burgut", latin: "Haliaeetus leucoryphus", group: "Qushlar", icon: "🦅", habitat: "Daryo va ko‘llar", fact: "Suv ustidan baliq oladi." },
  { name: "Oq dumli burgut", latin: "Haliaeetus albicilla", group: "Qushlar", icon: "🦅", habitat: "Yirik suv havzalari", fact: "Keng qanotlari bilan uzoq suzadi." },
  { name: "Qumoy", latin: "Gypaetus barbatus", group: "Qushlar", icon: "🦅", habitat: "Baland tog‘lar", fact: "Suyaklarni qoyaga tashlab sindiradi." },
  { name: "Tasqara", latin: "Gyps himalayensis", group: "Qushlar", icon: "🦅", habitat: "Tyanshan tog‘lari", fact: "Tabiat tozalovchisi hisoblanadi." },
  { name: "Qora tasqara", latin: "Aegypius monachus", group: "Qushlar", icon: "🦅", habitat: "Tog‘ yonbag‘irlari", fact: "Juda katta qanot yozimiga ega." },
  { name: "Lochin", latin: "Falco peregrinus", group: "Qushlar", icon: "🪶", habitat: "Qoyali tog‘lar", fact: "Sho‘ng‘iganda eng tez qush." },
  { name: "Shunqor (ilg‘or)", latin: "Falco cherrug", group: "Qushlar", icon: "🪶", habitat: "Tog‘ va dasht", fact: "Noqonuniy ov tufayli kamaygan." },
  { name: "Turumtoy", latin: "Falco naumanni", group: "Qushlar", icon: "🪶", habitat: "Qishloq va qoyalar", fact: "Chigirtkalarni ko‘p yeydi." },
  { name: "Bo‘ktargi", latin: "Falco subbuteo", group: "Qushlar", icon: "🪶", habitat: "To‘qay va bog‘lar", fact: "Havoda hasharot tutadi." },
  { name: "Ukki", latin: "Bubo bubo", group: "Qushlar", icon: "🦉", habitat: "Qoyalar va cho‘l", fact: "Tunda ovlaydigan yirik boyqush." },
  { name: "Boyqush", latin: "Athene noctua", group: "Qushlar", icon: "🦉", habitat: "Cho‘l va qishloqlar", fact: "Kunduzi ham faol bo‘ladi." },
  { name: "Sultonqush", latin: "Porphyrio poliocephalus", group: "Qushlar", icon: "🐦", habitat: "Qalin qamishzorlar", fact: "Ko‘k-yashil pati bilan taniladi." },
  { name: "Bulduruq", latin: "Pterocles orientalis", group: "Qushlar", icon: "🐦", habitat: "Cho‘l va dasht", fact: "Suv ichish uchun uzoqqa uchadi." },
  { name: "Qora bulduruq", latin: "Pterocles alchata", group: "Qushlar", icon: "🐦", habitat: "Qumli cho‘l", fact: "Patida suv olib, polaponlarini sug‘oradi." },
  { name: "Vaxsh chumchug‘i", latin: "Passer zarudnyi", group: "Qushlar", icon: "🐦", habitat: "To‘qay butalari", fact: "Faqat cheklangan hududda uchraydi." },
  { name: "Sariq chumchuq", latin: "Emberiza bruniceps", group: "Qushlar", icon: "🐦", habitat: "Tog‘ oldi o‘tloqlari", fact: "Yorqin sariq boshli mayda qush." },
  { name: "Kaptar-kabutar (yovvoyi)", latin: "Columba eversmanni", group: "Qushlar", icon: "🕊️", habitat: "To‘qay va qoyalar", fact: "Soni tez kamayib borayotgan tur." },
  { name: "Chizmali zarg‘aldoq", latin: "Oriolus oriolus", group: "Qushlar", icon: "🐦", habitat: "Bog‘ va to‘qaylar", fact: "Ovozi nay tovushiga o‘xshaydi." },
  { name: "Kichik qirg‘iy", latin: "Accipiter badius", group: "Qushlar", icon: "🪶", habitat: "To‘qay o‘rmonlari", fact: "Daraxtlar orasida chaqqon uchadi." },
  { name: "Qora turna", latin: "Grus monacha", group: "Qushlar", icon: "🕊️", habitat: "Uchib o‘tish yo‘llari", fact: "Mintaqada juda kam kuzatiladi." },
  { name: "Kulrang kaklik", latin: "Ammoperdix griseogularis", group: "Qushlar", icon: "🐦", habitat: "Toshloq tog‘ oldi", fact: "Tosh ustida tez yuguradi." },
  { name: "Suvbuzoq", latin: "Botaurus stellaris", group: "Qushlar", icon: "🐦", habitat: "Qamishzorlar", fact: "Buqa kabi bo‘kirgan ovoz chiqaradi." },

  // ——— Sudralib yuruvchilar ———
  { name: "Kulrang echkemar", latin: "Varanus griseus", group: "Sudralib yuruvchilar", icon: "🦎", habitat: "Qizilqum qumliklari", fact: "O‘rta Osiyodagi eng yirik kaltakesak." },
  { name: "O‘rta Osiyo kobrasi", latin: "Naja oxiana", group: "Sudralib yuruvchilar", icon: "🐍", habitat: "Tog‘ oldi va to‘qay", fact: "Xavf sezsa bo‘ynini yozadi." },
  { name: "Ko‘lvor ilon (gyurza)", latin: "Macrovipera lebetina", group: "Sudralib yuruvchilar", icon: "🐍", habitat: "Toshloq yonbag‘irlar", fact: "Kemiruvchilar sonini nazorat qiladi." },
  { name: "Cho‘l qalqontumshug‘i", latin: "Eryx miliaris", group: "Sudralib yuruvchilar", icon: "🐍", habitat: "Qumli cho‘l", fact: "Qum ostida yashirinib yuradi." },
  { name: "Sariq ilon", latin: "Coluber ravergieri", group: "Sudralib yuruvchilar", icon: "🐍", habitat: "Tog‘ va bog‘lar", fact: "Zaharsiz, chaqqon ilon." },
  { name: "O‘rta Osiyo toshbaqasi", latin: "Testudo horsfieldii", group: "Sudralib yuruvchilar", icon: "🐢", habitat: "Cho‘l va tog‘ oldi", fact: "Yozning issig‘ida uyquga ketadi." },
  { name: "Chipor kaltakesak", latin: "Eremias intermedia", group: "Sudralib yuruvchilar", icon: "🦎", habitat: "Qumli cho‘l", fact: "Kunduzi qumda hasharot ovlaydi." },
  { name: "Katta gekkon", latin: "Teratoscincus scincus", group: "Sudralib yuruvchilar", icon: "🦎", habitat: "Qizilqum", fact: "Katta ko‘zlari tunda ko‘rishga yordam beradi." },
  { name: "Uzun oyoqli agama", latin: "Trapelus sanguinolentus", group: "Sudralib yuruvchilar", icon: "🦎", habitat: "Cho‘l butalari", fact: "Hayajonlanganda rangi o‘zgaradi." },
  { name: "Suv iloni", latin: "Natrix tessellata", group: "Sudralib yuruvchilar", icon: "🐍", habitat: "Daryo va ko‘llar", fact: "Zaharsiz, suvda baliq tutadi." },

  // ——— Suvda va quruqlikda ———
  { name: "Ko‘k qurbaqa", latin: "Bufotes viridis", group: "Suvda va quruqlikda", icon: "🐸", habitat: "Ko‘lmak va bog‘lar", fact: "Hasharotlarni ko‘p yeb, foyda keltiradi." },
  { name: "Ko‘l baqasi", latin: "Pelophylax ridibundus", group: "Suvda va quruqlikda", icon: "🐸", habitat: "Ko‘l va ariqlar", fact: "Suv tozaligining ko‘rsatkichi." },
  { name: "Danata qurbaqasi", latin: "Paradactylodon mustersi", group: "Suvda va quruqlikda", icon: "🦎", habitat: "Tog‘ soylari", fact: "Faqat toza va salqin suvda yashaydi." },

  // ——— Baliqlar ———
  { name: "Katta Amudaryo kurakburuni", latin: "Pseudoscaphirhynchus kaufmanni", group: "Baliqlar", icon: "🐟", habitat: "Amudaryo", fact: "Faqat shu daryoda uchraydigan noyob baliq." },
  { name: "Kichik Amudaryo kurakburuni", latin: "Pseudoscaphirhynchus hermanni", group: "Baliqlar", icon: "🐟", habitat: "Amudaryoning yuqori oqimi", fact: "Dunyoda eng kam sonli baliqlardan." },
  { name: "Sirdaryo kurakburuni", latin: "Pseudoscaphirhynchus fedtschenkoi", group: "Baliqlar", icon: "🐟", habitat: "Sirdaryo", fact: "Ko‘p yillardan beri uchramaydi." },
  { name: "Bakra baliq (ship)", latin: "Acipenser nudiventris", group: "Baliqlar", icon: "🐟", habitat: "Orol havzasi daryolari", fact: "Uzun umr ko‘radigan qadimiy baliq." },
  { name: "Oq baliq (sheshbarmoq)", latin: "Aspiolucius esocinus", group: "Baliqlar", icon: "🐟", habitat: "Amudaryo oqimlari", fact: "Tez oqimda ov qiladigan yirtqich." },
  { name: "Orol usachi", latin: "Luciobarbus brachycephalus", group: "Baliqlar", icon: "🐟", habitat: "Daryo va ko‘llar", fact: "Suv sathi pasayishidan aziyat chekadi." },
  { name: "Qorabaliq", latin: "Capoeta capoeta", group: "Baliqlar", icon: "🐟", habitat: "Tog‘ daryolari", fact: "Toshdagi o‘simliklar bilan oziqlanadi." },
  { name: "Turkiston mo‘ylovdori", latin: "Barbatula oreas", group: "Baliqlar", icon: "🐟", habitat: "Salqin tog‘ soylari", fact: "Mo‘ylovlari bilan ozuqa qidiradi." },
  { name: "Orol qiziko‘zi", latin: "Rutilus aralensis", group: "Baliqlar", icon: "🐟", habitat: "Orol havzasi", fact: "Orol qurishi bilan keskin kamaygan." },
  { name: "Ilonbosh laqqa", latin: "Silurus glanis", group: "Baliqlar", icon: "🐟", habitat: "Chuqur daryo tublari", fact: "Tunda ov qiladigan yirik baliq." },

  // ——— Umurtqasizlar ———
  { name: "Apollon kapalagi", latin: "Parnassius apollo", group: "Umurtqasizlar", icon: "🦋", habitat: "Tog‘ o‘tloqlari", fact: "Oq qanotidagi qizil ko‘zchalari bor." },
  { name: "Avtokrator apolloni", latin: "Parnassius autocrator", group: "Umurtqasizlar", icon: "🦋", habitat: "Baland tog‘lar", fact: "Dunyodagi eng noyob kapalaklardan." },
  { name: "Charlz apolloni", latin: "Parnassius charltonius", group: "Umurtqasizlar", icon: "🦋", habitat: "Pomir-Oloy", fact: "Faqat baland tog‘larda uchraydi." },
  { name: "Qaldirg‘ochdum kapalak", latin: "Papilio machaon", group: "Umurtqasizlar", icon: "🦋", habitat: "O‘tloq va bog‘lar", fact: "Qanot uchidagi dumchalari bor." },
  { name: "Skarabey qo‘ng‘izi", latin: "Scarabaeus sacer", group: "Umurtqasizlar", icon: "🪲", habitat: "Cho‘l va dasht", fact: "Tuproq unumdorligiga yordam beradi." },
  { name: "Yer ari (bombus)", latin: "Bombus terrestris", group: "Umurtqasizlar", icon: "🐝", habitat: "O‘tloq va dalalar", fact: "O‘simliklarni changlatadi." },
  { name: "Turkiston qisqichbaqasi", latin: "Astacus leptodactylus", group: "Umurtqasizlar", icon: "🦞", habitat: "Toza ko‘l va daryolar", fact: "Suvning tozaligini bildiradi." },
  { name: "Marvarid chig‘anoq", latin: "Corbicula fluminalis", group: "Umurtqasizlar", icon: "🐚", habitat: "Daryo tubi", fact: "Suvni filtrlab tozalaydi." },
  { name: "Cho‘l chayoni", latin: "Orthochirus scrobiculosus", group: "Umurtqasizlar", icon: "🦂", habitat: "Toshloq cho‘l", fact: "Tunda hasharot ovlaydi." },
  { name: "Katta bosh chigirtka", latin: "Saga pedo", group: "Umurtqasizlar", icon: "🦗", habitat: "Dasht o‘tlari", fact: "Yirik yirtqich chigirtka turi." },
];

export const totalAnimals = animals.length;
