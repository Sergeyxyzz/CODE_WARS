// перевернуть слово с 5ю и более буквами

function spinWords(string){
    let arr = string.split(' ') // создал массив и разделил по отдельному слову ["Hey", "fellow", "warriors"]
    let arr2 = []
    arr.map((elem, i) => {
        if (elem.length >= 5) {
            elem = elem.split('') // разбил на массив по буквам ['f', 'e', 'l', 'l', 'o', 'w']
				.reverse(' ') // развернул массив из букв
				.join('') // соединил массив в одно слово
            arr2.push(elem) // пушнул каждое слово в новый массив
            console.log(elem)
        } else {
            arr2.push(elem) // запушил что меньше 5 букв без изменений
        }
    })
    arr2 = arr2.join(' ') // массив конвертировал в строку
    return arr2
}

spinWords( "Hey fellow warriors" ) // Hey wollef sroirraw

// числа кратные 2 и 1

function findOutlier(integers){
    let arrOdd = []
    let arrEven = []

    integers.filter(elem => {
        if ((elem % 2 === 0) ) {
            arrEven.push(elem)
        } else {
            arrOdd.push(elem)
        }
    })

    if (arrOdd.length == 1) {
        return +arrOdd 
    } else {
        return +arrEven
    }
}


// матрица (мое решение не сработало в половине тестов)

function multiplicationTable(size) {
    let array = []
    let resultArr = []
    let resArr1 = []
    let resArr2 = []
    let resArr3 = []
    array.push(size)
    let num = size / size
    for (let i = num; i <= size; i++) {
        resArr1.push(i)
        resArr2.push(i*2)
        resArr3.push(i*3)
    }
    resultArr.push(resArr1, resArr2, resArr3)
    resultArr.filter((elem, i) => {
        if (elem[i] === undefined) {
            resultArr.splice(i)
        }
    })
    return resultArr
  }

console.log(multiplicationTable(3)) // [[1,2,3], [2,4,6], [3,6,9]]


//// верное решение

multiplicationTable = function(size) {
  var result = [];

  for (var i = 0; i < size; i++) {
    result[i] = [];
    for(var j = 0; j < size; j++) {
      result[i][j] = (i + 1) * (j + 1);
    }
  }
  
  return result
}


// заменяем символы на цифры и обратно
function encode(string) {
    return string.replaceAll(/[a]/g,1).replaceAll(/[e]/g,2).replaceAll(/[i]/g,3).replaceAll(/[o]/g,4).replaceAll(/[u]/g,5)
}

function decode(string) {
    return string.replaceAll(/[1]/g,'g').replaceAll(/[2]/g,'e').replaceAll(/[3]/g,'i').replaceAll(/[4]/g,'o').replaceAll(/[5]/g,'u')
}



//  разделяем цифры на двоичные а потом суммируем двоичные
function digitalRoot(n) {
  let arr = '' + n
  arr = arr.split('')
  let arr2 = []
  let arr3 = []

  let sum = null
  let result = null
  let final = null
  arr.filter((elem) => {
    elem = +elem
    sum += elem
  });

  sum += ''

  arr2 = sum.split('')

  arr2.filter((elem) => {
    elem = +elem
    result += elem
  })

  result += ''

  arr3 = result.split('')

  arr3.filter(elem => {
    elem = +elem
    final += elem
  })

  return final
}


// если буква повторяется больше 1го раза то выводим сумму таких букв
function duplicateCount(text){
  let res = text.toLowerCase()
  let arr = res.split('').sort()
  let result = []
  const countItems = {}
  for (const item of arr) {
    countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
  }
  for (let [k,v] of Object.entries(countItems)) {
    console.log(k,v)
    if (v > 1) {
      result.push(k)
    }
  }

  return result.length
}
// нули в конец ставим
function moveZeros(arr) {
  let newArr = []
  const numberToDelete = 0;

  arr.filter((elem, i) => {
    if (elem === 0) {
      newArr.push(elem)
    }
  })
  const filteredNumbers = arr.filter((number) => number !== numberToDelete);

  let resArr = [...filteredNumbers, ...newArr]
  return resArr
}

// /*--МАССИВ ПРЕВРАТИЛИ В ОБЪЕКТ--*/
function count(string) {
  if (string === undefined) {
    return {}
  }
  let res = {}
  let arr = string.split('')
  for (const item of arr) {
    res[item] = res[item] ? res[item] + 1 : 1;
  }
  return res;
}

console.log(count('asdfa')) // {a: 2, s: 1, d: 1, f: 1}




// /*--СУММА ЧИСЕЛ С НЕСКОЛЬКИМИ ВЫЗОВАМИ--*/
function add(n) {
  // Return self so we can make a chain
  let tail = (num) => add(n + num);
  
  /** 
   Javascript will call toString() before compare,
   We can use this feature to pass this kata.
   
   In real world, may need manual call toString
   method.
  **/
  tail.toString = () => n;
  
  return tail;
}

add(1)(2)(3) // 6



/*--СОРТИРОВКА ИМЯ ФАМИЛИЯ + СКОБКИ--*/
function meeting(s) {
  let string = s.toUpperCase().split(';')
                .map(x => x.split(':').reverse().join(', '))
                .sort()
                .join(')(')
  return '(' + string + ')'
}
console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))
(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)



/*--ПОЛУЧАЕМ ТОЛЬКО БУКВЕННО-ЦИФЕРНУЮ СТРОКУ--*/
function alphanumeric(string){
    return !string || string.match(/\s+/g) || !string.match(/[a-z0-9]/gi) || string.match(/[_!]/g) ? false : true  
}


/*--Перевели в змейный кейс и сделали буквы в нижнем регистре--*/
function toUnderscore(string) {
    return string.toString()
                        .split(/(?=[A-Z])/) // разбили строку на массив путем поиска первого заглавного вхождения
                        .join('_') // собрали массив в строку, разделив каждый элемент массива нижним минусом
                        .toLowerCase(); 
}

// console.log(toUnderscore('App7Test')) // app7_test

