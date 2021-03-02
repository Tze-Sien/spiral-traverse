
function spiralTraverse(array){

    arrangedArray = []
    end = false;
    steps = 0;
    while (!end){
        
        // width = array[0].length-1
        // height = array.length - 1
        
        a = []
        b = [] 
        c = []
        d = []

        // 1.0 Top-Bottom Pair

        // 1.1 Get Top Array
        a = array[0]

        // 1.2 Get Bottom Array
        for(let i = 0; i <= array[0].length-1; i++){
            if(array.length > 1){
                b.push(array[array.length - 1][array[0].length-1-i])
            }

            steps++;
        }

        // 2.0 Remove Top and Bottom from Array 
        array = array.slice(1, -1)
        
        
        
        // Check if the array is empty
        if(array.length != 0) {
            //3.0 Right-Left Pair

            for(let h = 0; h <=array.length-1; h++)
            {   
                // 3.1 Get Right Array
                c.push(array[h][array[0].length-1])

                // 3.2 Get Left Array
                d.push(array[array.length -1 - h][0])
                
                // 4.0 Remove Right Element
                array[h].pop()
                steps++;
            }

            // 4.0 Remove Left Element
            for(let h = 0; h <=array.length-1; h++)
            {            
                array[h].shift()
                steps++;
            }

        }else{
            end = true
        }

        // Combine into an sorted array
        arrangedArray = arrangedArray.concat([...a , ...c , ...b , ...d])
        steps++;
    }

    return steps;
}


// Time-Space Complexity Test-Code

// let stepArray = []
// for(let n = 1; n <= 200; n++){
    // let myGrid = [...Array(1000)].map(e => Array(1000).fill(1));
    // stepArray.push((spiralTraverse(myGrid)))
// }
// console.log(stepAray)

