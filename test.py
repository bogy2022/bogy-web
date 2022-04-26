from flask import Flask, request

flaskServer = Flask(__name__)

savedName = "test"

@flaskServer.route("/hello")
def hello():
    
    printHello()

    reqName = request.args.get('name')
    if reqName is None:
        name = savedName
    else:
        name = reqName
        saveName = reqName
    return "<h1>hello "+ name +"</h1>"

def printHello():
    number = add(3, 6)
    print("add: %s" % (number))

def add(v1, v2):
    return v1 + v2

flaskServer.run(host='0.0.0.0',
                port=8080,
                debug=False)