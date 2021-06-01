var http = require("http");
var fs = require("fs");

var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "it's not for you bro :)",
});

function getMIME(url) {
  var index = url.lastIndexOf(".");
  var mime = "text/" + url.slice(index + 1, url.lenght);
  return mime;
}

function charCount(str, letter) {
  var letterCount = 0;
  for (var position = 0; position < str.length; position++) {
    if (str.charAt(position) == letter) {
      letterCount += 1;
    }
  }
  return letterCount;
}

function processJSON(data) {
  var dataArray = [];
  var lastNumber = -1;
  data = decodeURI(data);
  for (var i = 0; i != data.length; i++) {
    data = data.replace("+", " ").replace("'", '"').replace("<", "");
  }
  data = decodeURIComponent(data);
  data = "&" + data + "&";
  for (var dataNumber = 0; dataNumber != charCount(data, "="); dataNumber++) {
    lastNumber = data.indexOf("&", lastNumber + 1);
    dataArray.push(
      data.slice(
        data.indexOf("&", lastNumber) + 1,
        data.indexOf("&", lastNumber + 1)
      )
    );
  }
  return dataArray;
}

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected to database!");
});

con.query("USE cash_program;", function (err, result, fields) {
  if (err) throw err;
});

function onRequest(request, response) {
  if (request.method === "POST") {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk.toString(); // convert Buffer to string
    });
    request.on("end", () => {
      console.log(processJSON(body));
      console.log(body);
      switch (processJSON(body)[0]) {
        case "myMethod=startDataClients":
          con.query("SELECT Client FROM clients", function (
            err,
            result,
            fields
          ) {
            if (err) throw err;
            response.end(JSON.stringify(result));
          });
          break;
        case "myMethod=startDataMachines":
          con.query("SELECT Machine FROM machines", function (
            err,
            result,
            fields
          ) {
            if (err) throw err;
            response.end(JSON.stringify(result));
          });
          break;
        case "myMethod=startDataTools":
          con.query("SELECT Tool FROM tools", function (err, result, fields) {
            if (err) throw err;
            response.end(JSON.stringify(result));
          });
          break;
        case "myMethod=startDataAccessories":
          con.query("SELECT Accessorie FROM accessories", function (
            err,
            result,
            fields
          ) {
            if (err) throw err;
            response.end(JSON.stringify(result));
          });
          break;
        case "myMethod=changeTool":
          con.query(
            "SELECT * FROM tools WHERE Tool='" +
            processJSON(body)[1].replace("tool=", "") +
            "'",
            function (err, result, fields) {
              if (err) throw err;
              response.end(JSON.stringify(result));
            }
          );
          break;
        case "myMethod=changeClient":
          con.query(
            "SELECT * FROM clients WHERE Client='" +
            processJSON(body)[1].replace("client=", "") +
            "'",
            function (err, result, fields) {
              if (err) throw err;
              response.end(JSON.stringify(result));
            }
          );
          break;
        case "myMethod=changeMachine":
          con.query(
            "SELECT * FROM machines WHERE Machine='" +
            processJSON(body)[1].replace("machine=", "") +
            "'",
            function (err, result, fields) {
              if (err) throw err;
              response.end(JSON.stringify(result));
            }
          );
          break;
        case "myMethod=newClient":
          con.query(
            "INSERT INTO clients(Client, GuarantorName, ClientAddres, GuarantorAddres, IdNumber, Phone, OperationAddress, MotherName, DateOfBirth) VALUES ('" +
            processJSON(body)[1].replace("client=", "") +
            "', '" +
            processJSON(body)[2].replace("guarantorName=", "") +
            "', '" +
            processJSON(body)[3].replace("clientAddres=", "") +
            "', '" +
            processJSON(body)[4].replace("guarantorAddres=", "") +
            "', '" +
            processJSON(body)[5].replace("IDNumber=", "") +
            "', '" +
            processJSON(body)[6].replace("phone=", "") +
            "', '" +
            processJSON(body)[7].replace("operationAddres=", "") +
            "', '" +
            processJSON(body)[8].replace("motherName=", "") +
            "', '" +
            processJSON(body)[9].replace("dateOfBirth=", "") +
            "');",
            function (err, result, fields) {
              if (err) throw err;
              response.end(JSON.stringify(result));
            }
          );
          break;
        case "myMethod=updateClient":
          con.query(
            "DELETE FROM clients WHERE Client='" +
            processJSON(body)[1].replace("client=", "") +
            "'",
            function (err, result, fields) {
              if (err) throw err;
            }
          );
          con.query(
            "INSERT INTO clients(Client, GuarantorName, ClientAddres, GuarantorAddres, IdNumber, Phone, OperationAddress, MotherName, DateOfBirth) VALUES ('" +
            processJSON(body)[1].replace("client=", "") +
            "', '" +
            processJSON(body)[2].replace("guarantorName=", "") +
            "', '" +
            processJSON(body)[3].replace("clientAddres=", "") +
            "', '" +
            processJSON(body)[4].replace("guarantorAddres=", "") +
            "', '" +
            processJSON(body)[5].replace("IDNumber=", "") +
            "', '" +
            processJSON(body)[6].replace("phone=", "") +
            "', '" +
            processJSON(body)[7].replace("operationAddres=", "") +
            "', '" +
            processJSON(body)[8].replace("motherName=", "") +
            "', '" +
            processJSON(body)[9].replace("dateOfBirth=", "") +
            "');",
            function (err, result, fields) {
              if (err) throw err;
              response.end(JSON.stringify(result));
            }
          );
          break;
        case "myMethod=newMachine":
          con.query(
            "INSERT INTO machines(Machine, Value, Fee, Fee3h) VALUES ('" +
            processJSON(body)[1].replace("machine=", "") +
            "', '" +
            processJSON(body)[2].replace("machineValue=", "") +
            "', '" +
            processJSON(body)[3].replace("machineFeePerDay=", "") +
            "', '" +
            processJSON(body)[4].replace("machineFeePer3h=", "") +
            "');",
            function (err, result, fields) {
              if (err) throw err;
              response.end(JSON.stringify(result));
            }
          );
          break;
        case "myMethod=updateMachine":
          con.query(
            "DELETE FROM machines WHERE Machine='" +
            processJSON(body)[1].replace("machine=", "") +
            "'",
            function (err, result, fields) {
              if (err) throw err;
            }
          );
          con.query(
            "INSERT INTO machines(Machine, Value, Fee, Fee3h) VALUES ('" +
            processJSON(body)[1].replace("machine=", "") +
            "', '" +
            processJSON(body)[2].replace("machineValue=", "") +
            "', '" +
            processJSON(body)[3].replace("machineFeePerDay=", "") +
            "', '" +
            processJSON(body)[4].replace("machineFeePer3h=", "") +
            "');",
            function (err, result, fields) {
              if (err) throw err;
              response.end(JSON.stringify(result));
            }
          );
          break;
        case "myMethod=newAccessorie":
          con.query(
            "INSERT INTO accessories(Accessorie) VALUES ('" +
            processJSON(body)[1].replace("accessorie=", "") +
            "');",
            function (err, result, fields) {
              if (err) throw err;
              response.end(JSON.stringify(result));
            }
          );
          break;
        case "myMethod=updateAccessorie":
          con.query(
            "DELETE FROM accessories WHERE Accessorie='" +
            processJSON(body)[1].replace("accessorie=", "") +
            "'",
            function (err, result, fields) {
              if (err) throw err;
            }
          );
          con.query(
            "INSERT INTO accessories(Accessorie) VALUES ('" +
            processJSON(body)[1].replace("accessorie=", "") +
            "');",
            function (err, result, fields) {
              if (err) throw err;
              response.end(JSON.stringify(result));
            }
          );
          break;
        case "myMethod=changeAccessorie":
          con.query(
            "SELECT * FROM accessories WHERE Accessorie='" +
            processJSON(body)[1].replace("accessorie=", "") +
            "'",
            function (err, result, fields) {
              if (err) throw err;
              response.end(JSON.stringify(result));
            }
          );
          break;
        case "myMethod=newTool":
          con.query(
            "INSERT INTO tools(Tool, WearPerMm, Fee, Fee3h) VALUES ('" +
            processJSON(body)[1].replace("tool=", "") +
            "', '" +
            processJSON(body)[2].replace("toolWearPerMm=", "") +
            "', '" +
            processJSON(body)[3].replace("toolFeePerDay=", "") +
            "', '" +
            processJSON(body)[4].replace("toolFeePer3h=", "") +
            "');",
            function (err, result, fields) {
              if (err) throw err;
              response.end(JSON.stringify(result));
            }
          );
          break;
        case "myMethod=updateTool":
          con.query(
            "DELETE FROM tools WHERE Tool='" +
            processJSON(body)[1].replace("tool=", "") +
            "'",
            function (err, result, fields) {
              if (err) throw err;
            }
          );
          con.query(
            "INSERT INTO tools(Tool, WearPerMm, Fee, Fee3h) VALUES ('" +
            processJSON(body)[1].replace("tool=", "") +
            "', '" +
            processJSON(body)[2].replace("toolWearPerMm=", "") +
            "', '" +
            processJSON(body)[3].replace("toolFeePerDay=", "") +
            "', '" +
            processJSON(body)[4].replace("toolFeePer3h=", "") +
            "');",
            function (err, result, fields) {
              if (err) throw err;
              response.end(JSON.stringify(result));
            }
          );
          break;
        case "myMethod=deleteTool":
          con.query(
            "DELETE FROM tools WHERE Tool='" +
            processJSON(body)[1].replace("tool=", "") +
            "'",
            function (err, result, fields) {
              if (err) throw err;
              response.end(JSON.stringify(result));
            }
          );
          break;
        case "myMethod=deleteAccessorie":
          con.query(
            "DELETE FROM accessories WHERE Accessorie='" +
            processJSON(body)[1].replace("accessorie=", "") +
            "'",
            function (err, result, fields) {
              if (err) throw err;
              response.end(JSON.stringify(result));
            }
          );
          break;
        case "myMethod=deleteMachine":
          con.query(
            "DELETE FROM machines WHERE Machine='" +
            processJSON(body)[1].replace("machine=", "") +
            "'",
            function (err, result, fields) {
              if (err) throw err;
              response.end(JSON.stringify(result));
            }
          );
          break;
        case "myMethod=deleteClient":
          con.query(
            "DELETE FROM clients WHERE Client='" +
            processJSON(body)[1].replace("client=", "") +
            "'",
            function (err, result, fields) {
              if (err) throw err;
              response.end(JSON.stringify(result));
            }
          );
          break;
      }
      console.log("\n");
    });
  } else {
    response.writeHead(200, { "Content-Type": getMIME(request.url) });
    fs.readFile(__dirname + "" + request.url, null, function (error, data) {
      //we can't use relative path :-(
      if (error) {
        response.writeHead(404);
        response.write("File not found");
        console.log(error);
      } else {
        response.write(data);
      }
      response.end();
    });
  }
}

http.createServer(onRequest).listen(3000);

console.log("The server is running...");
