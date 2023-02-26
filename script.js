var form= document.getElementById('form');
form.addEventListener("submit", saveToCrudCrud);

function saveToCrudCrud(event){
    event.preventDefault();

    var username=document.getElementById('name').value;
    var emailid=document.getElementById('emailid').value;
    var phone=document.getElementById('phone').value;

var obj={
        username,
        emailid,
        phone
    };

    axios.post('https://crudcrud.com/api/e6832f8fa9a74c0d886f813691c81fa6/appointment', obj)
    .then((response)=>{
        showUsers(obj);
    })
    .catch((err)=>{
        console.log(err)
    });  
}

    window.addEventListener("DOMContentLoaded", () => {
        axios.get('https://crudcrud.com/api/e6832f8fa9a74c0d886f813691c81fa6/appointment')
        .then((response)=>{
            for(var i=0;i<response.data.length;i++){
                showUsers(response.data[i]);
            }
        })
        .catch((err)=>{
            console.log(err)
        });
    })

    function showUsers(obj){

        var list=document.getElementById('list');
        var li=document.createElement('li');
        li.id=`${obj._id}`;
        li.textContent=obj.username + '-' + obj.emailid + '-' + obj.phone;
        var delBtn=document.createElement("button");
        var editBtn=document.createElement("button");
        delBtn.className='delete';
        editBtn.className='edit';
        delBtn.textContent='Delete';
        editBtn.textContent="Edit";
        li.appendChild(delBtn);
        li.appendChild(editBtn);
        list.appendChild(li);
        li.addEventListener("click", deleteUser);
        }
    
function deleteUser(event){
var li= event.target.parentElement;
if(event.target.classList.contains('delete')){
list.removeChild(li);
deleteFromCrudCrud(li);
}
else if(event.target.classList.contains('edit')){
    list.removeChild(li);
    deleteFromCrudCrud(li);
    updateUser(obj);
    
    }
}

    function deleteFromCrudCrud(li){
        var id=li.id;
                axios.delete(`https://crudcrud.com/api/e6832f8fa9a74c0d886f813691c81fa6/appointment/${id}`)
                .then((response)=>{
                    console.log(response)
                })
                .catch((err)=>{
                    console.log(err)
                });
            }

            function updateUser(obj){
                document.getElementById('name').value=obj.username;
                document.getElementById('emailid').value=obj.emailid;
                document.getElementById('phone').value=obj.phone;
            }