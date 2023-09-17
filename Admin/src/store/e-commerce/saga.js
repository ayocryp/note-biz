import { call, put, takeEvery } from "redux-saga/effects";

// Ecommerce Redux States
import {
  GET_CART_DATA,
  GET_CUSTOMERS,
  GET_ORDERS,
  GET_PRODUCT_DETAIL,
  GET_PRODUCTS,
  GET_SHOPS,
  ADD_NEW_ORDER,
  DELETE_ORDER,
  UPDATE_ORDER,
  GET_PLANS,
  UPDATE_PLAN,
  DELETE_PLAN,
  GET_PLAN_DETAIL,
  ADD_NEW_CUSTOMER,
  DELETE_CUSTOMER,
  UPDATE_CUSTOMER,
  GET_PRODUCT_COMMENTS,
  ON_LIKE_COMMENT,
  ON_LIKE_REPLY,
  ON_ADD_REPLY,
  ON_ADD_COMMENT,
} from "./actionTypes";
import {
  getCartDataFail,
  getCartDataSuccess,
  getCustomersFail,
  getCustomersSuccess,
  getOrdersFail,
  getOrdersSuccess,
  getProductDetailFail,
  getProductDetailSuccess,
  getProductsFail,
  getProductsSuccess,
  getShopsFail,
  getShopsSuccess,
  addOrderFail,
  addOrderSuccess,
  updateOrderSuccess,
  updateOrderFail,
  deleteOrderSuccess,
  deleteOrderFail,
  getPlansFail,
  getPlansSuccess,
  updatePlanSuccess,
  updatePlanFail,
  deletePlanSuccess,
  deletePlanFail,
  addCustomerFail,
  addCustomerSuccess,
  updateCustomerSuccess,
  updateCustomerFail,
  deleteCustomerSuccess,
  deleteCustomerFail,
  getProductCommentsSuccess,
  getProductCommentsFail,
  onLikeCommentSuccess,
  onLikeCommentFail,
  onLikeReplySuccess,
  onLikeReplyFail,
  onAddReplySuccess,
  onAddReplyFail,
  onAddCommentSuccess,
  onAddCommentFail,
  getPlans,
  getPlanDetail,
  getPlanDetailSuccess,
  getPlanDetailFail,
  deletePlan,
  updatePlan,
} from "./actions";

//Include Both Helper File with needed methods
import {
  getCartData,
  getCustomers,
  getOrders,
  getProducts,
  getShops,
  getProductDetail,
  addNewOrder,
  updateOrder,
  deleteOrder,
  getPlansApi,
  updatePlanApi,
  deletePlanApi,
  getPlanDetailApi,
  addNewCustomer,
  updateCustomer,
  deleteCustomer,
  getProductComents as getProductComentsApi,
  onLikeComment as onLikeCommentApi,
  onLikeReply as onLikeReplyApi,
  onAddReply as onAddReplyApi,
  onAddComment as onAddCommentApi,
} from "../../helpers/fakebackend_helper";

// toast
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function* fetchProducts() {
  try {
    const response = yield call(getProducts);
    yield put(getProductsSuccess(response));
  } catch (error) {
    yield put(getProductsFail(error));
  }
}

function* fetchProductDetail({ productId }) {
  try {
    const response = yield call(getProductDetail, productId);
    yield put(getProductDetailSuccess(response));
  } catch (error) {
    yield put(getProductDetailFail(error));
  }
}

function* fetchOrders() {
  try {
    const response = yield call(getOrders);
    yield put(getOrdersSuccess(response));
  
  } catch (error) {
    yield put(getOrdersFail(error));
  }
}

function* fetchCartData() {
  try {
    const response = yield call(getCartData);
    yield put(getCartDataSuccess(response));
  } catch (error) {
    yield put(getCartDataFail(error));
  }
}

function* fetchCustomers() {
  try {
    const response = yield call(getCustomers);
    yield put(getCustomersSuccess(response));
  } catch (error) {
    yield put(getCustomersFail(error));
  }
}

function* onUpdateCustomer({ payload: customer }) {
  try {
    const response = yield call(updateCustomer, customer);
    yield put(updateCustomerSuccess(response));
    toast.success("Customer Update Successfully", { autoClose: 2000 });
  } catch (error) {
    yield put(updateCustomerFail(error));
    toast.error("Customer Update Failed", { autoClose: 2000 });
  }
}

function* onDeleteCustomer({ payload: customer }) {
  try {
    const response = yield call(deleteCustomer, customer);
    yield put(deleteCustomerSuccess(response));
    toast.success("Customer Delete Successfully", { autoClose: 2000 });
  } catch (error) {
    yield put(deleteCustomerFail(error));
    toast.error("Customer Delete Failed", { autoClose: 2000 });
  }
}

function* onAddNewCustomer({ payload: customer }) {
  try {
    const response = yield call(addNewCustomer, customer);
    yield put(addCustomerSuccess(response));
    toast.success("Customer Added Successfully", { autoClose: 2000 });
  } catch (error) {
    yield put(addCustomerFail(error));
    toast.error("Customer Added Failed", { autoClose: 2000 });
  }
}

function* fetchShops() {
  try {
    const response = yield call(getShops);
    yield put(getShopsSuccess(response));
  } catch (error) {
    yield put(getShopsFail(error));
  }
}

function* onUpdateOrder({ payload: order }) {
  try {
    const response = yield call(updateOrder, order);
    yield put(updateOrderSuccess(response));
    toast.success("Order Update Successfully", { autoClose: 2000 });
  } catch (error) {
    yield put(updateOrderFail(error));
    toast.error("Order Update Failed", { autoClose: 2000 });
  }
}

function* onDeleteOrder({ payload: order }) {
  try {
    const response = yield call(deleteOrder, order);
    yield put(deleteOrderSuccess(response));
    toast.success("Order Delete Successfully", { autoClose: 2000 });
  } catch (error) {
    yield put(deleteOrderFail(error));
    toast.error("Order Delete Failed", { autoClose: 2000 });
  }
}

function* onAddNewOrder({ payload: order }) {
  try {
    const response = yield call(addNewOrder, order);
    yield put(addOrderSuccess(response));
    toast.success("Order Added Successfully", { autoClose: 2000 });
  } catch (error) {
    yield put(addOrderFail(error));
    toast.error("Order Added Failed", { autoClose: 2000 });
  }
}

function* fetchPlans() {
  try {
    const response = yield call(getPlansApi);
    yield put(getPlansSuccess(response.data));
    console.log('API Response:', response);
    console.log('Data from Response:', response.data); 
  } catch (error) {
    yield put(getPlansFail(error));
    console.error('API Error:', error); 
  }
}

function* fetchPlanDetail({ planId }) {
  try {
    const response = yield call(getPlanDetailApi, planId);
    yield put(getPlanDetailSuccess(response));
  } catch (error) {
    yield put(getPlanDetailFail(error));
    console.error('API Error:', error); 
  }
}

function* onUpdatePlan({ payload: plan }) {
  try {
    const response = yield call(updatePlanApi, plan);
    yield put(updatePlanSuccess(response));
    toast.success("Plan Updated Successfully", { autoClose: 2000 });
  } catch (error) {
    yield put(updatePlanFail(error));
    toast.error("plan Update Failed", { autoClose: 2000 });
  }
}

function* onDeletePlan({ payload: plan }) {
  try {
    const response = yield call(deletePlanApi, plan);
    yield put(deletePlanSuccess(response));
    toast.success("Plan Delete Successfully", { autoClose: 2000 });
  } catch (error) {
    yield put(deletePlanFail(error));
    toast.error("Plan Delete Failed", { autoClose: 2000 });
  }
}

function* getProductComents() {
  try {
    // todo - add product Id to the payload and api
    const response = yield call(getProductComentsApi);
    yield put(getProductCommentsSuccess(response));
  } catch (error) {
    yield put(getProductCommentsFail(error));
  }
}

function* onLikeComment({ payload: { commentId, productId } }) {
  try {
    // todo - add product Id to the payload and api
    const response = yield call(onLikeCommentApi, commentId, productId);
    yield put(onLikeCommentSuccess(response));
  } catch (error) {
    yield put(onLikeCommentFail(error));
  }
}

function* onLikeReply({ payload: { commentId, productId, replyId } }) {
  try {
    // todo - add product Id to the payload and api
    const response = yield call(onLikeReplyApi, commentId, productId, replyId);
    yield put(onLikeReplySuccess(response));
  } catch (error) {
    yield put(onLikeReplyFail(error));
  }
}

function* onAddReply({ payload: { commentId, productId, replyText } }) {
  try {
    const response = yield call(onAddReplyApi, commentId, productId, replyText);
    yield put(onAddReplySuccess(response));
  } catch (error) {
    yield put(onAddReplyFail(error));
  }
}

function* onAddComment({ payload: { productId, commentText } }) {
  try {
    const response = yield call(onAddCommentApi, productId, commentText);
    yield put(onAddCommentSuccess(response));
  } catch (error) {
    yield put(onAddCommentFail(error));
  }
}

function* ecommerceSaga() {
  yield takeEvery(GET_PRODUCTS, fetchProducts);
  yield takeEvery(GET_PRODUCT_DETAIL, fetchProductDetail);
  yield takeEvery(GET_ORDERS, fetchOrders);
  yield takeEvery(GET_CART_DATA, fetchCartData);
  yield takeEvery(GET_CUSTOMERS, fetchCustomers);
  yield takeEvery(ADD_NEW_CUSTOMER, onAddNewCustomer);
  yield takeEvery(UPDATE_CUSTOMER, onUpdateCustomer);
  yield takeEvery(DELETE_CUSTOMER, onDeleteCustomer);
  yield takeEvery(GET_SHOPS, fetchShops);
  yield takeEvery(ADD_NEW_ORDER, onAddNewOrder);
  yield takeEvery(UPDATE_ORDER, onUpdateOrder);
  yield takeEvery(DELETE_ORDER, onDeleteOrder);
  yield takeEvery(GET_PLANS, fetchPlans);
  yield takeEvery(GET_PLAN_DETAIL, fetchPlanDetail);
  yield takeEvery(UPDATE_PLAN, onUpdatePlan);
  yield takeEvery(DELETE_PLAN, onDeletePlan);
  yield takeEvery(GET_PRODUCT_COMMENTS, getProductComents);
  yield takeEvery(ON_LIKE_COMMENT, onLikeComment);
  yield takeEvery(ON_LIKE_REPLY, onLikeReply);
  yield takeEvery(ON_ADD_REPLY, onAddReply);
  yield takeEvery(ON_ADD_COMMENT, onAddComment);
}

export default ecommerceSaga;
