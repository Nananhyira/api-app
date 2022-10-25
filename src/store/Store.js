import Authreducer from "../Reducers/Authreducer";
import userReducer from "../Reducers/userReducer";

import { legacy_createStore as createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 


const persistConfig = {
	key: "root",
	storage,
};

let reducers =combineReducers({ 
  Authreducer :Authreducer,
  userReducer:userReducer
});
const persistedReducer = persistReducer(persistConfig, reducers);

let Store = createStore(persistedReducer)
let persistor = persistStore(Store);

;
export {Store,persistor };
