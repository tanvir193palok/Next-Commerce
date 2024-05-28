import { auth } from "@/auth";

export const replaceMongoIdInArray = (array) => {
  const mappedArray = array
    .map((item) => {
      return {
        id: item._id.toString(),
        ...item,
      };
    })
    .map(({ _id, ...rest }) => rest);

  return mappedArray;
};

export const replaceMongoIdInObject = (obj) => {
  const { _id, ...updatedObj } = { ...obj, id: obj._id.toString() };
  return updatedObj;
};

//Calculation of discount price
export async function getDiscountPrice(price, discountPercentage) {
  const discountAmount = (price * discountPercentage) / 100;
  const discountedPrice = price - discountAmount;

  return discountedPrice.toFixed(2);
}

//function to handle string undefined in category param
export const getRefineCategory = (category) => {
  const decodedCategory = decodeURI(category);

  if (decodedCategory === "undefined") {
    return "";
  }
  return decodedCategory;
};

export const getUserEmail = async () => {
  const session = await auth();
  return session?.user?.email;
};
