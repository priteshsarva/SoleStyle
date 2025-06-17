export const brands = [
  {
    id: 1,
    name: "Nike",
    logo: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Just Do It"
  },
  {
    id: 2,
    name: "Adidas",
    logo: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Impossible is Nothing"
  },
  {
    id: 3,
    name: "Jordan",
    logo: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Fly Like Mike"
  },
  {
    id: 4,
    name: "Puma",
    logo: "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Forever Faster"
  },
  {
    id: 5,
    name: "New Balance",
    logo: "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Fearlessly Independent"
  },
  {
    id: 6,
    name: "Converse",
    logo: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "All Star"
  }
];

export const categories = [
  {
    id: 1,
    name: "Men",
    image: "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 125
  },
  {
    id: 2,
    name: "Women",
    image: "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 98
  },
  {
    id: 3,
    name: "Running",
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 87
  },
  {
    id: 4,
    name: "Lifestyle",
    image: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 156
  },
  {
    id: 5,
    name: "Limited",
    image: "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 23
  }
];

export const products = [
  {
    id: 1,
    name: "Air Max Revolution",
    brand: "Nike",
    price: 159.99,
    originalPrice: 199.99,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    category: "Running",
    description: "Experience ultimate comfort and style with the Air Max Revolution. Featuring innovative cushioning technology and premium materials for all-day wear.",
    features: ["Air Max cushioning", "Breathable mesh upper", "Durable rubber outsole", "Lightweight design"],
    isBestSeller: true,
    isNew: false
  },
  {
    id: 2,
    name: "Ultra Boost Elite",
    brand: "Adidas",
    price: 189.99,
    image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    sizes: [6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5],
    category: "Running",
    description: "Push your limits with Ultra Boost Elite. Advanced energy return technology meets premium comfort in this performance-driven design.",
    features: ["Boost midsole technology", "Primeknit upper", "Continental rubber outsole", "Energy return"],
    isBestSeller: true,
    isNew: true
  },
  {
    id: 3,
    name: "Retro High Top",
    brand: "Jordan",
    price: 175.00,
    image: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12, 13],
    category: "Lifestyle",
    description: "Classic meets contemporary in this iconic high-top silhouette. Premium leather construction with timeless Jordan styling.",
    features: ["Premium leather upper", "Air cushioning", "Classic high-top design", "Iconic Jordan branding"],
    isBestSeller: false,
    isNew: false
  },
  {
    id: 4,
    name: "Speed Runner Pro",
    brand: "Puma",
    price: 129.99,
    originalPrice: 169.99,
    image: "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
    category: "Running",
    description: "Built for speed and engineered for performance. The Speed Runner Pro delivers exceptional responsiveness for serious athletes.",
    features: ["Lightweight construction", "Responsive foam midsole", "Engineered mesh upper", "High-traction outsole"],
    isBestSeller: true,
    isNew: false
  },
  {
    id: 5,
    name: "Classic 574",
    brand: "New Balance",
    price: 89.99,
    image: "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    sizes: [6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    category: "Lifestyle",
    description: "The timeless 574 silhouette combines heritage craftsmanship with modern comfort. A versatile classic for everyday wear.",
    features: ["Suede and mesh upper", "ENCAP midsole technology", "Classic silhouette", "Versatile styling"],
    isBestSeller: false,
    isNew: false
  },
  {
    id: 6,
    name: "All Star High",
    brand: "Converse",
    price: 65.00,
    image: "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    category: "Lifestyle",
    description: "The original basketball shoe that started it all. Classic canvas construction with the iconic All Star design.",
    features: ["Canvas upper", "Vulcanized rubber sole", "Classic lace-up design", "Iconic All Star logo"],
    isBestSeller: false,
    isNew: false
  },
  {
    id: 7,
    name: "Future Rider",
    brand: "Puma",
    price: 95.00,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
    category: "Lifestyle",
    description: "Retro-futuristic design meets modern comfort. The Future Rider brings bold styling to everyday adventures.",
    features: ["Mixed material upper", "Comfortable midsole", "Retro-inspired design", "Bold colorways"],
    isBestSeller: false,
    isNew: true
  },
  {
    id: 8,
    name: "React Infinity",
    brand: "Nike",
    price: 159.99,
    image: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    sizes: [6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5],
    category: "Running",
    description: "Designed to help reduce injury and keep you running. React Infinity offers maximum comfort and support.",
    features: ["Nike React foam", "Flyknit upper", "Injury reduction design", "Maximum comfort"],
    isBestSeller: true,
    isNew: true
  }
];

export const bestSellers = products.filter(product => product.isBestSeller);