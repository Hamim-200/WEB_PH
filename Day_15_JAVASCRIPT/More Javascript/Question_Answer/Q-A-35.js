var bookPrices = ['100', '200', '230', '320', '450', '180', '290', '210', '90', '180', '150'];
for (i = 0; i < bookPrices.length; i++) {
    var cheapPrice = bookPrices[i];
    if (cheapPrice < 200) {
        console.log(cheapPrice);
    }
}