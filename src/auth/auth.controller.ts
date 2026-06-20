import { Body, Controller, HttpCode, Post, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginRequest } from "./auth.types";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  @HttpCode(200)
  login(@Body() body: LoginRequest) {
    const user = this.authService.login(body);

    if (!user) {
      throw new UnauthorizedException("Invalid username or password");
    }

    return user;
  }
}
