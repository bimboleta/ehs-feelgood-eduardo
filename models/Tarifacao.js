"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
exports.TarifacaoModelGenerator = (sequelize) => {
    return sequelize.define("Tarifacao", {
        identificador: { type: Sequelize.STRING, unique: true },
        tempo: { type: Sequelize.DOUBLE, defaultValue: 0 }
    });
};
