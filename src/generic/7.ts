/*
  You have a UserRole list that is used to classify users in your application.
  You want to create a RoleDescription object that maps each user role to a description.
*/

export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

type RoleType = Record<UserRole, string>

// Replace the following code with the version using Record
const RoleDescription: RoleType = {
  [UserRole.admin]: 'Admin User',
  [UserRole.editor]: 'Editor User',
  [UserRole.guest]: 'Guest User',
};

export {};