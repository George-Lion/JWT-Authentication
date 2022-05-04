from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token

api = Blueprint('api', __name__)


@api.route("/register", methods=["POST"])
def register_user():
    body_email = request.json.get("email")
    body_password = request.json.get("password")
    if body_email and body_password:
        new_user = User(email=body_email, password=body_password)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"create": True, }), 200
    else:
        return jsonify({"create": False, "msg": "Missing info"}), 400


@api.route("/login", methods=["POST"])
def login_user():
    body_email = request.json.get("email")
    body_password = request.json.get("password")
    if body_email and body_password:
        user = User.query.filter_by(email=body_email).filter_by(
            password=body_password).first()
        if user:
            token = create_access_token(identity=user.id)
            return jsonify({"logged": True, "token": token}), 200
        else:
            return jsonify({"logged": False, "msg": "Bad info"}), 400
    else:
        return jsonify({"logged": False, "msg": "Missing info"}), 400


@api.route("/planets", methods=["GET"])
@jwt_required()
def get_planets():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    if user:
        return jsonify({"info": ["Calamardo", "planet2"]}), 200
    else:
        return jsonify({"msg": "Not authorized"}), 400
