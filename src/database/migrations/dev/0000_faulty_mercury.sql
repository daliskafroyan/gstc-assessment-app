CREATE TABLE `accounts` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`account_type` text NOT NULL,
	`google_id` text,
	`password` text,
	`salt` text,
	`created_at` text,
	`updated_at` text,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `profile` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`name` text,
	`last_name` text,
	`phone` text,
	`house` text,
	`admin_swid` text,
	`image` text,
	`extras` text,
	`created_at` text,
	`updated_at` text,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `reset_tokens` (
	`user_id` text NOT NULL,
	`token` text NOT NULL,
	`id` text PRIMARY KEY NOT NULL,
	`token_expires_at` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `session` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`expires_at` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text,
	`role` text NOT NULL,
	`expires_at` text,
	`status` text NOT NULL,
	`email_verified` text,
	`created_at` text,
	`updated_at` text
);
--> statement-breakpoint
CREATE TABLE `verification_tokens` (
	`user_id` text NOT NULL,
	`token` text NOT NULL,
	`id` text PRIMARY KEY NOT NULL,
	`token_expires_at` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `accounts_google_id_unique` ON `accounts` (`google_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `profile_user_id_unique` ON `profile` (`user_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `reset_tokens_user_id_unique` ON `reset_tokens` (`user_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `reset_tokens_token_unique` ON `reset_tokens` (`token`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `verification_tokens_user_id_unique` ON `verification_tokens` (`user_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `verification_tokens_token_unique` ON `verification_tokens` (`token`);