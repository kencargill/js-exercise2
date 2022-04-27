const name1 = "ryan";
const name2 = "jud";
const name3 = "Ken";

if (name1.length > name2.length && name1.length > name3.length) {
    console.log(`${name1} is the longest name.`)
} else if (name2.length > name1.length && name2.length > name3.length) {
    console.log(`${name2} is the longest name.`)
} else if (name3.length > name2.length && name3.length > name1.length) {
    console.log(`${name3} is the longest name.`)
} else if (name1.length === name2.length && name2.length > name3.length) {
    console.log(`${name1} and ${name2} are the longest names.`)
} else if (name1.length === name3.length && name3.length > name2.length) {
    console.log(`${name1} and ${name3} are the longest names.`)
} else if (name2.length === name3.length && name3.length > name1.length) {
    console.log(`${name2} and ${name3} are the longest names.`)
} else if (name2.length === name3.length && name3.length === name1.length) {
    console.log(`${name1} and ${name2} and ${name3} are the same length.`)
}