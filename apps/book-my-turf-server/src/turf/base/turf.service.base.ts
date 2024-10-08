/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Turf as PrismaTurf,
  Booking as PrismaBooking,
} from "@prisma/client";

export class TurfServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.TurfCountArgs, "select">): Promise<number> {
    return this.prisma.turf.count(args);
  }

  async turfs(args: Prisma.TurfFindManyArgs): Promise<PrismaTurf[]> {
    return this.prisma.turf.findMany(args);
  }
  async turf(args: Prisma.TurfFindUniqueArgs): Promise<PrismaTurf | null> {
    return this.prisma.turf.findUnique(args);
  }
  async createTurf(args: Prisma.TurfCreateArgs): Promise<PrismaTurf> {
    return this.prisma.turf.create(args);
  }
  async updateTurf(args: Prisma.TurfUpdateArgs): Promise<PrismaTurf> {
    return this.prisma.turf.update(args);
  }
  async deleteTurf(args: Prisma.TurfDeleteArgs): Promise<PrismaTurf> {
    return this.prisma.turf.delete(args);
  }

  async findBookings(
    parentId: string,
    args: Prisma.BookingFindManyArgs
  ): Promise<PrismaBooking[]> {
    return this.prisma.turf
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .bookings(args);
  }
}
