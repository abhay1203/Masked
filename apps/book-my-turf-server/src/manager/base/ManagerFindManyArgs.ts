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
import { ManagerWhereInput } from "./ManagerWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ManagerOrderByInput } from "./ManagerOrderByInput";

@ArgsType()
class ManagerFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ManagerWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ManagerWhereInput, { nullable: true })
  @Type(() => ManagerWhereInput)
  where?: ManagerWhereInput;

  @ApiProperty({
    required: false,
    type: [ManagerOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ManagerOrderByInput], { nullable: true })
  @Type(() => ManagerOrderByInput)
  orderBy?: Array<ManagerOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ManagerFindManyArgs as ManagerFindManyArgs };
