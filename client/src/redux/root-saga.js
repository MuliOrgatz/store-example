import { all, call } from "redux-saga/effects";

import { shopSagas } from "./shop/shop.saga";
import { userSaga } from "./user/user.saga";
import { cartSags } from "./cart/cart.saga";

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSaga), call(cartSags)]);
}
