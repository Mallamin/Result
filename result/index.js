

//Create a file
var fs=require("fs");
var http=require("http");


fs.writeFile("posts.json", `{

    "Name": "Meeeeeeeeeeeeeeeeeeee",
    "Age": "Prefer not to say",
    "Country":"Somewhere in Africa"
}` ,(err)=>{

 if (err) throw err;
})
console.log("File created Succcessfully")


//Server to read data on the browser

http.createServer((req,res) => {
fs.readFile("posts.json",(err,data)=>{
if (err) throw err;
res.writeHead(200,{
"content_Type":"application/json"    
})
res.write(data)
res.end()
console.log(data);
})

}).listen(4000)


