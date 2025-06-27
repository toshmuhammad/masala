// Quyida 10ta interface yozilgan siz ushbu interfaceda yozilgan takrorlanishlarni oldini olishingiz kerak. type, &, extendslardan foydalaning.

// Reusable bo'lgan type va interfacelarga aylantiring.

// Nihoyatda toza kod bo'lsin

// ==============================
// 1. User interfeysi
// Foydalanuvchi tizimidagi asosiy ma'lumotlar uchun
// ==============================

interface Users {
  id: number,
  username: string,
  isActive: boolean,
  email: string,
  fullname: string,
  name: string,
}


interface User extends Pick<Users, "id" | "email" | "isActive" | "username" | "fullname"> {
  createdAt: string;
  phoneNumber?: string;
  address?: string;
  lastLogin: string;
  role: "user" | "admin" | "guest";
}

// ==============================
// 2. Customer interfeysi
// Mijozlar uchun maxsus ma'lumotlar, User'ga o'xshash
// ==============================
interface Customer extends Pick<Users, "id" | "email" | "fullname" | "isActive" | "username">{
  createdAt: string;
  phoneNumber: string;
  address: string;
  purchaseHistory: number[];
  loyaltyPoints: number;
}

// ==============================
// 3. Vendor interfeysi
// Sotuvchilar uchun ma'lumotlar, User va Customer'ga o'xshash
// ==============================
interface Vendor extends Pick<Users, "id" | "email" | "isActive" | "username" | "fullname"> {
  createdAt: string;
  phoneNumber?: string;
  address: string;
  companyName: string;
  vendorRating: number;
}

// ==============================
// 4. Product interfeysi
// Mahsulotlar katalogi uchun asosiy ma'lumotlar
// ==============================
interface Product  extends Pick<Users, "id" | "email" | "isActive" | "username" | "fullname"> {
  name: string;
  price: number;
  category: string;
  description: string;
  stockQuantity: number;
  createdAt: string;
  isAvailable: boolean;
  vendorId: number;
  weight?: number;
}

// ==============================
// 5. InventoryItem interfeysi
// Ombor mahsulotlari uchun, Product'ga o'xshash
// ==============================
interface InventoryItem  extends Pick<Users, "id" | "email" | "isActive" | "username" | "fullname"> {
  name: string;
  price: number;
  category: string;
  description?: string;
  stockQuantity: number;
  createdAt: string;
  isAvailable: boolean;
  warehouseId: number;
  lastRestocked: string;
}

// ==============================
// 6. Order interfeysi
// Buyurtmalar uchun ma'lumotlar
// ==============================
interface Order  extends Pick<Users, "id" | "email" | "isActive" | "username" | "fullname"> {
  customerId: number;
  products: number[];
  totalPrice: number;
  status: "pending" | "shipped" | "delivered" | "cancelled";
  createdAt: string;
  shippingAddress: string;
  paymentMethod: string;
  isPaid: boolean;
  orderNotes?: string;
}

// ==============================
// 7. Transaction interfeysi
// Moliyaviy operatsiyalar uchun, Order'ga o'xshash
// ==============================
interface Transaction  extends Pick<Users, "id" | "email" | "isActive" | "username" | "fullname"> {
  customerId: number;
  amount: number;
  status: "completed" | "pending" | "failed";
  createdAt: string;
  paymentMethod: string;
  isRefunded: boolean;
  transactionType: "purchase" | "refund" | "deposit";
  orderId?: number;
  description?: string;
}

// ==============================
// 8. Event interfeysi
// Tadbirlar va faoliyatlar uchun ma'lumotlar
// ==============================
interface Event  extends Pick<Users, "id" | "email" | "isActive" | "username" | "fullname"> {
  title: string;
  description: string;
  createdAt: string;
  startDate: string;
  location: string;
  organizerId: number;
  isPublic: boolean;
  maxParticipants: number;
  registrationDeadline?: string;
}

// ==============================
// 9. Campaign interfeysi
// Marketing kampaniyalari uchun, Event'ga o'xshash
// ==============================
interface Campaign  extends Pick<Users, "id" | "email" | "isActive" | "username" | "fullname"> {
  title: string;
  description: string;
  createdAt: string;
  startDate: string;
  targetAudience: string;
  organizerId: number;
  isActive: boolean;
  budget: number;
  endDate?: string;
}

// ==============================
// 10. Review interfeysi
// Foydalanuvchi sharhlari uchun ma'lumotlar
// ==============================
interface Review  extends Pick<Users, "id" | "email" | "isActive" | "username" | "fullname"> {
  userId: number;
  targetId: number;
  rating: number;
  comment: string;
  createdAt: string;
  isApproved: boolean;
  targetType: "product" | "vendor" | "event";
  helpfulVotes: number;
  reported?: boolean;
}
