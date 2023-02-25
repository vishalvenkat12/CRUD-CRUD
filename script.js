var form= document.getElementById('form');
var list=document.getElementById('list');

form.addEventListener("submit", saveToCrudCrud);


function saveToCrudCrud(event){
    event.preventDefault();

    var name=document.getElementById('name').value;
    var emailid=document.getElementById('emailid').value;
    var phone=document.getElementById('phone').value;

var obj={
        name,
        emailid,
        phone
    };

    axios.post('https://crudcrud.com/api/cc63010b8f3a48f5af91469d4f552cf7/appointment', obj)
    .then((response)=>{
        console.log(response)
    })
    .catch((err)=>{
        console.log(err)
    }); 

    showUsers(obj);
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get('https://crudcrud.com/api/cc63010b8f3a48f5af91469d4f552cf7/appointment')
    .then((response)=>{
        console.log(response)
        for(var i=0;i<response.data.length;i++){
            showUsers(response.data[i]);
        }
    })
    .catch((err)=>{
        console.log(err)
    });
})

    function showUsers(obj){
    var li=document.createElement('li');
    li.className='itemlist';
    li.textContent=obj.name + '-' + obj.emailid + '-' + obj.phone;
    var delBtn=document.createElement('button');
    delBtn.textContent='Delete';
    li.appendChild(delBtn);
    list.appendChild(li);
    }
   

  
