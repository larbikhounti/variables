/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TokenWhereInput } from "./TokenWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TokenListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TokenWhereInput,
  })
  @ValidateNested()
  @Type(() => TokenWhereInput)
  @IsOptional()
  @Field(() => TokenWhereInput, {
    nullable: true,
  })
  every?: TokenWhereInput;

  @ApiProperty({
    required: false,
    type: () => TokenWhereInput,
  })
  @ValidateNested()
  @Type(() => TokenWhereInput)
  @IsOptional()
  @Field(() => TokenWhereInput, {
    nullable: true,
  })
  some?: TokenWhereInput;

  @ApiProperty({
    required: false,
    type: () => TokenWhereInput,
  })
  @ValidateNested()
  @Type(() => TokenWhereInput)
  @IsOptional()
  @Field(() => TokenWhereInput, {
    nullable: true,
  })
  none?: TokenWhereInput;
}
export { TokenListRelationFilter as TokenListRelationFilter };
