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
import { VariableWhereUniqueInput } from "./VariableWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { VariableUpdateInput } from "./VariableUpdateInput";

@ArgsType()
class UpdateVariableArgs {
  @ApiProperty({
    required: true,
    type: () => VariableWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VariableWhereUniqueInput)
  @Field(() => VariableWhereUniqueInput, { nullable: false })
  where!: VariableWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => VariableUpdateInput,
  })
  @ValidateNested()
  @Type(() => VariableUpdateInput)
  @Field(() => VariableUpdateInput, { nullable: false })
  data!: VariableUpdateInput;
}

export { UpdateVariableArgs as UpdateVariableArgs };
