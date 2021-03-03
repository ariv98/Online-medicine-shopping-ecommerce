import { ADD_TO_CART, CLEAR_CART, REMOVE_ITEM } from "../actions/actionTypes";
import { LOGIN, LOGOUT } from "../../LoginRedux/Action/actionTypes";

const initState = {
  addedMedicines: [],
  medicineIds: [],
  totalItems: 0,
  totalPrice: 0,

  loggedUser: {},
};

//let addedItem = []
const cartReducer = (state = initState, action) => {
  //Inside MEDICINE COMPONENT
  if (action.type === ADD_TO_CART) {
    console.log("ELEMENTS in statemedicine : ", state.addedMedicines);

    let addmed = action.medicine;
    let medid = action.medicine.medicineId;
    let itemIDtoObj = '{"medicineId":' + medid + "}";
    let jsonObj = JSON.parse(itemIDtoObj);
    console.log(jsonObj);
    let medprice = action.medicine.medicinePrice;

    return {
      ...state,
      addedMedicines: [...state.addedMedicines, addmed],
      medicineIds: [...state.medicineIds, jsonObj],
      totalItems: state.totalItems + 1,
      totalPrice: state.totalPrice + medprice,
    };
  } else if (action.type === CLEAR_CART) {
    console.log("CLEARING ALL ITEMS");
    return {
      ...state,
      addedMedicines: [],
      medicineIds: [],
      totalItems: 0,
      totalPrice: 0,
    };
  } else if (action.type === REMOVE_ITEM) {
    let givenMedicine = action.medicine;
    let givenMedicineId = action.medicine.medicineId;

    let restItems = [];
    let newprice = 0;
    let cartitems = state.addedMedicines;
    for (var i = 0; i < cartitems.length; i++) {
      console.log(cartitems[i].medicineId);
      if (cartitems[i].medicineId == givenMedicineId) {
        console.log("BLACK SHEEP!!!!!!!WASEEE WASEEE");
        //restItems = [...restItems]
      } else {
        console.log("VELIYA PODA");
        restItems = [...restItems, cartitems[i]];
        newprice = newprice + cartitems[i].medicinePrice;
      }
    }
    console.log(restItems);
    return {
      ...state,
      addedMedicines: restItems,
      totalPrice: newprice,
      totalItems: restItems.length,
    };
  } else if (action.type === LOGIN) {
    let userObj = action.user;
    return {
      ...state,
      loggedUser: userObj,
    };
  } else if (action.type === LOGOUT) {
    console.log("LogOut");
    return {
      ...state,
      loggedUser: {},
    };
  } else {
    return {
      ...state,
      loggedUser: {
        userName: "first",
      },
    };
  }
};
export default cartReducer;
