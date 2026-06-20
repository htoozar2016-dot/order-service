import { Module } from "@nestjs/common";
import { AuthController } from "./auth/auth.controller";
import { AuthService } from "./auth/auth.service";
import { HealthController } from "./health.controller";
import { InventoryService } from "./inventory/inventory.service";
import { ProductsController } from "./inventory/products.controller";
import { OrdersController } from "./orders/orders.controller";
import { OrdersService } from "./orders/orders.service";
import { PaymentService } from "./payment/payment.service";

@Module({
  controllers: [AuthController, HealthController, OrdersController, ProductsController],
  providers: [AuthService, OrdersService, InventoryService, PaymentService],
})
export class AppModule {}
