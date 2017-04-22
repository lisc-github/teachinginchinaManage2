/**
 * Created by admin on 2017/4/21.
 */
var http = require("http");
var url = require("url");
var qs = require("querystring");
var fs = require("fs");
var path =require("path");
// var response = require("./Response");

var lg = "public/login.html";
http.createServer(onRequest).listen(8800);

var MIME_TYPE = {
    "css": "text/css",
    "gif": "image/gif",
    "html": "text/html",
    "ico": "image/x-icon",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "js": "text/javascript",
    "json": "application/json",
    "pdf": "application/pdf",
    "png": "image/png",
    "svg": "image/svg+xml",
    "swf": "application/x-shockwave-flash",
    "tiff": "image/tiff",
    "txt": "text/plain",
    "wav": "audio/x-wav",
    "wma": "audio/x-ms-wma",
    "wmv": "video/x-ms-wmv",
    "xml": "text/xml",
};


function onRequest(req,res){
    var filename = '';
    var post= "";
    if(req.url==="/"){
        filename = "public/login.html";
    }
    else{
        filename = "public" + url.parse(req.url).pathname;
    }
    req.on("data",function(chuck){
        post += chuck;
    });
    req.on("end",function(){
        post = qs.parse(post);
        var ext = path.extname(filename);
        ext = ext?ext.slice(1) : 'unknown';
        var contentType = MIME_TYPE[ext] || "text/plain";
        res.writeHead(200,{"Content-Type":contentType});
        if(post.name=="tom"&&post.password=="666666"&&post.code=="123"){
            res.writeHead(301, {'Location': 'manage.html'});
            res.end();
        }
        // else if(post.name&&post.name!="tom"||post.password&&post.password!="666666"){
        //     console.log("用户名密码不正确");
        //     fs.readFile(filename,function(err,stat){
        //         if(err){
        //             res.end("<h1>500</h1>服务器内部错误！");
        //         }
        //         else{
        //             res.end(stat,"base64");
        //         }
        //
        //     });
        // }
        else{
            fs.readFile(filename,function(err,stat){
                if(err){
                    res.end("<h1>500</h1>服务器内部错误！");
                }
                else{
                    res.end(stat,"base64");
                }

            });
        }

    });
}

