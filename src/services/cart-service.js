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
  const { id, ...data } = game;

  const available = await reduceQuantity(id);

  if(available) {

    const docRef = doc(collectionRef, id)
    let cartItem = (await getDoc(docRef)).data();

    cartItem ? (cartItem.quantity += 1) : (cartItem = { ...data, quantity: 1});

    await setDoc(doc(collectionRef, id), cartItem)

  } else {
    console.log("Not available !")
  }
}

export const removeFromCart = async (gameId, amount) => {
  const collectionRef = collection(db, "cart");
  const docRef = doc(collectionRef, gameId)
  const item = (await getDoc(docRef)).data();

  if(item.quantity > 0) {
    item.quantity -= amount;
    await setDoc(docRef, { quantity: item.quantity }, { merge: true });
    await incrementQuantity(gameId, amount);
  }

  if(item.quantity === 0) {
    await deleteFromCart(gameId)
  }
}

export const reduceQuantity = async (gameId) => {
  const collectionRef = collection(db, "games");
  const docRef = doc(collectionRef, gameId)
  const item = (await getDoc(docRef)).data();
  if(item.quantity > 0) {
    item.quantity -= 1
    await setDoc(docRef, { quantity: item.quantity }, { merge: true });
    return true;
  } else {
    return false
  }
}

export const incrementQuantity = async (gameId, amount) => {
  const collectionRef = collection(db, "games");
  const docRef = doc(collectionRef, gameId)
  const item = (await getDoc(docRef)).data();
  item.quantity += amount;
  await setDoc(docRef, { quantity: item.quantity }, { merge: true });
}

export const deleteFromCart = async (id) => {
  const docRef = doc(db, "cart", id)
  console.log(docRef)
  await deleteDoc(docRef);
}