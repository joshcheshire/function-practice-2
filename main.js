// var getName = function(person){

// 	for(i in person){

// 		var hisName = person.name
// 		console.log(hisName)
// 		return hisName

// 	}

// }

// 	getName({ 


// 		name : 'Larry ', 

// 		 age: 25 ,

// 	});


// var getAge = function(years){

// 	for( y in years){
// 		var hisAge = years.age
// 		console.log(hisAge)
// 		return hisAge



// 	}



// }

// 	getAge({


// 		name : 'bob',
// 		age : 27



// 	});


//or

// function getName(object){
// 	return object.name
// }

// console.log(getName('Luisa'))

//---------------------------------------------------------



// var totalLetters = function(getLetters){

// 	var total = 0
	
// 	for(i = 0; i< getLetters.length; i++){
// 		total += getLetters[i].length

// 	}
// 		return total

// }


// console.log(totalLetters(['how','many', 'in', 'this','string']))


//-----------------------------------


// var keyValue = function(arg1, arg2){

// 	var object = {}

// 	object[arg1] = arg2

// 	return object

// }
	
// 	var value = keyValue( 'city', 'Denver')

// 	console.log(value)
// --------------------------------------

//  	 var myArray = ['a', 'b', 'c', 'd', 'e',]
//  	 var myOtherArray = ['larry','jerry','mary','harry']

// var negativeIndex = function(arr, num){
 	 	



//     var index = arr[arr.length + num]

// 	return index


// }
// 	console.log(negativeIndex(myArray, -3))
// 	console.log(negativeIndex(myOtherArray, -2))

//--------or-----------//


// var negativeIndex = function(indexArray, num) {
	
// 	var count = 0
	
// 	indexArray.forEach(function(){
	
// 	count = indexArray[indexArray.length + num]
	
	
// 	})
// 		return count
// }
// console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2))
// console.log(negativeIndex(['jerry', 'sarah', 'sally'], -1))


// ---------------------------------------------------



// var removeM = function(string){

// 	var arr = string.split('')
		
// 		for(i=0; i< arr.length; i++){
			
// 			if (arr[i] === 'm')
// 					arr[i] = ''
// 			}

// 	return arr.join('')
// }

// console.log(removeM('mommy'))
// console.log(removeM('mtmhmimsmimsmhmamrmd'))


//-----------------------------------


// var printObject = function(object){

// 	for( k in object){
// 		console.log([k] + ' is ' + object[k])

// 	}


// }

//  printObject({ a: 10, b: 20, c: 30 })




//  ----------------------------------



// var vowels = function(string){

// var output = []

// for( i =0; i<string.length; i++){

// 	if(string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u' )

// 			output.push(string[i])
// }

// return output

// }

// console.log(vowels('alabama'))
// console.log(vowels('what evil odd ducks!'))


//-------------------------------------------------------------------

// function twins(arr){

// if (arr.length % 2 !=0) {

// 	return false
// }

// 	for(var i =0; i<arr.length; i++){

// 		if (arr[i] === arr[i+1]) {
// 			i++
// 		}
// 		 else{
// 			return false 

// 		}
		


// 	}

// 		return true


// }

// console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']))
// console.log(twins(['a', 'a', 'b', 'c', 'd', 'd']))
// console.log(twins(['a', 'a', 'b', 'z']))
// console.log(twins(['a', 'a', undefined]))
// console.log(twins(['d','d']))


// ----------------------------//

		// set an array length to >0, then set a for loop with i<arr.length, 
		//if arr[i] === true, return true, else return false


// function or(arr){

// 	if( arr.length === 0){
// 		return false
// 	}

// 	else if(arr.length > 0){

// 		for(var i =0; i, arr.length; i++){
// 			if(arr[i] === true){
// 				return true
// 			}
// 			else{
// 				return false
// 			}
// 		}
// 	}		
// 	}


// console.log(or([false, false, true, false]))


//--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=\\
 //unique

 var namesAndLetters = [
 
 {  name : 'Todd',
 	letter: 'a'

 },
 { name : 'Avery',
   letter: 'b'

},
{ name: 'Maria',
  letter: 'c'

},
{ name: 'Avery',
 letter:'d'

},
{ name: 'Todd',
  letter: 'a'
},
{ name: 'Avery',
letter: 'd'

},
]




console.log(_.chain(namesAndLetters)
			.pluck('letter')
			.uniq()
			.value()
			)

// console.log(_.chain(namesAndLetters)
// 			.pluck('name')
// 			.uniq()
// 			.value()
// 			)






	


















