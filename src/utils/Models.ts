import mongoose from "mongoose";

// Define the schema interface
export interface SocialLinks {
  instagram?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}

export interface IDeveloper extends Document {
  name: string;
  image: string;
  role: string;
  social: SocialLinks;
  quote: string;
}

export interface IMarketPlace extends mongoose.Document {
  name: string;
  phoneNo: number;
  email: string;
  product: "Stationary" | "Vehicle";
  itemName: string;
  price: number;
  negotiable: string;
  image: string;
}
export interface ReviewDocument extends mongoose.Document {
  name: string;
  phoneno: number;
  email: string;
  category: string;
  message: string;
  about: string;
}
export interface PyqDocument extends mongoose.Document {
  department: string;
  subject: string;
  semester: Number | string;
  emailId: string;
  admissionNo: string;
  paperUrl: string;
}

const reviewSchema = new mongoose.Schema<ReviewDocument>(
  {
    name: { type: String, required: true },
    phoneno: { type: Number, required: true },
    email: { type: String, required: true },
    category: {
      type: String,
      enum: ["hostel", "student chapter"],
      required: true,
    },
    message: { type: String, required: true },
    about: { type: String, required: true },
  },
  { timestamps: true }
);

const Review =
  mongoose.models.Review ||
  mongoose.model<ReviewDocument>("Review", reviewSchema);
// Define the schema
const pyQSchema = new mongoose.Schema<PyqDocument>(
  {
    department: { type: String, required: true },
    subject: { type: String, required: true },
    emailId: { type: String, required: true },
    semester: { type: Number, required: true },
    admissionNo: { type: String, required: true },
    paperUrl: { type: String, required: true },
  },
  { timestamps: true }
);

const Papers =
  mongoose.models.Papers || mongoose.model<PyqDocument>("Papers", pyQSchema);
const marketPlaceSchema = new mongoose.Schema<IMarketPlace>({
  name: { type: String, required: true },
  phoneNo: { type: Number, required: true },
  email: { type: String, required: true },
  product: { type: String, enum: ["Stationary", "Vehicle"], required: true },
  itemName: { type: String, required: true },
  price: { type: Number, required: true },
  negotiable: { type: String, default: "No" },
  image: { type: String, required: true },
});

// Create the model
const ProductsModel =
  mongoose.models.ProductsModel ||
  mongoose.model<IMarketPlace>("ProductsModel", marketPlaceSchema);

export interface TestimonialData extends mongoose.Document {
  name: string;
  AdmissionNo: string;
  Email: string;
  suggestion: string;
  // replyMessege:string;
  // reply:string;
}

// interface TestimonialDocument extends TestimonialData, Document {}

const testimonialSchema = new mongoose.Schema<TestimonialData>(
  {
    name: { type: String, required: true },
    AdmissionNo: { type: String, required: true },
    Email: { type: String, required: true },
    suggestion: { type: String, required: true },
  },
  { timestamps: true }
);
const querySchema = new mongoose.Schema<TestimonialData>(
  {
    name: { type: String, required: true },
    AdmissionNo: { type: String, required: true },
    Email: { type: String, required: true },
    suggestion: { type: String, required: true },
  },
  { timestamps: true }
);
interface ReplyDocument extends Document {
  reply: string;
  // You can add more fields if needed
}

const replySchema = new mongoose.Schema<ReplyDocument>({
  reply: {
    type: String,
    required: true,
  },
});
const Reply =
  mongoose.models.Reply || mongoose.model<ReplyDocument>("Reply", replySchema);
// const replySchema=new mongoose.Schema<TestimonialData>( {
//     replyMessege: { type: String, required: true },
//     reply: { type: String, required: true },

//   },
//   { timestamps: true }
// );
const Query =
  mongoose.models.Query ||
  mongoose.model<TestimonialData>("Query", querySchema);
const Testimonial =
  mongoose.models.Testimonial ||
  mongoose.model<TestimonialData>("Testimonial", testimonialSchema);
const developerSchema = new mongoose.Schema<IDeveloper>({
  name: { type: String, required: true },
  image: { type: String, required: true },
  role: { type: String, required: true },
  social: {
    instagram: { type: String },
    github: { type: String },
    linkedin: { type: String },
    twitter: { type: String },
  },
  quote: { type: String, required: true },
});

const Developer =  mongoose.models.Query || mongoose.model<IDeveloper>('Developer', developerSchema);

// export default mongoose.model<ReplyDocument>("Reply", replySchema);

export { Review, ProductsModel, Testimonial, Papers, Query, Reply,Developer };
