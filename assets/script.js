let yourName = "Hannah Lee"

let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0 // Total

const credit = document.querySelector('#credit')

const gbPlusBtn = document.querySelector('#add-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')

const gbMinusBtn = document.querySelector('#minus-gb')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarMinusBtn = document.querySelector('#minus-sugar')

const gbQty = document.querySelector('#qty-gb')
const ccQty = document.querySelector('#qty-cc')
const sugarQty = document.querySelector('#qty-sugar')

const totalQty = document.querySelector('#qty-total')

credit.textContent = `Created by ${yourName}`

// Event listeners for clicks on the "+" button for cookies

gbPlusBtn.addEventListener('click', function () {
    console.log('Gingerbread + button was clicked!')
    gb++;
    gbQty.textContent = gb;
})

ccPlusBtn.addEventListener('click', function () {
    console.log('Chocolate Chip + button was clicked!')
    cc++;
    ccQty.textContent = cc;
})

sugarPlusBtn.addEventListener('click', function () {
    console.log('Sugar + button was clicked!')
    sugar++;
    sugarQty.textContent = sugar;
})

// Event listeners for clicks on the "-" button for cookies

gbMinusBtn.addEventListener('click', function () {
    console.log('Gingerbread - button was clicked!')
    gb--;
    if (gb < 1) gb = 0;
    gbQty.textContent = gb;
})

ccMinusBtn.addEventListener('click', function () {
    console.log('Chocolate Chip - button was clicked!')
    cc--;
    if (cc < 1) cc = 0;
    ccQty.textContent = cc;
})

sugarMinusBtn.addEventListener('click', function () {
    console.log('Sugar - button was clicked!')
    sugar--;
    if (sugar < 1) sugar = 0;
    sugarQty.textContent = sugar;
})


// Total quantity
gbPlusBtn.addEventListener('click', function () {
    console.log('Gingerbread Total + button was clicked!')
    total++;
    if (total < 1) total = 0;
    totalQty.textContent = total;
})

ccPlusBtn.addEventListener('click', function () {
    console.log('Chocolate Chip Total + button was clicked!')
    total++;
    if (total < 1) total = 0;
    totalQty.textContent = total;
})

sugarPlusBtn.addEventListener('click', function () {
    console.log('Sugar Total + button was clicked!')
    total++;
    if (total < 1) total = 0;
    totalQty.textContent = total;
})

gbMinusBtn.addEventListener('click', function () {
    console.log('Gingerbread Total - button was clicked!')
    total--;
    if (total < 1) total = 0;
    totalQty.textContent = total;
})

ccMinusBtn.addEventListener('click', function () {
    console.log('Chocolate Chip Total - button was clicked!')
    total--;
    if (total < 1) total = 0;
    totalQty.textContent = total;
})

sugarMinusBtn.addEventListener('click', function () {
    console.log('Sugar Total - button was clicked!')
    total--;
    if (total < 1) total = 0;
    totalQty.textContent = total;    
})

// stop at 0

