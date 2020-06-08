const getSystemStatus = {
  header: {
    token: "1234567.123467.1234"
  },
  body: {
    data: {
      systemStatus: "false",
      openTime: "120"
    }
  }
};

const snedPaymentMethodChange = {
  header: {
    token: "1234567.123467.1234"
  },
  body: {
    data: {
      oLSM_ID: "W20051812345",
      policyID: "F9N7262766",
      applicationTime: "2020/05/18 13:15:20",
      policyName: "林左右",
      changeDate: "2020/05/19",
      paymentMethod: "自行繳納"
    }
  }
};

const corsOptions = {
  origin: "http://localhost:6060",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  allowedHeaders:
    "Content-Type, Accept, Accept-CH, Accept-Charset, Accept-Datetime, Accept-Encoding, Accept-Ext, Accept-Features, Accept-Language, Accept-Params, Accept-Ranges, Access-Control-Allow-Credentials, Access-Control-Allow-Headers, Access-Control-Allow-Methods, Access-Control-Allow-Origin, Access-Control-Expose-Headers, Access-Control-Max-Age, Access-Control-Request-Headers, Access-Control-Request-Method, Age, Allow, Alternates, Authentication-Info, Authorization, C-Ext, C-Man, C-Opt, C-PEP, C-PEP-Info, CONNECT, Cache-Control, Compliance, Connection, Content-Base, Content-Disposition, Content-Encoding, Content-ID, Content-Language, Content-Length, Content-Location, Content-MD5, Content-Range, Content-Script-Type, Content-Security-Policy, Content-Style-Type, Content-Transfer-Encoding, Content-Version, Cookie, Cost, DAV, DELETE, DNT, DPR, Date, Default-Style, Delta-Base, Depth, Derived-From, Destination, Differential-ID, Digest, ETag, Expect, Expires, Ext, From, GET, GetProfile, HEAD, HTTP-date, Host, IM, If, If-Match",
  credentials: true
};

// var apiDomain = "http://localhost:5000";
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());

// getSystemStatus
app.post("/login/getSystemStatus", function(req, res) {
  // console.log("POST " + apiDomain + "/login/getSystemStatus");
  res.json(getSystemStatus);
});

app.post("/paymentMethod/snedPaymentMethodChange", function(req, res) {
  // console.log("POST " + apiDomain + "/paymentMethod/snedPaymentMethodChange");
  // console.log(req);
  res.json(snedPaymentMethodChange);
});

app.listen(5000, function() {
  // console.log("Node.js web server at port 5000 is running..");
});
