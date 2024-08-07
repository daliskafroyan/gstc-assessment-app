ALTER TABLE `profile` RENAME COLUMN `name` TO `first_name`;--> statement-breakpoint
ALTER TABLE `profile` DROP COLUMN `house`;--> statement-breakpoint
ALTER TABLE `profile` DROP COLUMN `admin_swid`;