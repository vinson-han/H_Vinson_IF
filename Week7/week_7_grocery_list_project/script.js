let groceryItems = [
  { name: "Apple", category: "Fruits", price: 1.0, quantity: 6 },
  { name: "Banana", category: "Fruits", price: 0.5, quantity: 10 },
  { name: "Carrot", category: "Vegetables", price: 0.8, quantity: 8 },
  { name: "Milk", category: "Dairy", price: 2.0, quantity: 2 },
  { name: "Eggs", category: "Dairy", price: 1.5, quantity: 12 },
];

let groceryList = document.getElementById("groceryList");
let totalCostElement = document.getElementById("totalCost");
let totalQuanityElement = document.getElementById("totalQuantity");

const displayGroceryItems = () => {
  groceryList.textContent = "";
  let totalCost = 0;
  let totalQuanity = 0;

  groceryItems.forEach((item) => {
    let itemDiv = document.createElement("div");

    itemDiv.innerHTML = `<b>${item.name}</b> (${item.category}):
    $${item.price} - ${item.quantity} units`;
    groceryList.appendChild(itemDiv);

    totalCost = totalCost + item.price * item.quantity;
    totalQuanity = totalQuanity + item.quantity;
  });

  totalCostElement.textContent = "$" + totalCost.toFixed(2);
  totalQuanityElement.textContent = totalQuanity;
};

const isolateCategory = (category) => {
  groceryList.textContent = "";
  let filterItems = groceryItems.filter((item) => item.category === category);
  filterItems.forEach((item) => {
    let itemDiv = document.createElement("div");
    itemDiv.innerHTML = `<b>${item.name}</b>
		(${item.category}): $${item.price} - ${item.quantity} units`;
    groceryList.appendChild(itemDiv);
  });
};

const showAllCategories = () => {
  displayGroceryItems();
};

const orderItemsByCost = () => {
  groceryItems.sort((a, b) => b.price - a.price);
  displayGroceryItems();
};

const addItemPrompt = () => {
  let name = prompt("Enter Item name.") || null;
  let category = prompt("Enter category name.") || null;
  let price = prompt("Enter price value. ") || null;
  let quantity = prompt("Enter quantity range. ") || null;

  if (
    name === null ||
    category === null ||
    price === null ||
    quantity === null
  ) {
    return alert("Missing Value");
  }

  let priceValue = parseFloat(price);
  let quantityValue = parseInt(quantity);

  if (isNaN(priceValue) || isNaN(quantityValue)) {
    return alert("Non Valid Numberica value");
  }

  let newItem = {
    name: name,
    category: category,
    price: price,
    quantity: Number(quantity),
  };

  groceryItems.push(newItem);
  displayGroceryItems();
};
