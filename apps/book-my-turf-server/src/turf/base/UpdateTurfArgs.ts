/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TurfWhereUniqueInput } from "./TurfWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TurfUpdateInput } from "./TurfUpdateInput";

@ArgsType()
class UpdateTurfArgs {
  @ApiProperty({
    required: true,
    type: () => TurfWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TurfWhereUniqueInput)
  @Field(() => TurfWhereUniqueInput, { nullable: false })
  where!: TurfWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TurfUpdateInput,
  })
  @ValidateNested()
  @Type(() => TurfUpdateInput)
  @Field(() => TurfUpdateInput, { nullable: false })
  data!: TurfUpdateInput;
}

export { UpdateTurfArgs as UpdateTurfArgs };
