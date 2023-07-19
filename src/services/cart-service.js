import { db } from "../../config/firebase";
import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore";

export const getAllCart = async () => {
  const collectionRef = collection(db, "cart");
  const querySnapshot = await getDocs(collectionRef);
  const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}));
  return data.filter((item) => !("first" in item));
}

export const addOneToCart = async (game) => {
  const collectionRef = collection(db, "cart");
  const { id, quantity, ...data } = game;

  if(quantity > 0) {

    const docRef = doc(db, "cart", id)
    let cartItem = (await getDoc(docRef)).data();

    cartItem ? (cartItem.quantity += 1) : (cartItem = { ...data, quantity: 1 });

    await setDoc(doc(collectionRef), cartItem)

  } else {
    console.log("Not available !")
  }
}

export const removeFromCart = async (id) => {
  const docRef = doc(db, "cart", id)
  await deleteDoc(docRef);
}