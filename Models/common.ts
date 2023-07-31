type Args = {
  start?: string | undefined | null;
  end?: string | undefined | null;
  date?: string | undefined | null;
  startTime?: number | undefined | null;
  endTime?: number | undefined | null;
  startName?:string | undefined | null;
  endName?:string | undefined | null;
  price?: number | undefined | null;
  id?: string | undefined | null;
  train?: string | undefined | null;
  full_name:string | undefined;
  mobile:string | undefined;
  address:string| undefined;
  bookingStatus?: {"availableSeats": number, "bookingSeats": number, "numberOfSeats": number}
};

export type nav = {
  navigate: (value: string, args?: Args) => void;
};
