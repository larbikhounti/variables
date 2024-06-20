import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VariableService } from "./variable.service";
import { VariableControllerBase } from "./base/variable.controller.base";

@swagger.ApiTags("variables")
@common.Controller("variables")
export class VariableController extends VariableControllerBase {
  constructor(protected readonly service: VariableService) {
    super(service);
  }
}
