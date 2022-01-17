var form=document.getElementById('main1');
var itemlist=document.getElementById('main2');
var filter=document.getElementById('filter');
form.addEventListener('submit',additem);
function additem(x)
{
    x.preventDefault();
    var newitem=document.getElementById('main12').value;
    var li=document.createElement('li');
    li.className='main3';
    li.appendChild(document.createTextNode(newitem));
    //console.log(li);
    //console.log(itemlist);
    var button=document.createElement('button');
    button.className='btn btn-danger btn-sm float-right delete ';
    button.textContent='remove';
    li.appendChild(button);
    itemlist.appendChild(li);
}
itemlist.addEventListener('click',deletenode);
function deletenode(x)
{
    if(x.target.classList.contains('delete'))
    {
        if(confirm('Do you want delete this item?'))
        {
            var li=x.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}
filter.addEventListener('keyup',filteritems);
function filteritems(x)
{
    var text=x.target.value.toLowerCase();
    //var search=document.getElementById('filter').value.toLowerCase();
    //console.log(text);
    var test=itemlist.getElementsByTagName('li');
    Array.from(test).forEach(function(item){
        var itemname=item.firstChild.textContent;
        //console.log(itemname);
        if(itemname.toLowerCase().indexOf(text)!=-1)
        {
            item.style.display='block';
        }
        else
        {
            item.style.display='none';
        }
    }
    );
}

