"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _sequelize = require("sequelize");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Relationship = /*#__PURE__*/function (_Model) {
  (0, _inherits2["default"])(Relationship, _Model);

  var _super = _createSuper(Relationship);

  function Relationship() {
    (0, _classCallCheck2["default"])(this, Relationship);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Relationship, null, [{
    key: "init",
    value: function init(sequelize) {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Relationship), "init", this).call(this, {
        id: {
          type: _sequelize.DataTypes.UUID,
          primaryKey: true,
          defaultValue: _sequelize.DataTypes.UUIDV4
        },
        familyId: {
          type: _sequelize.DataTypes.UUID,
          references: {
            model: 'families',
            key: 'id'
          }
        },
        userId1: {
          type: _sequelize.DataTypes.UUID,
          references: {
            model: 'users',
            key: 'id'
          }
        },
        userId2: {
          type: _sequelize.DataTypes.UUID,
          references: {
            model: 'users',
            key: 'id'
          }
        },
        relationship: {
          type: _sequelize.DataTypes.TEXT,
          // FIXME: ENUM
          allowNull: true
        },
        roleType1: {
          type: _sequelize.DataTypes.UUID,
          references: {
            model: 'role_types',
            key: 'id'
          }
        },
        roleType2: {
          type: _sequelize.DataTypes.UUID,
          references: {
            model: 'role_types',
            key: 'id'
          }
        }
      }, {
        sequelize: sequelize,
        modelName: 'relationships'
      });
    }
  }, {
    key: "associate",
    value: function associate(models) {
      this.belongsTo(models.Family, {
        foreignKey: 'familyId'
      });
      this.belongsTo(models.User, {
        as: 'user1',
        foreignKey: 'userId1'
      });
      this.belongsTo(models.User, {
        as: 'user2',
        foreignKey: 'userId2'
      });
      this.belongsTo(models.RoleType, {
        as: 'role1',
        foreignKey: 'roleType1'
      });
      this.belongsTo(models.RoleType, {
        as: 'role2',
        foreignKey: 'roleType2'
      });
    }
  }]);
  return Relationship;
}(_sequelize.Model);

var _default = Relationship;
exports["default"] = _default;