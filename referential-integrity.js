let p = { job: "Web Developer" };
let q = p;
console.log(q, p);
// This does not change the property in both objects.
q = { job: "Backend Developer" };
console.log(q, p);

let a = { job: "Web Developer" };
let b = a;
console.log(b, a);
// This does not change the property in both objects.
b.job = "Backend Developer";
console.log(b, a);
