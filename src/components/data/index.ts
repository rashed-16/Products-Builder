import { v4 as uuid } from "uuid";
import type { ICategory, IFormInput, IProduct } from "../../interfaces/index";

export const productList: IProduct[] = [
  {
    id: uuid(),
    title: "Smart Watch",
    description:
      "Modern smart watch with fitness tracking, notifications, and sleek design suitable for everyday use.",
    imageURL:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60",
    price: "320000",
    colors: ["#000000", "#1e3a8a", "#9ca3af"],
    category: {
      name: "Wearables",
      imageURL:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60",
    },
  },
  {
    id: uuid(),
    title: "Gaming Mouse",
    description:
      "High precision gaming mouse with RGB lighting, ergonomic design, and adjustable DPI settings.",
    imageURL:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60",
    price: "180000",
    colors: ["#111827", "#22c55e", "#ef4444"],
    category: {
      name: "Accessories",
      imageURL:
        "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60",
    },
  },
  {
    id: uuid(),
    title: "Backpack",
    description:
      "Durable backpack perfect for travel, work, or university with multiple compartments.",
    imageURL:
      "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?w=500&auto=format&fit=crop&q=60",
    price: "210000",
    colors: ["#374151", "#0ea5e9", "#f97316"],
    category: {
      name: "Bags",
      imageURL:
        "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?w=500&auto=format&fit=crop&q=60",
    },
  },
  {
    id: uuid(),
    title: "Bluetooth Speaker",
    description:
      "Portable wireless speaker with deep bass, long battery life, and waterproof design.",
    imageURL:
      "https://i.pinimg.com/1200x/ba/f3/f1/baf3f164e6fa3a4903a22644d308deb9.jpg",
    price: "270000",
    colors: ["#020617", "#6366f1", "#eab308"],
    category: {
      name: "Audio",
      imageURL:
        "https://i.pinimg.com/1200x/ba/f3/f1/baf3f164e6fa3a4903a22644d308deb9.jpg",
    },
  },
  {
    id: uuid(),
    title: "iPhone 17 Pro",
    description:
      "Latest Apple flagship smartphone with advanced camera system, premium design and powerful performance.",
    imageURL:
      "https://i.pinimg.com/736x/fe/5f/1d/fe5f1d2100b3d1f8d34d6166214f3f91.jpg",
    price: "120000",
    colors: ["#000000", "#C0C0C0", "#1E90FF"],
    category: {
      name: "Smartphones",
      imageURL:
        "https://i.pinimg.com/1200x/19/28/7c/19287c8799f8c0ce38103cfe7a240bea.jpg",
    },
  },
  {
    id: uuid(),
    title: "Sony Alpha A7 IV Camera",
    description:
      "Professional Sony mirrorless camera with 33MP full-frame sensor, advanced autofocus, 4K video recording, and excellent low-light performance. Perfect for photography and filmmaking.",
    imageURL:
      "https://i.pinimg.com/736x/b2/81/cf/b281cf941589bdd8dc8daa5b03f224d9.jpg",
    price: "125000",
    colors: ["#000000", "#2C2C2C", "#6B7280"],
    category: {
      name: "Cameras",
      imageURL:
        "https://i.pinimg.com/736x/b2/81/cf/b281cf941589bdd8dc8daa5b03f224d9.jpg",
    },
  },
  {
    id: uuid(),
    title: "Sunglasses",
    description:
      "Stylish sunglasses with UV protection and lightweight frame for comfortable wear.",
    imageURL:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=60",
    price: "150000",
    colors: ["#000000", "#78350f", "#64748b"],
    category: {
      name: "Fashion",
      imageURL:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=60",
    },
  },
  {
    id: uuid(),
    title: "Desk Lamp",
    description:
      "LED desk lamp with adjustable brightness levels, ideal for study or office work.",
    imageURL:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop&q=60",
    price: "130000",
    colors: ["#ffffff", "#94a3b8", "#0f172a"],
    category: {
      name: "Home",
      imageURL:
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop&q=60",
    },
  },
];

export const formInputsList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product Description",
    type: "text",
  },
  {
    id: "image",
    name: "imageURL",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "text",
  },
];

export const colors: string[] = [
  "#6C4AB6",
  "#FF0032",
  "#2563eb",
  "#FF6E31",
  "#D268F2",
  "#1563e5",
  "#F26E71",
  "#8F2032",
  "#C5633b",
  "#FD6231",
  "#FF2032",
  "#2BA3eb",
  "#AB6E31",
  "#FF6032",
  "#AD6231",
  "#FFC032",
  "#256FEB",
  "#2F6E31",
];

export const categories: ICategory[] = [
  {
    id: uuid(),
    name: "Headset",
    imageURL:
      "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: uuid(),
    name: "Shoes",
    imageURL:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: uuid(),
    name: "PC Desktop",
    imageURL:
      "https://images.unsplash.com/file-1707883121023-8e3502977149image?w=416&dpr=2&auto=format&fit=crop&q=60",
  },
  {
    id: uuid(),
    name: "Creams",
    imageURL:
      "https://images.unsplash.com/photo-1615396899839-c99c121888b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: uuid(),
    name: "Makeup",
    imageURL:
      "https://plus.unsplash.com/premium_photo-1677541205130-51e60e937318?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: uuid(),
    name: "Headset",
    imageURL:
      "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: uuid(),
    name: "Shoes",
    imageURL:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: uuid(),
    name: "PC Desktop",
    imageURL:
      "https://images.unsplash.com/file-1707883121023-8e3502977149image?w=416&dpr=2&auto=format&fit=crop&q=60",
  },
  {
    id: uuid(),
    name: "Creams",
    imageURL:
      "https://images.unsplash.com/photo-1615396899839-c99c121888b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: uuid(),
    name: "Makeup",
    imageURL:
      "https://plus.unsplash.com/premium_photo-1677541205130-51e60e937318?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
  },
];