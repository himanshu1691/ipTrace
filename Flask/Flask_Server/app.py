import os

from flask import Flask, request
import redis
import simplejson as json

import sys

sys.path.insert(0, '../')

import IP2Location

app = Flask(__name__)


@app.route("/iptrace")
def main():
    # 0.38.152 test ip
    ipadd = request.args.get('ipadd')

    try:
        splitip = ipadd.split('.')
        genip = ""

        for parts in range(3):
            genip = genip + splitip[parts]
            genip += "."

        genip = genip[:-1]
        r_server = redis.Redis('localhost')
        result = r_server.get(genip)
        if result:
            return result
        else:
            print("Redis connection failed..Fetching from File")
            IP2LocObj = IP2Location.IP2Location()
            datafile = os.environ.get("DATA_FILE",
                                      '../IP-COUNTRY-REGION-CITY-LATITUDE-LONGITUDE-ZIPCODE-TIMEZONE-ISP-DOMAIN-NETSPEED-AREACODE-WEATHER-MOBILE-ELEVATION-USAGETYPE-SAMPLE.BIN')
            IP2LocObj.open(datafile)
            ip_detail = IP2LocObj.get_all(ipadd)

            data = {}
            data['latitude'] = ip_detail.latitude
            data['longitude'] = ip_detail.longitude
            data['country'] = ip_detail.country_long
            data['region'] = ip_detail.region
            data['city'] = ip_detail.city

            ip_detail_json = json.dumps(data)

            ip_key = ipadd.split(".")
            ip_key = ip_key[:-1]
            ip_key = '.'.join(str(e) for e in ip_key)
            r_server.set(ip_key, ip_detail_json)

            ip_detail_json = json.dumps(data)
            print(ip_detail_json)
            return ip_detail_json

    except Exception as e:
        print(str(e))


if __name__ == "__main__":
    app.run(debug=True)
