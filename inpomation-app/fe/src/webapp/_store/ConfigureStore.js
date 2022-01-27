import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "webapp/_store/index";
import RootSaga from "webapp/sagas/RootSaga";
import { composeWithDevTools } from "redux-devtools-extension";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.DONE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));

  const store = createStore(rootReducer, enhancer);
  store.sagaTask = sagaMiddleware.run(RootSaga);
  return store;
};

export default configureStore;
