export function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats"> <em>Start adding item to your packing list</em>
    </footer>
    )
  }
  const totalItems = items?.length;
  const totalPackedItems = items.filter(item => item.packed)?.length;
  const percentage = Math.round((totalPackedItems/totalItems)*100)
  return (
  <footer className="stats">
    <em>
      { percentage === 100 
      ? "You got everything! Ready to go ✈️" 
      :  `💼 You have ${totalItems} items on your list, & you already packed ${totalPackedItems} (${percentage}%)`
      }
    </em>
  </footer>
  );
}
