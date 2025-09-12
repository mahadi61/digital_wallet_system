import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { UserRoute } from "../modules/user/user.route";

export const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoute,
  },
  // {
  //   path: "/auth",
  //   route: AuthRoutes,
  // },
  // {
  //   path: "/wallet",
  //   router: walletRoutes,
  // },
  // // {
  // //     path: "/transactions",
  // //     router: transactionRoute
  // // },
  // {
  //   path: "/agent",
  //   router: agentRoutes,
  // },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
