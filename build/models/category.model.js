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

var Category = /*#__PURE__*/function (_Model) {
  (0, _inherits2["default"])(Category, _Model);

  var _super = _createSuper(Category);

  function Category() {
    (0, _classCallCheck2["default"])(this, Category);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Category, null, [{
    key: "init",
    value: function init(sequelize) {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Category), "init", this).call(this, {
        id: {
          type: _sequelize.DataTypes.UUID,
          primaryKey: true,
          defaultValue: _sequelize.DataTypes.UUIDV4
        },
        code: {
          type: _sequelize.DataTypes.STRING
        },
        parentId: {
          type: _sequelize.DataTypes.UUID,
          references: {
            model: 'categories',
            key: 'id'
          }
        },
        count: {
          type: _sequelize.DataTypes.INTEGER
        },
        orderBy: {
          type: _sequelize.DataTypes.INTEGER
        },
        keyword: {
          type: _sequelize.DataTypes.TEXT
        },
        createdBy: {
          type: _sequelize.DataTypes.UUID,
          references: {
            model: 'users',
            key: 'id'
          }
        },
        updatedBy: {
          type: _sequelize.DataTypes.UUID,
          references: {
            model: 'users',
            key: 'id'
          }
        }
      }, {
        sequelize: sequelize,
        modelName: 'categories'
      });
    }
  }, {
    key: "associate",
    value: function associate(models) {
      this.hasMany(models.Post, {
        foreignKey: 'categoryId'
      });
      this.hasMany(models.Faq, {
        foreignKey: 'categoryId'
      });
      this.hasOne(models.Category, {
        foreignKey: 'parentId'
      });
      this.belongsTo(models.User), {
        as: 'createdBy',
        foreignKey: 'createdBy'
      };
      this.belongsTo(models.User), {
        as: 'updatedBy',
        foreignKey: 'updatedBy'
      };
    }
  }]);
  return Category;
}(_sequelize.Model);

var _default = Category;
exports["default"] = _default;