if ($response.statusCode != 200) {
  $done(Null);
}

var body = $response.body;
var obj = JSON.parse(body);
var title = obj['country'];
var subtitle = obj['city'] + ', ' + obj['isp'];
var ip = obj['query'];
var description = "IP: " + obj['query'] + '\n\n' +
                  "Location: " + obj['city'] + ", " + obj['regionName'] + ", " + obj['country'] + '\n\n' +
                  "ISP: " + obj['isp'] + '\n' +
                  "Org: " + obj['org'] + '\n' +
                  "AS: " + obj['as'] + '\n\n' +
                  "Timezone: " + obj['timezone'];

$done({title, subtitle, ip, description});
