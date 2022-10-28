/**
 * @param {Book} book
 * @param {Number} discount
 * @param {Number} tax
 * @param {Number} stock
 * @param {Number} order
 * @param {Number} credit
 */


 function total(book, discount, tax, stock, order, credit){
    let result = 0;
    const title = book.title;
    const price = book.price;
    const totalDiscount = price * (discount/100);
    const priceAfterDiscount = price - totalDiscount;
    const totalTax = priceAfterDiscount * (tax/100);
    const priceAfterTax = priceAfterDiscount + totalTax;
    for(let loopIndex = 0;  loopIndex < order; loopIndex++){
        if(book && book.price && loopIndex < order){
            result += priceAfterTax;
        }
        else{
            console.log('Run out of stock :(');
            break;
        }
    }
        console.group();
        console.log('Book title = ',title);
        console.log('Order Amount = ',order,' items');
        console.log('Original Price = ', price);
        console.log('Discount Amount = ', totalDiscount);
        console.log('Price After Discount = ', priceAfterDiscount);
        console.log('Tax Amount = ', totalTax);
        console.log('Price After Tax = ', priceAfterTax);
        console.log('Remaining Stock = ', stock - order)
        console.log();
        console.groupEnd();
        if (stock - order === 0) {
            console.log('Stok sudah habis');
          }else {
            console.log('Stok sisa ',stock - order, 'Anda bisa membeli lagi');
          }
    
        
    console.log('Your Total Price Is = ', result)
    console.log();

    let creditPerMonth = result / credit;
    let creditAmount = [];
    let index = 0;
    
    console.log('Pembayaran cicilan sebanyak' , credit, 'kali (2 tahun) sebanyak', creditPerMonth,'per bulan');
    while(index<credit){
        creditAmount.push({
            cicilan: index + 1,
            amount: creditPerMonth,
        })
        index++;
    }
    console.group();
    console.log(Array.from(creditAmount));
    console.groupEnd();
}

total({title: "Kalukulus", price:30000, publicity: true}, 50, 10, 5, 10, 20);
total({title: "Kimia", price:20000, publicity: false}, 15, 10, 5, 5, 22);
total({title: "Biologi", price:30000, publicity: true}, 25, 5, 5, 15, 24);