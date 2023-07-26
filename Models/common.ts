type Args = {
  start?: string | undefined | null;
  end?: string | undefined | null;
  date?: string | undefined | null;
  startTime?: number | undefined | null;
  endTime?: number | undefined | null;
  price?: number | undefined | null;
  id?: string | undefined | null;
  train?: string | undefined | null;
  bookingStatus?: {"availableSeats": number, "bookingSeats": number, "numberOfSeats": number}
};

export type nav = {
  navigate: (value: string, args?: Args) => void;
};
