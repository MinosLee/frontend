//주말에 node.js를 설치하면 됨-> 자바스크립트 런타임 환경 프로그램
        //vscode에서 스크립트 실행이 허용이 안된경우 powershell에서 설정변경
        //실행(ctrl f5)되면 OK

console.log('사과바나나기러기스위스토마토역삼역우영우')

let arr1= [11,22,44,99,55]  //인덱스 0~4
        console.log(arr1)
        console.log(typeof arr1)
        console.log(arr1[3])
        arr1[2]=77
        console.log(arr1.sort())
        console.log(arr1.reverse())
        arr1[6]=44
        console.log(arr1)
        arr1=[1,5,6,7]; //let 변수이므로 객체 자체 변경가능

        const arr2=['apple','mango','kiwi','banana','딸기','사과']
        console.log(arr2)
        arr2[7]='배'
        console.log(arr2)