// ==============================
// 2-masala sharti
// ==============================
// Subhoniddin o‘zining PlayListini TypeScript bilan boshqarishni rejalashtiryapti. Ilgari JavaScriptda "title": 42 deb yozib qo‘yib, kalit so‘zlar bilan notalar adashib ketgan.
// Endi u `interface` orqali aniqlik kiritmoqchi. Lekin hali obyekt yasashda qiynalmoqda.
// Unga `Music` interfeysiga mos bitta qo‘shiq obyektini yozib bering. Notalar ham, Subhoniddin ham xursand bo‘lsin 🎶

interface Music {
  title: string;
  artist: string;
  duration: number; // soniyalarda
  genre?: string;
}

const song: Music = {
  title: "Navro'z ohangi",
  artist: "Subhoniddin",
  duration: 215,
  genre: "Milliy"
};

// ==============================
// 3-masala sharti
// ==============================
// Diyorbek restoran ochmoqchi, lekin menyusidagi taomlarni noto‘g‘ri formatda yozib, ovqatlar ID o‘rniga emoji yozib yuboribdi 🍕
// Siz `MenuItem` interfeysidan foydalanib, to‘g‘ri shakllangan bitta taom obyektini yozib bering. Oshqozonlar sizdan minnatdor bo‘ladi 😋

interface MenuItem {
  id: number;
  name: string;
  price: number;
  isVegetarian?: boolean;
}

const item: MenuItem = {
  id: 100,
  name: "diyorbek",
  price: 101,
  isVegetarian?: true,
};

// ==============================
// 4-masala sharti
// ==============================
// Feruza uyidagi kitoblar ro‘yxatini tuzmoqchi, lekin har bir kitobni `string` tipida yozib, muallifni o‘zidan ham ko‘ra mashhurroq qilib yuborgan.
// Endi u `Book` interfeysiga qarab, haqiqiy kitob ma’lumotlarini yozmoqchi. Siz ham bir dona to‘liq kitob obyektini yozib bering 📚

interface Book {
  title: string;
  author: string;
  pages: number;
  publishedYear?: number;
}

const book = {
  title: "feruza",
  author: "feruza",
  pages: 102,
  publishedYear: 103,
};

// ==============================
// 5-masala sharti
// ==============================
// Asilbek kutilmaganda YouTube'da video blog yuritmoqchi bo‘lib qoldi. Lekin videolar haqida `any` bilan ishlagan va hozircha trendga chiqolmayapti.
// `Video` interfeysidan foydalangan holda unga professional bir video ma’lumotini yozib bering. Balki millionta ko‘rish to‘plar 🎥

interface Video {
  title: string;
  views: number;
  duration: number; // soniya
  uploadedAt?: string;
}

const vlog: Video = {
  title: "asilbek",
  views: 104,
  duration: 105,
  uploadedAt?: "asilbek",
};

// ==============================
// 6-masala sharti
// ==============================
// Nigora yangi onlayn do‘kon ochdi. Ammo `Product` o‘rniga `string` deb yozib, barcha mahsulotlar narxini «cheksiz» qilib yuborgan 😅
// Unga to‘g‘ri formatda mahsulot obyektini yozib bering, iqtisodiy inqirozning oldi olinsin 💸

interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}

const product: Product = {
  id: 106,
  name: "Nigora",
  price: 107,
  description?: "Nigora",
};

// ==============================
// 7-masala sharti
// ==============================
// Sardor yangi kino sayt ochdi. Lekin `Movie` obyektlarida aktyor o‘rniga rejissor, nomi o‘rniga «kino» deb yozgan.
// Siz undan bir dona haqiqiy `Movie` interfeysiga mos obyekt yozib berishingizni so‘raydi. Rejissor xafa bo‘lib ketmasin 🎬

interface Movie {
  title: string;
  director: string;
  year: number;
  rating?: number;
}

const film: Movie = {
  title: "Sardor",
  director: "Sardor",
  year: 108,
  rating?: 109,
};

// ==============================
// 8-masala sharti
// ==============================
// Muxlisa yangi mobil ilova yaratmoqchi. Ammo `App` obyektini `string` qilib, butun loyihani “Salom Duniya”ga aylantirib yuborgan 😄
// Uni to‘g‘ri yo‘lga solish uchun `App` interfeysiga mos obyekt yozib bering 📱

interface App {
  name: string;
  version: string;
  downloads: number;
  developer?: string;
}

const application: App = {
  name: "Muxlisa",
  version: "Muxlisa",
  downloads: 110,
  developer?: "Muxlisa",
};

// ==============================
// 9-masala sharti
// ==============================
// Behzod yangi sport klubiga a’zo bo‘ldi. Lekin `Member` ma’lumotlarini `boolean` qilib, hamma a’zolarni birdek ko‘rsatib yuborgan 😅
// Sizdan to‘g‘ri formatda `Member` interfeysiga mos a’zo yozib berish so‘raladi 🏋️‍♂️

interface Member {
  id: number;
  name: string;
  membershipType: string;
  isActive?: boolean;
}

const member: Member = {
  id: 111,
  name: "Behzod",
  membershipType: "Behzod",
  isActive?: true,
};

// ==============================
// 10-masala sharti
// ==============================
// Dilfuza yangi galereya sahifasini ishlab chiqmoqda. Ammo har bir `Image` obyektini `42` qilib, barcha rasmga Matritsa effektini bergan 😵‍💫
// Siz unga bir dona `Image` interfeysiga mos rasm obyektini yozib bering 🖼️

interface Image {
  url: string;
  alt: string;
  width: number;
  height: number;
}

const photo: Image = {
  url: "Dilfuza",
  alt: "Dilfuza",
  width: 112,
  height: 113,
};

// ==============================
// 11-masala sharti
// ==============================
// Alisher yangi blog saytini ochmoqchi, lekin `Post` obyektlarini `number` qilib, barcha maqolalarni raqamga aylantirib yuborgan 😅
// Unga `Post` interfeysiga mos bitta maqola obyektini yozib bering, blog o‘quvchilari xursand bo‘lsin 📝

interface Post {
  id: number;
  title: string;
  content: string;
  publishedDate?: string;
}

const article: Post = {
  id: 114,
  title: "Alisher",
  content: "Alisher",
  publishedDate?: "string",
};

// ==============================
// 12-masala sharti
// ==============================
// Zilola onlayn kurs platformasini yaratmoqchi. Ammo `Course` obyektlarini `string` deb yozib, darslarni faqat nom bilan cheklab qo‘ygan 😓
// Sizdan `Course` interfeysiga mos bitta kurs obyektini yozib berish so‘raladi, bilim ulashsin 📚

interface Course {
  id: number;
  title: string;
  duration: number; // soatlarda
  instructor?: string;
}

const course: Course = {
  id: 115,
  title: "Zilola",
  duration: 116,
  instructor?: "Zilola",
};

// ==============================
// 13-masala sharti
// ==============================
// Farrux o‘zining sayohatlarini TypeScript’da ro‘yxatga olmoqchi. Lekin `Trip` obyektlarini `boolean` qilib, har bir sayohatni “bor-yo‘q”ga aylantirgan 😄
// Unga `Trip` interfeysiga mos bitta sayohat obyektini yozib bering, sarguzashtlar davom etsin ✈️

interface Trip {
  destination: string;
  duration: number; // kunlarda
  cost: number;
  isInternational?: boolean;
}

const trip: Trip = {
  destination: "Farux",
  duration: 117,
  cost: 118,
  isInternational?: true,
};

// ==============================
// 14-masala sharti
// ==============================
// Xurshid yangi onlayn kutubxona tizimini boshqarmoqchi. Lekin `EBook` obyektlarini `null` qilib, kitoblarni “yo‘q” deb belgilab qo‘ygan 📖
// Sizdan `EBook` interfeysiga mos bitta elektron kitob obyektini yozib berish so‘raladi 🙌

interface EBook {
  title: string;
  author: string;
  fileSize: number; // MB da
  format?: string;
}

const ebook: EBook = {
  title: "Xurshid",
  author: "Xurshid",
  fileSize: 119,
  format?: "Xurshid",
};

// ==============================
// 15-masala sharti
// ==============================
// Madina yangi fitnes ilovasini sinab ko‘rmoqchi. Ammo `Workout` obyektlarini `string` deb yozib, mashqlarni faqat nom bilan cheklab qo‘ygan 🏃‍♀️
// Unga `Workout` interfeysiga mos bitta mashq obyektini yozib bering, sog‘lom hayot davom etsin 💪

interface Workout {
  id: number;
  name: string;
  duration: number; // daqiqalarda
  intensity?: string;
}

const workout: Workout = {
  id: 120,
  name: "Madina",
  duration: 121,
  intensity?: "Madina",
};

// ==============================
// 16-masala sharti
// ==============================
// Otabek o‘zining onlayn do‘konida savdo-sotiqni boshqarmoqchi. Lekin `Order` obyektlarini `number` qilib, buyurtmalarni faqat ID bilan cheklab qo‘ygan 🛒
// Sizdan `Order` interfeysiga mos bitta buyurtma obyektini yozib berish so‘raladi 💼

interface Order {
  id: number;
  customerName: string;
  totalPrice: number;
  status?: string;
}

const order: Order = {
  id: 122,
  customerName: "Otabek",
  totalPrice: 123,
  status?: "Otabek",
};

// ==============================
// 17-masala sharti
// ==============================
// Gulnoza yangi ta’lim platformasida talabalar ro‘yxatini yuritmoqchi. Lekin `Student` obyektlarini `boolean` qilib, hamma talabalarni “o‘qiyapti” deb belgilab qo‘ygan 🎓
// Unga `Student` interfeysiga mos bitta talaba obyektini yozib bering, ta’lim davom etsin 📚

interface Student {
  id: number;
  name: string;
  grade: number;
  isEnrolled?: boolean;
}

const student: Student = {
  id: 124,
  name: "Gulnoza",
  grade: 125,
  isEnrolled?: true,
};

// ==============================
// 18-masala sharti
// ==============================
// Shaxzod yangi o‘yin platformasini yaratmoqchi. Lekin `Game` obyektlarini `string` qilib, barcha o‘yinlarni “o‘yin” deb nomlab yuborgan 🎮
// Sizdan `Game` interfeysiga mos bitta o‘yin obyektini yozib berish so‘raladi, o‘yinchilar xursand bo‘lsin 🕹️

interface Game {
  title: string;
  platform: string;
  releaseYear: number;
  genre?: string;
}

const game: Game = {
  title: "Shaxzod",
  platform: "Shaxzod",
  releaseYear: 126,
  genre?: "Shaxzod",
};

// ==============================
// 19-masala sharti
// ==============================
// Sevara yangi tadbirlar ro‘yxatini tuzmoqchi. Ammo `Event` obyektlarini `number` qilib, hamma tadbirlarni raqamlarga aylantirib yuborgan 🎉
// Unga `Event` interfeysiga mos bitta tadbir obyektini yozib bering, bayramlar davom etsin 🥳

interface Events {
  id: number;
  name: string;
  date: string;
  location?: string;
}



const salom: Events = {
  id: 127,
  name: "Sevara",
  date: "2025-07-01",
  location: "Toshkent"
};

// ==============================
// 20-masala sharti
// ==============================
// Jamol yangi musiqa albomini chiqarmoqchi. Lekin `Album` obyektlarini `null` qilib, barcha albomlarni “mavjud emas” deb belgilab qo‘ygan 🎵
// Sizdan `Album` interfeysiga mos bitta albom obyektini yozib bering, musiqa yangilansin 🎼

interface Album {
  title: string;
  artist: string;
  tracks: number;
  releaseDate?: string;
}

const album: Album = {
  title: "Jamol",
  artist: "Jamol",
  tracks: 128,
  releaseDate?: "Jamol",
};

// ==============================
// 21-masala sharti
// ==============================
// Laziza yangi onlayn kurslar platformasida o‘z darslarini ro‘yxatga olmoqchi. Ammo `Lesson` obyektlarini `string` qilib, darslarni faqat nom bilan cheklab qo‘ygan 📚
// Sizdan `Lesson` interfeysiga mos bitta dars obyektini yozib berish so‘raladi, ta’lim sifatli bo‘lsin 🎓

interface Lesson {
  id: number;
  title: string;
  duration: number; // daqiqalarda
  topic?: string;
}

const lesson: Lesson = {
  id: 129,
  title: "Laziza",
  duration: 130,
  topic?: "Laziza",
};

// ==============================
// 22-masala sharti
// ==============================
// Nodir yangi blog saytida o‘z maqolalarini chop etmoqchi. Lekin `Blog` obyektlarini `boolean` qilib, maqolalarni “chop etilgan” deb belgilab qo‘ygan ✍️
// Unga `Blog` interfeysiga mos bitta maqola obyektini yozib bering, o‘quvchilar xursand bo‘lsin 📝

interface Blog {
  id: string;
  title: string;
  author: string;
  publishDate?: string;
}

const blogPost: Blog = {
  id: "Nodir",
  title: "Nodir",
  author: "Nodir",
  publishDate?: "Nodir",
};

// ==============================
// 23-masala sharti
// ==============================
// Shohjahon yangi sayohat agentligini ochmoqchi. Ammo `Tour` obyektlarini `number` qilib, sayohatlarni faqat ID bilan cheklab qo‘ygan ✈️
// Sizdan `Tour` nterfeysiga mos bitta sayohat turi obyektini yozib bering, sarguzashtlar boshlansin 🌍

interface Tour {
  id: number;
  destination: string;
  price: number;
  durationDays?: number;
}

const tour: Tour = {
  id: 131,
  destination: "Shohijaxon",
  price: 132,
  durationDays?: 133,
};

// ============================
// 24-masala sharti
// ==============================
// Ma’mura yangi restoran menyusini tuzmoqchi. Ammo `Dish` obyektlarini `string` qilib, taomlarni faqat nom bilan cheklab qo‘ygan 🍽️
// Unga `Dish` interfeysiga mos bitta taom obyektini yozib bering, oshxona shuhrati oshirila! 😋

interface Dish {
  id: number;
  name: string;
  price: number;
  isSpicy?: boolean;
}

const dish: Dish = {
  id: 134,
  name: "Ma'mura",
  price: 135,
  isSpicy?: true,
};

// ==============================
// 25-masala sharti
// ==============================
// Ulug‘bek yangi kutubxona tizimida jurnallar ro‘yxatini yuritmoqchi. Lekin `Magazine` obyektlarini `null` qilib, barcha jurnallarni “mavjud emas” deb belgilab qo‘ygan 📰
// Sizdan `Magazine` nterfeysiga mos bitta jurnal obyektini yozib bering, nashriyot xursand bo‘lsin 📇

interface Magazine {
  id: number;
  title: string;
  issue: number;
  publisher?: string;
}

const magazine: Magazine = {
  id: 136,
  title: "Ulugbek",
  issue: 137,
  publisher?: "Ulug'bek",
};

// ==============================
// 26-masala sharti
// ==============================
// Dilbar yangi fitnes dasturini boshqarmoqchi. Ammo `Exercise` obyektlarini `number` qilib, mashqlarni faqat raqam bilan cheklab qo‘ygan 🏋️‍♀️
// Unga `Exercise` nterfeysiga mos bitta mashq obyektini yozib bering, sog‘lom turmush tarzi targ‘ib qilinsin 💪

interface Exercise {
  id: number;
  name: string;
  reps: number;
  equipment?: string;
}

const exercise: Exercise = {
  id: 138,
  name: "Dilbar",
  reps: 139,
  equipment?: "Dilbar",
};

// ==============================
// 27-masala sharti
// ==============================
// Sherzod yangi kino portalida filmlar ro‘yxatini tuzmoqchi. Ammo `Film` obyektlarini `string` qilib, filmlarni faqat nom bilan cheklab qo‘ygan 🎬
// Sizdan `Film` nterfeysiga mos bitta film obyektini yozib bering, kinosevarlar xursand bo‘lsin 🎥

interface Film {
  id: number;
  title: string;
  genre: string;
  duration?: number; // daqiqalarda
}

const movie: Film = {
  id: 140,
  title: "Sherzod",
  genre: "Sherzod",
  duration?: 141,
};

// ==============================
// 28-masala sharti
// ==============================
// Nilufar yangi onlayn do‘konda kiyim-kechak katalogini yaratmoqchi. Ammo `Clothing` obyektlarini `boolean` qilib, hamma kiyimlarni “mavjud” deb belgilab qo‘ygan 👗
// Unga `Clothing` nterfeysiga mos bitta kiyim obyektini yozib bering, moda olami porlasin 🌟

interface Clothing {
  id: number;
  name: string;
  price: number;
  size?: string;
}

const clothing: Clothing = {
  id: 142,
  name: "Nilufar",
  price: 143,
  size?: "Nilufar",
};

// ==============================
// 29-masala sharti
// ==============================
// Oybek yangi musiqa festivallarni rejalashtirmoqchi. Ammo `Concert` obyektlarini `number` qilib, konsertlarni faqat raqam bilan cheklab qo‘ygan 🎤
// Sizdan `Concert` interfeysiga mos bitta konsert obyektini yozib bering, musiqa oqimi to‘xtamasin 🎸

interface Concert {
  id: number;
  name: string;
  date: string;
  venue?: string;
}

const concert: Concert = {
  id: 144,
  name: "Oybek",
  date: "Oybek",
  venue?: "Oybek",
};

// ==============================
// 30-masala sharti
// ==============================
// Gulchehra yangi ta’lim markazida guruhlar ro‘yxatini yuritmoqchi. Ammo `Class` obyektlarini `string` qilib, darslarni faqat nom bilan cheklab qo‘ygan 📚
// Unga `Class` nterfeysiga mos bitta guruh obyektini yozib bering, ta’lim sifati oshirila! 🎓

interface Class {
  id: number;
  name: string;
  capacity: number;
}

const class: Class = {
  id: 145,
  name: "Gulchehra",
  capacity: 146,
};

// ==============================
// 31-masala sharti
// ==============================
// Miraziz yangi sayohat blogida o‘z tajribalarini yozmoqchi. Ammo `TravelPost` obyektlarini `boolean` qilib, sayohatlarni faqat “bor-yo‘q” deb belgilab qo‘ygan ✈️
// Unga `TravelPost` nterfeysiga mos bitta sayohat maqolasi obyektini yozib bering, sarguzashtlar o‘quvchilarga yetib bors! 🌍

interface TravelPost {
  id: number;
  title: string;
  destination: string;
  author?: string;
}

const travelPost: TravelPost = {
  id: 147,
  title: "Miraziz",
  destination: "Miraziz",
  author?: "Miraziz",
};

// ==============================
// 32-masala sharti
// ==============================
// Xadicha yangi onlayn kutubxonada audiokitoblar ro‘yxatini tuzmoqchi. Ammo `Audiobook` obyektlarini `null` qilib, kitoblarni “yo‘q” deb belgilab qo‘ygan 🎧
// Unga `Audiobook` nterfeysiga mos bitta audiokitob obyektini yozib bering, tinglovchilar xursand bo‘lsin 📖

interface Audiobook {
  title: string;
  author: string;
  duration: number; // soatlarda
  narrator?: string;
}

const audiobook: Audiobook = {
  title: "Xadicha",
  author: "Xadicha",
  duration: 148,
  narrator?: "Xadicha",
};

// ==============================
// 33-masala sharti
// ==============================
// Rustam yangi restoran uchun ichimliklar menyusini tuzmoqchi. Ammo `Beverage` obyektlarini `string` qilib, ichimliklarni faqat nom bilan cheklab qo‘ygan 🥤
// Unga `Beverage` nterfeysiga mos bitta ichimlik obyektini yozib bering, chanqoqlar quvonsin 🍹

interface Beverage {
  id: number;
  name: string;
  price: number;
  isCarbonated?: boolean;
}

const beverage: Beverage = {
  id: 149,
  name: "Rustam",
  price: 150,
  isCarbonated?: false,
};

// ==============================
// 34-masala sharti
// ==============================
// Mohira yangi onlayn o‘yinlar platformasida o‘yinlar ro‘yxatini yuritmoqchi. Ammo `OnlineGame` obyektlarini `number` qilib, o‘yinlarni faqat raqam bilan cheklab qo‘ygan 🎮
// Unga `OnlineGame` nterfeysiga mos bitta o‘yin obyektini yozib bering, o‘yinchilar xursand bo‘lsin 🕹️

interface OnlineGame {
  id: number;
  title: string;
  genre: string;
  playersOnline?: number;
}

const onlineGame: OnlineGame = {
  id: 151,
  title: "Mohira",
  genre: "Mohira",
  playersOnline?: 152,
};

// ==============================
// 35-masala sharti
// ==============================
// Anvar yangi kino festivallarni rejalashtirmoqchi. Ammo `FilmEntry` obyektlarini `boolean` qilib, filmlarni faqat “isthiq” deb belgilab qo‘ygan 🎬
// Unga `FilmEntry` nterfeysiga mos bitta film obyektini yozib bering, kinosevarlar xursand bo‘lsin 🎞

interface FilmEntry {
  id: number;
  title: string;
  director: string;
  category?: string;
}

const filmEntry: FilmEntry = {
  id: 153,
  title: "Anvar",
  director: "Anvar",
  category?: "Anvar",
};

// ==============================
// 36-masala sharti
// ==============================
// Zuhra yangi onlayn jurnalda maqolalar ro‘yxatini tuzmoqchi. Ammo `Feature` obyektlarini `string` qilib, maqolalarni faqat nom bilan cheklab qo‘ygan 📰
// Unga `Feature` nterfeysiga mos bitta maqola obyektini yozib bering, o‘quvchilar xursand bo‘lsin ✍️

interface Feature {
  id: number;
  title: string;
  author: string;
  topic?: string;
}

const feature: Feature = {
  id: 154,
  title: "Zuhra",
  author: "Zuhra",
  topic?: "Zuhra",
};

// ==============================
// 37-masala sharti
// ==============================
// Tohir yangi sport musobaqalari tizimini boshqarmoqchi. Ammo `Competition` obyektlarini `number` qilib, musobaqalarni faqat ID bilan cheklab qo‘ygan 🏅
// Unga `Competition` nterfeysiga mos bitta musobaqa obyektini yozib bering, sportchilar xursand bo‘lsin 🏆

interface Competition {
  id: number;
  name: string;
  date: string;
  prizePool ?: number;
}

const competition: Competition = {
  id: 155,
  name: "Tohir",
  date: "Tohir",
  prizePool?: 156,
};

// ==============================
// 38-masala sharti
// ==============================
// Mavluda yangi moda katalogini yaratmoqchi. Ammo `FashionItem` obyektlarini `string` qilib, kiyimlarni faqat nom bilan cheklab qo‘ygan 👗
// Unga `FashionItem` nterfeysiga mos bitta kiyim obyektini yozib bering, moda olami porlasin 🌟

interface FashionItem {
  id: number;
  name: string;
  brand: string;
  price?: number;
}

const fashionItem: FashionItem = {
  id: 157,
  name: "Mavluda",
  brand: "Mavluda",
  price?: 158,
};

// ==============================
// .39-masala sharti
// ==============================
// Shavkat yangi onlayn kutubxonada kitob sharhlari tuzmoqchi. Ammo `BookReview` obyektlarini `boolean` qilib, sharhlarni faqat “yaxshi” deb belgilab qo‘ygan 📚
// Unga `BookReview` nterfeysiga mos bitta sharh obyektini yozib bering, o‘quvchilar xursand bo‘lsin 📝

interface BookReview {
  id: number;
  bookTitle: string;
  rating: number;
  comment?: string;
}

const bookReview: BookReview = {
  id: 159,
  bookTitle: "Shavkat",
  rating: 160,
  comment?: "Shavkat",
};

// ==============================
// .40-masala sharti
// ==============================
// Dilrabo yangi sayohat rejalari tuzmoqchi. Ammo `Itinerary` obyektlarini `string` qilib, rejalarni faqat nom bilan cheklab qo‘ygan 🗺️
// Unga `Itinerary` nterfeysiga mos bitta sayohat rejasi obyektini yozib bering, sarguzashtlar boshlansin ✈️

interface Itinerary {
  id: number;
  destination: string;
  days: number;
  activities?: string;
}

const itinerary: Itinerary = {
  id: 161,
  destination: "Dilrabo",
  days: 162,
  activities?: "Dilrabo",
};

// ==============================
// 41-masala sharti
// ==============================
// Kamola yangi onlayn do‘konda aksessuarlar katalogini yaratmoqchi. Ammo `Accessory` obyektlarini `number` qilib, aksessuarlarni faqat ID bilan cheklab qo‘ygan 💍
// Unga `Accessory` interfeysiga mos bitta aksessuar obyektini yozib bering, do‘kon porlasin 🛍️

interface Accessory {
  id: number;
  name: string;
  price: number;
  material?: string;
}

const accessory: Accessory = {
  id: 163,
  name: "Kamola",
  price: 164,
  material?: "Kamola",
};

// ==============================
// 42-masala sharti
// ==============================
// Shohzod yangi o‘yin turnirlarini rejalashtirmoqchi. Ammo `Tournament` obyektlarini `string` qilib, turnirlarni faqat nom bilan cheklab qo‘ygan 🎮
// Unga `Tournament` nterfeysiga mos bitta turnir obyektini yozib bering, o‘yinchilar xursand bo‘lsin 🏆

interface Tournament {
  id: number;
  name: string;
  game: string;
  prize?: number;
}

const tournament: Tournament = {
  id: 165,
  name: "Shahzod",
  game: "Shaxzod",
  prize?: 166,
};

// ==============================
// 43-masala sharti
// ==============================
// Gulbahor yangi ta’lim dasturida imtihonlar ro‘yxatini yuritmoqchi. Ammo `Test` obyektlarini `boolean` qilib, imtihonlarni faqat “o‘tkazildi” deb belgilab qo‘ygan 📝
// Unga `Test` nterfeysiga mos bitta imtihon obyektini yozib bering, ta’lim sifati oshirila!

interface Test {
  id: number;
  subject: string;
  maxScore: number;
  date?: string;
}

const test: Test = {
  id: 167,
  subject: "Gulbahor",
  maxScore: 168,
  date?: "Gulbahor",
};

// ==============================
// 44-masala sharti
// ==============================
// Xurshida yangi onlayn galereyada video rasmlar ro‘yxatini tuzmoqchi. Ammo `VideoClip` obyektlarini `number` qilib, videolarni faqat raqam bilan cheklab qo‘ygan 🎥
// Unga `VideoClip` nterfeysiga mos bitta video obyektini yozib bering, tomoshabinlar xursand bo‘lsin 📹

interface VideoClip {
  id: number;
  title: string;
  duration: number; // soniyalarda
  resolution?: string;
}

const videoClip: VideoClip = {
  id: 169,
  title: "Xurshida",
  duration: 170,
  resolution?: "Xurshida",
};

// ==============================
// 45-masala sharti
// ==============================
// O‘tkir yangi sport jurnalida musobaqa jadvallarini yuritmoqchi. Ammo `Scoreboard` obyektlarini `string` qilib, natijalarni faqat nom bilan cheklab qo‘ygan 🏅
// Unga `Scoreboard` nterfeysiga mos bitta natija obyektini yozib bering, sport muxlislari xursand bo‘lsin 📊

interface Scoreboard {
  id: number;
  match: string;
  score: string;
  winner?: string;
}

const scoreboard: Scoreboard = {
  id: 171,
  match: "O'tkir",
  score: "O'tkir",
  winner?: "O'tkir",
};

// ==============================
// 46-masala sharti
// ==============================
// Ma’suma yangi moda blogida kiyim kolleksiyalarini yozmoqchi. Ammo `Outfit` obyektlarini `boolean` qilib, kiyimlarni faqat “trendy” deb belgilab qo‘ygan 👗
// Unga `Outfit` nterfeysiga mos bitta kiyim to‘plami obyektini yozib bering, moda olami yorqinlashsin! 🌟

interface Outfit {
  id: number;
  name: string;
  price: number;
}

const outfit: Outfit = {
  id: 172,
  name: "Ma'suma",
  price: 173,
};

// ==============================
// 47-masala sharti
// ==============================
// Farhod yangi onlayn kutubxonada kitob kategoriyalarini tuzmoqchi. Ammo `Genre` obyektlarini `number` qilib, kategoriyalarni faqat raqam bilan cheklab qo‘ygan 📚
// Unga `Genre` nterfeysiga mos bitta kategoriya obyektini yozib bering, o‘quvchilar xursand bo‘lsin! 📖

interface Genre {
  id: number;
  name: string;
  description: string;
  popularity?: number;
}

const genre: Genre = {
  id: 174,
  name: "Farhod",
  description: "Farhod",
  popularity?: 175,
};

// ==============================
// 48-masala sharti
// ==============================
// Nargiza yangi sayohat agentligida ekskursiyalar ro‘yxatini yuritmoqchi. Ammo `Excursion` obyektlarini `string` qilib, ekskursiyalarni faqat nom bilan cheklab qo‘ygan 🚌
// Unga `Excursion` nterfeysiga mos bitta ekskursiya obyektini yozib bering, sayyohlar xursand bo‘lsin! 🌍

interface Excursion {
  id: number;
  name: string;
  price: number;
  durationHours?: number;
}

const excursion: Excursion = {
  id: 176,
  name: "Nargiza",
  price: 177,
  durationHours?: 178,
};

// ==============================
// 49-masala sharti
// ==============================
// Zafar yangi kino saytida seriallar ro‘yxatini tuzmoqchi. Ammo `TVShow` obyektlarini `boolean` qilib, seriallarni faqat “mavjud” deb belgilab qo‘ygan 📺
// Unga `TVShow` nterfeysiga mos bitta serial obyektini yozib bering, tomoshabinlar xursand bo‘lsin! 🎬

interface TVShow {
  id: number;
  title: string;
  episodes: number;
  genre?: string;
}

const tvShow: TVShow = {
  id: 179,
  title: "Zafar",
  episodes: 180,
  genre?: "Zafar",
};

// ==============================
// 50-masala sharti
// ==============================
// Dilshoda yangi onlayn do‘konda mebellar katalogini yaratmoqchi. Ammo `Furniture` obyektlarini `number` qilib, mebellarni faqat raqam bilan cheklab qo‘ygan 🛋️
// Unga `Furniture` nterfeysiga mos bitta mebel obyektini yozib bering, do‘kon porlasin! 🏠

interface Furniture {
  id: number;
  name: string;
  price: number;
  material?: string;
}

const furniture: Furniture = {
  id: 181,
  name: "Dilshoda",
  price: 182,
  material?: "Dilshoda",
};