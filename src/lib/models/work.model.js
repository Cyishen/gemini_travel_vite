import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase"; // 假設你有一個專門管理 firebase 的 lib 文件夾

export const saveTripData = async (tripData, userSelect, userEmail, dotId) => {
  await setDoc(doc(db, "tripDataModel", dotId), {
    userSelect: userSelect,
    tripData: JSON.parse(tripData),
    userEmail: userEmail,
    id: dotId,
  });

  return dotId;
};
