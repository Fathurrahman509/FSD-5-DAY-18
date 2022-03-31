// data
const data = [
    {
        name: "Joe",
        age: 23,
        job: "Artist",
        hoby: "Drawing",
    },
    {
        name: "Michael",
        age: 21,
        job: "Engineer",
        hoby: "Fishing",
    },
    {
        name: "Jenifer",
        age: 22,
        job: "Dentist",
        hoby: "Gardening",
    },
]
// Soal:
// Bentuklah objek dengan isi sebagai berikut dengan memanfaatkan function pada array (unshift, shift, push, pop, etc)
// {
//     header: ["number", "name", "age", "job", "hoby"],
//     data: data
// }

// expected output:

// Case 1 : pemanggilan print <nama variable>.data
// [
//  { name: 'Joe', age: 23, job: 'Artist', hoby: 'Drawing' },
//  { name: 'Michael', age: 21, job: 'Engineer', hoby: 'Fishing' },
//  { name: 'Jenifer', age: 22, job: 'Dentist', hoby: 'Gardening' }
// ]

// Case 2 : pemanggilan print <nama variable>.header
// [ 'number', 'name', 'age', 'job', 'hoby' ]

// Case 3 : pemanggilan print <nama variable>
// { header: [ 'number', 'name', 'age', 'job', 'hoby' ],
//   data:
//   [ { name: 'Joe', age: 23, job: 'Artist', hoby: 'Drawing' },
//      { name: 'Michael', age: 21, job: 'Engineer', hoby: 'Fishing' },
//      { name: 'Jenifer', age: 22, job: 'Dentist', hoby: 'Gardening' } ] }

// Tidak boleh langsung print expected output

// Jawaban
// write your code here
const a = {
    data: [
        {
            name: "Joe",
            age: 23,
            job: "Artist",
            hoby: "Drawing",
        },
        {
            name: "Michael",
            age: 21,
            job: "Engineer",
            hoby: "Fishing",
        },
        {
            name: "Jenifer",
            age: 22,
            job: "Dentist",
            hoby: "Gardening",
        },
    ],
    bcd:  [ 'number', 'name', 'age', 'job', 'hoby' ],
}

console.log(a.data);
console.log(a.bcd);
console.log(a);