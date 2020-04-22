CREATE DATABASE IF NOT EXISTS food_data;

	use food_data;

	CREATE TABLE `items` (
		`id` INT(11) UNSIGNED PRIMARY KEY, 
		`name` VARCHAR(255),
		`recipeunit` VARCHAR(50),
		`units` FLOAT(53),
		`amount` FLOAT(53),
		`foodtype` VARCHAR(255),
		FOREIGN KEY (`foodtype`) REFERENCES `emissions`(`foodtype`)
	);