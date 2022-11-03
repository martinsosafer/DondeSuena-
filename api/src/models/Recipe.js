const { DataTypes, JSONB } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		"Recipe",
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				allowNull: false,
				primaryKey: true,
			},
			title: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			summary: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			image: {
				type: DataTypes.STRING,
			},

			healthScore: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					min: 0,
					max: 100,
				},
			},
			dishTypes: {
				type: DataTypes.STRING,
			},

			steps: {
				type: DataTypes.ARRAY(DataTypes.JSON),
				allowNull: false,
			},
		},
		{
			timestamps: false,
		}
	);
};
