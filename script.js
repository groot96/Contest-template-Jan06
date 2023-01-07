/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  arr.map((val)=>{
   
    if(val.profession === "developer"){
      console.log(val);
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach((myfun)=>{
    if(myfun.profession === "developer"){
      console.log(myfun);
    }
  })
}

function addData() {
  //Write your code here
  let newArr = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newArr);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here
  //first-method
  // for(var i=0;i<=arr.length;i++)
  // {
  //  if (arr[i].profession === "admin") {
  //   arr.splice(i,1)
    
  //  }
  //  console.log(arr); 
  // }
  //Second-method
  arr.map((rem)=>{
    if(rem.profession!=='admin'){
      console.log(rem);
    }
  })

}

function concatenateArray() {
  //Write your code here
  let secArr = [
    { id: 4, name: "Avneeshwa", age: "26", profession: "BackendDeveloper" },
    { id: 5, name: "Prashantwa", age: "20", profession: "SarakriPFAC" },
    { id: 6, name: "Arifwa", age: "23", profession: "NOCEngineer" },
  ];
  let concatArr = arr.concat(secArr);
  console.log(concatArr);
}
