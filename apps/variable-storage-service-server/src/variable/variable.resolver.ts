import * as graphql from "@nestjs/graphql";
import { VariableResolverBase } from "./base/variable.resolver.base";
import { Variable } from "./base/Variable";
import { VariableService } from "./variable.service";

@graphql.Resolver(() => Variable)
export class VariableResolver extends VariableResolverBase {
  constructor(protected readonly service: VariableService) {
    super(service);
  }
}
