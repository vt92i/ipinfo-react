from flask import Flask, request, Response
import requests as req
app = Flask(__name__)


@app.route("/json", methods=["GET"])
@app.route("/json/<ip>", methods=["GET"])
def fetchData(ip=None):
    if request.method == "GET":
        query = ip if ip else request.headers["X-Forwarded-For"]
        res = req.get(f"http://ip-api.com/json/{query}?fields=status,message,continent,country,countryCode,regionName,city,zip,lat,lon,timezone,isp,org,as,mobile,proxy,query")
        return Response(res.text, mimetype="application/json")


if __name__ == "__main__":
    app.run(debug=True)
