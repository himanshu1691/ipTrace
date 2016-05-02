/*
* 
@author Sarika Nitin Kale
*
*/


//generate Multiple log entries
function logEntriesGenerator(){

		var siteName="saferide.nagkumar.com:80"
		var ipAddr= randomIPGenerator();
		var dashes= "- - ";
		var dateTime=randomDataTimeGenerator();
		var requestMessage= [
		'"POST /admin/login/?next=/admin/ HTTP/1.1"',
		'"GET /manager/html HTTP/1.1"',
		'"GET /static/admin/fonts/Roboto-Bold-webfont.woff HTTP/1.1"',
		'"GET http://testp3.pospr.waw.pl/testproxy.php HTTP/1.1"',
		'"GET /sitemap.xml HTTP/1.1"',
		'"GET / HTTP/1.1"',
		'"GET /robots.txt HTTP/1.1"',
		'"GET http://testp1.piwo.pila.pl/testproxy.php HTTP/1.1"',
		'"HEAD /redirect.php HTTP/1.0"',
		'"GET http://www.mafengwo.cn/ HTTP/1.1"',
		'"HEAD / HTTP/1.1"',
		'"GET http://testp4.pospr.waw.pl/testproxy.php HTTP/1.1"',
		'"\xf5P\x99\xec"',
		'"GET /muieblackcat HTTP/1.1"',
		'"GET //phpMyAdmin/scripts/setup.php HTTP/1.1"',		
		'"GET //pma/scripts/setup.php HTTP/1.1"',
		'"GET //myadmin/scripts/setup.php HTTP/1.1"',
		'"GET //Myadmin/scripts/setup.php HTTP/1.1"',
		'"GET http://testp5.mielno.lubin.pl/testproxy.php HTTP/1.1"',
		'"GET /zecmd/zecmd.jsp?comment=id HTTP/1.0"',
		'"CONNECT www.baidu.com:443 HTTP/1.1"',
		'"POST /request_ride/ HTTP/1.1"',
		'"GET /phpmyadmin/scripts/setup.php HTTP/1.1"',
		'"GET /static/rest_framework/css/bootstrap.min.css HTTP/1.1"',
		'"GET /static/admin/fonts/Roboto-Regular-webfont.woff HTTP/1.1"',
		'"GET /static/admin/css/fonts.css HTTP/1.1"',
		'"GET /static/admin/css/login.css HTTP/1.1"',
		'"GET /static/admin/css/base.css HTTP/1.1"'
		];
		var logRequestMessage=randomValueGenerator(requestMessage);
		var status= [200,202,204,300,301,302,400,401,404,407,408,500,502,504];
		var logStatus=randomValueGenerator(status);
		var size= [1371,168,58,195,234,235,256,262,327,360,434,485,725,821,931,1088,1134,1280,1594,1595,1742,4024,4676,4677,4703,6375,10095,20221,33632,80605,81649,82865]; 
		var logSize=randomValueGenerator(size);
		var webPageAccessed=[
		'"http://saferide.nagkumar.com/admin/login/?next=/admin/"',
		'-',
		'"http://saferide.nagkumar.com/static/rest_framework/css/bootstrap-tweaks.css"',
		'"http://saferide.nagkumar.com/"'
		];
		var logWebPageAccessed=randomValueGenerator(webPageAccessed);
		var machineInfo=[
		'"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36"',
		'"Mozilla/5.0 (Windows NT 5.1; rv:32.0) Gecko/20100101 Firefox/31.0"',
		'"Mozilla/3.0 (compatible; Indy Library)"',
		'-',
		'"Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0)"',
		'"Research scan, mail networkresearch@yandex.ru"',
		'"www.probethenet.com scanner"',
		'"Mozilla/5.0 (compatible; Nmap Scripting Engine; http://nmap.org/book/nse.html)"',
		'"Wget(linux)"',
		'"ZmEu"'	
		];
		var logMachineInfo=randomValueGenerator(machineInfo);


}

//Generates random date and Time
function randomDataTimeGenerator(){


}
//generates random IP
function randomIPGenerator(){


}

//generates random log values
function randomValueGenerator(textArray){

    var textArray = [
    'cisco',
    'microsoft',
    'SJSU'
	];
	var randomNumber = Math.floor(Math.random()*textArray.length);
	return textArray[randomNumber];

}

//write it to the log
function writeToTheLog(){

	var fileObject=fs.write(logFileLocation, function(err, doc){

				if(err){

					return alert("cannot open the file"+err);
				}
				//write to the file asynchronously

	});

}

//Running logEntriesGenerator and writeToTheLog multiple times asynchronously.
function multipleConcurrentWrite(){



}
