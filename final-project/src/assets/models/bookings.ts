export type Booking = {
  bookID?: number | null;
  atWhatTime: string;
  startLocation: string;
  endLocation: string;
  typeOfCab: string;
  intialFare: number;
  farePerKm: number;
  totalFare: number
  userID: number;
};

export type typeOfCabs = "Micro" | "Mini" | "Prime";
