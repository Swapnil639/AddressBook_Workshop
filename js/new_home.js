let personList;

window.addEventListener('DOMContentLoaded'.(event)=>{
     personList=getPersonDataFromStorage();
     createInnerHtml();

});

const getPersonDataFromStorage=()=>{
    return localStorage.getItem('personList') ?
    JSON.parse(localStorage.getItem('personList')) : [] ;
}

const createInnerHtml=()=>{
    const  headerHtml="<th>Full Name</th><th>Address</th><th>City</th><th>State</th><th>Zip Code</th><th>Phone Number</th><th></th>";
    if(personList.length==0) return;
    let innerHtml=`${headerHtml}
    for(let index=0;index<personList.length;index++){
        innerHtml=`${innerHtml}
        <tr>
            <td>$personList[index]._name</td>
            <td>$personList[index]._address</td>
            <td>$personList[index]._city</td>
            <td>$personList[index]._state</td>
            <td>$personList[index]._zipcode</td>
        </tr>
    `;
    }
}