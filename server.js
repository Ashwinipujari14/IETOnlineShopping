/*var count=34;
count++;
console.log("Server is running");
console.log(count);
//CTL + SHIFT + C   
*/

var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package

var onAboutUs=function(req, res){
    res.send("Chief Mentor :Ravi Tambade");
};
var onDefault=function(req, res){
    res.send("<h1>IET........................................................</h1>"+
              "<hr/>"+
              "<ol>"+
                    " <li>Group member 1: Suraj </li>"+
                    " <li>Group member 1: Amol </li>"+
                    " <li>Group member 1: Rupesh </li>"+
                    " <li>Group member 1: Ajeet </li>"+
                    " <li>Group member 1: Onkar </li>"+
                    " <li>Group member 1: Ashwini </li>"+
             "</ol>");
};
app.get("/",onDefault);  // Request handler functions are registered
app.get("/aboutus",onAboutUs);  // Request handler functions are registered
var server=app.listen(8081);
console.log("Server is running on port 8081");
// if external packages are required
// we have to download those packages from internet using  package manager tool
// Runtime--------tools-------------packages-----------------------config file
// Java-----------maven--------------.jar files----------------------pom.xml
// Android--------graddle------------android jar file----------------pom.xml
// Python---------pip----------------Python libraries----------------
// .NET ---------Nugget--------------dll files-----------------------package.config
// NodeJS----------npm --------------download node modules-----------package.json 
