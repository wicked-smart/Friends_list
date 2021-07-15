function cs50Info(name){
  if(name == "")
    return;
/*
  var ajax = new XMLHttpRequest();

  ajax.onreadystatechange = function(){
      if (ajax.readyState == 4 && ajax.status == 200){
        $('#infodiv').html(ajax.responseText);
      }
  };

  ajax.open('GET', name + '.html', true);
  ajax.send();
*/
	
	fetch(name+'.html')
	.then(response => response.text())
	.then(text => {
		$('#infodiv').html(text);

	});


};
