
//opdracht 2A + B
let totalSoldTVs = 0;
for (let i = 0; i < inventory.length; i++) {
    totalSoldTVs = totalSoldTVs + inventory[i].sold;
}
console.log(totalSoldTVs);

const soldCount = document.getElementById('soldCount');
soldCount.textContent = totalSoldTVs;


//opdracht 2C + D
let totalStock = 0;
for (let i = 0; i < inventory.length; i++) {
    totalStock = totalStock + inventory[i].originalStock;
};
console.log(totalStock);

const stock = document.getElementById('stock');
stock.textContent = totalStock;


//Opdracht 2E
let toBeSold = 0;
toBeSold = totalStock - totalSoldTVs;
console.log(toBeSold);
const remainingStock = document.getElementById('remainingStock');
remainingStock.textContent = toBeSold;
