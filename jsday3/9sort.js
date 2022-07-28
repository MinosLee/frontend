//배열 정렬 sort

//number
const point = [40,100,1,115,11,25]
console.log("초기값: "+ point)
point.sort()
console.log("정렬: "+ point)
point.reverse()
console.log("역순 정렬: "+ point)

//number 의 크기값으로 비교정렬
point.sort(function(a,b){
    return a-b  //a-b가 음수일 때 오름차순
})
console.log("number 값 정렬"+ point)
point.sort(function(a,b){
    return b-a  //a-b가 양수일 때 내림차순
})

console.log("number 값 역순 정렬"+ point)



//String
const fruits= ['banana','mango','apple','orange','carrot']
console.log("초기값: "+ fruits)
fruits.sort()
console.log("정렬: "+ fruits)
fruits.reverse()
console.log("역순 정렬: "+ fruits)

const cars= [{type:'volvo',year:2016},
            {type:'saab',year:2001},
            {type:'BMW',year:2010},
            {type:'audi',year:2014}]

//객체는 어떤 속성을 기준으로 sort하는지 콜백함수 작성
cars.sort(function(a,b){
    return a.year-b.year
})
console.log('car 배열 yaear순서로정렬 ::')
cars.forEach(value => console.log(value))
cars.sort(function(a,b){   //오름차순(문자열일 때)
    if(a.type<b.type) return -1
    else return 1
})

console.log('car 배열 type순서로 정렬 ::')
cars.forEach(value => console.log(value))

//car 배열 대소문자 상관없이 type역순으로 정렬-> 대소문자 상관없이는 문자열을 대문자 또는 소문자로 통일하고 비교
function type_reverse(a,b){     //함수이름이 자동으로 함수를 참조하는 변수(식별값)임.
    if(b.type.toLowerCase() < a.type.toLowerCase()) return -1
    else return 1
}
cars.sort(function(a,b){        //콜백함수는 함수리터럴, 힘수리터럴을 화살표 함수형식으로 가능.
    if(b.type<a.type) return -1
    else return 1
})

console.log('car 배열 type 역순으로 정렬::')
cars.forEach(value => console.log(value))
//대소문자 상관없이
cars.sort(type_reverse)
console.log('car 배열 type 역순으로 정렬(대소문자 무관)::')
cars.forEach(value => console.log(value))