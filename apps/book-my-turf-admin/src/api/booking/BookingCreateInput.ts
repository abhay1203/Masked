import { TurfWhereUniqueInput } from "../turf/TurfWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingCreateInput = {
  confirmed?: boolean | null;
  date?: Date | null;
  time?: string | null;
  turf?: TurfWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
