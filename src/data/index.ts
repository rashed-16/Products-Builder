import {v4 as uuid } from 'uuid';
import type {IFormInput, IProduct,ICategory} from "../interfaces"

export const productInformation: IProduct[] = [
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

export const formInputList : IFormInput[]=[
    {
        id:"title",
        name:"title",
        label:"Product Title",
        type:"text",
    },
    {
        id:"description",
        name:"description",
        label:"Product description",
        type:"text",
    },
    {
        id:"image",
        name:"imageURL",
        label:"Product Image URL",
        type:"text",
    },
    {
        id:"price",
        name:"price",
        label:"Product Price",
        type:"text",
    },
]
export const colors: string[] = [
  "#a855f7",
  "#2563eb",
  "#84D2C5",
  "#13005A",
  "#A31ACB",
  "#FF6F31",
  "#3C2A21",
  "#6C4AB6",
  "#CB1C8D",
  "#000000",
  "#645CBB",
  "#1F8A70",
  "#820000",
  "#FF0032",
];
export const categories: ICategory[] = [
    {
        id: uuid(),
        name: 'NoteBooks',
        imageURL : 'https://images.pexels.com/photos/843227/pexels-photo-843227.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: uuid(),
        name: 'To-Do-List',
        imageURL: 'https://images.pexels.com/photos/6192131/pexels-photo-6192131.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: uuid(),
        name: 'pens',
        imageURL: 'https://images.pexels.com/photos/867482/pexels-photo-867482.jpeg?auto=compress&cs=tinysrgb&w=600',
    }
];



