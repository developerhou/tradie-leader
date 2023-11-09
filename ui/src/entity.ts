export interface Job {
  id: number;
  suburbId: number;
  categoryId: number;
  status: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  price: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  suburb: Suburb;
  category: Category;
}

interface Suburb {
  id: number;
  name: string;
  postcode: string;
}

interface Category {
  id: number;
  name: string;
  parentCategoryId: number;
}
