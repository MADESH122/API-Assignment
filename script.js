var container=document.createElement("div")
container.className="container-fluid";

var row=document.createElement("div")
row.className="row";

container.append(row)
document.body.append(container)

var res=fetch("https://jsonplaceholder.typicode.com/users")
.then((data)=>data.json()).then((data1=>{
    console.log(data1)
    for(i=0;i<data1.length;i++){
        console.log(data1[i])
        row.innerHTML+=`
<div class="col-lg-3 text-center">
<div class="card">
 <div class="card-body text-dark">
  <h5 class="card-title"><b>Name : ${data1[i].name}</b></h5>
  <h5 class="card-title">Email : ${data1[i].email }</h5>
  <h5 class="card-title">Street : ${data1[i].address.street }</h5>
  <h5 class="card-title">Street : ${data1[i].address.city }</h5>
 </div>
</div>
</div>`
    }
}))

