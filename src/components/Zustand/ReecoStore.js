// playFormStore.js
import create from 'zustand';
import { persist } from 'zustand/middleware';

const useReecoStore = create(
  persist((set) => ({
    playData: [
        {
          id:1,
          image_url:"/Assets/img.jpg",
          productName:"Chicken Brest Fillets, Boneless matuu mamarinated 6 OUnce Raw, invivid",
          brand:"Hormal Black Labelmany",
          Price:60.67,
          Quantity:3,
          Total:0,
          status:0
        },
        {
          id:2,
          image_url:"/Assets/strwarry.jpg",
          productName:" Strawberry, Ragi & Rice with Milk",
          brand:"Heritage",
          Price:120.67,
          Quantity:1,
          Total:0,
          status:0
        },
        {
          id:3,
          image_url:"/Assets/cake.jpeg",
          productName:"Cake with rich in sugar and fat and eggs,",
          brand:"Aiyangar",
          Price:540.7,
          Quantity:0,
          Total:0,
          status:0
        },
        {
          id:4,
          image_url:"/Assets/biscuit.jpeg",
          productName:"Britannia Vita Marie Gold Biscuits ",
          brand:"Britannia",
          Price:70.67,
          Quantity:2,
          Total:0,
          status:0
        },
        {
          id:5,
          image_url:"/Assets/img.jpg",
          productName:"Chicken Brest Fillets, Boneless matuu mamarinated 6 OUnce Raw, invivid",
          brand:"Hormal Black Labelmany",
          Price:60.67,
          Quantity:0,
          Total:0,
          status:0
        },
        {
          id:6,
          image_url:"/Assets/mutton.jpeg",
          productName:"Mutton strong with the musty flavor of grass, hay, and funky soil.",
          brand:"Freash",
          Price:800.32,
          Quantity:2,
          Total:0,
          status:0
        }
      ],
    
    addData: (data) => set((state) => ({ playData: [...data] })),
    editedData: (index, newData) => set((state) => {
        const updatedData = [...state.playData];
        updatedData[index] = newData;
        return { playData: updatedData };
      }),  }), {
    name: 'Reeco_data',
  })
);

export default useReecoStore;