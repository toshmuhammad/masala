// Quyida 20ta type yozilgan siz ushbu typelarda yozilgan takrorlanishlarni oldini olishingiz kerak. type, & foydalaning.

// Reusable bo'lgan type va interfacelarga aylantiring.

// Nihoyatda toza kod bo'lsin

// ==============================
// 1. BasicUser type
// Foydalanuvchi uchun asosiy ma'lumotlar
// ==============================
type BasicUser = {
  id: number;
  username: string;
  email: string;
  createdAt: string;
  isActive: boolean;
};

// ==============================
// 2. CustomerProfile type
// Mijozlar uchun profil ma'lumotlari
// ==============================
type CustomerProfile = {
  id: number;
  username: string;
  email: string;
  fullName: string;
  phoneNumber: string;
};

// ==============================
// 3. VendorInfo type
// Sotuvchilar uchun ma'lumotlar
// ==============================
type VendorInfo = {
  id: number;
  username: string;
  email: string;
  companyName: string;
  rating: number;
};

// ==============================
// 4. ProductDetails type
// Mahsulotlar uchun batafsil ma'lumot
// ==============================
type ProductDetails = {
  id: number;
  name: string;
  price: number;
  category: string;
  stockQuantity: number;
};

// ==============================
// 5. OrderInfo type
// Buyurtma ma'lumotlari
// ==============================
type OrderInfo = {
  id: number;
  customerId: number;
  totalPrice: number;
  status: "pending" | "shipped" | "delivered";
  orderDate: string;
};

// ==============================
// 6. MediaItem type
// Media kontenti uchun ma'lumotlar
// ==============================
type MediaItem = {
  id: number;
  title: string;
  duration: number;
  format: "video" | "audio" | "image";
  creator: string;
};

// ==============================
// 7. VideoContent type
// Video ma'lumotlari
// ==============================
type VideoContent = {
  id: number;
  title: string;
  duration: number;
  views: number;
  resolution: string;
};

// ==============================
// 8. EventDetails type
// Tadbir ma'lumotlari
// ==============================
type EventDetails = {
  id: number;
  title: string;
  date: string;
  location: string;
  organizerId: number;
};

// ==============================
// 9. CourseInfo type
// Kurslar uchun ma'lumotlar
// ==============================
type CourseInfo = {
  id: number;
  title: string;
  instructor: string;
  durationHours: number;
  level: "beginner" | "intermediate" | "advanced";
};

// ==============================
// 10. ReviewItem type
// Sharhlar uchun ma'lumotlar
// ==============================
type ReviewItem = {
  id: number;
  userId: number;
  rating: number;
  comment: string;
  targetType: "product" | "course";
};

// ==============================
// 11. TransactionRecord type
// Tranzaksiya yozuvlari
// ==============================
type TransactionRecord = {
  id: number;
  amount: number;
  date: string;
  type: "purchase" | "refund";
  status: "success" | "failed";
};

// ==============================
// 12. InventoryEntry type
// Ombor yozuvlari
// ==============================
type InventoryEntry = {
  id: number;
  productId: number;
  quantity: number;
  warehouse: string;
  lastUpdated: string;
};

// ==============================
// 13. CampaignData type
// Marketing kampaniyasi ma'lumotlari
// ==============================
type CampaignData = {
  id: number;
  title: string;
  budget: number;
  startDate: string;
  targetAudience: string;
};

// ==============================
// 14. SubscriptionInfo type
// Obuna rejalari ma'lumotlari
// ==============================
type SubscriptionInfo = {
  id: number;
  name: string;
  price: number;
  duration: "monthly" | "yearly";
  features: string[];
};

// ==============================
// 15. NotificationData type
// Bildirishnoma ma'lumotlari
// ==============================
type NotificationData = {
  id: number;
  userId: number;
  message: string;
  type: "info" | "warning";
  read: boolean;
};

// ==============================
// 16. SupportTicket type
// Texnik yordam chiptasi
// ==============================
type SupportTicket = {
  id: number;
  userId: number;
  subject: string;
  status: "open" | "closed";
  priority: "low" | "high";
};

// ==============================
// 17. BlogArticle type
// Blog maqolasi ma'lumotlari
// ==============================
type BlogArticle = {
  id: number;
  title: string;
  author: string;
  status: "draft" | "published";
  tags: string[];
};

// ==============================
// 18. PaymentDetails type
// To'lov usullari ma'lumotlari
// ==============================
type PaymentDetails = {
  id: number;
  userId: number;
  type: string;
  cardNumber: string;
  isDefault: boolean;
};

// ==============================
// 19. ShippingDetails type
// Yetkazib berish ma'lumotlari
// ==============================
type ShippingDetails = {
  id: number;
  orderId: number;
  address: string;
  method: "standard" | "express";
  cost: number;
};

// ==============================
// 20. UserSettings type
// Foydalanuvchi sozlamalari
// ==============================
type UserSettings = {
  id: number;
  username: string;
  privacy: string;
  theme: "light" | "dark";
  notifications: boolean;
};
