/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function renderBuildingDetails(data)
{
    var strResposne = $('#BuildingDiv').html(data.responseText);
    // alert(v1);
    var jsonResponse = $.parseJSON(strResposne);
    var buildingList = jsonResponse.arrayList;
    
    var maintable = document.createElement("table");
    maintable.setAttribute("id","buidlingTable");
    
    var row = maintable.insertRow(0);
    var col = row.insertCell(0);
      
    var divEle = getBuidlingDetails(buildingList[0]);
    col.appendChild(divEle);
    
    col = row.insertCell(1);
    divEle = getBuidlingDetails(buildingList[1]);
    col.appendChild(divEle);
    
    row = maintable.insertRow(1);
    col = row.insertCell(0);
    divEle = getBuidlingDetails(buildingList[2]);
    col.appendChild(divEle);
    
    
    col = row.insertCell(1);
    divEle = getBuidlingDetails(buildingList[3]);
    col.appendChild(divEle);
    
//    col = row.insertCell(1);
//    divEle = getBuidlingDetails(buildingList[4]);
//    col.appendChild(divEle);
    
    return maintable;
       
    
}

function getBuidlingDetails(buildingBean)
{
    var divEle = document.createElement("div");
    divEle.setAttribute("align","center");
    divEle.setAttribute("class","imagesell");
    
    var imgEle = document.createElement("img");
    imgEle.setAttribute("alt","Gem Lake Reflectio, #1.");
    imgEle.setAttribute("height","100");
    imgEle.setAttribute("width","100");
    imgEle.setAttribute("src","../images/aashirwad.jpg");
    imgEle.setAttribute("class","imgbuild");
    divEle.appendChild(imgEle);
    
    var spanEle = document.createElement("span");
    spanEle.setAttribute("class","caption");
    
    var tableEle = createTable(buildingBean);
    
    spanEle.appendChild(tableEle);
    divEle.appendChild(spanEle);
      
    return divEle;
}

function createFieldset(buildingBean)
{
    var fieldset = document.createElement("fieldset");
    fieldset.setAttribute("class", "border");
    var legend = fieldset.appendChild(document.createElement("legend"));
    legend.appendChild(document.createTextNode(buildingBean.buildingname));
    //fieldset.appendChild(spanEle);
    
    return fieldset;
}

function createTable(buildingBean)
{
    var maintable = document.createElement("table");
    maintable.setAttribute("id","distable");
    var row = maintable.insertRow(0);
    
    var cell = row.insertCell(0);
    cell.appendChild(createLabel("Building Name : "));
    cell = row.insertCell(1);
    cell.appendChild(createLabel(buildingBean.buildingname));
    
    row = maintable.insertRow(1);
    cell = row.insertCell(0);
    cell.appendChild(createLabel("No Of floors : "));
    cell = row.insertCell(1);
    cell.appendChild(createLabel(buildingBean.nooffloors));

    row = maintable.insertRow(2);
    cell = row.insertCell(0);
    cell.appendChild(createLabel("Squrefeet : "));
    cell = row.insertCell(1);
    cell.appendChild(createLabel(buildingBean.buildingsquarefeet));
    
    if(buildingBean.buildingid === 25)
    {
        row = maintable.insertRow(3);
        cell = row.insertCell(0);
        cell.setAttribute("colspan",2);
        cell.setAttribute("align","center");
        var button = document.createElement("input");
        button.setAttribute("type","submit");
        //button.setAttribute("disabled","");
        button.setAttribute("value", "Book Online" );
        button.setAttribute("onclick","getBuildingDet("+ buildingBean.buildingid + ")");
        cell.appendChild(button);
    }else 
    {
        row = maintable.insertRow(3);
        cell = row.insertCell(0);
        cell.setAttribute("colspan",2);
        cell.appendChild(createLabel("Not Availble Online"));
    }

   return maintable;
}

function getBuildingDet(buildingid)
{
    document.getElementById("bid").setAttribute("value",buildingid);
    var v1 = document.getElementById("form1");
    v1.setAttribute("action","getBuildingDet");
    v1.submit();
}
function createLabel(labelText)
{
    var labelEle = document.createElement("label");
    labelEle.appendChild(document.createTextNode(labelText));
    
    return labelEle;
}
