var form= document.getElementById('form');
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

    axios.post('https://crudcrud.com/api/393e774b8bdb46b8b5eeeaea00319dd5/appointment', obj)
    .then((response)=>{
        showUsers(response.data);
    })
    .catch((err)=>{
        console.log(err)
    });  
}

    window.addEventListener("DOMContentLoaded", () => {
        axios.get('https://crudcrud.com/api/393e774b8bdb46b8b5eeeaea00319dd5/appointment')
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
        var id=obj._id;
        var list=document.getElementById('list');
        var li=document.createElement('li');
        li.id=`${id}`;
        li.textContent=obj.name + '-' + obj.emailid + '-' + obj.phone + '-' + obj._id;
        var delBtn=document.createElement("button");
        delBtn.className='delete';
        delBtn.textContent='Delete';
        li.appendChild(delBtn);
        list.appendChild(li);
        li.addEventListener("click", deleteUser);
        }
    
function deleteUser(event){
var li= event.target.parentElement;
if(event.target.classList.contains('delete')){
list.removeChild(li);
deleteFromCrudCrud(li);
}
}

    function deleteFromCrudCrud(li){
        var id=li.id;
                axios.delete(`https://crudcrud.com/api/393e774b8bdb46b8b5eeeaea00319dd5/appointment/${id}`)
                .then((response)=>{
                    console.log(response)
                })
                .catch((err)=>{
                    console.log(err)
                });
            }