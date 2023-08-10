import React from "react";

const patterns = [
   {
      title: "Vampire",
      image: "",
      difficulty: 4,
      price: 1,
   },
   {
      title: "Skull",
      image: "",
      difficulty: 3,
      price: 1,
   },
   {
      title: "Witch",
      image: "",
      difficulty: 5,
      price: 1,
   },
   {
      title: "Castle",
      image: "",
      difficulty: 4,
      price: 1,
   },
];

const PatternsPage = () => {
   return (
      <div>
         <h2 className="text-center">Patterns</h2>
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4	gap-[10px] text-center">
            {patterns.map((pattern, idx) => (
               <div key={idx}>
                  <h3>{pattern.title}</h3>
                  <div>{pattern.difficulty} / 5</div>
                  <div>${pattern.price.toFixed(2)}</div>
                  <button>Add to Cart</button>
               </div>
            ))}
         </div>
      </div>
   );
};

export default PatternsPage;
