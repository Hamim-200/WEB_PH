/**
 * chair - 10 wood
 * table - 20 wood
 * bed - 30 wood 
 */


function woodCalculator(chairQuentity,tableQuentity,bedQuentity){
    const perChairWood = 10;
    const pertableWood = 20;
    const perbedWood = 30;

    const chairTotalWood = chairQuentity*perChairWood;
    const tableTotalWood = tableQuentity*pertableWood;
    const bedTotalWood = bedQuentity*perbedWood;
    
    const totalWood = chairTotalWood + tableTotalWood +bedTotalWood;

    return totalWood;
}

const wood = woodCalculator(2,3,4)

console.log('Wood needed', wood);
