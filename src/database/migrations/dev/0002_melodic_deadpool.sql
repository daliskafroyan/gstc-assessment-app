CREATE TABLE `certification_body` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`name` text,
	`address` text,
	`headquarters` text,
	`affiliate_offices` text,
	`website` text,
	`main_contact` text,
	`created_at` text,
	`updated_at` text,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `certification_body_user_id_unique` ON `certification_body` (`user_id`);