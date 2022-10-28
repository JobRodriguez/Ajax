function login(){
	let usr;
	let pw;
	usr = $("#user").val();
	pw = $("#psw").val();

	let dataString = new Array();
	dataString.user = usr;
	dataString.psw = pw;
	$.ajax
		({
			type: "POST",
			url: "/APIREST_5TID1/auth.php",
			data: $('#logi').serialize(),
			success: function (data,response) {
				if (data==1) {
					window.location.href="/APIREST_5TID1/views/users.php";

				}else{
					alert("Datos erroneos");
				}
			}
		});


}

function getUsers() {
	let items = "";
	let users = document.getElementById('tblUsers');
	/*$.get("/APIREST_5TID1/APIREST/users.php", 
		function (data, status) {
			let datos = JSON.parse(data);
		   	for(var dato of datos){ // i= 0; i<datos.length ; i++;   //datos[i].nombre;
		   		//items = items + algo
		   		items += "<tr>";
	   			items += "<td style = 'text-align : center;'>" + dato.userId + "</td>";
	   			items += "<td>" + dato.Name + " " + dato.Lastname + "</td>";
	   			items += "<td>" + dato.RFC + "</td>";
	   			items += "<td>" + dato.user + "</td>";
	   			items += "<td>";
	   			if(dato.userActive == 1){
	   				items += '<button type="button" class="btn btn-success" onclick="changeStatus(' + dato.userId + ')">Activo</button>';
	   			}else{
	   				items += '<button type="button" class="btn btn-warning" onclick="changeStatus(' + dato.userId + ')">Inactivo</button>';

	   			}

	   			items += "</td>";
		   		items += "</tr>";
		   		users.innerHTML = items;
		   }
	});*/
	$.ajax({
		url: "/APIREST_5TID1/APIREST/users.php",
		type: 'GET',
		dataType: 'JSON', // added data type
		success: function (data,res) {
//			users.innerHTML=JSON.stringify(data);
			/*for(let key in data) {
				console.log(key + ":", data[key]);
			}*/
			/*for(let key in data) {
				users.innerHTML=key;
			}*/
const array = []			
for (const [key, value] of Object.entries(data)) {
    array.push([key, value.userId,value.Name,value.Lastname,value.RFC,value.user,value.userActive]);
}
		for(var i=0;i<array.length;i++){
					   		items += "<tr>";
	   			items += "<td style = 'text-align : center;'>" + array[i][1] + "</td>";
	   			items += "<td>" + array[i][2] + " " + array[i][3] + "</td>";
	   			items += "<td>" + array[i][4] + "</td>";
	   			items += "<td>" + array[i][5] + "</td>";
	   			items += "<td>";
	   			if(array[i][6] == 1){
	   				items += '<button type="button" class="btn btn-success" onclick="changeStatus(' + array[i][7] + ')">Activo</button>';
	   			}else{
	   				items += '<button type="button" class="btn btn-warning" onclick="changeStatus(' + array[i][8]+ ')">Inactivo</button>';

	   			}

	   			items += "</td>";
		   		items += "</tr>";
		   		users.innerHTML = items;			
		}		
		}
	});
}

function changeStatus(idUser){
	alert(idUser);
	let idUsr = document.getElementById('tblUsers');
	/*$.get("/APIREST_5TID1/APIREST/users.php",{name : name} ,
		function(data, status){
			alert(data);
	});*/
}

function getUser(){
	let name = prompt("Escribe un nombre:");
	let users = document.getElementById('tblUsers');
	$.get("/APIREST_5TID1/APIREST/users.php",{name : name} ,
		function(data, status){
			let datos = JSON.parse(data);
			alert(datos);
	   		items += "<tr>";
   			items += "<td style = 'text-align : center;'>" + dato.userId + "</td>";
   			items += "<td>" + dato.Name + " " + dato.Lastname + "</td>";
   			items += "<td>" + dato.RFC + "</td>";
   			items += "<td>" + dato.user + "</td>";
   			items += "<td>";
   			if(dato.userActive == 1){
   				items += '<button type="button" class="btn btn-success" onclick="changeStatus(' + dato.userId + ')">Activo</button>';
   			}else{
   				items += '<button type="button" class="btn btn-warning" onclick="changeStatus(' + dato.userId + ')">Inactivo</button>';

   			}

   			items += "</td>";
	   		items += "</tr>";
	   		users.innerHTML = items;
	});
}