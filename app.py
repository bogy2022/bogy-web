from flask import Flask, request, render_template, jsonify

flaskServer = Flask(__name__)

board = {}

@flaskServer.route("/")
def app():
    return render_template("app.html")

@flaskServer.route("/click")
def click():
    user = request.args.get('user')
    field = request.args.get('field')
    print(f"CLICK by {user} on {field}")

    board.update({field : user});
    
    return jsonify(board)

@flaskServer.route("/poll")
def poll():
    return jsonify(board)

@flaskServer.route("/reset")
def reset():
    print("RESET")
    board.clear()
    return jsonify(board)


flaskServer.run(host='0.0.0.0',
                port=8080,
                debug=True)