
searchbtn = () =>{
const input = document.getElementById('searchvalue');
const inputvalue = input.value;
input.value = '';

const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${inputvalue}`
fetch(url)
.then(res => res.json())
.then(data => searchdata(data.teams[0]))
}

searchdata = teams =>{
    console.log(teams);
    const div = document.createElement('div');
    div.innerHTML=`
   <div class="min-h-screen bg-gray-100 flex justify-center items-center">
    <div class="w-80 rounded-md cursor-pointer shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 duration-500">
    <img src="${teams.strTeamBadge}" alt="" />
     <div class="p-4 bg-white">
            <h1 class="mt-4 font-bold text-2xl">${teams.strCountry}</h1>
           <spna class="text-sm font-semibold text-red-50 bg-red-400 py-1 px-3 rounded-full">${teams.strStadiumLocation}</spna>
        </div>
     </div>
   </div>
    `
    div.classList.add('text-center','class');
    const myid = document.getElementById('myid');
    myid.innerText ='';
    myid.appendChild(div)
    
}


