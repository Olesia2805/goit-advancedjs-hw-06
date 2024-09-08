/*
  You have a Form type that contains information about a form, including the errors field. 
  You want to create a new Params type that includes all the fields from the Form except the errors field.
*/

type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Implement Params in a way that makes it impossible to use the 'errors' field of the Form type
type Params = Omit<Form, 'error'>;

export {};