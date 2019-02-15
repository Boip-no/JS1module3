//Console.log out elements in JSON file


//There is an author.json file in the folder. Console.log each of the elements inside this JSON file that is id, name, URL, author and each element inside the data array. You can make use of a for loop here.

video = [{"id" : 12312412312, "name" : "Ecuaciones Diferenciales", "url" : "/video/math/edo/12312412312", "author" :
{ data : [{"name_author" : "Alejandro Morales", "url" : "/author/alejandro-morales", "type" : "master" }] } }];

for(var key in video) {
  console.log(video[key].id);
  console.log(video[key].name);
  console.log(video[key].url);

  var authorData = video[key].author.data;

  for(var dataKey in authorData){
        console.log(authorData[dataKey].name_author);
        console.log(authorData[dataKey].url);
        console.log(authorData[dataKey].type);
  }
}
