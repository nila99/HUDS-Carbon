

	use food_data;

	CREATE TABLE `emissions` (
		`foodtype` VARCHAR(255) PRIMARY KEY,
		`amount` FLOAT(53),
		`weight` FLOAT(53)
	);