export interface Car {
  id: string;
  title: string;
  make: string;
  model: string;
  year: number;
  price: number;
  city: string;
  mileage: number;
  color: string;
  transmission: string;
  condition: string;
  featured: boolean;
  sellerName: string;
  phone: string;
}

export const cars: Car[] = [
  {
    id: "1",
    title: "Toyota Corolla GLi 2021",
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    price: 4500000,
    city: "Karachi",
    mileage: 45000,
    color: "White",
    transmission: "Automatic",
    condition: "Used",
    featured: true,
    sellerName: "Ahmed Khan",
    phone: "0300-1234567"
  },
  {
    id: "2",
    title: "Honda Civic Oriel 2022",
    make: "Honda",
    model: "Civic",
    year: 2022,
    price: 6800000,
    city: "Lahore",
    mileage: 22000,
    color: "Black",
    transmission: "Automatic",
    condition: "Used",
    featured: true,
    sellerName: "Ali Raza",
    phone: "0321-9876543"
  },
  {
    id: "3",
    title: "Suzuki Alto VXR 2023",
    make: "Suzuki",
    model: "Alto",
    year: 2023,
    price: 2400000,
    city: "Islamabad",
    mileage: 12000,
    color: "Silver",
    transmission: "Manual",
    condition: "Used",
    featured: false,
    sellerName: "Zainab Ali",
    phone: "0333-5555555"
  },
  {
    id: "4",
    title: "KIA Sportage AWD 2021",
    make: "KIA",
    model: "Sportage",
    year: 2021,
    price: 7500000,
    city: "Rawalpindi",
    mileage: 38000,
    color: "Red",
    transmission: "Automatic",
    condition: "Used",
    featured: true,
    sellerName: "Usman Tariq",
    phone: "0345-1112223"
  },
  {
    id: "5",
    title: "Hyundai Tucson FWD 2022",
    make: "Hyundai",
    model: "Tucson",
    year: 2022,
    price: 7200000,
    city: "Peshawar",
    mileage: 18000,
    color: "White",
    transmission: "Automatic",
    condition: "Used",
    featured: false,
    sellerName: "Kamran Khan",
    phone: "0301-9998887"
  },
  {
    id: "6",
    title: "Toyota Yaris ATIV 2020",
    make: "Toyota",
    model: "Yaris",
    year: 2020,
    price: 3800000,
    city: "Quetta",
    mileage: 55000,
    color: "Grey",
    transmission: "Manual",
    condition: "Used",
    featured: false,
    sellerName: "Saeed Anwar",
    phone: "0312-3456789"
  },
  {
    id: "7",
    title: "Honda City 1.2 2023",
    make: "Honda",
    model: "City",
    year: 2023,
    price: 4800000,
    city: "Karachi",
    mileage: 5000,
    color: "Silver",
    transmission: "Automatic",
    condition: "Used",
    featured: true,
    sellerName: "Fahad Mustafa",
    phone: "0300-1122334"
  },
  {
    id: "8",
    title: "Suzuki Cultus VXL 2019",
    make: "Suzuki",
    model: "Cultus",
    year: 2019,
    price: 2600000,
    city: "Lahore",
    mileage: 65000,
    color: "White",
    transmission: "Manual",
    condition: "Used",
    featured: false,
    sellerName: "Ayesha Omer",
    phone: "0322-4445556"
  },
  {
    id: "9",
    title: "BMW 5 Series 530e 2020",
    make: "BMW",
    model: "5 Series",
    year: 2020,
    price: 18500000,
    city: "Islamabad",
    mileage: 30000,
    color: "Black",
    transmission: "Automatic",
    condition: "Used",
    featured: true,
    sellerName: "Hassan Malik",
    phone: "0333-7778889"
  },
  {
    id: "10",
    title: "Mercedes Benz C200 2018",
    make: "Mercedes",
    model: "C Class",
    year: 2018,
    price: 15000000,
    city: "Karachi",
    mileage: 48000,
    color: "White",
    transmission: "Automatic",
    condition: "Used",
    featured: false,
    sellerName: "Bilal Qureshi",
    phone: "0300-5556667"
  },
  {
    id: "11",
    title: "Toyota Fortuner Legender 2023",
    make: "Toyota",
    model: "Fortuner",
    year: 2023,
    price: 19500000,
    city: "Lahore",
    mileage: 8000,
    color: "White",
    transmission: "Automatic",
    condition: "Used",
    featured: true,
    sellerName: "Imran Abbas",
    phone: "0321-2223334"
  },
  {
    id: "12",
    title: "Audi e-tron 50 2022",
    make: "Audi",
    model: "e-tron",
    year: 2022,
    price: 22000000,
    city: "Islamabad",
    mileage: 15000,
    color: "Blue",
    transmission: "Automatic",
    condition: "Used",
    featured: true,
    sellerName: "Shafiq Ahmed",
    phone: "0345-9990001"
  }
];
