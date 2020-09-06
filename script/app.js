let output="";
for(let a=0; a<10; a++){
    output += `<a href="http://www.google.com/#${a}" target="_blank" class="auk-link">Loop Number ${a}</a><br />`;
}

document.getElementById('auk-container').innerHTML = output;

const auk_link_elements = document.getElementsByClassName('auk-link');

let link_first_array = [];

for(let a=0; a<auk_link_elements.length; a++){
    link_first_array.push(auk_link_elements[a].href);
}

let link_click = 0;

for(let a=0; a<auk_link_elements.length; a++){

    auk_link_elements[a].onclick = ()=>{
        if(link_click%2){
            auk_link_elements[a].href = "https://www.youtube.com";
        }else{
            auk_link_elements[a].href = link_first_array[a];
        }
        link_click++;

        if(link_click==20){
            link_click=0;
        }
    }
}