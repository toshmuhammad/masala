// Quyida 20ta type yozilgan siz ushbu typelarda yozilgan takrorlanishlarni oldini olishingiz kerak. type, & foydalaning.

// Reusable bo'lgan type va interfacelarga aylantiring.

// Nihoyatda toza kod bo'lsin

// ==============================
// 1. BasicUser type
// Foydalanuvchi uchun asosiy ma'lumotlar
// ==============================
// type BasicUser = {
//   id: number;
//   username: string;
//   email: string;
//   createdAt: string;
//   isActive: boolean;
// };

type WithId = {
  id: number;
};

type WithTimestamps = {
  createdAt: string;
};

type AccountStatus = {
  isActive: boolean;
};

type UserInfo = {
  username: string;
  email: string;
};

export type BasicUser = WithId & WithTimestamps & AccountStatus & UserInfo;


// ==============================
// 2. CustomerProfile type
// Mijozlar uchun profil ma'lumotlari
// ==============================
// type CustomerProfile = {
//   id: number;
//   username: string;
//   email: string;
//   fullName: string;
//   phoneNumber: string;
// };


type ReusableParts = {
  id: number;
};
type EssentialData = {
  fullName: string;
};
type BaseType = {
  phoneNumber: string;
};
type ApiPayload = {
  username: string;
  email: string;
};

export type CustomerProfile = ReusableParts & EssentialData & BaseType & ApiPayload;

// ==============================
// 3. VendorInfo type
// Sotuvchilar uchun ma'lumotlar
// ==============================
// type VendorInfo = {
//   id: number;
//   username: string;
//   email: string;
//   companyName: string;
//   rating: number;
// };

type OutputShape = {
  id: number;
};
type InputData = {
  username: string;
  email: string;
};
type MappedFields = {
  companyName: string;
};
type SimpleObject = {
  rating: number;
};

export type VendorInfo = OutputShape & InputData & MappedFields & SimpleObject;

// ==============================
// 4. ProductDetails type
// Mahsulotlar uchun batafsil ma'lumot
// ==============================
// type ProductDetails = {
//   id: number;
//   name: string;
//   price: number;
//   category: string;
//   stockQuantity: number;
// };

type PartialUser = {
  id: number;
};
type ModelFields = {
  name: string;
};
type DataShape = {
  price: number;
};
type BaseEntity = {
  category: string;
};
type EntityBase = {
  stockQuantity: number;
};

export type ProductDetails = PartialUser & ModelFields & DataShape & BaseEntity & EntityBase;

// ==============================
// 5. OrderInfo type
// Buyurtma ma'lumotlari
// ==============================
// type OrderInfo = {
//   id: number;
//   customerId: number;
//   totalPrice: number;
//   status: "pending" | "shipped" | "delivered";
//   orderDate: string;
// };

type InfoFields = {
  id: number;
};
type CoreInfo = {
  customerId: number;
};
type BaseProps = {
  totalPrice: number;
};
type CommonFields = {
  status: "pending" | "shipped" | "delivered";
};
type MetaData = {
  orderDate: string;
};

export type OrderInfo = InfoFields & CoreInfo & BaseProps & CommonFields & MetaData ;

// ==============================
// 6. MediaItem type
// Media kontenti uchun ma'lumotlar
// ==============================
// type MediaItem = {
//   id: number;
//   title: string;
//   duration: number;
//   format: "video" | "audio" | "image";
//   creator: string;
// };

type nima = {
  id: number;
};
type ContactInfo = {
  title: string;
};
type Credentials = {
  duration: number;
};
type AuthFields = {
  format: "video" | "audio" | "image";
};
type NameAndEmail = {
  creator: string;
};

export type MediaItem = nima & ContactInfo & Credentials & AuthFields & NameAndEmail;

// ==============================
// 7. VideoContent type
// Video ma'lumotlari
// ==============================
// type VideoContent = {
//   id: number;
//   title: string;
//   duration: number;
//   views: number;
//   resolution: string;
// };

type UserDetails = {
  id: number;
};
type EmailPayload = {
  title: string;
};
type BasicCredentials = {
  duration: number;
};
type AccountStatusa = {
  views: number;
};
type StatusFlag = {
  resolution: string;
};

export type VideoContent = UserDetails & EmailPayload & BasicCredentials & AccountStatusa & StatusFlag ;

// ==============================
// 8. EventDetails type
// Tadbir ma'lumotlari
// ==============================
// type EventDetails = {
//   id: number;
//   title: string;
//   date: string;
//   location: string;
//   organizerId: number;
// };

type UserStatus = {
  id: number;
};
type IsActiveFlag = {
  title: string;
};
type WithStatus = {
  date: string;
};
type StateInfo = {
  location: string;
};
type ActivationState = {
  organizerId: number;
};

export type EventDetails = UserStatus & IsActiveFlag & WithStatus & StateInfo & ActivationState ;

// ==============================
// 9. CourseInfo type
// Kurslar uchun ma'lumotlar
// ==============================
// type CourseInfo = {
//   id: number;
//   title: string;
//   instructor: string;
//   durationHours: number;
//   level: "beginner" | "intermediate" | "advanced";
// };

type BooleanStatus = {
  id: number;
};
type DateMeta = {
  title: string;
};
type DateFields = {
  instructor: string;
};
type TimeInfo = {
  durationHours: number;
};
type CreatedInfo = {
  level: "beginner" | "intermediate" | "advanced";
};

export type CourseInfo = BooleanStatus & DateMeta & DateFields & TimeInfo & CreatedInfo ;

// ==============================
// 10. ReviewItem type
// Sharhlar uchun ma'lumotlar
// ==============================
// type ReviewItem = {
//   id: number;
//   userId: number;
//   rating: number;
//   comment: string;
//   targetType: "product" | "course";
// };

type HasDates = {
  id: number;
};
type TimeStampsOnly = {
  userId: number;
};
type BaseTimestamps = {
  rating: number;
};
type UuidField = {
  comment: string;
};
type KeyInfo = {
  targetType: "product" | "course";
};

export type ReviewItem = HasDates & TimeStampsOnly & BaseTimestamps & UuidField & KeyInfo ;

// ==============================
// 11. TransactionRecord type
// Tranzaksiya yozuvlari
// ==============================
// type TransactionRecord = {
//   id: number;
//   amount: number;
//   date: string;
//   type: "purchase" | "refund";
//   status: "success" | "failed";
// };

type EntityId = {
  id: number;
};
type RecordId = {
  amount: number;
};
type ObjectId = {
  date: string;
};
type ItemId = {
  type: "purchase" | "refund";
};
type UniqueId = {
  status: "success" | "failed";
};

export type TransactionRecord = EntityId & RecordId & ObjectId & ItemId & UniqueId ;

// ==============================
// 12. InventoryEntry type
// Ombor yozuvlari
// ==============================
// type InventoryEntry = {
//   id: number;
//   productId: number;
//   quantity: number;
//   warehouse: string;
//   lastUpdated: string;
// };

type GlobalId = {
  id: number;
};
type Identifier = {
  productId: number;
};
type KeyField = {
  quantity: number;
};
type ReferenceId = {
  warehouse: string;
};
type IdOnly = {
  lastUpdated: string;
};

export type InventoryEntry = GlobalId & Identifier & KeyField & ReferenceId & IdOnly ;

// ==============================
// 13. CampaignData type
// Marketing kampaniyasi ma'lumotlari
// ==============================
// type CampaignData = {
//   id: number;
//   title: string;
//   budget: number;
//   startDate: string;
//   targetAudience: string;
// };

type TimestampData = {
  id: number;
};
type DateInfo = {
  title: string;
};
type CreatedAtData = {
  budget: number;
};
type ModifiedAt = {
  startDate: string;
};
type TimeRange = {
  targetAudience: string;
};

export type CampaignData = TimestampData & DateInfo & CreatedAtData & ModifiedAt & TimeRange ;

// ==============================
// 14. SubscriptionInfo type
// Obuna rejalari ma'lumotlari
// ==============================
// type SubscriptionInfo = {
//   id: number;
//   name: string;
//   price: number;
//   duration: "monthly" | "yearly";
//   features: string[];
// };

type DatePeriod = {
  id: number;
};
type HistoryDates = {
  name: string;
};
type AuditTrail = {
  price: number;
};
type TimeMeta = {
  duration: "monthly" | "yearly";
};
type TimeFields = {
  features: string[];
};

export type SubscriptionInfo = DatePeriod & HistoryDates & AuditTrail & TimeMeta & TimeFields;

// ==============================
// 15. NotificationData type
// Bildirishnoma ma'lumotlari
// ==============================
// type NotificationData = {
//   id: number;
//   userId: number;
//   message: string;
//   type: "info" | "warning";
//   read: boolean;
// };

type NameInfo = {
  id: number;
};
type PersonalInfo = {
  userId: number;
};
type ContactDetails = {
  message: string;
};
type FullNameField = {
  type: "info" | "warning";
};
type ProfileData = {
  read: boolean;
};

export type NotificationData = NameInfo & PersonalInfo & ContactDetails & FullNameField & ProfileData ;

// ==============================
// 16. SupportTicket type
// Texnik yordam chiptasi
// ==============================
// type SupportTicket = {
//   id: number;
//   userId: number;
//   subject: string;
//   status: "open" | "closed";
//   priority: "low" | "high";
// };

type BioInfo = {
  id: number;
};
type IdentityData = {
  userId: number;
};
type UserMeta = {
  subject: string;
};
type AvatarInfo = {
  status: "open" | "closed";
};
type UserProfileFields = {
  priority: "low" | "high";
};

export type SupportTicket = BioInfo & IdentityData & UserMeta & AvatarInfo & UserProfileFields ;

// ==============================
// 17. BlogArticle type
// Blog maqolasi ma'lumotlari
// ==============================
// type BlogArticle = {
//   id: number;
//   title: string;
//   author: string;
//   status: "draft" | "published";
//   tags: string[];
// };

type EmailField = {
  id: number;
};
type PhoneField = {
  title: string;
};
type CommunicationInfo = {
  author: string;
};
type EmailMeta = {
  status: "draft" | "published";
};
type SmsSettings = {
  tags: string[];
};

export type BlogArticle = EmailField & PhoneField & CommunicationInfo & EmailMeta & SmsSettings ;

// ==============================
// 18. PaymentDetails type
// To'lov usullari ma'lumotlari
// ==============================
// type PaymentDetails = {
//   id: number;
//   userId: number;
//   type: string;
//   cardNumber: string;
//   isDefault: boolean;
// };

type NotificationContact = {
  id: number;
};
type PhoneNumberData = {
  userId: number;
};
type EmailPhone = {
  type: string;
};
type ReachInfo = {
  cardNumber: string;
};
type LoginPayload = {
  isDefault: boolean;
};

export type PaymentDetails = NotificationContact & PhoneNumberData & EmailPhone & ReachInfo & LoginPayload ;

// ==============================
// 19. ShippingDetails type
// Yetkazib berish ma'lumotlari
// ==============================
// type ShippingDetails = {
//   id: number;
//   orderId: number;
//   address: string;
//   method: "standard" | "express";
//   cost: number;
// };

type AuthData = {
  id: number;
};
type SignInInfo = {
  orderId: number;
};
type AuthMeta = {
  address: string;
};
type CredentialsData = {
  method: "standard" | "express";
};
type UserTokenInfo = {
  cost: number;
};

export type ShippingDetails = AuthData & SignInInfo & AuthMeta & CredentialsData & UserTokenInfo ;

// ==============================
// 20. UserSettings type
// Foydalanuvchi sozlamalari
// ==============================
// type UserSettings = {
//   id: number;
//   username: string;
//   privacy: string;
//   theme: "light" | "dark";
//   notifications: boolean;
// };

type PasswordFields = {
  id: number;
};
type AuthState = {
  username: string;
};
type AccessInfo = {
  privacy: string;
};
type StatusInfo = {
  theme: "light" | "dark";
};
type StateData = {
  notifications: boolean;
};

export type UserSettings = PasswordFields & AuthState & AccessInfo & StatusInfo & StateData ;