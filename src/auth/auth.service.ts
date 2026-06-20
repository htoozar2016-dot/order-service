import { Injectable } from "@nestjs/common";
import { LoginRequest, LoginResponse } from "./auth.types";

const DEFAULT_USERNAME = "posuser";
const DEFAULT_PASSWORD = "123456";

@Injectable()
export class AuthService {
  login(request: LoginRequest): LoginResponse | null {
    const username = process.env.POS_USERNAME || DEFAULT_USERNAME;
    const password = process.env.POS_PASSWORD || DEFAULT_PASSWORD;

    if (request.username !== username || request.password !== password) {
      return null;
    }

    return {
      username,
      displayName: "POS User",
    };
  }
}
